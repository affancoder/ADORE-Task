import React from "react";
import "./ServicesCard.css";
import { FaComments } from "react-icons/fa";

const CustomerFeedback = () => {
  return (
    <>
      <div className="individual-service">
        <div className="service-icon">
          <i>
            <FaComments />
          </i>
        </div>
        <div className="service-card">
          <h1>Customer Feedback</h1>
        </div>
        <div className="service-para">
          <p>
            Streamline workflows, meet deadlines, and achieve optimal
            efficiency, guided by our experienced team and advanced tools.
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomerFeedback;
