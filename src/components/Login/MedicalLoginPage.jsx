import React, { useState } from "react";
import { FaUserMd, FaLock, FaGoogle, FaFacebookF } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import "./MedicalLoginPage.css";
import medicalBg from "../../assets/images/2.jpg";
import Logo from "../../assets/images/brain-21.svg";

const MedicalLoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    userType: "patient",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="mlp-login-container">
      <div className="mlp-login-wrapper">
        <div className="mlp-login-image">
          <img src={medicalBg} alt="Healthcare Professional" />
          <div className="mlp-image-overlay">
            <h2>Trusted Healthcare Solutions</h2>
            <p>Providing quality care through innovative technology</p>
          </div>
        </div>

        <div className="mlp-login-box">
          <div className="mlp-logo">
            <img src={Logo} alt="" />
            <h1>Brain Tumor</h1>
            <h3>Welcome to Healthcare Portal</h3>
          </div>

          <div className="mlp-user-type-toggle">
            <button
              className={`mlp-type-btn  ${
                formData.userType === "patient" ? "mlp-active" : ""
              }`}
              onClick={() => setFormData({ ...formData, userType: "patient" })}
            ></button>
            {/* <button
              className={`mlp-type-btn ${
                formData.userType === "doctor" ? "mlp-active" : ""
              }`}
              onClick={() => setFormData({ ...formData, userType: "doctor" })}
            >
              Healthcare Provider
            </button> */}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mlp-form-group">
              <label>Email Address</label>
              <div className="mlp-input-group">
                <FaUserMd className="mlp-input-icon" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={
                    formData.userType === "patient"
                      ? "Enter your email"
                      : "Enter your medical email"
                  }
                />
              </div>
            </div>

            <div className="mlp-form-group">
              <label>
                Password
                <a
                  href="/forgot-password"
                  className="mlp-forgot-link"
                  style={{}}
                >
                  Forgot your password?
                </a>
              </label>
              <div className="mlp-input-group">
                <FaLock className="mlp-input-icon" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="mlp-remember-me">
              <input
                id="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) =>
                  setFormData({ ...formData, rememberMe: e.target.checked })
                }
                className="mlp-remember-checkbox"
              />
              <label htmlFor="rememberMe" className="mlp-remember-label">
                Keep me signed in
              </label>
            </div>

            <button type="submit" className="mlp-login-button">
              Access Portal
            </button>

            {/* {formData.userType === "patient" && (
              <>
                <div className="mlp-divider">
                  <span>OR</span>
                </div>

                <div className="mlp-social-login">
                  <button type="button" className="mlp-google-btn">
                    <FaGoogle /> Sign in with Google
                  </button>
                  <button type="button" className="mlp-facebook-btn">
                    <FaFacebookF /> Sign in with Facebook
                  </button>
                </div>
              </>
            )} */}
          </form>

          <div className="mlp-signup-link">
            {formData.userType === "patient" ? (
              <>
                New patient? <a href="registration">Register here</a>
              </>
            ) : (
              <>
                Healthcare provider?{" "}
                <a href="/registration?userType=doctor">
                  Apply for credentials
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalLoginPage;
