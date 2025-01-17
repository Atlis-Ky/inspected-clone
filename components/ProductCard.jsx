import React, { useState, useEffect } from "react";
import "./ProductCard.css";

const ProductCard = ({ primaryImage, secondaryImage, name, price }) => {
  const [currentImage, setCurrentImage] = useState(primaryImage);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;


    // groovy lil if statement for image alternating every 3sec
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
      <div className="product-name">{name}</div>
      <div className="product-price">£{price}</div>
    </div>
  );
};

export default ProductCard;