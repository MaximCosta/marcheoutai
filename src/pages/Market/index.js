import React from "react";
import { Outlet } from "react-router-dom";

const Market = () => {
    return (
        <div>
            <h1>Market</h1>
            <Outlet />
        </div>
    );
};

export default Market;
