import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ServiceSlider.css";


// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

const ServiceSlider = () => {
  return (
    <>
      <div className="service">
        <h1 className="text-center mt-5 mb-5">Why Choose Senwell Fasteners</h1>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          display:"flex",
          alignItems: "center",
          justifyContent:'center',
        }}
        
        speed={600}
        parallax={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }} 
        pagination={{
          clickable: true,
        }}
        navigation={true}
      
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper mb-4 "
      >
        <div
          slot="container-start"
          className="parallax-bg parallax "
          data-swiper-parallax="-23%"
        >
         
          <video src="https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/video%2Fsky.mp4?alt=media&token=b1eb1341-cf75-41d9-9dc4-e23028ec368e" autoPlay loop muted controls={false} style={{width:"150vw"}} className="video" loading="lazy">
         
          </video>

        </div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Cutting-Edge Technology
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Our technological advancements always are ahead of time and ensure smooth production to meet your needs.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Stringent Quality Control
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Our products go through rigorous testing and quality checks to ensure trust and faith with our production.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Customer-Centric Approach
          </div>
          
          <div className="text" data-swiper-parallax="-100">
            <p>
            Our team is responsive and is always their to support you with your needs. We ensure that our clients have a good experience conducting business with us.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ServiceSlider;
