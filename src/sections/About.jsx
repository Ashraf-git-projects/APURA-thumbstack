import React from "react";
import "./About.css";
import mapPlaceholder from "../assets/eumapf.png"; 

const About = () => {
  return (
    <section className="about">
      <div className="about-inner">

        {/* Left Content */}
        <div className="about-left">
          <p className="about-label">About us</p>

          <h2 className="about-title">
            By Europeans,<br/>for Europeans
          </h2>
          <div className="flex-col">
          <p className="about-desc">
            Our vision is to empower governments, organizations and individuals 
            with control and independence in the online realm.
          </p>

          <button className="about-btn">
            Read more about us →
          </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="about-right">
          <img src={mapPlaceholder} alt="Europe Map" className="about-map" />
        </div>

      </div>
    </section>
  );
};

export default About;
