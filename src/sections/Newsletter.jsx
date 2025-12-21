import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container newsletter-inner">

        <h2 className="news-title">Subscribe to our Newsletter</h2>

        <p className="news-desc">
          If you want to follow our progress on developing what Europeans 
          want and need, done by Europeans.
        </p>

        <div className="news-form">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="news-input"
          />
          <button className="news-btn">Subscribe to our newsletter</button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
