import React from "react";
import "../styles/Pricing.css";

function Pricing() {
  return (
    <div className="pricing-container" id="pricing">
      <div className="pricing-wrapper bd-container">
        <h2
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          Our Price
        </h2>
        <p className="text">
          For our beloved customer, we give a good discount and for a new
          customer, we give a great offer
        </p>

        <div className="plan-container">
          <div className="plan-card">
            <div className="card-top">
              <i className="fas fa-leaf"></i>
              <strong>ECO PLAN</strong>
            </div>
            <hr />
            <p>
              <strong>1-9</strong> interior objects
            </p>
            <hr />
            <p>
              <strong>12</strong> months support
            </p>
            <hr />
            <p>
              <strong>300</strong> m free
            </p>
            <hr />
            <p className="price">$69/m</p>
          </div>

          <div className="plan-card">
            <div className="card-top">
              <i className="fas fa-archway"></i>
              <strong>BASIC PLAN</strong>
            </div>
            <hr />
            <p>
              <strong>10-99</strong> interior objects
            </p>
            <hr />
            <p>
              <strong>24</strong> months support
            </p>
            <hr />
            <p>
              <strong>1000</strong> m free
            </p>
            <hr />
            <p className="price">$99/m</p>
          </div>

          <div className="plan-card">
            <div className="card-top">
              <i className="popular"></i>
              <i className="fas fa-university"></i>
              <strong>PLUS PLAN</strong>
            </div>
            <hr />
            <p>
              <strong>100-200</strong> interior objects
            </p>
            <hr />
            <p>
              <strong>Unlimited</strong> months
            </p>
            <hr />
            <p>
              <strong>5000</strong> m free
            </p>
            <hr />
            <p className="price">$199/m</p>
          </div>

          <div className="plan-card">
            <div className="card-top">
              <i className="fas fa-vihara"></i>
              <strong>CORPORATE PLAN</strong>
            </div>
            <hr />
            <p>
              <strong>Unlimited</strong> interior objects
            </p>
            <hr />
            <p>
              <strong>Unlimited</strong> months
            </p>
            <hr />
            <p>
              <strong>Unlimited</strong> m free
            </p>
            <hr />
            <p className="price">Custom</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
