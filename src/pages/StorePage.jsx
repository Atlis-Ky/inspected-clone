import React from "react";
import ProductList from "../../components/ProductList";

const StorePage = ({ currency }) => {
  return (
    <div className="store-page">
      <ProductList currency={currency} />
    </div>
  );
};

export default StorePage;
