import { useState, useEffect } from "react";
import { useCart } from "../src/context/CartContext";
import { supabase } from "../src/lib/supabase";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

const ProductList = ({ currency }) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id");

      if (error) throw error;

      // Transform data to match existing component structure
      const transformedProducts = data.map((product) => ({
        id: product.id,
        primaryImage: product.primary_image,
        secondaryImage: product.secondary_image,
        name: product.name,
        price: parseFloat(product.price).toFixed(2),
      }));

      setProducts(transformedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className="product-list"
        style={{ textAlign: "center", padding: "40px" }}
      >
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="product-list"
        style={{ textAlign: "center", padding: "40px", color: "#e74c3c" }}
      >
        Error loading products: {error}
      </div>
    );
  }

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
          onAddToCart={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: parseFloat(product.price),
              image: product.primaryImage,
            })
          }
        />
      ))}
    </div>
  );
};

export default ProductList;
