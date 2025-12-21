import React from "react";
import "./Roadmap.css";

const Roadmap = () => {
  return (
    <section className="roadmap" id="roadmap">
      <div className="container">

        <h2 className="roadmap-title">
          Our Road to Creating Data<br/>Ownership and Security
        </h2>

        <div className="roadmap-list">

          {/* ---------- STAGE 1 ---------- */}
          <div className="stage-row">
            <div className="stage-left">
              <h4 className="stage-number">Stage 1</h4>
              <p className="stage-title">Cloud<br/>infrastructure</p>
            </div>

            <div className="stage-middle">
              {/* empty description (as per screenshot) */}
            </div>

            <div className="stage-right">
              <button className="btn-outline">Book a demo</button>
              <span className="arrow">→</span>
            </div>
          </div>


          {/* ---------- STAGE 2 (Highlighted) ---------- */}
          <div className="stage-row stage-highlight">
            <div className="stage-left">
              <h4 className="stage-number">Stage 2</h4>
              <p className="stage-title">Collaboration</p>
              <p className="stage-label">In Pilot</p>
            </div>

            <div className="stage-middle">
              EU alternative to GoogleWorkspace Teams,
              <br/>Meet a.o.
            </div>

            <div className="stage-right">
              <button className="btn-white">Try It</button>
              <span className="arrow-dark">→</span>
            </div>
          </div>


          {/* ---------- STAGE 3 ---------- */}
          <div className="stage-row">
            <div className="stage-left">
              <h4 className="stage-number disabled">Stage 3</h4>
              <p className="stage-title disabled">Communication</p>
            </div>

            <div className="stage-middle">
              <p className="disabled">
                Apura IaaS is our service allowing customers to develop
                applications on our secured data ownership focused platform.
              </p>
            </div>

            <div className="stage-right">
              <p className="coming-soon">Coming soon</p>
            </div>
          </div>


          {/* ---------- STAGE 4 ---------- */}
          <div className="stage-row">
            <div className="stage-left">
              <h4 className="stage-number disabled">Stage 4</h4>
              <p className="stage-title disabled">Connectivity</p>
            </div>

            <div className="stage-middle">
              <p className="disabled">
                EU alternative to Linkedin, Instagram
              </p>
            </div>

            <div className="stage-right">
              <p className="coming-soon">Coming soon</p>
            </div>
          </div>


          {/* ---------- STAGE 5 ---------- */}
          <div className="stage-row">
            <div className="stage-left">
              <h4 className="stage-number disabled">Stage 5</h4>
              <p className="stage-title disabled">Entertainment</p>
            </div>

            <div className="stage-middle">
              <p className="disabled">
                EU alternative to Youtube, Tiktok
              </p>
            </div>

            <div className="stage-right">
              <p className="coming-soon">Coming soon</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Roadmap;
