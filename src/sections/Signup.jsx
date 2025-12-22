import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <section className="signup" id="signup">
      <div className="signup-inner">
       <div className="signup-flex">
        <h3 className="signup-title">
          Join the future of data sovereignty
        </h3>

        <div className="signup-form">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="signup-input"
          />
          <button className="signup-button">Join</button>
        </div>
        </div>

        <div className="signup-divider"></div>

      </div>
    </section>
  );
};

export default Signup;
