import React from "react";
import "./WhatWeDo.css";
import VisionVector from "../../assets/images/VisionVector.png";
import Tada from 'react-reveal/Tada';

export default function WhatWeDo() {
  return (
    <section className="visionBg" id="whatwedo">
      <div className="container">
        <div className="row align-items-center commonMarginTopBottom">
          <div className="col-lg-12 position-relative">
            <h2 className="hqmaintitle text-center">What We Do</h2>
            <h1 className="commonHeadingWhatWeDo text-center position-absolute top-0 start-0 end-0">
              What do we do to remembered for?
            </h1>
          </div>
          <div className="col-lg-12 commonMarginTopBottom">
            <p className="commonParagraph text-center ">
              To connect smart actions and execute it with laser-like focus is
              our success mantra. Exploring client’s business for online
              exposure is an ultimately worthy goal for us. We want to be a
              voice of client’s success.
            </p>
          </div>
          <div className="col-lg-12">
            <button className="px-5 py-3 commonButton btn btn-default d-block m-auto">
              GET IN TOUCH
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-xl-12 col-xxl-12 col-md-12">
          <Tada>

            <div className="timeline">
              <ul>
                <li>
                  <div className="content">
                    <h3 className="commonHeading fs-4">
                      LET’S HAVE A CUP OF COFFEE:
                    </h3>
                    <p className="commonParagraph">
                      Initiate a meeting to understand the requirements and
                      goals of the client.
                    </p>
                  </div>
                  <div className="time">
                    <h1 className="afterNumber mb-0">01</h1>
                  </div>
                </li>

                <li>
                  <div className="content">
                    <h3 className="commonHeading fs-4">
                      PLAN FOR THE SUCCESS:
                    </h3>
                    <p className="commonParagraph">
                      We analyze, design, develop and test the whole project
                      with eagle vision.
                    </p>
                  </div>
                  <div className="time">
                  <h1 className="afterNumber mb-0">02</h1>
                  </div>
                </li>

                <li>
                  <div className="content">
                    <h3 className="commonHeading fs-4">QUALITY SOLUTIONS:</h3>
                    <p className="commonParagraph">
                      For us, the quality solution is what brings clients
                      success & exposure together.
                    </p>
                  </div>
                  <div className="time">
                  <h1 className="afterNumber mb-0">03</h1>
                  </div>
                </li>

                <li>
                  <div className="content">
                    <h3 className="commonHeading fs-4">YOUR DREAMOUR GOAL:</h3>
                    <p className="commonParagraph">
                      We discover & innovate your dream with a look & feel,
                      experience.
                    </p>
                  </div>
                  <div className="time">
                  <h1 className="afterNumber mb-0">04</h1>
                  </div>
                </li>

                <div style={{ clear: "both" }}></div>
              </ul>
            </div>
            </Tada>
          </div>
        </div>
      </div>
    </section>
  );
}
