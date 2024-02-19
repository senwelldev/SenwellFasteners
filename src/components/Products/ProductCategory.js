import React, { useEffect, useState } from "react";
import "./ProductCategory.css";
import { Link, useParams } from "react-router-dom";

import { setFilterProducts } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";

const ProductCategory = () => {
  const dispatch = useDispatch();
  const filterProducts = useSelector((state) => state.filterProducts);
  const categoryData = useSelector((state) => state.categoryData);
  const productsData = useSelector((state) => state.productsData);

  const [filteredData, setFilteredData] = useState([]);

  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetching text from category collection
        const filteredText = categoryData.filter(
          (item) => item.categoryId == id
        );
        setFilteredData(filteredText);

        const filterItem = productsData.filter((item) => item.categoryId == id);

        dispatch(setFilterProducts(filterItem));
        // dispatch(setProductsData(productsItems))

     
          if(productsData && productsData.length >0){
            setLoading(false);
          }
       

        // console.log("data", filterItem);
      } catch (error) {
        console.error("Fetch Error", error);
      }
    };

    fetchData();
  }, [id , productsData]);

  return (
    <>
      {loading ? (
        <div className="text-center vh-100 m-5 p-5 text-info">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          {filteredData &&
            filteredData.map((item, index) => (
              <div className="container" key={index}>
                <div className="row">
                  <div className="col-md-12 mt-5">
                    <h4>{item.name}</h4>
                    <img
                      src="https://itafasteners.com/img/header-text-img.webp"
                      alt=""
                      loading="lazy"
                    />
                    <p className="details">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}

          <div className="container">
            <div className="row">
              {filterProducts &&
                filterProducts.map((item, index) => (
                  <div
                    className="col-md-4 col-sm-6 col-12 my-4 d-flex justify-content-center align-items-center"
                    key={index}
                  >
                    <div className="card item-card">
                      <img
                        src={item.image}
                        className="card-img-top cardimage"
                        alt="..."
                        loading="lazy"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <Link
                          to={`/productCategory/${item.categoryId}/${item.typeId}`}
                          className="button btn border-none"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCategory;
