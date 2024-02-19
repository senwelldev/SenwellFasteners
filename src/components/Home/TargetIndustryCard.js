import React from "react";
import { Fade } from "react-reveal";
import "../Home/TargetIndustryCard.css";

const TargetIndustryCard = ({ imageUrl, description, title }) => {
  return (
    <Fade duration={1000} delay={200} distance="20px" bottom>
      <div className="card mb-3 mx-auto mt-5 rounded-4  industry-card">
        <div className="row g-0 industry-card-body">
          <div className="col-md-8 text-body">
            <div className="card-body-fluid ">
              <div className="card-text-container">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4  idustry-image-container">
            <img
              src={imageUrl}
              className="img-fluid rounded-end-4 object-fit-cover"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default TargetIndustryCard;
