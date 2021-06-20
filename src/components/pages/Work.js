import React from "react";
import "../styles/Work.css";

function Work() {
  return (
    <div className="work-container">
      <div className="work-wrapper bd-container">
        <h2
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          We're ready to work with you
        </h2>
        <p
          className="text"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          We are ready to work with you. We love to talk to you about our plans
          and we will always open to talk anywhere everywhere
        </p>

        <button
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          Get A Qoute
        </button>
      </div>
    </div>
  );
}

export default Work;
