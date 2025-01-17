import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "../components/Header";
import GhostHeader from "../components/GhostHeader";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";


function App() {
  // useState for the currency symbol
  const [selectedCurrency, setSelectedCurrency] = useState("GBP");
  const [showGhostHeader, setShowGhostHeader] = useState(false);
  const headerRef = useRef(null);

  // Function to update the selected currency
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

    // effect hook that tracks Header visibility, uses int observer for some cool async monitoring to choose when to render, will take a while to figure out fully but pretty sick!
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setShowGhostHeader(!entry.isIntersecting),
        { threshold: 0.1 }
      );
  
      if (headerRef.current) observer.observe(headerRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <>
        <div ref={headerRef}>
          <Header onCurrencyChange={handleCurrencyChange} />
        </div>
        {showGhostHeader && <GhostHeader />}
        <ProductList currency={selectedCurrency} />
        <Footer />
      </>
    );
  }
  

export default App;