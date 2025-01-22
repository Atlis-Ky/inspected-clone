import React from "react";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

const ProductList = ({ currency, incrementCart }) => {
  const products = [
    {
      id: 1,
      primaryImage: "/assets/Marble-Hoodie-1.jpg",
      secondaryImage: "/assets/Marble-Hoodie-2.jpg",
      name: "MARBLE HOODIE - BLACK",
      price: "75.00",
    },
    {
      id: 2,
      primaryImage: "/assets/Marble-Tee-1.jpg",
      secondaryImage: "/assets/Marble-Tee-2.jpg",
      name: "MARBLE TEE - BLACK",
      price: "40.00",
    },
    {
      id: 3,
      primaryImage: "/assets/Marble-Joggers-1.jpg",
      secondaryImage: "/assets/Marble-Joggers-2.jpg",
      name: "MARBLE JOGGERS - BLACK",
      price: "65.00",
    },
    {
      id: 4,
      primaryImage: "/assets/EXETEE-1.jpg",
      secondaryImage: "/assets/EXETEE-2.jpg",
      name: "EXE TEE",
      price: "40.00",
    },
    {
      id: 5,
      primaryImage: "/assets/Playstation-Tee-1.jpg",
      secondaryImage: "/assets/Playstation-Tee-2.jpg",
      name: "PLAYSTATION TEE - BLACK",
      price: "40.00",
    },
    {
      id: 6,
      primaryImage: "/assets/Playstation-Hat-1.jpg",
      secondaryImage: "/assets/Playstation-Hat-2.jpg",
      name: "PLAYSTATION HAT - BLACK",
      price: "20.00",
    },
    {
      id: 7,
      primaryImage: "/assets/Grey-Marble-Hoodie-1.jpg",
      secondaryImage: "/assets/Grey-Marble-Hoodie-2.jpg",
      name: "MARBLE HOODIE - GREY",
      price: "70.00",
    },
    {
      id: 8,
      primaryImage: "/assets/Grey-Marble-Tee-1.jpg",
      secondaryImage: "/assets/Grey-Marble-Tee-2.jpg",
      name: "MARBLE TEE - GREY",
      price: "40.00",
    },
    {
      id: 9,
      primaryImage: "/assets/Marble-Sliders-1.jpg",
      secondaryImage: "/assets/Marble-Sliders-2.jpg",
      name: "MARBLE SLIDERS",
      price: "20.00",
    },
    {
      id: 10,
      primaryImage: "/assets/Powered-By-Inspected-X-1.jpg",
      secondaryImage: "/assets/Powered-By-Inspected-X-2.jpg",
      name: "POWERED BY INSPECTED X - VINYL",
      price: "20.00",
    },
    {
      id: 11,
      primaryImage: "/assets/Sanctuary-Vinyl-1.jpg",
      secondaryImage: "/assets/Sanctuary-Vinyl-2.jpg",
      name: "KOAN SOUND - SANCTUARY - VINYL",
      price: "20.00",
    },
    {
      id: 12,
      primaryImage: "/assets/The-Ninth-Vinyl-1.jpg",
      secondaryImage: "/assets/The-Ninth-Vinyl-2.jpg",
      name: "THE NINTH - VINYL",
      price: "20.00",
    },
    {
      id: 13,
      primaryImage: "/assets/Marble-Arcade-1.jpg",
      secondaryImage: "/assets/Marble-Arcade-2.jpg",
      name: "ARCADE MACHINE - MARBLE",
      price: "2500.00",
    },
    {
      id: 14,
      primaryImage: "/assets/Marble-Campervan-1.jpg",
      secondaryImage: "/assets/Marble-Campervan-2.jpg",
      name: "VW CAMPER - MARBLE",
      price: "25000.00",
    },
    {
      id: 15,
      primaryImage: "/assets/Marble-Minirig-1.jpg",
      secondaryImage: "/assets/Marble-Minirig-2.jpg",
      name: "INSPECTED X MINIRIG 4.0 - MARBLE",
      price: "175.00",
    },
    {
      id: 16,
      primaryImage: "/assets/Marble-Sub-1.jpg",
      secondaryImage: "/assets/Marble-Sub-2.jpg",
      name: "INSPECTED X MINIRIG PORTABLE SUB - MARBLE",
      price: "150.00",
    },
    {
      id: 17,
      primaryImage: "/assets/Marble-Poster-1.jpg",
      secondaryImage: "/assets/Marble-Poster-2.jpg",
      name: "MARBLE ARTWORK PRINT - BLACK",
      price: "20.00",
    },
    {
      id: 18,
      primaryImage: "/assets/Marble-Air-1.jpg",
      secondaryImage: "/assets/Marble-Air-2.jpg",
      name: "RACING AIR FRESHENER - MARBLE",
      price: "2.00",
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          primaryImage={product.primaryImage}
          secondaryImage={product.secondaryImage}
          name={product.name}
          price={product.price}
          currency={currency} // Pass currency as a prop, should fix the switcher?
          incrementCart={incrementCart}
        />
      ))}
    </div>
  );
};

export default ProductList;