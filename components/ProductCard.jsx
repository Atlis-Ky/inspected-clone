import { useState, useEffect } from "react";
import { formatPrice } from "../src/utils/currency";
import "./ProductCard.css";

const ProductCard = ({
  primaryImage,
  secondaryImage,
  name,
  price,
  currency,
  onAddToCart,
}) => {
  const [currentImage, setCurrentImage] = useState(primaryImage);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (isHovered) {
      setCurrentImage(secondaryImage);

      interval = setInterval(() => {
        setCurrentImage((prevImage) =>
          prevImage === primaryImage ? secondaryImage : primaryImage
        );
      }, 3000);
    } else {
      setCurrentImage(primaryImage);
    }

    return () => {
      clearInterval(interval); // Clear interval when hover ends or component unmounts
    };
  }, [isHovered, primaryImage, secondaryImage]);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <img src={currentImage} alt={name} className="product-img" />
      </div>
      {/* Conditionally render Add to Cart or Name/Price */}
      {isHovered ? (
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          ADD TO CART
        </button>
      ) : (
        <>
          <div className="product-name">{name}</div>
          <div className="product-price">{formatPrice(price, currency)}</div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
