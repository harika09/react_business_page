import React, { useEffect } from "react";
import "../styles/Services.css";

function Services() {
  return (
    <section id="services">
      <div className="services-container">
        <div className="services-wrapper bd-container">
          <h2>Services</h2>
          <p className="text">
            Visual imagery provides an effective way to communicate between
            abstract and reality. In addition, through the use of wide-ranging
            cinematic tricks relying on color, lighting and framing, we are able
            to achieve the best possible results.
          </p>

          <div className="services-card-wrapper">
            <div className="services-card">
              <i className="fas fa-home"></i>
              <p>
                <strong>Floors & Roofs</strong>
              </p>
              <p>Best of the best quality house floors and secure roofs</p>
              <button>
                Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="services-card">
              <i className="fas fa-building"></i>
              <p>
                <strong>Rooms & Halls</strong>
              </p>
              <p>Best Rooms & halls for your family comfort and friends</p>
              <button>
                Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="services-card">
              <i className="fas fa-hotel"></i>
              <p>
                <strong>Basement</strong>
              </p>
              <p>Quality basement abd comfort for your kids play ground</p>
              <button>
                Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="services-card">
              <i className="fas fa-pencil-ruler"></i>
              <p>
                <strong>Consulting</strong>
              </p>
              <p>We value our clients and give them free consulting</p>
              <button>
                Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </section>
  );
}

export default Services;
