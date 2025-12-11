import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Header from "../components/Header";
import GhostHeader from "../components/GhostHeader";
import Footer from "../components/Footer";
import StorePage from "./pages/StorePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
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
    <CartProvider>
      <Router>
        <div ref={headerRef}>
          {/* Pass handleCurrencyChange to the Header */}
          <Header onCurrencyChange={handleCurrencyChange} />
        </div>
        {/* Conditionally render GhostHeader */}
        {showGhostHeader && <GhostHeader />}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<StorePage currency={selectedCurrency} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/music"
            element={<MusicPage currency={selectedCurrency} />}
          />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
