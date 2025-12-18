import { formatPrice } from "../src/utils/currency";
import "./CartItem.css";

const CartItem = ({ item, currency = "GBP", onUpdateQuantity, onRemove }) => {
  const handleDecrease = () => {
    onUpdateQuantity(item.id, item.quantity - 1);
  };

  const handleIncrease = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="cart-item">
      {/* Product Image */}
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>

      {/* Product Details */}
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">{formatPrice(item.price, currency)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="cart-item-quantity">
        <button
          className="quantity-btn decrease"
          onClick={handleDecrease}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="quantity-display">{item.quantity}</span>
        <button
          className="quantity-btn increase"
          onClick={handleIncrease}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Item Total */}
      <div className="cart-item-total">
        <p>{formatPrice(item.price * item.quantity, currency)}</p>
      </div>

      {/* Remove Button */}
      <button
        className="cart-item-remove"
        onClick={handleRemove}
        aria-label="Remove item"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
