import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../styles/About.css";

const About = ({ data }) => {
    return (
        <div id="about">
            <div className="container">
                <div className="about-text">
                    <h2 className="about-title">À PROPOS DE NOUS</h2>
                    <p className="about-paragraph">
                        {data ? (
                            data.paragraph
                        ) : (
                            <Box sx={{ display: "flex" }}>
                                <CircularProgress />
                            </Box>
                        )}
                    </p>
                    <h3 className="why-title">Pourquoi nous choisir ?</h3>
                    <div className="list-style">
                        <div className="list">
                            <ul>
                                {data ? (
                                    data.Why.map((d, i) => (
                                        <li key={`${d}-${i}`} className="list-item">
                                            {d}
                                        </li>
                                    ))
                                ) : (
                                    <Box sx={{ display: "flex" }}>
                                        <CircularProgress />
                                    </Box>
                                )}
                            </ul>
                        </div>
                        {/* <div className="list">
                            <ul>
                                {data ? (
                                    data.Why2.map((d, i) => (
                                        <li key={`${d}-${i}`} className="list-item">
                                            {" "}
                                            {d}
                                        </li>
                                    ))
                                ) : (
                                    <Box sx={{ display: "flex" }}>
                                        <CircularProgress />
                                    </Box>
                                )}
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
