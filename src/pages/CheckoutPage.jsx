import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const { cartItems, getCartSubtotal } = useCart();

  // Form state
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("United Kingdom");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [discountError, setDiscountError] = useState("");

  // Modal state
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});

  const subtotal = getCartSubtotal();

  // Discount codes configuration
  const discountCodes = {
    DISCOUNT10: { type: "percentage", value: 10 },
    DISCOUNT20: { type: "percentage", value: 20 },
    JOBOFFER: { type: "percentage", value: 15 },
    SAVE5: { type: "fixed", value: 5 },
    SAVE10: { type: "fixed", value: 10 },
  };

  // Calculate shipping
  const getShippingCost = () => {
    if (subtotal >= 100) return 0; // Free shipping over £100
    if (shippingMethod === "standard") return 2.99;
    if (shippingMethod === "firstClass") return 4.99;
    return 2.99;
  };

  const shippingCost = getShippingCost();
  const subtotalAfterDiscount = Math.max(0, subtotal - discountAmount);
  const total = subtotalAfterDiscount + shippingCost;

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Valid email is required";
    }
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!address.trim()) newErrors.address = "Address is required";
    if (!city.trim()) newErrors.city = "City is required";
    if (!postalCode.trim()) newErrors.postalCode = "Postal code is required";
    if (!country.trim()) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle discount code
  const applyDiscount = () => {
    const code = discountCode.trim().toUpperCase();

    if (!code) {
      setDiscountError("Please enter a discount code");
      return;
    }

    const discount = discountCodes[code];

    if (discount) {
      let amount = 0;

      if (discount.type === "percentage") {
        amount = (subtotal * discount.value) / 100;
      } else if (discount.type === "fixed") {
        amount = discount.value;
      }

      setDiscountAmount(amount);
      setDiscountApplied(true);
      setDiscountError("");
    } else {
      setDiscountError("Invalid discount code");
      setDiscountApplied(false);
      setDiscountAmount(0);
    }
  };

  // Handle payment
  const handlePayNow = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowConfirmation(true);
    }
  };

  // Close confirmation modal
  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <h1>Checkout</h1>
          <p>Your cart is empty. Please add items before checking out.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-content">
          {/* Left Column - Forms */}
          <div className="checkout-forms">
            <h1 className="checkout-title">Checkout</h1>

            <form onSubmit={handlePayNow}>
              {/* Contact Information */}
              <section className="checkout-section">
                <h2 className="section-title">Contact Information</h2>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
              </section>

              {/* Delivery Address */}
              <section className="checkout-section">
                <h2 className="section-title">Delivery Address</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={errors.firstName ? "error" : ""}
                    />
                    {errors.firstName && (
                      <span className="error-message">{errors.firstName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={errors.lastName ? "error" : ""}
                    />
                    {errors.lastName && (
                      <span className="error-message">{errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={errors.address ? "error" : ""}
                  />
                  {errors.address && (
                    <span className="error-message">{errors.address}</span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={errors.city ? "error" : ""}
                    />
                    {errors.city && (
                      <span className="error-message">{errors.city}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      type="text"
                      id="postalCode"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className={errors.postalCode ? "error" : ""}
                    />
                    {errors.postalCode && (
                      <span className="error-message">{errors.postalCode}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className={errors.country ? "error" : ""}
                  >
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                  </select>
                  {errors.country && (
                    <span className="error-message">{errors.country}</span>
                  )}
                </div>
              </section>

              {/* Shipping Method */}
              <section className="checkout-section">
                <h2 className="section-title">Shipping Method</h2>

                {subtotal >= 100 && (
                  <div className="free-shipping-notice">
                    FREE SHIPPING available for this basket!
                  </div>
                )}

                <div className="shipping-options">
                  <label className="shipping-option">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={shippingMethod === "standard"}
                      onChange={(e) => setShippingMethod(e.target.value)}
                    />
                    <span className="shipping-details">
                      <span className="shipping-name">Standard Shipping</span>
                      <span className="shipping-price">
                        {subtotal >= 100 ? "FREE" : "£2.99"}
                      </span>
                    </span>
                  </label>

                  <label className="shipping-option">
                    <input
                      type="radio"
                      name="shipping"
                      value="firstClass"
                      checked={shippingMethod === "firstClass"}
                      onChange={(e) => setShippingMethod(e.target.value)}
                    />
                    <span className="shipping-details">
                      <span className="shipping-name">
                        First Class Shipping
                      </span>
                      <span className="shipping-price">
                        {subtotal >= 100 ? "FREE" : "£4.99"}
                      </span>
                    </span>
                  </label>
                </div>
              </section>

              {/* Pay Now Button */}
              <button type="submit" className="pay-now-button">
                PAY NOW
              </button>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="order-summary">
            <h2 className="summary-title">Order Summary</h2>

            {/* Cart Items */}
            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="summary-item-image"
                  />
                  <div className="summary-item-details">
                    <p className="summary-item-name">{item.name}</p>
                    <p className="summary-item-quantity">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="summary-item-price">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Discount Code */}
            <div className="discount-section">
              <input
                type="text"
                placeholder="Discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="discount-input"
              />
              <button
                type="button"
                onClick={applyDiscount}
                className="apply-button"
              >
                Apply
              </button>
            </div>

            {discountError && (
              <div className="discount-error">{discountError}</div>
            )}

            {discountApplied && (
              <div className="discount-applied">
                Discount code "{discountCode.toUpperCase()}" applied!
              </div>
            )}

            {/* Totals */}
            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              {discountApplied && discountAmount > 0 && (
                <div className="summary-row discount-row">
                  <span>Discount</span>
                  <span>-£{discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="summary-row">
                <span>Shipping</span>
                <span>
                  {shippingCost === 0 ? "FREE" : `£${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>£{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      {showConfirmation && (
        <div
          className="confirmation-modal-backdrop"
          onClick={closeConfirmation}
        >
          <div
            className="confirmation-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeConfirmation}>
              ✕
            </button>
            <div className="confirmation-icon">✓</div>
            <h2>Order Confirmed!</h2>
            <p>Thank you for your order.</p>
            <p className="order-details">
              A confirmation email has been sent to <strong>{email}</strong>
            </p>
            <p className="order-total">Total: £{total.toFixed(2)}</p>
            <button className="continue-button" onClick={closeConfirmation}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
