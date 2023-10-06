import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate, useParams } from "react-router-dom";

import { villes } from "../data/villes";
import { regions } from "../data/regions";

import "./AppBar.css";

export function AppBarMarket() {
    const navigate = useNavigate();
    const { city } = useParams();
    const [ville, setVille] = React.useState(city || "Montpellier");

    const handleChange = (event) => {
        navigate(`/search/market/${event.target.value}`);
        setVille(event.target.value);
    };

    return (
        <AppBar position="static" style={{ background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        style={{ display: "flex", mr: 1, height: 40, width: "auto", marginRight: 12 }}
                        src={require("./logo.png")}
                        alt="logo"
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                            flexGrow: { xs: 1, md: 0 },
                        }}
                    >
                        MarchéOuTai
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <Button key={"Marché"} sx={{ my: 2, color: "white", display: "block" }} href="/search/market">
                            {"Marché"}
                        </Button>
                        <Button
                            key={"Marchand"}
                            sx={{ my: 2, color: "white", display: "block" }}
                            href="/search/merchant"
                        >
                            {"Marchand"}
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <FormControl sx={{ m: 1, minWidth: 160 }}>
                            <InputLabel id="demo-simple-select-autowidth-label" style={{ color: "white" }}>
                                Régions
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={ville}
                                onChange={handleChange}
                                autoWidth
                                label="Régions"
                                style={{
                                    height: "2.5rem",
                                    color: "white",
                                }}
                            >
                                {villes.map((_ville) => (
                                    <MenuItem key={_ville} value={_ville}>
                                        {_ville}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export function AppBarMerchant() {
    const navigate = useNavigate();
    const { region = "34 Hérault" } = useParams();
    const [ville, setVille] = React.useState(region);

    const handleChange = (event) => {
        navigate(`/search/merchant/${event.target.value}`);
        setVille(event.target.value);
    };

    return (
        <AppBar position="static" style={{ background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img
                        style={{ display: "flex", mr: 1, height: 40, width: "auto", marginRight: 12 }}
                        src={require("./logo.png")}
                        alt="logo"
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                            flexGrow: { xs: 1, md: 0 },
                        }}
                    >
                        MarchéOuTai
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <Button key={"Marché"} sx={{ my: 2, color: "white", display: "block" }} href="/search/market">
                            {"Marché"}
                        </Button>
                        <Button
                            key={"Marchand"}
                            sx={{ my: 2, color: "white", display: "block" }}
                            href="/search/merchant"
                        >
                            {"Marchand"}
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <FormControl sx={{ m: 1, minWidth: 160 }}>
                            <InputLabel id="demo-simple-select-autowidth-label" style={{ color: "white" }}>
                                Régions
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={ville}
                                onChange={handleChange}
                                autoWidth
                                label="Régions"
                                style={{
                                    height: "2.5rem",
                                    color: "white",
                                }}
                            >
                                {regions.map((_region) => (
                                    <MenuItem key={_region} value={_region}>
                                        {_region}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
