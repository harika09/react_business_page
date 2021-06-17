import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="hero-container" id="hero">
      <div className="hero-wrapper bd-container">
        <div className="hero-info">
          <h1>Building Everything You need</h1>
          <p>
            We use advanced computer techniques to combine the client’s vision,
            beauty of designed objects and photorealistic look
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
