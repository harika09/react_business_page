import React, { useState } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import Logo from "../images/logo.png";

function Navbar() {
  const [header, setHeader] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const stickyBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", stickyBackground);

  return (
    <div className={header ? "header active" : "header"}>
      <header className="header-container bd-container">
        <Link
          to="hero"
          activeClass="active"
          smooth="true"
          duration={500}
          onClick={closeMobileMenu}
        >
          <img src={Logo} alt="" />
        </Link>
        <div className="header-wrapper">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="hero"
                activeClass="active"
                spy="true"
                smooth="true"
                duration={500}
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="features"
                activeClass="active"
                spy="true"
                smooth="true"
                duration={500}
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                activeClass="active"
                spy="true"
                smooth="true"
                duration={500}
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="project"
                activeClass="active"
                spy="true"
                smooth="true"
                duration={500}
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="clients"
                activeClass="active"
                spy="true"
                smooth="true"
                duration={500}
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="pricing"
                activeClass="active"
                spy="true"
                smooth="true"
                duration={500}
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                activeClass="active"
                spy="true"
                smooth="true"
                duration={500}
                onClick={closeMobileMenu}
                className="nav-links"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="social-media-wrapper">
          <div
            className={click ? "menu-toggle active" : "menu-toggle"}
            onClick={handleClick}
          ></div>
          <li className="social-media">
            <a href="/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="social-media">
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="social-media">
            <a href="/">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
