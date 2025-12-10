import React, { useState } from "react";
import "./MusicCard.css";

const MusicCard = ({ image, name, price, currency, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCurrencySymbol = () => {
    if (currency === "USD") return "$";
    if (currency === "AUD") return "AU$";
    if (currency === "GBP") return "£";
    if (currency === "EUR") return "€";
    if (currency === "JPY") return "¥";
    if (currency === "CAD") return "CA$";
    return "£"; // Default to GBP
  };

  return (
    <div
      className="music-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="music-image">
        <img src={image} alt={name} className="music-img" />
      </div>
      {isHovered ? (
        <button className="add-to-cart-btn-music" onClick={onAddToCart}>
          ADD TO CART
        </button>
      ) : (
        <>
          <div className="music-name">{name}</div>
          <div className="music-price">
            {getCurrencySymbol()}
            {price}
          </div>
        </>
      )}
    </div>
  );
};

export default MusicCard;
