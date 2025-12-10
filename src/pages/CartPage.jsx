import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../../components/CartItem";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartSubtotal } =
    useCart();

  const subtotal = getCartSubtotal();

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">SHOPPING CART</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>There are no items in your cart.</p>
            <Link to="/" className="continue-shopping-link">
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            {/* Cart Summary */}
            <div className="cart-summary">
              <div className="cart-subtotal">
                <span className="subtotal-label">Subtotal:</span>
                <span className="subtotal-amount">£{subtotal.toFixed(2)}</span>
              </div>

              <p className="cart-note">
                Taxes and shipping calculated at checkout
              </p>

              <Link to="/checkout" className="checkout-button">
                CHECKOUT
              </Link>

              <Link to="/" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
