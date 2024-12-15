import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowUp } from "react-icons/fa";
import "./ContactUsPage.css";

const ContactUs = () => {
  return (
    <>
      <div className="App" id="scroll">
        <div className="fixed-navbar"></div>

        <div className="wpo-breadcumb-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wpo-breadcumb-wrap">
                  <h2>Contact Us</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="wpo-contact-pg-section section-padding">
          <div className="container">
            <div className="row">
              <div className="col col-lg-10 offset-lg-1">
                <div className="office-info">
                  <div className="row">
                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                      <div className="office-info-item">
                        <div className="office-info-icon">
                          <div className="icon">
                            <FaMapMarkerAlt size={35} color="#0080d2" />
                          </div>
                        </div>
                        <div className="office-info-text">
                          <h2>Address</h2>
                          <p>Guest House - Ain Shams </p>
                          <p>University</p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                      <div className="office-info-item">
                        <div className="office-info-icon">
                          <div className="icon">
                            <FaEnvelope size={35} color="#0080d2" />
                          </div>
                        </div>
                        <div className="office-info-text">
                          <h2>Email Us</h2>
                          <p>dominay@gmail.com</p>
                          <p>dominay@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                      <div className="office-info-item">
                        <div className="office-info-icon">
                          <div className="icon">
                            <FaPhone size={35} color="#0080d2" />
                          </div>
                        </div>
                        <div className="office-info-text">
                          <h2>Call Now</h2>
                          <p>+020123456789</p>
                          <p>+020123456789</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wpo-contact-title">
                  <h2>Have Any Question?</h2>
                  <p>Please, let us know what we can help you with</p>
                </div>

                <div className="wpo-contact-form-area">
                  <form className="contact-validation-active">
                    <div className="row">
                      <div className=" col-lg-6 ">
                        <div className="form-field">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="form-field">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="form-field">
                          <input
                            type="phone"
                            name="phone"
                            placeholder="Your Phone"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="form-field">
                          <select name="subject">
                            <option>Services</option>
                            <option>Services1</option>
                            <option>Services2</option>
                            <option>Services3</option>
                            <option>Services4</option>
                            <option>Services5</option>
                            <option>Services6</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 ">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submit-area">
                      <button type="submit" className="theme-btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wpo-contact-map-section">
          <div className="wpo-contact-map">
            <iframe
              title="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.452032927588!2d31.29106651502074!3d30.075143847520035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c5a0ecac9e1%3A0x8a3d2ddf5e8a8909!2z2KfZhNio2YLYp9mGINin2YTYtdmF2KkgLSDYp9mE2YXZhNmK2YXYjCDYp9mE2YXZhtmKINmE2YjYp9mI2Kk!5e0!3m2!1sen!2seg!4v1699000000000"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>

      <div className="col-lg-12">
        <div className="header-menu">
          <ul className="smothscroll">
            <li>
              <a href="#scroll">
                <FaArrowUp size={24} color="#0080d2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
