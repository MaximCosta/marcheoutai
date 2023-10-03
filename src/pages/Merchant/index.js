import React from "react";
import { Outlet } from "react-router-dom";

const Merchant = () => {
    return (
        <div>
            <h1>Merchant</h1>
            <Outlet />
        </div>
    );
};

export default Merchant;
