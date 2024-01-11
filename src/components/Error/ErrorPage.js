import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <div className="container ">
        <div className="row ">
          <div className="col-12 d-flex justify-content-center align-items-center flex-column video-wrapper">
            
              <video
                src="https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/video%2Ferrorpage.mp4?alt=media&token=c98f0a5e-3fa4-4bbc-ad4e-1ffd4126e135"
                autoPlay
                loop
                muted
                controls={false}
                className="error-video"
                loading="lazy"
              ></video>
           

            <div className="contant_box_404">
              <Link to={"/"} className="button btn m-2">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
