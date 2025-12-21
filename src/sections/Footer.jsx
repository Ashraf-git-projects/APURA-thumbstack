import React from "react";
import "./Footer.css";
import mapPlaceholder from "../assets/eumapf.png"; 
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">

        <div className="footer-left">
          <h3 className="footer-title">APURA CLOUD</h3>

          <div className="footer-columns">

            {/* Products */}
            <div>
              <h4 className="footer-head">Products</h4>
              <p>Apura IaaS</p>
              <p>Apura Workspace</p>
              <p>Apura Socials</p>
            </div>

            {/* Roadmap */}
            <div>
              <h4 className="footer-head">Roadmap</h4>
              <p>Stage 1</p>
              <p>Stage 2</p>
              <p>Stage 3</p>
              <p>Stage 4</p>
              <p>Stage 5</p>
            </div>

            {/* Help */}
            <div>
              <h4 className="footer-head">Help</h4>
              <p>Help us on our Journey</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>

          </div>

          <div className="footer-socials">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>

          <p className="footer-copy">© 2025 Apura Cloud. All rights reserved.</p>
        </div>

        <div className="footer-right">
          <img src={mapPlaceholder} alt="Europe Map" className="footer-map" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
