import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "../components/Header";
import GhostHeader from "../components/GhostHeader";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

function App() {
  // useState for the currency symbol
  const [selectedCurrency, setSelectedCurrency] = useState("GBP");

  // useState for the visibility of the GhostHeader
  const [showGhostHeader, setShowGhostHeader] = useState(false);

  // ref to track the Header element for the IntersectionObserver
  const headerRef = useRef(null);

  // another useState for cart counter on button clicks
  const [cartCount, setCartCount] = useState(0); 

  // Function to increment cart count
  const incrementCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  // Function to update the selected currency
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  // Effect hook that tracks Header visibility, uses IntersectionObserver for some cool async monitoring to choose when to render, will take a while to figure out fully but pretty sick!
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowGhostHeader(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // MAIN RENDER BLOCK 
  return (
    <>
      <div ref={headerRef}>
        {/* Pass cartCount and handleCurrencyChange to the Header */}
        <Header onCurrencyChange={handleCurrencyChange} cartCount={cartCount} />
      </div>
      {/* Conditionally render GhostHeader with cartCount */}
      {showGhostHeader && <GhostHeader cartCount={cartCount} />}
      {/* Pass currency and incrementCart to the ProductList */}
      <ProductList currency={selectedCurrency} incrementCart={incrementCart} />
      <Footer />
    </>
  );
}

export default App;