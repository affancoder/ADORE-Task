import React from "react";
import "./ServicesCard.css";
import { FaChalkboardTeacher } from "react-icons/fa";

const WebinarandWorkshopManagement = () => {
  return (
    <div className="individual-service">
      <div className="service-icon">
        <i>
          <FaChalkboardTeacher />
        </i>
      </div>
      <div className="service-card">
        <h1>Webinar and Workshop Management</h1>
      </div>
      <div className="service-para">
        <p>
        Streamline your hiring process and build a strong workforce guided by our expert consultants. Our personalized approach and commitment to diversity ensure you attract and retain the best talent while focusing on your core business. 
        </p>
      </div>
    </div>
  );
};

export default WebinarandWorkshopManagement;
