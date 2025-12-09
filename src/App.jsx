import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import GhostHeader from "../components/GhostHeader";
import Footer from "../components/Footer";
import StorePage from "./pages/StorePage";
import CartPage from "./pages/CartPage";
import MusicPage from "./pages/MusicPage";
import JournalPage from "./pages/JournalPage";
import ContactPage from "./pages/ContactPage";

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
    <Router>
      <div ref={headerRef}>
        {/* Pass cartCount and handleCurrencyChange to the Header */}
        <Header onCurrencyChange={handleCurrencyChange} cartCount={cartCount} />
      </div>
      {/* Conditionally render GhostHeader with cartCount */}
      {showGhostHeader && <GhostHeader cartCount={cartCount} />}

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <StorePage
              currency={selectedCurrency}
              incrementCart={incrementCart}
            />
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/music"
          element={
            <MusicPage
              currency={selectedCurrency}
              incrementCart={incrementCart}
            />
          }
        />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
