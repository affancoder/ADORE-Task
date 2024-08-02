import React from "react";
import "./ServicesCard.css";
import { FaPalette } from "react-icons/fa";

const GraphicDesigning = () => {
  return (
    <div className="individual-service">
      <div className="service-icon">
        <i>
          <FaPalette />
        </i>
      </div>
      <div className="service-card">
        <h1>Graphic Designing</h1>
      </div>
      <div className="service-para">
        <p>
        From stunning brochures to complete brand identity packages, our Graphic Designing Services deliver creativity, strategy, and technical excellence for a lasting impression.
        </p>
      </div>
    </div>
  );
};

export default GraphicDesigning;
