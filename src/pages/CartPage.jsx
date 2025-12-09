import React from "react";
import "./CartPage.css";

const CartPage = () => {
  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <p>Your cart is currently empty.</p>
        <p style={{ color: "#999", fontSize: "14px" }}>
          Cart functionality coming soon! This page will display your items,
          quantities, and totals.
        </p>
      </div>
    </div>
  );
};

export default CartPage;
