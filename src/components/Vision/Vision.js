import React from "react";
import "./Vision.css";
import VisionVector from "../../assets/images/VisionVector.png";
import  Fade  from "react-reveal/Fade";

export default function Vision() {
  return (
    <section className="visionBg">
      <div className="container">
        <div className="row align-items-center commonMarginTopBottom">
        <div className="col-xl-6  col-lg-6 col-xxl-6 col-md-6">
        <Fade right>
            <img src={VisionVector} className="img-fluid" alt="mission" />
          </Fade>

          </div>
          <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6 ">
            <Fade left>
            <div className="commonMarginTopBottom innerParagraphSection px-1">
              <h1 className="fw-normal commonHeading  brandParagraphMargin ">
                Our Vision
              </h1>
              
              <p className="commonParagraph  brandParagraphMargin ">
              We believe in serving quality services which can meet customersrequirements. Our vision is to bring out the best in people, technology andprocesses with top-notch quality. We build customer experience. Our mission is to place a consistent innovation to bring about an ultimate crest of triumph as our service.
              </p>
            </div>
            </Fade>
          </div>
         
        </div>

        <div className="row commonMarginTopBottom mb-0">
            <div className="col-lg-12">
            <Fade left>
                <h1 className="missionTextBigger text-end">
                Vision
                </h1>
                </Fade>
                
            </div>
        </div>
      </div>
    </section>
  );
}
