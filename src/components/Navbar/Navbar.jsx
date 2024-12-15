import React from "react";
import "./Navbar.css";

import BrainLogo from "../../assets/images/brain-21.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <div className="container-fluid">
            <div className="row">
              <div className="card">
                <div className=" d-flex">
                  <img src={BrainLogo} alt="Brain Tumor Logo" />
                  <Link className="navbar-brand" to={"/"}>
                    BRAIN TUMOR
                  </Link>
                </div>
              </div>
              <div className="card">
                <ul className="d-flex ">
                  <li className="nav-link">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="nav-link">
                    <Link to={"/services"}>Services</Link>
                  </li>
                  <li className="nav-link">
                    <Link to={"/frequency"}>Frequency</Link>
                  </li>
                  <li className="nav-link">
                    <Link to={"/contact"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="d-flex">
                  <Link to={"/login"}>
                    <button className="btn">Log In</button>
                  </Link>
                  <Link to={"/registration"}>
                    <button className="btn">Sign Up</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
