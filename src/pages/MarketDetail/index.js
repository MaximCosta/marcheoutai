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
import { ContactSupport, PhoneInTalk, VisibilityOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

import { useParams } from "react-router-dom";

import { merchantData } from "../../data/merchant";
import { marketsData } from "../../data/markets";
import { Button } from "@mui/material";

const ListItemDetails = ({ proId }) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    function formatPhoneNumber(phoneNumberString) {
        if (!isPhoneNumber(phoneNumberString)) return phoneNumberString.replace("https://", "").replace("http://", "");
        return phoneNumberString.replace(/\B(?=(\d{2})+(?!\d))(?<!\+3)|\B(?<=\+33)/g, " ");
    }

    function isPhoneNumber(phoneNumberString) {
        return phoneNumberString.match(/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/);
    }

    function formatContact(url) {
        if (isPhoneNumber(url)) return `tel:${url}`;
        if (url.startsWith("http://") || url.startsWith("https://")) return url;
        return `https://${url}`;
    }

    return (
        <div>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={proId} />
                <IconButton aria-label="comment" onClick={() => window.open(`tel:${merchantData[proId].tel}`)}>
                    <PhoneInTalk />
                </IconButton>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                style={{ display: "flex", paddingLeft: 50, paddingRight: 50 }}
            >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Divider style={{ width: "75%" }}>Information sur le producters</Divider>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="body1" component="div" sx={{ display: "flex", alignItems: "center" }}>
                            {isPhoneNumber(merchantData[proId].tel) ? "Téléphone" : "Contact"} :
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="body1"
                            sx={{ display: "flex", alignItems: "center", justifyContent: "right", color: "#5a7ef0" }}
                            component="a"
                            href={formatContact(merchantData[proId].tel)}
                        >
                            {formatPhoneNumber(merchantData[proId].tel)}
                            {isPhoneNumber(merchantData[proId].tel) ? (
                                <PhoneInTalk style={{ marginLeft: 10 }} />
                            ) : (
                                <ContactSupport style={{ marginLeft: 10 }} />
                            )}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1" component="div" sx={{ display: "flex", alignItems: "center" }}>
                            Adresse :
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="body1"
                            sx={{ display: "flex", alignItems: "center", justifyContent: "right", color: "#5a7ef0" }}
                            component="a"
                            href={`https://www.google.com/maps/search/?api=1&query=${merchantData[proId].Address}`}
                            target="_blank"
                        >
                            {merchantData[proId].Address}
                            <FmdGoodIcon style={{ marginLeft: 10 }} />
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
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "right",
                                gap: 1,
                                flexWrap: "wrap",
                            }}
                        >
                            {merchantData[proId].prod.map((item) => (
                                <Chip
                                    key={item}
                                    label={item}
                                    size="medium"
                                    style={{
                                        background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
                                        color: "white",
                                        fontWeight: 700,
                                    }}
                                />
                            ))}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            variant="contained"
                            endIcon={<VisibilityOutlined />}
                            style={{ background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)" }}
                            component="a"
                            href={`/search/merchant/${merchantData[proId].zipcode}/${proId}`}
                        >
                            Voir
                        </Button>
                    </Grid>
                </Grid>
            </Collapse>
        </div>
    );
};
const MarketDetail = () => {
    const { idMarket } = useParams();
    if (!idMarket) return <div></div>;
    const market = marketsData[idMarket];

    const formatDate = (date) => {
        const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
        return new Intl.DateTimeFormat("fr-FR", options).format(date);
    };

    return (
        <Card sx={{ margin: 10, padding: 5, width: "100%" }}>
            <h1 style={{ fontWeight: 700, color: "#608efd", textTransform: "uppercase" }}>Marché : {market.name}</h1>
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
                        sx={{ display: "flex", alignItems: "center", justifyContent: "right", color: "#5a7ef0" }}
                        component="a"
                        href={`https://www.google.com/maps/search/?api=1&query=${market.address}`}
                        target="_blank"
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
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "right",
                            gap: 1,
                            flexWrap: "wrap",
                        }}
                    >
                        {market.type.map((item) => (
                            <Chip
                                key={item}
                                label={item}
                                size="medium"
                                style={{
                                    background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
                                    color: "white",
                                    fontWeight: 700,
                                }}
                            />
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
