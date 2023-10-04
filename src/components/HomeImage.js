import React from "react";
import "../styles/HomeImage.css";

const HomeImage = ({ imageUrl, children }) => {
  const containerStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "70vh",
  };

  return <div className="home-image-container" style={containerStyle}>{children}</div>;
};

export default HomeImage;
