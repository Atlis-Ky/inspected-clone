import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../src/context/CartContext";
import "./GhostHeader.css";

const GhostHeader = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
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
      <Link to="/cart" className="ghost-cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span>{cartCount}</span>
      </Link>
    </div>
  );
};

export default GhostHeader;
