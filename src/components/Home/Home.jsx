import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <div className="row">
            <div className="col-lg-6">
              <div className="card text-center">
                <h2>
                  about <span>brain tumor :</span>
                </h2>
                <p>
                  There are many types of brain tumors. The type of brain tumor
                  is based on the kind of cells that make up the tumor. Special
                  lab tests on the tumor cells can give information about the
                  cells. Your health care team uses this information to figure
                  out the type of brain tumor. Some types of brain tumors
                  usually aren't cancerous. These are called noncancerous brain
                  tumors or benign brain tumors. Some types of brain tumors
                  usually are cancerous. These types are called brain cancers or
                  malignant brain tumors. Some brain tumor types can be benign
                  or malignant
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
              <div className="card text-center">
                <h2>
                  Why you <span>choose</span> us ?
                </h2>
                <p>
                  There are many types of brain tumors. The type of brain tumor
                  is based on the kind of cells that make up the tumor. Special
                  lab tests on the tumor cells can give information about the
                  cells. Your health care team uses this information to figure
                  out the type of brain tumor. Some types of brain tumors
                  usually aren't cancerous. These are called noncancerous brain
                  tumors or benign brain tumors.
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
