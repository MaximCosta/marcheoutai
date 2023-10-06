import * as React from "react";

import { ListMarket } from "../../components";
import { marketsData } from "../../data/markets";
// import MarketDetail from "../MarketDetail";

import { Outlet, useNavigate, useParams } from "react-router-dom";
import { AppBarMarket } from "../../components/AppBar";

const Market = () => {
    const navigate = useNavigate();
    const { city = "Montpellier" } = useParams();
    const [markets, setMarkets] = React.useState({});
    const [dates, setDates] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const formatDate = (date) => {
        const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
        return new Intl.DateTimeFormat("fr-FR", options).format(date);
    };

    const chooseMarket = (id) => {
        setSelected(id);
        navigate(`/search/market/${city}/${id}`);
    };

    React.useEffect(() => {
        console.log({ coucou: city });
        const getMarkets = async () => {
            let _dates = [];
            const _markets = {};
            Object.keys(marketsData).map((doc) => {
                if (city && marketsData[doc].city !== city) return;
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
        getMarkets();
    }, [city]);

    return (
        <>
            <AppBarMarket />
            <div style={{ display: "flex", height: "calc(100vh - 72px)" }}>
                <ListMarket {...{ markets, dates }} selected={selected} chooseMarket={chooseMarket} />
                <Outlet />
            </div>
        </>
    );
};

export default Market;
