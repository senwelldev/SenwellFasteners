import React from "react";
import { Fade, Zoom } from "react-reveal";
import "../About/About.css";

import Card from "./Card";
import FeatureCard from "./FeatureCard";
import CompanyOverview from "./company overview/CompanyOverview";

const About = () => {
  const featureCards = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/aboutPage%2Fenquiry.webp?alt=media&token=71d274da-34b6-454d-aae8-8b8710ef2003",
      title: "Custom design & Order Process",
      descp:
        "Our responsive team provides timely support, crafting optimal fastener solutions through collaborative brainstorming. Explore our comprehensive product range, meeting your needs from minimal to maximum requirements.",
      className: "first-card",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/aboutPage%2Foperation.webp?alt=media&token=dbdbe66e-45c5-4ca7-87d2-f3c081bbbb10",
      title: "Operations",
      descp:
        "Even though our service is always top notch, there might be times when the product is out of stock. Our operations team will promptly get it and remind you to make sure our collaboration never stops.",
      className: "second-card",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/aboutPage%2Fshipping.webp?alt=media&token=80380f43-1065-40bd-a9e0-c2786b7cc53d",
      title: "Quality & Ship",
      descp:
      "Committed to excellence, our QA team ensures fault-free products, aiming to exceed your expectations. Your satisfaction is our priority, building lasting trust through unparalleled quality standards.",
      className: "third-card",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/aboutPage%2Fmanagement.webp?alt=media&token=27f65dc3-ea26-482d-8ae5-0aa5825088a5",
      title: "Dynamic Management",
      descp:
        "We conduct routine checks to ensure products meet both local and international standards before packing and dispatch. You receive real-time transit information for enhanced customer convenience.",
      className: "fourth-card",
    },
  ];

  const cards = [
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/aboutPage%2Fmission.webp?alt=media&token=aae8e7cf-646a-4184-a686-1e7d77d55ef7",
      title: "Mission",
      descp:
        "To contribute to our customer's success, we provide superior quality Machined Products, aiming to establish enduring partnerships with our clients and deliver unparalleled customer service by pursuing the utmost quality in materials.",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/aboutPage%2Fvision.webp?alt=media&token=5ec074e6-5ddb-40fc-9303-9c79c8f0c48e",
      title: "Vision",
      descp:
        "Our mission is to spread business values, ensuring client happiness through top-notch services. We aspire to be India's largest supplier of quality Machined Products, expanding globally with the latest technology.",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/aboutPage%2Fvalues.webp?alt=media&token=aea40cd3-4d44-4e43-81e3-6a0e8a309a45",
      title: "Values",
      descp:
        "Integrity is the cornerstone of our values, compelling us to uphold transparency, honesty, and accountability in all our interactions and decisions, fostering trust among ourselves and our customers.",
    },
  ];

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row-fluid">
          <div className="col-md-12 position-relative">
            <div className="about-section-img d-flex align-items-center">
              <h1 className="about-us-heading mx-5">About Us</h1>
            </div>

            <div className="intro-section">
              <div className="intro-txt-container shadow rounded-start-3">
                <Fade left>
                  <div className="intro-divider mb-5"></div>
                </Fade>
                <h1 className="about-h1">Who We Are</h1>
                <Zoom>
                  <p className="about-p details">
                  Our dedication to excellence, inventive solutions, and customer contentment propels us to surpass anticipations in every endeavor. Supported by extensive industry knowledge and state-of-the-art technology, we provide fasteners that endure the trials of time. Explore the dependability, precision, and tailored service that characterize Senwell Fasteners.
                  </p>
                </Zoom>
              </div>
              <div className="intro-img">
                <Zoom >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/aboutPage%2FwhoWeAre.webp?alt=media&token=1afe2018-d465-4bf9-aac1-8ce9effee08e"
                    alt=""
                    className="rounded-end-3"
                    loading="lazy"
                  />
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container  offering-section ">
        <Fade bottom>
          <h1 className="text-center">What We Offer</h1>
        </Fade>
        <div className="row feature-card mx-auto">
          {featureCards.map((card, index) => (
            <Zoom key={index}>
              <div className={`col-lg-3 col-md-6 ${card.className}`}>
                <FeatureCard
                  image={card.image}
                  title={card.title}
                  descp={card.descp}
                />
              </div>
            </Zoom>
          ))}
        </div>
      </div>

      <div className="container-fluid mt-5 mb-5 pt-5">
        <Fade bottom>
          <div className="row d-flex justify-content-evenly ">
            {cards.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-8 mb-5" key={index}>
                <Card icon={item.icon} title={item.title} descp={item.descp} />
            
              </div>
            ))}
          </div>
        </Fade>
        <div className="company-overview mt-5">
        <Fade bottom>

          <CompanyOverview />
        </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
