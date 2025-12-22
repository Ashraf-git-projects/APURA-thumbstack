import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="container">

        <h2 className="products-title">Our products</h2>

        <div className="products-grid">

          {/* Card 1 - Yellow */}
          <div className="product-card card-yellow">
            <div>
              <h4 className="product-pretitle">Run safely.</h4>
              <h3 className="product-title">Apura IaaS.</h3>
              <p className="product-desc">
                Apura IaaS is our service allowing customers to develop 
                applications on our secured data ownership focused platform.
              </p>
            </div>

            <div className="product-buttons">
              <button className="btn-white">Read more →</button>
              <button className="btn-black">Book a demo</button>
            </div>
          </div>


          {/* Card 2 */}
          <div className="product-card card-gray">
            <div>
              <h4 className="product-pretitle gray-text">Work privately.</h4>
              <h3 className="product-title">Apura Workspace.</h3>
              <p className="product-desc">
                Apura Workspace is our alternative for Google Workspace 
                or Microsoft Teams. Giving the tools to communicate 
                without compromising on security and privacy.
              </p>
            </div>

            <button className="btn-gray">Read more →</button>
          </div>


          {/* Card 3 */}
          <div className="product-card card-gray">
            <div>
              <h4 className="product-pretitle gray-text">Share confidently.</h4>
              <h3 className="product-title">Apura Socials.</h3>
              <p className="product-desc">
                Is our introduction of social media applications that 
                are essential to us these days.
              </p>
            </div>

            <button className="btn-white">Read more <span>→</span></button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Products;
