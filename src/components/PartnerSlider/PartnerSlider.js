import React, { useState, useEffect } from "react";
import "./PartnerSlider.css";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/partner3.png";
import partner4 from "../../assets/images/partner4.png";
import Slider from "react-slick";

export default function PartnerSlider() {
    const settings = {
        dots: false,
        arrows:false,
        prevArrow:false,
        infinite: true,
        speed:2000,
        autoplaySpeed:2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <section className="areaBg">
      <div className="container">
        <div className="row align-items-center commonMarginTopBottom">
        <div>
        <Slider {...settings}>
          <div className="d-flex justify-content-center align-items-center">
            <img src={partner1} className="img-fluid" alt="1"/>
          </div>
          <div className="d-flex justify-content-center align-items-center" >
          <img src={partner2} className="img-fluid" alt="2"/>

          </div>
          <div className="d-flex justify-content-center align-items-center">
          <img src={partner3} className="img-fluid" alt="3"/>
          </div>
          <div className="d-flex justify-content-center align-items-center">
          <img src={partner4} className="img-fluid" alt="4"/>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={partner1} className="img-fluid" alt="1"/>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
          <img src={partner2} className="img-fluid" alt="2"/>

          </div>
          <div className="d-flex justify-content-center align-items-center">
          <img src={partner3} className="img-fluid" alt="3"/>
          </div>
          <div className="d-flex justify-content-center align-items-center">
          <img src={partner4} className="img-fluid" alt="4"/>
          </div>
        </Slider>
      </div>
        </div>
      </div>
    </section>
  );
}
