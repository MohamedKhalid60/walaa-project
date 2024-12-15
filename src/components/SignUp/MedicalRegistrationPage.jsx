import React, { useState, useEffect } from "react";
import {
  FaUserMd,
  FaLock,
  FaEnvelope,
  FaIdCard,
  FaPhone,
  FaCalendarAlt,
  FaUpload,
  FaTimesCircle,
} from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import "./MedicalRegistrationPage.css";
import medicalBg from "../../assets/images/3.jpg";

const specializations = [
  "Cardiology",
  "Dermatology",
  "Family Medicine",
  "Neurology",
  "Oncology",
  "Pediatrics",
  "Psychiatry",
  "Surgery",
  // Add more as needed
];

const states = [
  "Alabama",
  "Alaska",
  "Arizona", // ... add all states
];

const MedicalRegistrationPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userType: "patient",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    // Patient specific fields
    insuranceNumber: "",
    insuranceProvider: "",
    emergencyContact: "",
    emergencyContactPhone: "",
    medicalConditions: "",
    // Healthcare Provider specific fields
    licenseNumber: "",
    specialization: "",
    hospitalAffiliation: "",
    yearsOfExperience: "",
    certifications: [],
    npiNumber: "",
  });

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState({
    profilePhoto: null,
    identificationDoc: null,
    medicalLicense: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showCertModal, setShowCertModal] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userType = params.get("userType");
    if (userType) {
      setFormData((prev) => ({ ...prev, userType }));
    }
  }, []);

  // Password strength checker
  useEffect(() => {
    const checkPasswordStrength = (password) => {
      let strength = 0;
      if (password.length >= 8) strength += 25;
      if (password.match(/[A-Z]/)) strength += 25;
      if (password.match(/[0-9]/)) strength += 25;
      if (password.match(/[^A-Za-z0-9]/)) strength += 25;
      setPasswordStrength(strength);
    };

    checkPasswordStrength(formData.password);
  }, [formData.password]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setFiles((prev) => ({
        ...prev,
        [type]: file,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Basic validation for step 1
    if (step === 1) {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        newErrors.email = "Invalid email address";
      }
      if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    // Validation for step 2
    if (step === 2) {
      if (formData.userType === "patient") {
        if (!formData.dateOfBirth)
          newErrors.dateOfBirth = "Date of birth is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.emergencyContact)
          newErrors.emergencyContact = "Emergency contact is required";
        if (!formData.emergencyContactPhone)
          newErrors.emergencyContactPhone =
            "Emergency contact phone is required";
      } else {
        if (!formData.licenseNumber)
          newErrors.licenseNumber = "License number is required";
        if (!formData.npiNumber) newErrors.npiNumber = "NPI number is required";
        if (!formData.specialization)
          newErrors.specialization = "Specialization is required";
        if (!formData.yearsOfExperience)
          newErrors.yearsOfExperience = "Years of experience is required";
      }
    }

    // Validation for step 3
    if (step === 3) {
      if (formData.userType === "doctor" && !files.medicalLicense) {
        newErrors.medicalLicense = "Medical license document is required";
      }
      if (!formData.agreesToTerms) {
        newErrors.terms = "You must agree to the terms and conditions";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step < 3) {
      if (validateForm()) {
        setStep(step + 1);
      }
      return;
    }

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Create FormData object for file uploads
      const formDataToSend = new FormData();

      // Append all form fields
      Object.keys(formData).forEach((key) => {
        if (key !== "certifications") {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Append certifications as JSON
      formDataToSend.append(
        "certifications",
        JSON.stringify(formData.certifications)
      );

      // Append files
      Object.keys(files).forEach((key) => {
        if (files[key]) {
          formDataToSend.append(key, files[key]);
        }
      });

      // Make API call
      const response = await fetch("/api/register", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      setSuccessMessage("Registration successful! Redirecting to login...");

      // Redirect to login after 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      setErrors({
        submit: "Registration failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderProgressBar = () => (
    <div className="mrp-progress-bar">
      {[1, 2, 3].map((stepNumber) => (
        <div
          key={stepNumber}
          className={`mrp-progress-step ${step >= stepNumber ? "active" : ""}`}
          onClick={() => {
            if (step > stepNumber) {
              setStep(stepNumber);
              const targetId =
                stepNumber === 1
                  ? "basic-info"
                  : stepNumber === 2
                  ? "personal-details"
                  : "verification";
              const targetElement = document.getElementById(targetId);
              if (targetElement) {
                const card = document.querySelector(".mrp-registration-box");
                const targetPosition =
                  targetElement.offsetTop -
                  card.offsetTop -
                  card.clientHeight / 2 +
                  targetElement.clientHeight / 2;
                card.scrollTo({
                  top: targetPosition,
                  behavior: "smooth",
                });
              }
            }
          }}
        >
          <span className="mrp-step-number">{stepNumber}</span>
          <span className="mrp-step-label">
            {stepNumber === 1
              ? "Basic Info"
              : stepNumber === 2
              ? "Personal Details"
              : "Verification"}
          </span>
        </div>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div id="basic-info" className="mrp-step-content">
            <h3 className="mrp-step-title">Basic Information</h3>

            <div className="mrp-form-row">
              <div className="mrp-form-group">
                <label>First Name *</label>
                <div className="mrp-input-group">
                  <FaUserMd className="mrp-input-icon" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                {errors.firstName && (
                  <span className="mrp-error-message">{errors.firstName}</span>
                )}
              </div>

              <div className="mrp-form-group">
                <label>Last Name *</label>
                <div className="mrp-input-group">
                  <FaUserMd className="mrp-input-icon" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
                {errors.lastName && (
                  <span className="mrp-error-message">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="mrp-form-group">
              <label>Email Address</label>
              <div className="mrp-input-group">
                <FaEnvelope className="mrp-input-icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              {errors.email && (
                <span className="mrp-error-message">{errors.email}</span>
              )}
            </div>

            <div className="mrp-form-row">
              <div className="mrp-form-group">
                <label>Password</label>
                <div className="mrp-input-group">
                  <FaLock className="mrp-input-icon" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mrp-password-strength-wrapper">
                  <div className="mrp-password-strength-bar">
                    <div
                      className="mrp-strength-fill"
                      style={{
                        width: `${passwordStrength}%`,
                        backgroundColor:
                          passwordStrength <= 25
                            ? "var(--emergency-red)"
                            : passwordStrength <= 50
                            ? "#ffd700"
                            : passwordStrength <= 75
                            ? "#ffa500"
                            : "var(--success-green)",
                      }}
                    />
                  </div>
                  <span className="mrp-strength-label">
                    {passwordStrength <= 25
                      ? "Weak"
                      : passwordStrength <= 50
                      ? "Fair"
                      : passwordStrength <= 75
                      ? "Good"
                      : "Strong"}
                  </span>
                </div>
              </div>

              <div className="mrp-form-group">
                <label>Confirm Password</label>
                <div className="mrp-input-group">
                  <FaLock className="mrp-input-icon" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {errors.confirmPassword && (
                  <span className="mrp-error-message">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div id="personal-details" className="mrp-step-content">
            <h3 className="mrp-step-title">
              {formData.userType === "patient"
                ? "Patient Information"
                : "Professional Information"}
            </h3>

            {formData.userType === "patient" ? (
              <>
                <div className="mrp-form-row">
                  <div className="mrp-form-group">
                    <label>Date of Birth *</label>
                    <div className="mrp-input-group">
                      <FaCalendarAlt className="mrp-input-icon" />
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mrp-form-group">
                    <label>Phone Number *</label>
                    <div className="mrp-input-group">
                      <FaPhone className="mrp-input-icon" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(XXX) XXX-XXXX"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mrp-form-group">
                  <label>Insurance Provider</label>
                  <div className="mrp-input-group">
                    <FaIdCard className="mrp-input-icon" />
                    <input
                      type="text"
                      name="insuranceProvider"
                      value={formData.insuranceProvider}
                      onChange={handleInputChange}
                      placeholder="Enter your insurance provider"
                    />
                  </div>
                </div>

                <div className="mrp-form-group">
                  <label>Insurance Number</label>
                  <div className="mrp-input-group">
                    <FaIdCard className="mrp-input-icon" />
                    <input
                      type="text"
                      name="insuranceNumber"
                      value={formData.insuranceNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your insurance number"
                    />
                  </div>
                </div>

                <div className="mrp-form-group">
                  <label>Emergency Contact Name *</label>
                  <div className="mrp-input-group">
                    <FaUserMd className="mrp-input-icon" />
                    <input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      required
                      placeholder="Emergency contact name"
                    />
                  </div>
                </div>

                <div className="mrp-form-group">
                  <label>Emergency Contact Phone *</label>
                  <div className="mrp-input-group">
                    <FaPhone className="mrp-input-icon" />
                    <input
                      type="tel"
                      name="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleInputChange}
                      required
                      placeholder="(XXX) XXX-XXXX"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mrp-form-row">
                  <div className="mrp-form-group">
                    <label>Medical License Number *</label>
                    <div className="mrp-input-group">
                      <FaIdCard className="mrp-input-icon" />
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your license number"
                      />
                    </div>
                  </div>

                  <div className="mrp-form-group">
                    <label>NPI Number *</label>
                    <div className="mrp-input-group">
                      <FaIdCard className="mrp-input-icon" />
                      <input
                        type="text"
                        name="npiNumber"
                        value={formData.npiNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your NPI number"
                      />
                    </div>
                  </div>
                </div>

                <div className="mrp-form-group">
                  <label>Specialization *</label>
                  <div className="mrp-input-group">
                    <FaUserMd className="mrp-input-icon" />
                    <select
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Specialization</option>
                      {specializations.map((spec) => (
                        <option key={spec} value={spec}>
                          {spec}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mrp-form-group">
                  <label>Years of Experience *</label>
                  <div className="mrp-input-group">
                    <FaCalendarAlt className="mrp-input-icon" />
                    <input
                      type="number"
                      name="yearsOfExperience"
                      value={formData.yearsOfExperience}
                      onChange={handleInputChange}
                      required
                      min="0"
                      max="70"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        );

      case 3:
        return (
          <div id="verification" className="mrp-step-content">
            <h3 className="mrp-step-title">Verification & Documents</h3>

            <div className="mrp-file-upload-container">
              <label>Profile Photo</label>
              <div
                className="mrp-upload-zone"
                onClick={() => document.getElementById("profilePhoto").click()}
              >
                <FaUpload className="mrp-upload-icon" />
                <p>Click to upload or drag and drop</p>
                <p className="mrp-file-info">
                  {files.profilePhoto
                    ? files.profilePhoto.name
                    : "JPG, PNG or GIF (max. 2MB)"}
                </p>
                <input
                  id="profilePhoto"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, "profilePhoto")}
                  hidden
                />
              </div>
            </div>

            {formData.userType === "doctor" && (
              <>
                <div className="mrp-file-upload-container">
                  <label>Medical License *</label>
                  <div
                    className="mrp-upload-zone"
                    onClick={() =>
                      document.getElementById("medicalLicense").click()
                    }
                  >
                    <FaUpload className="mrp-upload-icon" />
                    <p>Click to upload or drag and drop</p>
                    <p className="mrp-file-info">
                      {files.medicalLicense
                        ? files.medicalLicense.name
                        : "PDF format (max. 5MB)"}
                    </p>
                    <input
                      id="medicalLicense"
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(e, "medicalLicense")}
                      hidden
                      required
                    />
                  </div>
                </div>

                <div className="mrp-file-upload-container">
                  <label>Additional Certifications</label>
                  <div className="mrp-certification-list">
                    {formData.certifications.map((cert, index) => (
                      <div key={index} className="mrp-certification-item">
                        <span>{cert}</span>
                        <button
                          type="button"
                          onClick={() => removeCertification(index)}
                          className="mrp-remove-cert"
                        >
                          <FaTimesCircle />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => setShowCertModal(true)}
                      className="mrp-add-cert-btn"
                    >
                      Add Certification
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="mrp-terms-container">
              <label className="mrp-checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.agreesToTerms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreesToTerms: e.target.checked,
                    })
                  }
                  required
                />
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const removeCertification = (index) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index),
    }));
  };

  const CertificationModal = () => {
    const [newCert, setNewCert] = useState("");

    const handleAddCert = () => {
      if (newCert.trim()) {
        setFormData((prev) => ({
          ...prev,
          certifications: [...prev.certifications, newCert.trim()],
        }));
        setNewCert("");
        setShowCertModal(false);
      }
    };

    return (
      <div className={`mrp-cert-modal ${showCertModal ? "show" : ""}`}>
        <div className="mrp-modal-content">
          <h4>Add Certification</h4>
          <div className="mrp-form-group">
            <input
              type="text"
              value={newCert}
              onChange={(e) => setNewCert(e.target.value)}
              placeholder="Enter certification name"
            />
          </div>
          <div className="mrp-modal-actions">
            <button type="button" onClick={() => setShowCertModal(false)}>
              Cancel
            </button>
            <button type="button" onClick={handleAddCert}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  };

  console.log("Current Step:", step);

  return (
    <div className="mrp-registration-container">
      {isLoading && (
        <div className="mrp-loading-overlay">
          <div className="mrp-loading-spinner" />
        </div>
      )}

      {successMessage && (
        <div className="mrp-success-message">{successMessage}</div>
      )}

      <CertificationModal />

      <div className="mrp-registration-wrapper mrp-registration-row">
        <div className="mrp-registration-image"></div>

        <div className="mrp-registration-box">
          <div className="mrp-logo">
            <MdLocalHospital className="mrp-hospital-icon" />
            <h1>MediCare</h1>
            <h2>Join Our Healthcare Community</h2>
            <p>Register to access our comprehensive healthcare services</p>
          </div>

          {renderProgressBar()}

          <form onSubmit={handleSubmit}>
            <div className="mrp-user-type-toggle">
              <button
                type="button"
                className={`mrp-type-btn ${
                  formData.userType === "patient" ? "active" : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, userType: "patient" })
                }
              >
                Patient
              </button>
              <button
                type="button"
                className={`mrp-type-btn ${
                  formData.userType === "doctor" ? "active" : ""
                }`}
                onClick={() => setFormData({ ...formData, userType: "doctor" })}
              >
                Healthcare Provider
              </button>
            </div>

            {renderStepContent()}

            <div className="mrp-form-navigation">
              {step > 1 && (
                <button
                  type="button"
                  className="mrp-prev-button"
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  className="mrp-next-button"
                  onClick={() => {
                    if (validateForm()) {
                      setStep(step + 1);
                    }
                  }}
                >
                  Next
                </button>
              ) : (
                <button type="submit" className="mrp-submit-button">
                  Complete Registration
                </button>
              )}
            </div>
          </form>

          <div className="mrp-additional-links">
            <a href="/login">
              Already have an account? <strong>Sign in</strong>
            </a>
            <a className="mrp-contact" href="/contact">
              {" "}
              Need help? <strong>Contact Support</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRegistrationPage;
