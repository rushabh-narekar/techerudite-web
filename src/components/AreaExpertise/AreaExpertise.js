import React from "react";
import "./AreaExpertise.css";
import WebVector from "../../assets/images/WebDev.png";
import EcommerceWeb from "../../assets/images/EcommerceWeb.png";
import MobileDev from "../../assets/images/MobileDev.png";
import UIUX from "../../assets/images/UIUX.png";
import Digital from "../../assets/images/Digital.png";
import WebAndApp from "../../assets/images/WebAndApp.png";
import Flash from 'react-reveal/Flash';

export default function AreaExpertise() {
  return (
    <section className="areaBg" id="ToExpertisSection">
      <div className="container">
        <div className="row align-items-center commonMarginTopBottom">
          <div className="col-xl-12 col-lg-12 col-xxl-12 col-md-12">
            <div className="commonMarginTopBottom innerParagraphSection ">
              <h1 className="fw-normal text-center commonHeading  brandParagraphMargin ">
                Our Area Expertise{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="row align-items-center commonMarginTopBottom">
          <div className="col-xl-4 col-lg-4 col-xxl-4 col-md-4 my-2">
          <Flash>
            <div className="card hoverCard h-100">
              <div className="py-5 d-flex justify-content-center">
                <img
                  className=""
                  height={120}
                  width={120}
                  src={WebVector}
                  alt="Card cap2"
                />
              </div>
              <div className="py-4 card-body">
                <p className="text-center card-text-custom">Web Development</p>
              </div>
            </div>
            </Flash>
          </div>
          <div className="col-xl-4 col-lg-4 col-xxl-4 col-md-4 my-2">
          <Flash>
            <div className="card hoverCard h-100">
              <div className="py-5 d-flex justify-content-center">
                <img
                  className=""
                  height={120}
                  width={120}
                  src={EcommerceWeb}
                  alt="Card cap3"
                />
              </div>
              <div className="py-4 card-body">
                <p className="text-center card-text-custom">
                  eCommerce Web Development
                </p>
              </div>
            </div>
            </Flash>
          </div>
          <div className="col-xl-4 col-lg-4 col-xxl-4 col-md-4 my-2">
          <Flash>
            <div className="card hoverCard h-100">
              <div className="py-5 d-flex justify-content-center">
                <img
                  className=""
                  height={120}
                  width={120}
                  src={MobileDev}
                  alt="Card cap4"
                />
              </div>
              <div className="py-4 card-body">
                <p className="text-center card-text-custom">
                  Mobile Application Development
                </p>
              </div>
            </div>
            </Flash>
          </div>
          <div className="col-xl-4 col-lg-4 col-xxl-4 col-md-4 my-2">
          <Flash>
            <div className="card hoverCard h-100">
              <div className="py-5 d-flex justify-content-center">
                <img
                  className=""
                  height={120}
                  width={120}
                  src={UIUX}
                  alt="Card cap5"
                />
              </div>
              <div className="py-4 card-body">
                <p className="text-center card-text-custom">UI/UX Designing</p>
              </div>
            </div>
            </Flash>
          </div>
          <div className="col-xl-4 col-lg-4 col-xxl-4 col-md-4 my-2">
          <Flash>
            <div className="card hoverCard h-100">
              <div className="py-5 d-flex justify-content-center">
                <img
                  className=""
                  height={120}
                  width={120}
                  src={Digital}
                  alt="Card cap6"
                />
              </div>
              <div className="py-4 card-body">
                <p className="text-center card-text-custom">
                  Digital Marketing
                </p>
              </div>
            </div>
            </Flash>
          </div>
          <div className="col-xl-4 col-lg-4 col-xxl-4 col-md-4 my-2">
          <Flash>
            <div className="card hoverCard h-100">
              <div className="py-5 d-flex justify-content-center">
                <img
                  className=""
                  height={120}
                  width={120}
                  src={WebAndApp}
                  alt="Card cap1"
                />
              </div>
              <div className="py-4 card-body">
                <p className="text-center card-text-custom">
                  Website & App Maintenance
                </p>
              </div>
            </div>
            </Flash>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
