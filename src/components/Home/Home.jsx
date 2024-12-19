import React from "react";
import { FaStar } from "react-icons/fa";

import "./Home.css";
const Home = () => {
  return (
    <>
      <section className="home ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="item">
                <h1>brain tumor</h1>
                <p>
                  Welcome to our website, dedicated to providing reliable
                  information and compassionate support for individuals affected
                  by brain tumors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <h2 className="about-title">
            about <span>brain tumor: </span>
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="card text-center">
                <h3>
                  A brain tumor is a growth of cells in the brain or near it.
                  Brain tumors can happen in the brain tissue. Brain tumors also
                  can happen near the brain tissue
                </h3>
                <p>
                  <FaStar className="fgp-input-icon" />
                  There are many types of brain tumors. The type of brain tumor
                  is based on the kind of cells that make up the tumor. Special
                  lab tests on the tumor cells can give information about the
                  cells. Your health care team uses this information to figure
                  out the type of brain tumor. Some types of brain tumors
                  usually aren't cancerous. These are called noncancerous brain
                  tumors or benign brain tumors. Some types of brain tumors
                  usually are cancerous. These types are called brain cancers or
                  malignant brain tumors. Some brain tumor types can be benign
                  or malignant.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <img
                  src={require("../../assets/images/About brain tumor.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about choose">
        <div className="container">
          <h2>
            Why you <span>choose</span> us ?
          </h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <img
                  src={require("../../assets/images/Why you choose us.jpg")}
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card ">
                <h4>
                  {" "}
                  <span>1</span>
                  Professional medical service
                </h4>
                <p>
                  <FaStar className="fgp-input-icon" />
                  Professional medical services has been opening for business,
                  since Jule 2020.with the dream of mind to provide perfect
                  healthy care.
                </p>
                <h4>
                  <span>2</span>
                  Dedicated patient care
                </h4>
                <p>
                  {" "}
                  <FaStar className="fgp-input-icon" />
                  We provide them with the most accurate X-ray analysis.
                </p>
                <h4>
                  {" "}
                  <span>3</span>
                  Experienced Generalists & Specialists
                </h4>
                <p>
                  <FaStar className="fgp-input-icon" />
                  We provide specialist doctors in the field with high
                  experience to provide an efficient result.
                </p>
                <h4>
                  <span>4</span>Hours of operation and cost
                </h4>
                <p>
                  <FaStar className="fgp-input-icon" />
                  The site is available all the time and the service provided is
                  free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
