import React from "react";
import "./GhostHeader.css";

const GhostHeader = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="ghost-header">
      <div className="ghost-logo-container" onClick={scrollToTop}>
        <img
          src="https://inspected.co.uk/cdn/shop/files/inspected-classic-logo-400-x-200-_web_410x.png"
          alt="Inspected"
        />
      </div>
      <ul className="ghost-nav-menu">
        <li>
          <a>Store</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Journal</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <a href="/cart" className="ghost-cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span>0</span>
      </a>
    </div>
  );
};

export default GhostHeader;
