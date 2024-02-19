import React from "react";
import { Fade } from "react-reveal";
import "./Industries.css";

const Industries = () => {
  return (
    <div className="IndustryBody">
      {/* Industry Header */}
      
        <div className="container-fluid industry-bg d-flex align-items-center">
          <div className="row">
            <div className="col-md-6 text-white">
              <h2 className="text-uppercase fw-bold industriesCardHeading">Industries</h2>
              <p >
              Empowering Diverse Industries with Precision Solutions, We specialize in crafting high-performance solutions tailored to meet the unique demands of each sector. 
              </p>
            </div>
          </div>
        </div>
    
      {/* Sectors Section - Automotive Electronics */}
      <Fade bottom>
        <div className="container industry-card-image">
          <h1 className="text-center p-5 font">Sectors We Cater To</h1>
          <div className="row">
            <div className="col-md-6 bg-img text-white rounded p-4 ">
              <h2 className="text-uppercase fw-bold industriesCardHeading">Energy</h2>
            </div>
            <div className="col-md-6 d-md-flex align-items-center">
              <ul className="lh-lg list">
              <li>
                  Smart Grid Solutions: Implementing intelligent grids for
                  optimized energy distribution.
                </li>
                <li>
                  Energy Storage Innovations: Advanced technologies for
                  efficient and reliable energy storage.
                </li>
                <li>
                  Electrification of Transportation: Supporting the transition
                  to electric vehicles and charging networks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>

      {/* Sectors Section - Aerospace */}
      <Fade bottom>
        <div className="container  mt-5 mb-5 industry-card-image">
          <div className="row d-flex flex-row-reverse">
            <div className="col-md-6 bg-img1 text-white rounded p-4">
              <h2 className="text-uppercase fw-bold font industriesCardHeading">Construction</h2>
            
             
            </div>
            <div className="col-md-6 d-md-flex align-items-center">
              <ul className="lh-lg list">
              <li>
                  Innovative Solutions: Pioneering construction methods with
                  cutting-edge technologies.
                </li>
                <li>
                  Robust Structures: Crafting enduring buildings through
                  high-quality materials and precision.
                </li>
                <li>
                  Timely Project Delivery: Ensuring efficient timelines with a
                  commitment to project completion.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>

      {/* Sectors Section - Oil And Gas */}
      <Fade bottom>
        <div className="container  mt-5 mb-5 industry-card-image">
          <div className="row">
            <div className="col-md-6 bg-img2 text-white rounded p-4">
              <h2 className="text-uppercase fw-bold font industriesCardHeading">Oil And Gas</h2>
            </div>
            <div className="col-md-6 d-md-flex align-items-center">
              <ul className="lh-lg list">
              <li>
                  Exploration Excellence: Unleashing cutting-edge technologies
                  for efficient oil and gas exploration.
                </li>
                <li>
                  Sustainable Extraction: Implementing eco-friendly practices in
                  oil and gas extraction processes.
                </li>
                <li>
                  Pipeline Integrity Solutions: Ensuring the safety and
                  longevity of oil and gas transportation infrastructure.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Industries;
