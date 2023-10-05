import React from "react";

import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";

// import { collection, getDocs, query, where } from "firebase/firestore";

import { CardMarket } from "../components";
// import { db } from "../firebase";

export const ListMarket = ({ dates, markets, selected, setSelected }) => {
    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                height: "100vh",
                "& ul": { padding: 0 },
            }}
            subheader={<li />}
        >
            {dates.map((date) => (
                <li key={date}>
                    <ul>
                        <ListSubheader>{date}</ListSubheader>
                        {markets[date].map((item) => (
                            <ListItemButton
                                key={`item-${date}-${item.id}`}
                                autoFocus={item.id === selected?.id}
                                selected={item.id === selected?.id}
                                onClick={() => setSelected(item)}
                                
                            >
                                <CardMarket
                                    title={item.name}
                                    date={date}
                                    timing={`${item.market_time.start_time} - ${item.market_time.end_time}`}
                                    dist="1km"
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
