import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/currency";
import CartItem from "../../components/CartItem";
import "./CartPage.css";

const CartPage = ({ currency = "GBP" }) => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartSubtotal,
  } = useCart();

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
                  currency={currency}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
              <button className="clear-cart-button" onClick={clearCart}>
                CLEAR CART
              </button>
            </div>

            {/* Cart Summary */}
            <div className="cart-summary">
              <div className="cart-subtotal">
                <span className="subtotal-label">Subtotal:</span>
                <span className="subtotal-amount">
                  {formatPrice(subtotal, currency)}
                </span>
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
