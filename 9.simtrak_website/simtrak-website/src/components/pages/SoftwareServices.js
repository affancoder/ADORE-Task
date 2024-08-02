import React from "react";
import "./ServicesCard.css";
import { FaLaptopCode } from "react-icons/fa";

const SoftwareServices = () => {
  return (
    <div className="individual-service">
      <div className="service-icon">
        <i>
          <FaLaptopCode />
        </i>
      </div>
      <div className="service-card">
        <h1>Software Services</h1>
      </div>
      <div className="service-para">
        <p>
        Our experienced team designs and delivers user-friendly software solutions that streamline operations and drive innovation, keeping your business ahead in the digital landscape.
        </p>
      </div>
    </div>
  );
};

export default SoftwareServices;
