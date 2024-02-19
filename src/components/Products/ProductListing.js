import React, { useEffect, useState } from "react";
import "./ProductListing.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductListing = () => {
  const categoryData = useSelector((state) => state.categoryData);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const hover = (index) => {
    setHoveredIndex(index);
  };

  const out = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    try {
      if (categoryData && categoryData.length > 0) {
        setLoading(false);
      }

      const timeout = setTimeout(() => {
        if (categoryData && categoryData.length > 0) {
          setLoading(false);
        }
      }, 3000);

      return () => clearTimeout(timeout);
    } catch (error) {
      console.log("Error", error);
    }
  }, [categoryData]);

  const skeletonItems = Array.from({ length: categoryData.length || 8}, (_, index) => index);

  return (
    <>
      {loading ? (
        <div className="container">
          <div className="row">
            {skeletonItems.map((placeholder, index) => (
              <div
                className={`col-md-4 col-sm-6 col-12 my-4 d-flex justify-content-center item-card-container`}
                key={index}
              >
                <div className="card item-card skeleton-card">
                  <div className="skeleton-image"></div>
                  <div className="card-body d-flex align-items-center justify-content-center flex-column item-card-container ">
                    <div className="skeleton-text"></div>
                    <Link
                      to="/"
                      className={`button btn border-none hideBtn`}
                    >
                      Read More
                    </Link>
                  </div>
                  <div
                    className={`container-fluid d-flex inside align-items-center justify-content-start`}
                  >
                    <div className="row ">
                      <div className="col d-flex align-items-center  flex-column types-list-container ">
                        <div className="skeleton-text"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row d-flex align-items-center">
            {categoryData &&
              categoryData.map((category, index) => (
                <div
                  className={`col-md-4 col-sm-6 col-12 my-4 d-flex justify-content-center item-card-container`}
                  key={index}
                  onMouseOver={() => hover(index)}
                  onMouseLeave={out}
                >
                  <div className="card item-card">
                    <img
                      src={category.image}
                      className="card-img-top cardimage"
                      alt="..."
                      id={index}
                      loading="lazy"
                    />
                    <div className="card-body d-flex align-items-center justify-content-center flex-column item-card-container ">
                      <h5 className="card-title">{category.name}</h5>
                      <Link
                        to={`/productCategory/${category.categoryId}`}
                        className={`button btn border-none  ${
                          hoveredIndex === index ? "hideBtn" : ""
                        }`}
                      >
                        Read More
                      </Link>
                    </div>
                    <div
                      className={`container-fluid d-flex inside align-items-center justify-content-start  ${
                        hoveredIndex === index ? "activehover" : ""
                      }`}
                    >
                      <div className="row " >
                        <div className="col d-flex align-items-center flex-column types-list-container ">
                          <ul className="types-list" >
                            {category.types?.map((item, typeIndex) => (
                              <li key={typeIndex} className="text-start">
                                <Link
                                  key={typeIndex}
                                  className="text-start text-white list-link"
                                  to={`/productCategory/${category.categoryId}/${item.typeId}`}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to={`/productCategory/${category.categoryId}`}
                            className="button button2 btn border-none"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductListing;
