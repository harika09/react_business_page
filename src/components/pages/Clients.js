import React from "react";
import "../styles/Clients.css";
import { Swiper, SwiperSlide } from "swiper/react";

//import Swiper Style
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import Client1 from "../images/Clients.jpg";

//import swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// Install Swiper Module
SwiperCore.use([Pagination]);

function Clients() {
  return (
    <div className="clients-container" id="clients">
      <div className="clients-wrapper bd-container">
        <h2>Our Clients</h2>
        <p className="text">
          Here is some feedback from our beloved clients as they give rate on
          how we give them quality service
        </p>

        <Swiper pagination={{ dynamicBullets: true }} className="mySwiper">
          <SwiperSlide>
            <div className="clients-content">
              <div className="client-info">
                <img src={Client1} alt="clients" />
                <strong> Ronald Donald</strong>
                <p>Manager @Albonis San Francisco</p>
              </div>

              <div className="client-info">
                <img src={Client1} alt="clients" />
                <strong> Ronald Donald</strong>
                <p>Manager @Albonis San Francisco</p>
              </div>

              <div className="client-info">
                <img src={Client1} alt="clients" />
                <strong> Ronald Donald</strong>
                <p>Manager @Albonis San Francisco</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients-content">
              <div className="client-info">
                <img src={Client1} alt="clients" />
                <strong> Ronald Donald</strong>
                <p>Manager @Albonis San Francisco</p>
              </div>

              <div className="client-info">
                <img src={Client1} alt="clients" />
                <strong> Ronald Donald</strong>
                <p>Manager @Albonis San Francisco</p>
              </div>

              <div className="client-info">
                <img src={Client1} alt="clients" />
                <strong> Ronald Donald</strong>
                <p>Manager @Albonis San Francisco</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="clients-content">
              <div className="client-info">
                <img src={Client1} alt="clients" />
                <strong> Ronald Donald</strong>
                <p>Manager @Albonis San Francisco</p>
              </div>

              <div className="client-info">
                <img src={Client1} alt="clients" />
                <strong> Ronald Donald</strong>
                <p>Manager @Albonis San Francisco</p>
              </div>

              <div className="client-info">
                <img src={Client1} alt="clients" />
                <strong> Ronald Donald</strong>
                <p>Manager @Albonis San Francisco</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Clients;
