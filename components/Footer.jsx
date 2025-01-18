import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">MAIN MENU</h4>
          <ul className="footer-list">
            <li>Store</li>
            <li>Music</li>
            <li>Journal</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">IMPORTANT</h4>
          <ul className="footer-list">
            <li>Contact</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Information</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">JOIN OUR NEWSLETTER</h4>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              SIGN UP
            </button>
          </form>
          <div className="social-icons">
            <i className="icon-twitter"></i>
            <i className="icon-facebook"></i>
            <i className="icon-youtube"></i>
            <i className="icon-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2025: React clone made by Atlis-Ky.</p>
        <p>
          Please consider <strong>offering me the job</strong> if you think I
          can be a good fit for the team :D
        </p>
      </div>
    </footer>
  );
};

export default Footer;
