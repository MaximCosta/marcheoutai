import React from "react";

import Card from "@mui/material/Card";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { merchant } from "../../data/merchant";
import { PhoneInTalk } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

const ListItemDetails = ({ proId }) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    function formatPhoneNumber(phoneNumberString) {
        return phoneNumberString.replace(/\B(?=(\d{2})+(?!\d))(?<!\+3)|\B(?<=\+33)/g, " ");
    }

    return (
        <div>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={proId} />
                <IconButton aria-label="comment" onClick={() => window.open(`tel:${merchant[proId].tel}`)}>
                    <PhoneInTalk />
                </IconButton>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Divider style={{ width: "75%" }}>Information sur le producters</Divider>
                </div>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={`Téléphone : ${formatPhoneNumber(merchant[proId].tel)}`} />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={`Adresse : ${formatPhoneNumber(merchant[proId].Address)}`} />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={`Porduits :`} />
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "right", gap: 10 }}>
                            {merchant[proId].prod.map((item) => (
                                <Chip key={item} label={item} variant="outlined" size="medium" color="primary" />
                            ))}
                        </div>
                    </ListItemButton>
                </List>
            </Collapse>
        </div>
    );
};
const MarketDetail = ({ selected: market }) => {
    if (!market) return <div></div>;

    const formatDate = (date) => {
        const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
        return new Intl.DateTimeFormat("fr-FR", options).format(date);
    };

    return (
        <Card sx={{ margin: 10, padding: 5, width: "100%" }}>
            <h1>Marché : {market.name}</h1>
            <Divider style={{ marginBottom: 20 }}>Information</Divider>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="body1" component="div" sx={{ display: "flex", alignItems: "center" }}>
                        Adresse :
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{ display: "flex", alignItems: "center", justifyContent: "right" }}
                    >
                        {market.address}
                        <FmdGoodIcon style={{ marginLeft: 10 }} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body1" component="div" sx={{ display: "flex", alignItems: "center" }}>
                        Horraire :
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{ display: "flex", alignItems: "center", justifyContent: "right", textAlign: "right" }}
                    >
                        {market.market_time.start_time} - {market.market_time.end_time} |{" "}
                        {formatDate(new Date(market.date * 1000))}
                        <AccessTimeIcon style={{ marginLeft: 10 }} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body1" component="div" sx={{ display: "flex", alignItems: "center" }}>
                        Produits :
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{ display: "flex", alignItems: "center", justifyContent: "right", gap: 1 }}
                    >
                        {market.type.map((item) => (
                            <Chip key={item} label={item} variant="outlined" size="medium" color="primary" />
                        ))}
                    </Typography>
                </Grid>
            </Grid>
            <Divider style={{ marginTop: 20, marginBottom: 20 }}>Marchant</Divider>
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    height: "70%",
                    "& ul": { padding: 0 },
                }}
                subheader={<li />}
            >
                {market.producters.map((proId) => (
                    <ListItemDetails proId={proId} key={proId} />
                ))}
            </List>
        </Card>
    );
};

export default MarketDetail;
