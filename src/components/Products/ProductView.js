import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ProductView.css";
import OrderForm from "./OrderForm/OrderForm";
import { useSelector } from "react-redux";

const ProductView = () => {
  const productsData = useSelector((state) => state.productsData);
  const { id, typeId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOrderForm, setShowOrderForm] = useState(false);

  // console.log("all     ", productsData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = productsData.filter(
          (item) => item.categoryId == id && item.typeId == typeId
        );
        // console.log(product);
        setProduct(product);

        if (productsData && productsData.length > 0) {
          setLoading(false);
        }

        //  console.log(typeof product);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [id, typeId, productsData]);

  const handleOrderNowClick = () => {
    setShowOrderForm(true);
  };

  const closeOrderForm = () => {
    setShowOrderForm(false);
  };

  return (
    <>
      {loading ? (
        <div className="text-center vh-100 m-5 p-5 text-info">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container mt-5 mb-5 pb-5 position-relative ">
          <div className="row">
            {product &&
              product?.map((item, index) => {
                return (
                  <>
                    <div
                      className="col-md-6 product-image-view-container mb-5"
                      key={index}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="rounded-2 shadow product-image-view img-fluid "
                        loading="lazy"
                      ></img>
                    </div>
                    <div className="col-md-6 mb-5">
                      <h1 className="product-name">{item.title}</h1>
                      <p className="details">{item.body}</p>
                      
                      <h6>
                        <span className="fw-bold">Available Sizes: </span>
                        <span>{item.availableSizes}</span>
                      </h6>
                      <h6>
                        <span className="fw-bold">Materials: </span>
                        <span>{item.material}</span>
                      </h6>
                     <p className="pt-2">Looking for a custom fastener?</p>
                      <button
                        className="btn button"
                        onClick={handleOrderNowClick}
                      >
                        Request a quotation
                      </button>
                    </div>
                  </>
                );
              })}
            {showOrderForm && (
              <div className="order-form-pop ">
                <div
                  className="order-form-overlay"
                  onClick={closeOrderForm}
                ></div>
                <OrderForm />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductView;
