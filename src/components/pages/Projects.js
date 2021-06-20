import React from "react";
import "../styles/Projects.css";
import Project1 from "../images/project1.jpg";
import Project2 from "../images/project2.jpg";
import Project4 from "../images/project4.jpg";
import Project5 from "../images/project5.jpg";
import Project6 from "../images/project6.jpg";
import Project7 from "../images/project7.jpg";

function Projects() {
  return (
    <div className="project-container" id="project">
      <div className="project-wrapper bd-container">
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          Projects
        </h2>
        <p
          className="text"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          Here you can see a sample of our latest works. If that doesn't
          convince you enough, check out the full experience under the button
        </p>

        <div className="project-cards">
          <div
            className="card-image"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <img src={Project1} alt="Project" />
            <p>House</p>
          </div>

          <div
            className="card-image"
            data-aos="flip-right"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <img src={Project2} alt="Project" />
            <p>House</p>
          </div>

          <div
            className="card-image"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <img src={Project4} alt="Project" />
            <p>House</p>
          </div>

          <div
            className="card-image"
            data-aos="flip-right"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <img src={Project5} alt="Project" />
            <p>House</p>
          </div>

          <div
            className="card-image"
            data-aos="flip-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <img src={Project6} alt="Project" />
            <p>House</p>
          </div>

          <div
            className="card-image"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <img src={Project7} alt="Project" />
            <p>House</p>
          </div>
        </div>
        <button
          className="all-projects"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          View All Projects
        </button>
      </div>
    </div>
  );
}

export default Projects;
