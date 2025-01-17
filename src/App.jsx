import { useState } from 'react';
import './App.css';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

function App() {
  // useState for the currency symbol
  const [selectedCurrency, setSelectedCurrency] = useState("GBP");

  // Function to update the selected currency
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <>
      
      <Header onCurrencyChange={handleCurrencyChange} />

      {/* spits out the right currency to product list component at last :) */}
      <ProductList currency={selectedCurrency} />

      <Footer />
    </>
  );
}

export default App;