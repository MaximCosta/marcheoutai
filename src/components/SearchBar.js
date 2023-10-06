import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import parse from "autosuggest-highlight/parse";
import { debounce } from "@mui/material/utils";
import Box from "@mui/material/Box";
import { villes } from "../data/villes";
import "../styles/SearchBar.css";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const loadScript = (src, position, id) => {
    if (!position) {
        return;
    }

    const script = document.createElement("script");
    script.setAttribute("async", "");
    script.setAttribute("id", id);
    script.src = src;
    position.appendChild(script);
};

const autocompleteService = { current: null };

const SearchBar = ({ placeholder }) => {
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [options, setOptions] = useState([]);
    const loaded = useRef(false);
    const navigate = useNavigate();

    useEffect(() => {
        let active = true;

        if (typeof window !== "undefined" && !loaded.current) {
            if (!document.querySelector("#google-maps")) {
                loadScript(
                    `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
                    document.querySelector("head"),
                    "google-maps"
                );
            }
            loaded.current = true;
        }

        const fetch = debounce((request, callback) => {
            autocompleteService.current.getPlacePredictions(request, callback);
        }, 400);

        if (!autocompleteService.current && window.google) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === "") {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({ input: inputValue }, (results) => {
            if (active) {
                let newOptions = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, history]);

    const handleSearch = () => {
        // Ensure that terms array exists and has at least two elements
        if (value?.terms?.length >= 2) {
            // Get the before last element from the terms array
            const cityName = value.terms[value.terms.length - 2].value;
            console.log("City Name:", cityName);

            // Check if the cityName exists in the villes array
            const ville = villes.find((v) => v === cityName);

            if (ville) {
                // Navigate to the appropriate path with the found ville
                navigate(`/search/market/${ville}`);
            } else {
                console.log(`City "${cityName}" not found in villes.`);
            }
        }
    };

    return (
        <div className="search-bar-container">
            <div className="main-bloc">
                <Autocomplete
                    fullWidth
                    id="google-map-demo"
                    getOptionLabel={(option) => (typeof option === "string" ? option : option.description)}
                    filterOptions={(x) => x}
                    options={options}
                    autoComplete
                    includeInputInList
                    filterSelectedOptions
                    value={value}
                    noOptionsText="No locations"
                    onChange={(event, newValue) => {
                        setOptions(newValue ? [newValue, ...options] : options);
                        setValue(newValue);
                    }}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    renderInput={(params) => <TextField {...params} label={placeholder} fullWidth />}
                    renderOption={(props, option) => {
                        const matches = option.structured_formatting.main_text_matched_substrings || [];

                        const parts = parse(
                            option.structured_formatting.main_text,
                            matches.map((match) => [match.offset, match.offset + match.length])
                        );

                        return (
                            <li {...props}>
                                <Grid container alignItems="center">
                                    <Grid item sx={{ display: "flex", width: 44 }}>
                                        <LocationOnIcon sx={{ color: "text.secondary" }} />
                                    </Grid>
                                    <Grid item sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}>
                                        {parts.map((part, index) => (
                                            <Box
                                                key={index}
                                                component="span"
                                                sx={{ fontWeight: part.highlight ? "bold" : "regular" }}
                                            >
                                                {part.text}
                                            </Box>
                                        ))}
                                        <Typography variant="body2" color="text.secondary">
                                            {option.structured_formatting.secondary_text}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </li>
                        );
                    }}
                />
                <Button className="search-button" variant="contained" color="primary" onClick={handleSearch}>
                    Search
                </Button>
            </div>
        </div>
    );
};

export default SearchBar;
