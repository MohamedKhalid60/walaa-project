import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

import BrainLogo from "../../assets/images/brain-21.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={BrainLogo} alt="Brain Tumor Logo" />
              BRAIN TUMOR
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Frequency</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <form className="d-flex">
              <Link to={"/login"}>
                <button className="btn btn-primary mx-2">Login</button>
              </Link>
              <Link to={"/registration"}>
                <button className="btn btn-info text-light">Register</button>
              </Link>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
