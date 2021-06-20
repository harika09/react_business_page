import React from "react";
import "../styles/Footer.css";
import Logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper bd-container">
        <div
          className="footer-content"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          <div className="footer-about">
            <strong>About Us</strong>
            <p>
              From logo design to video animation, web development to website
              copy; experts designers, developers and digital talent are ready
              to complete projects.
            </p>

            <p>
              Learn creative and technical skills with Envato free tutorials.
              Try import PropTypes from 'prop-types' for free only this weekend.
            </p>
          </div>

          <div className="footer-blog-post">
            <strong>Latest Blog Posts</strong>
            <ul>
              <li>
                Start your own agency
                <hr />
              </li>
              <li>
                How to cool down quickly
                <hr />
              </li>
              <li>
                Make something awesome
                <hr />
              </li>
              <li>
                Plan your summer vacation
                <hr />
              </li>
              <li>
                There is sunlight to enjoy
                <hr />
              </li>
            </ul>
          </div>

          <div className="footer-our-project">
            <strong>Our Projects</strong>
            <ul>
              <li>
                Go get an ice cream
                <hr />
              </li>
              <li>
                Become the best version
                <hr />
              </li>
              <li>
                Eat, Sleep and have fun
                <hr />
              </li>
              <li>
                Start the journey to the top
                <hr />
              </li>
              <li>
                Can you do this for us?
                <hr />
              </li>
            </ul>
          </div>

          <div className="footer-contact-wrapper">
            <strong>Contact Info</strong>
            <div className="footer-contact">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:0 (855) 233-5385">
                <p>Call Us 0 (855) 233-5385</p>
              </a>
            </div>

            <div className="footer-contact">
              <i className="far fa-envelope"></i>
              <a href="mailto:info@constructed.com">
                <p>info@constructed.com</p>
              </a>
            </div>

            <div className="footer-contact">
              <i className="fas fa-map-marker-alt"></i>
              <p>425 1st Street, San Francisco California, USA</p>
            </div>

            <div className="footer-contact">
              <i className="far fa-clock"></i>
              <p>Monday-Friday, 9am-6pm; Sunday closed</p>
            </div>
          </div>
        </div>
        <div
          className="footer-logo-wrapper"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-delay="10"
        >
          <div className="footer-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="footer-copyright">
            <p>Constructed Theme &copy; 2015. All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
