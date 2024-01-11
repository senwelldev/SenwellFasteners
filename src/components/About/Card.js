import React from "react";
import "./Card.css";

const Card = ({ icon, title, descp }) => {
  return (
    <>
      <div className="card text-bg-light border border-none rounded-3 card-container ">
        <div className="card-body ">
          <img src={icon} alt="" className="img-fluid card-image mb-2"  loading="lazy"/>
          <h5 className="card-title mt-1 ">{title}</h5>
          <p className="card-p mt-1  p-1">{descp}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
