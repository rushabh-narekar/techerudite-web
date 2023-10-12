import React from "react";
import "./Testimonails.css";
import VisionVector from "../../assets/images/VisionVector.png";
import Slider from "react-slick";

export default function Testimonails() {
  const settings = {
    dots: false,
    infinite: true,
    arrow: true,
    speed:2000,
        autoplaySpeed:2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="visionBg">
      <div className="container">
        <div className="row align-items-center commonMarginTopBottom">
          <div className="col-lg-12 position-relative">
            <h2 className="hqmaintitle11 text-center">TESTIMONAILS</h2>
            <h1 className="commonHeadingWhatWeDo text-center position-absolute top-0 start-0 end-0">
              Few Words From Our Clients
            </h1>
          </div>
          <div className="col-lg-12 commonMarginTopBottom">
            <p className="commonParagraph text-center ">
              Some valuable words from our loving and ever growing customers.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-xl-12 col-xxl-12 col-md-12">
        <div>
        <Slider {...settings}>
          <div>
          <section className="testimonial text-center">
              <div className="container">
                <div
                  id="testimonial4"
                  className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
                  data-ride="carousel"
                  data-pause="hover"
                  data-interval="5000"
                  data-duration="2000"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="testimonial4_slide">
                        <p className="commonParagraph">
                          For my react native applications, Tejash and his team
                          has provided me very professional and captivative app.
                          They worked dedicatedly and keep me updated with
                          project updates. I think that is the best support from
                          the team for me. Thank you for the best application.
                        </p>

                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive my-5"
                        />
                        <div className="my-4">
                          <h4 className="customHeadText">Rashim Page</h4>
                          <p className="commonParagraph">CEO</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="testimonial4_slide">
                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive"
                        />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.{" "}
                        </p>
                        <h4>Client 2</h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="testimonial4_slide">
                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive"
                        />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.{" "}
                        </p>
                        <h4>Client 3</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
          <section className="testimonial text-center">
              <div className="container">
                <div
                  id="testimonial4"
                  className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
                  data-ride="carousel"
                  data-pause="hover"
                  data-interval="5000"
                  data-duration="2000"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="testimonial4_slide">
                        <p className="commonParagraph">
                          For my react native applications, Tejash and his team
                          has provided me very professional and captivative app.
                          They worked dedicatedly and keep me updated with
                          project updates. I think that is the best support from
                          the team for me. Thank you for the best application.
                        </p>

                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive my-5"
                        />
                        <div className="my-4">
                          <h4 className="customHeadText">Rashim Page</h4>
                          <p className="commonParagraph">CEO</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="testimonial4_slide">
                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive"
                        />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.{" "}
                        </p>
                        <h4>Client 2</h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="testimonial4_slide">
                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive"
                        />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.{" "}
                        </p>
                        <h4>Client 3</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
          <section className="testimonial text-center">
              <div className="container">
                <div
                  id="testimonial4"
                  className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
                  data-ride="carousel"
                  data-pause="hover"
                  data-interval="5000"
                  data-duration="2000"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="testimonial4_slide">
                        <p className="commonParagraph">
                          For my react native applications, Tejash and his team
                          has provided me very professional and captivative app.
                          They worked dedicatedly and keep me updated with
                          project updates. I think that is the best support from
                          the team for me. Thank you for the best application.
                        </p>

                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive my-5"
                        />
                        <div className="my-4">
                          <h4 className="customHeadText">Rashim Page</h4>
                          <p className="commonParagraph">CEO</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="testimonial4_slide">
                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive"
                        />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.{" "}
                        </p>
                        <h4>Client 2</h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="testimonial4_slide">
                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive"
                        />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.{" "}
                        </p>
                        <h4>Client 3</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
          <section className="testimonial text-center">
              <div className="container">
                <div
                  id="testimonial4"
                  className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
                  data-ride="carousel"
                  data-pause="hover"
                  data-interval="5000"
                  data-duration="2000"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="testimonial4_slide">
                        <p className="commonParagraph">
                          For my react native applications, Tejash and his team
                          has provided me very professional and captivative app.
                          They worked dedicatedly and keep me updated with
                          project updates. I think that is the best support from
                          the team for me. Thank you for the best application.
                        </p>

                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive my-5"
                        />
                        <div className="my-4">
                          <h4 className="customHeadText">Rashim Page</h4>
                          <p className="commonParagraph">CEO</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="testimonial4_slide">
                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive"
                        />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.{" "}
                        </p>
                        <h4>Client 2</h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="testimonial4_slide">
                        <img
                          src="https://i.ibb.co/8x9xK4H/team.jpg"
                          className="img-circle img-responsive"
                        />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.{" "}
                        </p>
                        <h4>Client 3</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Slider>
      </div>
        </div>
        </div>
      </div>
    </section>
  );
}
