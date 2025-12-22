import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">

        <h1 className="hero-title">By Europeans, for Europeans</h1>

        <p className="hero-subtitle">
          Privacy and security that europeans need, demand and expect. Without giving
          other nations control over our our data.
        </p>

        <div className="hero-features">

          <div className="feature-item">
            <div className="feature-line"></div>
            <h4>No interference</h4>
            <p>No third-party interference</p>
          </div>

          <div className="feature-item">
            <div className="feature-line"></div>
            <h4>1st cloud platform</h4>
            <p>To allow data control and <br></br> ownership</p>
          </div>

          <div className="feature-item">
            <div className="feature-line"></div>
            <h4>1st cloud infrastructure</h4>
            <p>To provide transparency over your data streams</p>
          </div>

          <div className="feature-item">
            <div className="feature-line"></div>
            <h4>Dynamic infrastructure</h4>
            <p>Cloud, hybrid, or on-prem form</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
