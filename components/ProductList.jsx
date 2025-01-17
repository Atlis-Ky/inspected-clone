import React from "react";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

const ProductList = ({ currency }) => {
  const products = [
    {
      id: 1,
      primaryImage: "src/assets/Marble-Hoodie-1.jpg",
      secondaryImage: "src/assets/Marble-Hoodie-2.jpg",
      name: "MARBLE HOODIE - BLACK",
      price: "75.00",
    },
    {
      id: 2,
      primaryImage: "src/assets/Marble-Tee-1.jpg",
      secondaryImage: "src/assets/Marble-Tee-2.jpg",
      name: "MARBLE TEE - BLACK",
      price: "40.00",
    },
    {
      id: 3,
      primaryImage: "src/assets/Marble-Joggers-1.jpg",
      secondaryImage: "src/assets/Marble-Joggers-2.jpg",
      name: "MARBLE JOGGERS - BLACK",
      price: "65.00",
    },
    {
      id: 4,
      primaryImage: "src/assets/EXETEE-1.jpg",
      secondaryImage: "src/assets/EXETEE-2.jpg",
      name: "EXE TEE",
      price: "40.00",
    },
    {
      id: 5,
      primaryImage: "src/assets/Playstation-Tee-1.jpg",
      secondaryImage: "src/assets/Playstation-Tee-2.jpg",
      name: "PLAYSTATION TEE - BLACK",
      price: "40.00",
    },
    {
      id: 6,
      primaryImage: "src/assets/Playstation-Hat-1.jpg",
      secondaryImage: "src/assets/Playstation-Hat-2.jpg",
      name: "PLAYSTATION HAT - BLACK",
      price: "20.00",
    },
    {
      id: 7,
      primaryImage: "src/assets/Grey-Marble-Hoodie-1.jpg",
      secondaryImage: "src/assets/Grey-Marble-Hoodie-2.jpg",
      name: "MARBLE HOODIE - GREY",
      price: "70.00",
    },
    {
      id: 8,
      primaryImage: "src/assets/Grey-Marble-Tee-1.jpg",
      secondaryImage: "src/assets/Grey-Marble-Tee-2.jpg",
      name: "MARBLE TEE - GREY",
      price: "40.00",
    },
    {
      id: 9,
      primaryImage: "src/assets/Marble-Sliders-1.jpg",
      secondaryImage: "src/assets/Marble-Sliders-2.jpg",
      name: "MARBLE SLIDERS",
      price: "20.00",
    },
    {
      id: 10,
      primaryImage: "src/assets/Powered-By-Inspected-X-1.jpg",
      secondaryImage: "src/assets/Powered-By-Inspected-X-2.jpg",
      name: "POWERED BY INSPECTED X - VINYL",
      price: "20.00",
    },
    {
      id: 11,
      primaryImage: "src/assets/Sanctuary-Vinyl-1.jpg",
      secondaryImage: "src/assets/Sanctuary-Vinyl-2.jpg",
      name: "KOAN SOUND - SANCTUARY - VINYL",
      price: "20.00",
    },
    {
      id: 12,
      primaryImage: "src/assets/The-Ninth-Vinyl-1.jpg",
      secondaryImage: "src/assets/The-Ninth-Vinyl-2.jpg",
      name: "THE NINTH - VINYL",
      price: "20.00",
    },
    {
      id: 13,
      primaryImage: "src/assets/Marble-Arcade-1.jpg",
      secondaryImage: "src/assets/Marble-Arcade-2.jpg",
      name: "ARCADE MACHINE - MARBLE",
      price: "2500.00",
    },
    {
      id: 14,
      primaryImage: "src/assets/Marble-Campervan-1.jpg",
      secondaryImage: "src/assets/Marble-Campervan-2.jpg",
      name: "VW CAMPER - MARBLE",
      price: "25000.00",
    },
    {
      id: 15,
      primaryImage: "src/assets/Marble-Minirig-1.jpg",
      secondaryImage: "src/assets/Marble-Minirig-2.jpg",
      name: "INSPECTED X MINIRIG 4.0 - MARBLE",
      price: "175.00",
    },
    {
      id: 16,
      primaryImage: "src/assets/Marble-Sub-1.jpg",
      secondaryImage: "src/assets/Marble-Sub-2.jpg",
      name: "INSPECTED X MINIRIG PORTABLE SUB - MARBLE",
      price: "150.00",
    },
    {
      id: 17,
      primaryImage: "src/assets/Marble-Poster-1.jpg",
      secondaryImage: "src/assets/Marble-Poster-2.jpg",
      name: "MARBLE ARTWORK PRINT - BLACK",
      price: "20.00",
    },
    {
      id: 18,
      primaryImage: "src/assets/Marble-Air-1.jpg",
      secondaryImage: "src/assets/Marble-Air-2.jpg",
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
        />
      ))}
    </div>
  );
};

export default ProductList;