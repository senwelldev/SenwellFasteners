import React from "react";
import "./Products.css";
import ProductListing from "./ProductListing";
const Products = () => {
  return (
    <div className="products-section-wrapper ">
      <div className="container-fluid product-intro-bg d-flex align-items-center ">
        <div className="row ">
          <div className="col product-txt-wrapper  ">
            <h1 className="txt">
            Precision-built products that excel in performance like no other. 
            </h1>
            <p>
            At Senwell Fasteners, we are proud to produce a diverse array of precision-critical products.
            </p>
          </div>
        </div>
      </div>
      <div className="products-glance mt-5 ">
        <h1 className="text-center mt-5 mb-5">A Quick Glance Of Our Products</h1>
        <ProductListing />

      </div>
    </div>
  );
};

export default Products;
