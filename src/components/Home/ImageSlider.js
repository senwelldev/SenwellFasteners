import React, { useState, useEffect } from "react";
import { Fade } from "react-reveal";

import "./ImageSlider.css";

const ImageSlider = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([
    {
      images:
        "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/Home%20Main%20Slider%2Finfrastructure.webp?alt=media&token=13679406-d6e8-47bb-b74a-d01b4464d0f7",
      title: "Infrastructure",
      para: "Extensive machinery for your needs",
    },
    {
      images:
        "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/Home%20Main%20Slider%2Fteam.webp?alt=media&token=4d68a927-3935-49b4-ab4d-f1a7f23e4df6",
      title: "Dedicated Team",
      para: "Hardworking Team for quality manufacturing",
    },
    {
      images:
        "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/Home%20Main%20Slider%2Fbrass-fasteners.webp?alt=media&token=1d394ab6-b3b5-4bf4-824a-5f2f880f90a8",
      title: "High Precision Products",
      para: "We ensure quality production",
    },
  ]);

  useEffect(() => {
    // Simulating image loading delay (you can remove this in production)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);

    // if(images && images.length>0){
    //   setLoading(false)
    // }
  }, []);

  return (
    <div className="container-fluid slider">
      <div className="row slider d-flex justify-content-center">
        <div className="col-md-12 ">
          <div
            id="carouselExampleIndicators"
            className="carousel slide mt-4 silder"
            data-bs-ride="carousel"
            data-bs-interval="3500"
          >
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner slider-img-container">
              {loading ? (
                // Skeleton loader
                <div className="text-center  m-5 p-5 text-info">
                <div class="lds-facebook"><div></div><div></div><div></div></div>
                </div>
              ) : (
                // Actual images
                images.map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item  ${index === 0 ? "active" : ""}`}
                  >
                    <Fade>
                      <div className="col-md-3 slider-image-txt-container">
                        <h1 className="slider-image-text main-title">
                          {item.title}
                        </h1>
                        <p className="slider-image-text sub-title">
                          {item.para}
                        </p>
                      </div>
                    </Fade>
                    <img
                      src={item.images}
                      className="slider-images"
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))
              )}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
