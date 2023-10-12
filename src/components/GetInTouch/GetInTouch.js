import React from "react";
import "./GetInTouch.css";
import VisionVector from "../../assets/images/VisionVector.png";
import Slider from "react-slick";

export default function GetInTouch() {
  const settings = {
    dots: true,
    infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="visionBg" id="SayToHello">
      <div className="container">
        <div className="row align-items-center commonMarginTopBottom">
          <div className="col-lg-12 position-relative">
            <h2 className="commonParagraph text-center">GET IN TOUCH</h2>
            <h1 className="fw-normal commonHeading text-center ">Contact Us</h1>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-xl-8 col-xxl-8 col-md-8 ">
            <form>
              <div class="form-row row px-2">
                <div class="form-group col-md-6 nameMargin commonMarginTopBottom">
           
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Name*"
                  />
                </div>
                <div class="form-group col-md-6 commonMarginTopBottom">
                
                  <input
                    type="email"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Email*"
                  />
                </div>
              </div>
              <div class="form-group commonMarginTopBottom mt-0 px-2">
        
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Subject*"
                />
              </div>
              <div class="form-group px-2">
               
              <textarea class="form-control customtextarea" placeholder="Your Message*" id="exampleFormControlTextarea1" rows="3"></textarea>

              </div>

            <div className="d-flex commonMarginTopBottom justify-content-center">
            <button type="submit" class="commonButton px-5 btn btn-default">
                SUBMIT
              </button>
            </div>
             
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
