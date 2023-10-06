import * as React from "react";

import { ListMerchant } from "../../components";
import { merchantData } from "../../data/merchant";
// import MarketDetail from "../MarketDetail";

import { Outlet, useNavigate, useParams } from "react-router-dom";
import { AppBarMerchant } from "../../components/AppBar";

const Merchant = () => {
    const navigate = useNavigate();
    const { region = "34 Hérault" } = useParams();
    const [merchant, setMerchant] = React.useState({});
    const [alpha, setAlpha] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const chooseMerchant = (id) => {
        setSelected(id);
        navigate(`/search/merchant/${region}/${id}`);
    };

    React.useEffect(() => {
        const getMarkets = async () => {
            let _alpha = new Set();
            const _merchant = {};
            Object.keys(merchantData).map((doc) => {
                if (region && merchantData[doc].zipcode !== region) return;
                const data = merchantData[doc];
                _alpha.add(doc[0].toUpperCase());
                if (!_alpha[doc[0].toUpperCase()]) _merchant[doc[0].toUpperCase()] = [];
                _merchant[doc[0].toUpperCase()].push({ id: doc, ...data });
            });
            setMerchant(_merchant);
            _alpha = [..._alpha];
            _alpha.sort();
            setAlpha(_alpha);
        };
        getMarkets();
    }, [region]);

    return (
        <>
            <AppBarMerchant />
            <div style={{ display: "flex", height: "calc(100vh - 72px)" }}>
                <ListMerchant {...{ merchant, alpha }} selected={selected} chooseMerchant={chooseMerchant} />
                <Outlet />
            </div>
        </>
    );
};

export default Merchant;
