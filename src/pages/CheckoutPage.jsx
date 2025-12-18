import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice, getCurrencySymbol } from "../utils/currency";
import "./CheckoutPage.css";

const CheckoutPage = ({ currency = "GBP" }) => {
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

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Modal state
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPayPalModal, setShowPayPalModal] = useState(false);
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

    // Validate payment for card method
    if (paymentMethod === "card") {
      if (!cardNumber.trim() || cardNumber.replace(/\s/g, "").length !== 16) {
        newErrors.cardNumber = "Valid 16-digit card number is required";
      }
      if (!cardName.trim()) newErrors.cardName = "Cardholder name is required";
      if (
        !expiryDate.trim() ||
        !/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiryDate)
      ) {
        newErrors.expiryDate = "Valid expiry date (MM/YY) is required";
      }
      if (!cvv.trim() || !/^[0-9]{3,4}$/.test(cvv)) {
        newErrors.cvv = "Valid CVV is required";
      }
    }

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
      if (paymentMethod === "paypal") {
        setShowPayPalModal(true);
      } else {
        setShowConfirmation(true);
      }
    }
  };

  // Close confirmation modal
  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  const closePayPalModal = () => {
    setShowPayPalModal(false);
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
                <h2 className="section-title">Contact</h2>
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

              {/* Payment Method */}
              <section className="checkout-section">
                <h2 className="section-title">Payment Method</h2>

                <div className="payment-methods">
                  <label className="payment-method-option">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="payment-label">Credit/Debit Card</span>
                  </label>

                  <label className="payment-method-option">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="payment-label">PayPal</span>
                  </label>
                </div>

                {/* Card Details Form */}
                {paymentMethod === "card" && (
                  <div className="card-details">
                    <div className="form-group">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\s/g, "");
                          if (/^\d{0,16}$/.test(value)) {
                            const formatted =
                              value.match(/.{1,4}/g)?.join(" ") || value;
                            setCardNumber(formatted);
                          }
                        }}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        className={errors.cardNumber ? "error" : ""}
                      />
                      {errors.cardNumber && (
                        <span className="error-message">
                          {errors.cardNumber}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="cardName">Cardholder Name</label>
                      <input
                        type="text"
                        id="cardName"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="John Smith"
                        className={errors.cardName ? "error" : ""}
                      />
                      {errors.cardName && (
                        <span className="error-message">{errors.cardName}</span>
                      )}
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <input
                          type="text"
                          id="expiryDate"
                          value={expiryDate}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, "");
                            if (value.length >= 2) {
                              value =
                                value.slice(0, 2) + "/" + value.slice(2, 4);
                            }
                            setExpiryDate(value);
                          }}
                          placeholder="MM/YY"
                          maxLength="5"
                          className={errors.expiryDate ? "error" : ""}
                        />
                        {errors.expiryDate && (
                          <span className="error-message">
                            {errors.expiryDate}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          value={cvv}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, "");
                            if (value.length <= 4) setCvv(value);
                          }}
                          placeholder="123"
                          maxLength="4"
                          className={errors.cvv ? "error" : ""}
                        />
                        {errors.cvv && (
                          <span className="error-message">{errors.cvv}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* PayPal Message */}
                {paymentMethod === "paypal" && (
                  <div className="paypal-message">
                    <p>
                      You will be redirected to PayPal to complete your purchase
                      securely.
                    </p>
                  </div>
                )}
              </section>

              {/* Pay Now Button */}
              <button type="submit" className="pay-now-button">
                {paymentMethod === "paypal" ? "CONTINUE TO PAYPAL" : "PAY NOW"}
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
                    {formatPrice(item.price * item.quantity, currency)}
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
                <span>{formatPrice(subtotal, currency)}</span>
              </div>
              {discountApplied && discountAmount > 0 && (
                <div className="summary-row discount-row">
                  <span>Discount</span>
                  <span>-{formatPrice(discountAmount, currency)}</span>
                </div>
              )}
              <div className="summary-row">
                <span>Shipping</span>
                <span>
                  {shippingCost === 0
                    ? "FREE"
                    : formatPrice(shippingCost, currency)}
                </span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>{formatPrice(total, currency)}</span>
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
            <p className="order-total">Total: {formatPrice(total, currency)}</p>
            <button className="continue-button" onClick={closeConfirmation}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* PayPal Modal */}
      {showPayPalModal && (
        <div className="confirmation-modal-backdrop" onClick={closePayPalModal}>
          <div
            className="confirmation-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closePayPalModal}>
              ✕
            </button>
            <div className="confirmation-icon">ℹ️</div>
            <h2>Thank You!</h2>
            <p>Thank you for completing your purchase.</p>
            <p className="order-details">
              In a real store, we would redirect you to PayPal to complete your
              payment. However, as this is a portfolio piece, we'll keep you
              here on this site!
            </p>
            <p className="order-total">
              Order Total: {formatPrice(total, currency)}
            </p>
            <button className="continue-button" onClick={closePayPalModal}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
