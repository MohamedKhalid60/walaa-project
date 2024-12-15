import React, { useState } from 'react';
import { FaUserMd } from 'react-icons/fa';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    alert(`Reset link sent to ${email}`);
  };

  return (
    <div className="fgp-body">
      <div className="fgp-container">
        <div className="fgp-box">
          <h2>Forgot Your Password?</h2>
          <p>Please enter the email address you'd like your password reset information sent to.</p>
          <form onSubmit={handleSubmit}>
            <div className="fgp-input-group">
              <FaUserMd className="fgp-input-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="fgp-input"
              />
            </div>
            <button type="submit" className="fgp-submit-button">
              Request Reset Link
            </button>
          </form>
          <div className="fgp-additional-links">
            <a href="/login">Back to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;