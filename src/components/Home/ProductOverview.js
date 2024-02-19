import React, { useEffect } from "react";
import "../Home/ProductOverview.css";
import ProductCard from "./ProdcutCard";


import { useNavigate } from "react-router-dom";
import {  Zoom } from "react-reveal";

const ProductOverview = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollValue = window.scrollY;
  //     const parallaxElement = document.querySelector(
  //       ".product-overview-section-2"
  //     );

  //     // Adjust the background position based on the scroll value
  //     parallaxElement.style.backgroundPositionY = `${-scrollValue * 0.2}px`;
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const navigate = useNavigate();

  const productImage = [
    {
      id: 2,
      title: "Screw",
      image: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/HomePage%2Fscrew.webp?alt=media&token=1e60b9d9-5e26-432f-b10e-84e7587d7842",
    },
    {
      id: 1,
      title: "Nut",
      image: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/HomePage%2Fbolts.webp?alt=media&token=ec01952e-6e60-4c11-ad51-89770938eb24",
    },
    {
      id: 4,
      title: "insert",
      image: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/HomePage%2Finserts.webp?alt=media&token=92bb1922-0f26-4b25-8602-08ea510c6e61",
    },
    {
      id: 5,
      title: "Spacer",
      image: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/HomePage%2Fspacers.webp?alt=media&token=eaef022d-e380-41bc-b9c3-de45c69630b9",
    },
    {
      id: 3,
      title: "washer",
      image: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/HomePage%2Fwasher.webp?alt=media&token=75b513ba-2439-44b1-9e7b-b098ccc3b3cd",
    },
    {
      id: 6,
      title: "anchor",
      image: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/HomePage%2Fanchor.webp?alt=media&token=28223669-d5bb-4186-b173-ed63850dbedd",
    },
  ];
  return (
    <>
      <div className="container-fluid mt-5  ">
        <div className="row ">
          <div className="col-md-12 product-overview-section mb-5">
            <div className="company-heading ">
              <h1 className="text-center mt-5 mb-3">Senwell Fasteners</h1>
              <p className="h6 text-center  mb-5 p-2">
              Discover a comprehensive range of globally available products with flexible quantity options at Senwell Fasteners. Explore our extensive selection of specialty fasteners, including washers, pins, spacers, inserts, rivets, bolts, and anchors, meticulously designed to cater to diverse project requirements. Trust Senwell Fasteners to provide top-quality solutions for all your fastening needs.
              </p>
              <h3 className="text-center mt-5 mb-3">Our Products</h3>
            </div>

            <div className="product-overview mt-5">
              {productImage.map((item, index) => {
                return (
                    <Zoom>
                  <div onClick={() => navigate(`/productCategory/${item.id}`)}
                  className="productOverviewCard"
                  >
                    <ProductCard
                      imageUrl={item.image}
                      key={index}
                      title={item.title}
                      className="xyz"
                    />
                  </div>
                    </Zoom>
                );
              })}
            </div>
          </div>
          {/* this is the parallax effect section  */}
          <div className="col-md-12 product-overview-section-2 d-flex align-items-center justify-content-center flex-column goalDiv">
            <div className="product-overview-2   ">
              <div className="products-variety d-flex align-items-center justify-content-center flex-column ">
                <h1 className="h1 text-center ">Our Goal</h1>
                <p className="h6 text-center  mb-2 p-2 ">
                  Our goal is to establish a customer service experience that
                  not only stands out as exceptional but reaches the pinnacle of
                  being truly legendary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
