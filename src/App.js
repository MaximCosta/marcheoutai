import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Market from "./pages/Market";
import Merchant from "./pages/Merchant";
import MarketDetail from "./pages/MarketDetail";
import MerchantDetail from "./pages/MerchantDetail";

const P404 = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate("/");
    }, [navigate]);
    return null;
};

const Page = ({ title, child: Child }) => {
    React.useEffect(() => {
        document.title = title;
    }, [title]);
    return <Child />;
};

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page title="Home" child={Home} />} />
                <Route path="/search/market/:city?" element={<Page title="Market" child={Market} />}>
                    <Route path=":idMarket" element={<Page title="MarketDetail" child={MarketDetail} />} />
                </Route>

                <Route path="/search/merchant/:region?" element={<Page title="Merchant" child={Merchant} />}>
                    <Route path=":idMerchant" element={<Page title="MerchantDetail" child={MerchantDetail} />} />
                </Route>

                <Route path="*" element={<P404 />} />
                <Route path="" element={<P404 />} />
                <Route element={<P404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
