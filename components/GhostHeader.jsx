import React from "react";
import "./GhostHeader.css";

const GhostHeader = () => {
  return (
    <div className="ghost-header">
      <div className="ghost-logo-container">
        <img
          src="https://inspected.co.uk/cdn/shop/files/inspected-classic-logo-400-x-200-_web_410x.png"
          alt="Inspected"
        />
      </div>
      <ul className="ghost-nav-menu">
        <li><a href="/collections/all">Store</a></li>
        <li><a href="/collections/music">Music</a></li>
        <li><a href="/blogs/journal">Journal</a></li>
        <li><a href="/pages/contact">Contact</a></li>
      </ul>
      <a href="/cart" className="ghost-cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span>0</span>
      </a>
    </div>
  );
};

export default GhostHeader;