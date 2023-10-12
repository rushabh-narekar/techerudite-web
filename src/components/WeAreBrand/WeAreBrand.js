import React from "react";
import "./WeAreBrand.css";
import aboutUsVector from "../../assets/images/aboutusVector.png";
import { Fade } from "react-reveal";
import Jump from 'react-reveal/Jump';

export default function WeAreBrand() {
  return (
    <section id="company">
      <div className="container">
        <div className="row mt-5 commonMarginTopBottom">

          <div className="col-xl-12 col-lg-12 col-xxl-12 col-md-12">
        <Jump>

            <div className="headingSection">
              <h1 className="commonHeading text-center">We grow brands</h1>
              <h1 className="commonHeading text-center">
                What is Techerudite?
              </h1>
            </div>
            </Jump>

            <div className="commonMarginTopBottom innerParagraphSection">
              <Jump>
              <p className="commonParagraph text-center">
                Since its inception in 2014, Techerudite scrutinizes the needs
                of all customers and with the mass experience and talented
                people, we can create an online presence of your business for
                any type of industry. With the enormous skills in the web &
                mobile app development, UI/UX design, digital marketing, we
                manage the entire creative process and stay available to provide
                robust solutions to solve complex tech snags.
              </p>
          </Jump>

            </div>
          </div>

        </div>
        <div className="row mb-5 align-items-center commonMarginTopBottom">
          <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6">
          <Fade left>
        
            <div className="aboutUsVector">
              <img src={aboutUsVector} className="img-fluid" alt="about-us" />
            </div>
            </Fade>
          </div>
          <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6">
          <Fade right>
            <div className="commonMarginTopBottom innerParagraphSection ">
              <p className="commonParagraph  brandParagraphMargin ">
                Our tech mind offers expert, creative, scalable & high-quality
                solutions that fulfill your all requirements. We act ethically,
                deliver excellent solutions, respect your contribution. With
                nurturing trust, we analyze your requirements; put our heads
                into it to exceed customers’ expectations. We offer best-suited
                services which fetch mutually profitable experience.
              </p>
              <p className="commonParagraph  brandParagraphMargin ">
                With the huge client base all over the world, we build brands
                and build a long-lasting relationship with customers who reflect
                our success, struggle & a journey of making “Happy
                Customers”.Customer satisfaction & success is our biggest
                achievement. We grow by making people’s dreams alive by creating
                outstanding websites, mobile apps, and captivating designs. This
                is what we want to be remembered by making a difference. Be a
                part of our organization, we warmly welcome challengingprojects
                & innovation.{" "}
              </p>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
