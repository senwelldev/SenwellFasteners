import React from "react";
import Fade from "react-reveal/Zoom";
import "./ProductCard.css";

const ProductCard = ({ imageUrl , title }) => {
  return (
    <Fade duration={800}>
      <div className="product-card d-flex flex-column justify-content-around" >
        <div className="product-image">
          <img src={imageUrl} alt="Product"  loading="lazy" />
        </div>
          <p className="text-uppercase fw-bold">{title}</p>
      </div>
    </Fade>
  );
};

export default ProductCard;
