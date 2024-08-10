import React from "react";
import "./ServicesCard.css";
import { FaChartLine } from "react-icons/fa";

const MarketResearch = () => {
  return (
    <div className="individual-service">
      <div className="service-icon">
        <i>
          <FaChartLine />
        </i>
      </div>
      <div className="service-card">
        <h1>Market Research</h1>
      </div>
      <div className="service-para">
        <p>
        Our expert analysts utilize advanced research methods, both primary and secondary, to gather valuable data and assess market trends, customer preferences, and competition.
        </p>
      </div>
    </div>
  );
};

export default MarketResearch;
