import * as React from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

import { ListMarket } from "../../components";
import { villes } from "../../data/villes";
import { marketsData } from "../../data/markets";
import MarketDetail from "../MarketDetail";

const Market = () => {
    const [ville, setVille] = React.useState("Montpellier");
    const [markets, setMarkets] = React.useState({});
    const [dates, setDates] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const formatDate = (date) => {
        const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
        return new Intl.DateTimeFormat("fr-FR", options).format(date);
    };

    const handleChange = (event) => {
        setVille(event.target.value);
        getMarkets();
    };

    const getMarkets = async () => {
        let _dates = [];
        const _markets = {};
        Object.keys(marketsData).map((doc) => {
            if (ville && marketsData[doc].city !== ville) return;
            const data = marketsData[doc];
            _dates.push(data.date * 1000);
            if (!_markets[formatDate(new Date(data.date * 1000))])
                _markets[formatDate(new Date(data.date * 1000))] = [];
            _markets[formatDate(new Date(data.date * 1000))].push({ id: doc, ...data });
        });
        _dates = [...new Set(_dates)];
        _dates.sort((a, b) => a - b);
        _dates = _dates.map((date) => formatDate(new Date(date)));
        setMarkets(_markets);
        setDates(_dates);
    };

    React.useEffect(() => {
        getMarkets();
    }, []);

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <div>
                <FormControl sx={{ m: 1, minWidth: 160 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Villes/Villages</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={ville}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                    >
                        {villes.map((_ville) => (
                            <MenuItem key={_ville} value={_ville}>
                                {_ville}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <ListMarket {...{ markets, dates }} selected={selected} setSelected={setSelected} />
            </div>
            <MarketDetail selected={selected} />
        </div>
    );
};

export default Market;
