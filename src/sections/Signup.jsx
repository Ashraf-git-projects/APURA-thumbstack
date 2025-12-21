import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <section className="signup">
      <div className="container signup-inner">

        <h3 className="signup-title">
          Join the future of data sovereignty
        </h3>

        <div className="signup-form">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="signup-input"
          />
          <button className="signup-button">Sign up</button>
        </div>

      </div>
    </section>
  );
};

export default Signup;
