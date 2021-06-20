import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="hero-container" id="hero">
      <div className="hero-wrapper bd-container">
        <div
          className="hero-info"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          <h1>Building Everything You need</h1>
          <p
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            We use advanced computer techniques to combine the client’s vision,
            beauty of designed objects and photorealistic look
          </p>
        </div>

        <div className="hero-btn">
          <button
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            Browse Services{" "}
          </button>
          <button
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            Get A Quote{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
