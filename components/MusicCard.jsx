import { useState } from "react";
import { formatPrice } from "../src/utils/currency";
import "./MusicCard.css";

const MusicCard = ({ image, name, price, currency, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

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
          <div className="music-price">{formatPrice(price, currency)}</div>
        </>
      )}
    </div>
  );
};

export default MusicCard;
