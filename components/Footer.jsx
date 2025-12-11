import React from "react";
import "./Footer.css";

// Event Handlers for Main Menu

const handleStoreClick = () => {
  alert("You're already on the store page!");
};

const handleMusicClick = () => {
  alert("This would have taken you to an external web store link to purchase Inspected releases.");
};

const handleJournalClick = () => {
  alert("This would have taken you to an external blog for Inspected music and clothing releases.");
};

const handleContactClick = () => {
  alert("This would lead to a contact sheet to get in touch with the guys at Inspected with all of their E-mail's, but we won't actually be buying anything on this web-clone :)");
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">MAIN MENU</h4>
          <ul className="footer-list">
          <li onClick={handleStoreClick}>
            <a>Store</a>
          </li>
          <li onClick={handleMusicClick}>
            <a>Music</a>
          </li>
          <li onClick={handleJournalClick}>
            <a>Journal</a>
          </li>
          <li onClick={handleContactClick}>
            <a>Contact</a>
          </li>
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
          can be a good fit for the team! You can also use code JOBOFFER to test the discount feature at checkout :D
        </p>
      </div>
    </footer>
  );
};

export default Footer;
