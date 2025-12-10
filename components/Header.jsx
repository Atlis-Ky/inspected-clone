import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../src/context/CartContext";
import "./Header.css";

const Header = ({ onCurrencyChange }) => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isPromoBannerVisible, setPromoBannerVisible] = useState(true);
  const [isFadingOut, setFadingOut] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("GBP");
  const [isModalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

  // F U N C T I O N S

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closePromoBanner = () => {
    setFadingOut(true);
    setTimeout(() => {
      setPromoBannerVisible(false);
    }, 500);
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setDropdownOpen(false);
    onCurrencyChange(currency); // Notify parent component of the currency change
  };

  const handleLoginClick = () => {
    setModalOpen(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoggedInUser(username);
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className="header">
      {/* Promo Banner */}
      {isPromoBannerVisible && (
        <div className={`promo-banner ${isFadingOut ? "fade-out" : ""}`}>
          <p>Web Clone made in React.js by Atlis-Ky</p>
          <button className="promo-banner-close" onClick={closePromoBanner}>
            ✕
          </button>
        </div>
      )}

      {/* Header Content */}
      <div className="header-content">
        {/* Logo Section */}
        <Link to="/" className="logo-container">
          <img
            src="https://inspected.co.uk/cdn/shop/files/inspected-classic-logo-400-x-200-_web_410x.png"
            alt="Inspected"
          />
        </Link>

        {/* Navigation Menu */}
        <ul className="nav-menu">
          <li>
            <Link to="/">Store</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="/journal">Journal</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="header-right">
          {/* Currency Dropdown */}
          <div className="currency-dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
              {selectedCurrency} <span>▼</span>
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#" onClick={() => selectCurrency("USD")}>
                    USD
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => selectCurrency("AUD")}>
                    AUD
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => selectCurrency("GBP")}>
                    GBP
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => selectCurrency("EUR")}>
                    EUR
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => selectCurrency("JPY")}>
                    JPY
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Login and Cart */}
          <div className="icon-user" onClick={handleLoginClick}>
            <i className="fas fa-user"></i> {loggedInUser || "Login"}
          </div>
          <Link to="/cart" className="icon-cart">
            <i className="fas fa-shopping-cart"></i> <span>{cartCount}</span>
          </Link>
        </div>
      </div>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              Exit
            </button>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                placeholder="Make up a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Make up a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
