import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typewriter from "typewriter-effect"; // Import Typewriter from typewriter-effect
import "../styles/Feature.css";

const Feature = ({ data }) => {
    return (
        <div id="features">
            <div className="container">
                <div className="section-title">
                    <h2>Features</h2>
                </div>
                <div className="row">
                    {data ? (
                        data.map((feature, index) => (
                            <div key={index} className="feature">
                                <i className={feature.icon}></i>
                                <h3>{feature.title}</h3>
                                {feature.inProgress && (
                                    <div className="in-progress-message">
                                        <Typewriter
                                            options={{
                                                strings: ["Work in Progress..."],
                                                autoStart: true,
                                                loop: true,
                                                delay: 100,
                                            }}
                                        />
                                    </div>
                                )}
                                <p>{feature.text}</p>
                            </div>
                        ))
                    ) : (
                        <Box sx={{ display: "flex" }}>
                            <CircularProgress />
                        </Box>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Feature;
