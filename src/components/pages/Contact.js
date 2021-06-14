import React from "react";
import "../styles/Contact.css";
import Cisco from "../images/cisco.png";
import Square from "../images/square.png";
import Soundcloud from "../images/soundcloud.png";
import Paypal from "../images/paypal.png";
import Nbc from "../images/nbc.png";
import Pinterest from "../images/pinterest.png";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-wrapper bd-container">
        <div className="partner-wrapper">
          <img src={Cisco} alt="Cisco-logo" />
          <img src={Square} alt="Square-logo" />
          <img src={Soundcloud} alt="Soundcloud-logo" />
          <img src={Paypal} alt="Paypal-logo" />
          <img src={Nbc} alt="Nbc-logo" />
          <img src={Pinterest} alt="Pinterest-logo" />
        </div>
        <h2>Contact Us</h2>
        <div className="contact-info-wrapper">
          <div className="contact-details">
            <div className="tel-info details">
              <div className="tel-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="tel-number">
                <strong>0 (855) 233-5385</strong>
                <p>Monday-Friday, 8am-7pm</p>
              </div>
            </div>

            <div className="email-info">
              <div className="email-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="email">
                <strong>info@constructed.com</strong>
                <p>Drop us a line anytime</p>
              </div>
            </div>

            <div className="location-info">
              <div className="location-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>

              <div className="location">
                <strong>Stock Building</strong>
                <p>New York, NY 93459</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit="">
              <label>Fulle Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
              />
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <label>Message</label>
              <textarea
                name="subject"
                id="subject"
                placeholder="Message..."
              ></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
