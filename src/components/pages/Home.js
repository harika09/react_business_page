import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="hero-container" id="hero">
      <div className="hero-wrapper bd-container">
        <div className="hero-info">
          <h1>Building Everything You need</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            corporis ipsa accusantium officia at commodi inventore earum eaque
            sunt voluptatibus.
          </p>
        </div>

        <div className="hero-btn">
          <button>Browse Services </button>
          <button>Get A Quote </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
