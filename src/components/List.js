import React from "react";

import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";

// import { collection, getDocs, query, where } from "firebase/firestore";

import { CardMarket, CardMerchant } from "../components";
// import { db } from "../firebase";

export const ListMarket = ({ dates, markets, selected, chooseMarket }) => {
    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                height: "calc(100vh - 80px)",
                "& ul": { padding: 0 },
            }}
            subheader={<li />}
        >
            {dates.map((date) => (
                <li key={date}>
                    <ul>
                        <ListSubheader style={{ fontSize: 24 }}>{date}</ListSubheader>
                        {markets[date].map((item, itm) => (
                            <ListItemButton
                                key={`item-${date}-${item.id}`}
                                autoFocus={item.id === selected?.id}
                                selected={item.id === selected?.id}
                                onClick={() => chooseMarket(item.id)}
                            >
                                <CardMarket
                                    title={item.name}
                                    date={date}
                                    timing={`${item.market_time.start_time} - ${item.market_time.end_time}`}
                                    dist={`${itm + 10}km`}
                                    categs={item.type}
                                />
                            </ListItemButton>
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
};

export const ListMerchant = ({ alpha, merchant, selected, chooseMerchant }) => {
    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                height: "calc(100vh - 80px)",
                "& ul": { padding: 0 },
            }}
            subheader={<li />}
        >
            {alpha.map((date) => (
                <li key={date}>
                    <ul>
                        <ListSubheader style={{ fontSize: 24 }}>{date}</ListSubheader>
                        {merchant[date].map((item) => (
                            <ListItemButton
                                key={`item-${date}-${item.id}`}
                                autoFocus={item.id === selected?.id}
                                selected={item.id === selected?.id}
                                onClick={() => chooseMerchant(item.id)}
                            >
                                <CardMerchant title={item.id} categs={item.prod} />
                            </ListItemButton>
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
};
