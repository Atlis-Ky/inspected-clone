import React, { useState } from "react";
import "./Header.css";

const Header = ({ onCurrencyChange }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isPromoBannerVisible, setPromoBannerVisible] = useState(true);
  const [isFadingOut, setFadingOut] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("GBP");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closePromoBanner = () => {
    setFadingOut(true);
    setTimeout(() => {
      setPromoBannerVisible(false);
    }, 500); // Match the duration of the CSS transition
  };

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency);
    setDropdownOpen(false);
    onCurrencyChange(currency); // Notify parent component of the currency change
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
        <div className="logo-container">
          <img
            src="https://inspected.co.uk/cdn/shop/files/inspected-classic-logo-400-x-200-_web_410x.png"
            alt="Inspected"
          />
        </div>

        {/* Navigation Menu */}
        <ul className="nav-menu">
          <li>
            <a href="/collections/all">Store</a>
          </li>
          <li>
            <a href="/collections/music">Music</a>
          </li>
          <li>
            <a href="/blogs/journal">Journal</a>
          </li>
          <li>
            <a href="/pages/contact">Contact</a>
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
          <a href="/account" className="icon-user">
            <i className="fas fa-user"></i> Login
          </a>
          <a href="/cart" className="icon-cart">
            <i className="fas fa-shopping-cart"></i> <span>0</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;