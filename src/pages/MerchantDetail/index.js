import React from "react";

import Card from "@mui/material/Card";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { PhoneInTalk, VisibilityOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useParams } from "react-router-dom";

import { merchantData } from "../../data/merchant";
import { marketsData } from "../../data/markets";
import { Button } from "@mui/material";

const ListItemDetails = ({ marId }) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const formatDate = (date) => {
        const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
        return new Intl.DateTimeFormat("fr-FR", options).format(date);
    };

    return (
        <div>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={marketsData[marId].name} />
                <IconButton aria-label="comment" onClick={() => window.open(`tel:${merchantData[marId].tel}`)}>
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
                            Adresse :
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="body1"
                            sx={{ display: "flex", alignItems: "center", justifyContent: "right", color: "#5a7ef0" }}
                            component="a"
                            href={`https://www.google.com/maps/search/?api=1&query=${marketsData[marId].address}`}
                            target="_blank"
                        >
                            {marketsData[marId].address}
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
                            {marketsData[marId].market_time.start_time} - {marketsData[marId].market_time.end_time} |{" "}
                            {formatDate(new Date(marketsData[marId].date * 1000))}
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
                            {marketsData[marId].type.map((item) => (
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
                            href={`/search/market/${marketsData[marId].city}/${marId}`}
                        >
                            Voir
                        </Button>
                    </Grid>
                </Grid>
            </Collapse>
        </div>
    );
};

const MerchantDetail = () => {
    const { idMerchant } = useParams();
    if (!idMerchant) return <div></div>;
    const merchant = merchantData[idMerchant];

    // const formatDate = (date) => {
    //     const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    //     return new Intl.DateTimeFormat("fr-FR", options).format(date);
    // };

    return (
        <Card sx={{ margin: 10, padding: 5, width: "100%" }}>
            <h1 style={{ fontWeight: 700, color: "#608efd", textTransform: "uppercase" }}>Marchant : {idMerchant}</h1>
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
                        href={`https://www.google.com/maps/search/?api=1&query=${merchant.Address}`}
                        target="_blank"
                    >
                        {merchant.Address}
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
                        {merchant.prod.map((item) => (
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
            <Divider style={{ marginTop: 20, marginBottom: 20 }}>Marché</Divider>
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
                {merchant.markets.map((marId) => (
                    <ListItemDetails marId={marId} key={marId} />
                ))}
            </List>
        </Card>
    );
};

export default MerchantDetail;
