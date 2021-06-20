import React from "react";
import "../styles/Features.css";
import architectImage from "../images/architect.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

//AOS initialize
AOS.init();
function About() {
  return (
    <div className="feature-container" id="features">
      <div className="feature-wrapper bd-container">
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          Features
        </h2>
        <p
          className="text"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          Construct was founded in 2018 in Philippines, by a group of friends.
          Since then we’ve made more than 1000 images for our customers over the
          whole world
        </p>
        <div className="cards-container">
          <div
            className="card"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <div className="card-info">
              <h4>Business Strategy</h4>
              <p>
                As a team, we work as one to provide great quality results for
                our clients.
              </p>
              <button>LEARN MORE</button>
            </div>
          </div>

          <div
            className="card"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <div className="card-info">
              <h4>Easy Documentation</h4>
              <p>
                Every detail is well documented to provide all the details for
                our clients.
              </p>
              <button>LEARN MORE</button>
            </div>
          </div>

          <div
            className="card"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <div className="card-info">
              <h4>Real-time Updates</h4>
              <p>
                Every detail is well documented to provide all the details for
                our clients.
              </p>
              <button>LEARN MORE</button>
            </div>
          </div>

          <div
            className="card"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <div className="card-info">
              <h4>Security Protection</h4>
              <p>
                Security is our top priority. We Always protect our clients
                data.
              </p>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>

        <div className="feature-lower-wrapper">
          <div className="feature-info-wrapper">
            <div
              className="info"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="10"
            >
              <div>
                <i className="fas fa-home"></i>
              </div>
              <div>
                <h4>Build The House Of Your Dreams</h4>
                <p>
                  Building your dream house is part of our dream too, to make
                  the dream of our clients come true
                </p>
              </div>
            </div>

            <div
              className="info"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="10"
            >
              <div>
                <i className="fas fa-street-view"></i>
              </div>
              <div>
                <h4>Get the Best View In the City</h4>
                <p>
                  When going home from work needs a good view for you to relax
                  and that's what we here for to give your best view
                </p>
              </div>
            </div>

            <div
              className="info"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="10"
            >
              <div>
                <i className="fas fa-rocket"></i>
              </div>
              <div>
                <h4>Follow Your Biggest Dream</h4>
                <p>
                  Follow your dream, whatever it is. We provide good quality of
                  service to help your dream do come true
                </p>
              </div>
            </div>
          </div>

          <div
            className="feature-info-img"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <img src={architectImage} alt="" />
          </div>
        </div>

        <button
          className="feature-btn"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          {" "}
          Explore All Features{" "}
        </button>
      </div>
    </div>
  );
}

export default About;
