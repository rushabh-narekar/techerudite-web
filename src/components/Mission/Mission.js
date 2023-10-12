import React from "react";
import "./Mission.css";
import MissionVector from "../../assets/images/MissionVector.png";
import { Fade } from "react-reveal";

export default function Mission() {
  return (
    <section className="missionBg">
      <div className="container">
        <div className="row align-items-center commonMarginTopBottom">
          <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6">
          <Fade left>
        
            <div className="commonMarginTopBottom innerParagraphSection ">
              <h1 className="commonHeading  brandParagraphMargin ">
                Our Mission
              </h1>
              <p className="commonParagraph  brandParagraphMargin ">
                We believe in serving quality services which can meet
                customersrequirements. Our vision is to bring out the best in
                people, technology andprocesses with top-notch quality. We build
                customer experience. Our mission is to place a consistent
                innovation to bring about an ultimate crest of triumph as our
                service.
              </p>
            </div>
            </Fade>
          </div>
          <Fade right>
        
          <div className="col-xl-6 d-flex justify-content-end col-lg-6 col-xxl-6 col-md-6">
            <img src={MissionVector} className="img-fluid" alt="mission" />
          </div>
          </Fade>
        </div>
        <Fade right>
        <div className="row commonMarginTopBottom">
            <div className="col-lg-12">
                <h1 className="missionTextBigger">
                        Mission
                </h1>
                
            </div>
        </div>
        </Fade>
      </div>
    </section>
  );
}
