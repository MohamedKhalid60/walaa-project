import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/images/brain-21.svg";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="item row">
                <img src={logo} alt="" />
                <h2>Brain Tumor</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="row">
                  <Link to={"/"}>Home</Link>
                  <Link to={"/"}>Services</Link>
                  <Link to={"/"}>Frequency</Link>
                  <Link to={"/contact"}>Contact Us</Link>
                </div>
                <p>&copy; 2024 Walaa. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="last_card">
                <div className="row">
                  <Link>
                    <FaFacebook className="fgp-input-icon" />
                  </Link>
                  <Link>
                    <FaInstagram className="fgp-input-icon" />
                  </Link>
                  <Link>
                    {" "}
                    <FaTwitter className="fgp-input-icon" />
                  </Link>
                  <Link>
                    {" "}
                    <FaLinkedin className="fgp-input-icon" />
                  </Link>
                </div>
                <p>Support : Walaa@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
