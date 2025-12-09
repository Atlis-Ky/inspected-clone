import React from "react";
import ProductList from "../../components/ProductList";

const StorePage = ({ currency, incrementCart }) => {
  return (
    <div className="store-page">
      <ProductList currency={currency} incrementCart={incrementCart} />
    </div>
  );
};

export default StorePage;
