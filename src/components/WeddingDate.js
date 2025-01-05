import React from "react";
import sindurdan from "../images/ap.png";
import hand from "../images/w22.png";

const WeddingDate = () => {
  return (
    <div className="main-slider">
      <div className="display-table center-text">
        <div className="display-table-cell">
          <div className="slider-content">
            <img className="sindur-dan" src={sindurdan} alt="Sindur Dan" />
            <h5 className="date">14th February 2025</h5>
            <h3 className="pre-title">Save The Date</h3>
            <h1 className="title">
              Rajeev <img className="sindur-dan" src={hand} alt="Sindur Dan" />
              Anju
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingDate;
