import React from "react";
import Logo1 from "../../assets/images/Logo1.svg";
import Logo2 from "../../assets/images/Logo2.png";
import Facebook from "../../assets/images/facebook-app-symbol (1).png";

import Twitter from "../../assets/images/twitter (1).png";
import LinkedIN from "../../assets/images/linkedin (1).png";
import SideArrow from "../../assets/images/Path 304.png";
import FooterBakImg from "../../assets/images/Path 305.png";
import Human from "../../assets/images/Group 396.png";
import FooterImg from "../../assets/images/Footer image.png";


import "./Footer.css";
export default function () {
  return (
    <>
      <section className="footer-sec-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-8 marginBottomRespo">
              <div className="footer-about mt-30">
                <div className="logo">
                  <a href="/">
                    <div className="logo-div">
                      <img src={Logo1} className="img-fluid" />
                      <img src={Logo2} className="img-fluid mt-3" />
                    </div>
                  </a>
                </div>
                <p className="mt-3 mainparagraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
                <ul className="social-sec mt-3">
                  <li className="face-book-icon">
                    <a href="/">
                      <img src={Facebook} className="img-fluid icon-social" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Twitter} className="img-fluid icon-social" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={LinkedIN} className="img-fluid icon-social" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-6">
              <div className="footer-list mt-30">
                <h4 className="title">Quick Links</h4>
                <ul>
                  <li className="commonParagraph2 mt-5">
                    <a href="/">Web Development</a>
                  </li>
                  <li className="commonParagraph2 mt-2">
                    <a href="/">CMS & Commerce</a>
                  </li>
                  <li className="commonParagraph2 mt-2">
                    <a href="/">Mobile App Develoment</a>
                  </li>
                  <li className="commonParagraph2 mt-2">
                    <a href="/">Digital marketing</a>
                  </li>
                  <li className="commonParagraph2 mt-2">
                    <a href="/">UI/UX Design</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="footer-list pl-35 mt-30">
                <h4 className="title">Comapny</h4>
                <ul>
                  <li className="commonParagraph2 mt-5">
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li className="commonParagraph2 mt-2">
                    <a href="/">Tearms of Services</a>
                  </li>
                  <li className="commonParagraph2 mt-2">
                    <a href="/">Legal Info</a>
                  </li>
                  <li className="commonParagraph2 mt-2">
                    <a href="/">Knowledge Base</a>
                  </li>
                  <li className="commonParagraph2 mt-2">
                    <a href="/">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <div className="footer-address mt-30">
                <h3 className="title">Subscribe Our Newsletter</h3>
                <p className="mainparagraph mt-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>

                <div>
                  <div className="right-inner-addon input-container">
                 
                    <i className="fa fa-angle-right text-black"></i>
           
                    <input
                      type="text"
                      className="form-control customGradientInput"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>

                {/* <button className="commonButton">
            
            </button> */}
                {/* <input
                  className="commonButtonfooter"
                  id="footerinput"
                  placeholder="Enter Your Email"
                />
                <button className="arrow-btn">
                  <img src={SideArrow} />
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="footer-img">
        <img className="img-fluid footer-img-2" src={FooterBakImg}></img>
      </div> */}
        {/* <div className="Human-img">
        <img className="img-fluid" src={Human}></img>
      </div> */}
      </section>
      <section className="position-relative">
        <img src={FooterImg} className="w-100" alt="f"/>
        <div className="d-flex ms-auto me-5 pe-5 pb-5 copyright position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-around align-items-end">
              <span className="text-white fw-normal d-flex ms-auto me-5 pe-5">&#169; 2019 All right reserved by Tech Erudite </span>
            </div>
      </section>
      {/* <section className="last-img">
        <div className="">
          <img className="w-100" src={FooterBakImg}></img>
        </div>
        <div className="container new-container">
          <div className="col-lg-6">
            <div className="img-last">
              <img className="img-fluid" src={Human}></img>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="copyrigthtext">
              <span>&#169;</span>
              <span>2019 All right reserved by Tech Erudite </span>
            </div>
          </div>
        </div>

      </section> */}
    </>
  );
}
