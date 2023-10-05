// src/components/About.js
import React from "react";
import "../styles/About.css";

const About = ({ data }) => {
  return (
    <div id="about">
      <div className="container">
        <div className="about-text">
          <h2 className="about-title">About Us</h2>
          <p className="about-paragraph">{data ? data.paragraph : "Loading..."}</p>
          <h3 className="why-title">Why Choose Us?</h3>
          <div className="list-style">
            <div className="list">
              <ul>
                {data
                  ? data.Why.map((d, i) => (
                      <li key={`${d}-${i}`} className="list-item">{d}</li>
                    ))
                  : "Loading..."}
              </ul>
            </div>
            <div className="list">
              <ul>
                {data
                  ? data.Why2.map((d, i) => (
                      <li key={`${d}-${i}`} className="list-item"> {d}</li>
                    ))
                  : "Loading..."}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
