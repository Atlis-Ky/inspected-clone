import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isPromoBannerVisible, setPromoBannerVisible] = useState(true);
  const [isFadingOut, setFadingOut] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closePromoBanner = () => {
    setFadingOut(true);
    setTimeout(() => {
      setPromoBannerVisible(false);
    }, 500); // Match the duration of the CSS transition
  };

  return (
    <header className="header">
      {/* Promo Banner */}
      {isPromoBannerVisible && (
        <div className={`promo-banner ${isFadingOut ? 'fade-out' : ''}`}>
          <p>Web Clone made in React.js by Atlis-Ky</p>
          <button className="promo-banner-close" onClick={closePromoBanner}>✕</button>
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
          <div
            className="currency-dropdown"
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="dropdown-button"
              onClick={toggleDropdown}
            >
              GBP <span>▼</span>
            </button>
            {isDropdownOpen && (
              <ul
                className="dropdown-menu"
                onMouseEnter={() => setDropdownOpen(true)}
              >
                <li>
                  <a href="#">USD</a>
                </li>
                <li>
                  <a href="#">CAD</a>
                </li>
                <li>
                  <a href="#">AUD</a>
                </li>
                <li>
                  <a href="#">GBP</a>
                </li>
                <li>
                  <a href="#">EUR</a>
                </li>
                <li>
                  <a href="#">JPY</a>
                </li>
              </ul>
            )}
          </div>

          {/* Login and Cart */}
          <a href="/account" className="icon-user">
            Login
          </a>
          <a href="/cart" className="icon-cart">
            <span>0</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;