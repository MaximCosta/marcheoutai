import * as React from "react";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export const CardMarket = ({ title, date, timing, dist, categs }) => {
    return (
        <Card sx={{ width: "100%" }}>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontWeight: 700, color: "#608efd", textTransform: "uppercase", marginTop: 10}}
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ textTransform: "uppercase" }}>
                    {date}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ textTransform: "uppercase", marginBottom: 4 }}
                >
                    {timing}
                </Typography>
                <Typography variant="body2" color="green" align="right" position="absolute" top={15} right={25}
>
                    {dist} <i className="fa-solid fa-circle fa-fade fa-beat" />
                </Typography>
                <Divider variant="middle" style={{ marginTop: 12, marginBottom: 12 }}>
                    Produits
                </Divider>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {categs.map((it) => (
                        <Chip
                            key={`${date}-${it}`}
                            label={it}
                            style={{
                                background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
                                color: "white",
                                fontWeight: 700,
                            }}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export const CardMerchant = ({ title, categs = [] }) => {
    return (
        <Card sx={{ width: "100%" }}>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontWeight: 700, color: "#608efd", textTransform: "uppercase" }}
                >
                    {title}
                </Typography>
                <Divider variant="middle" style={{ marginTop: 12, marginBottom: 12 }}>
                    Produits
                </Divider>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {categs.slice(0, 5).map((it) => (
                        <Chip
                            key={`${title}-${it}`}
                            label={it}
                            style={{
                                background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
                                color: "white",
                                fontWeight: 700,
                            }}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
