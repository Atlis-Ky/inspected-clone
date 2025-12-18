// Currency conversion rates (base currency is GBP)
export const currencyRates = {
  GBP: { rate: 1, symbol: "£" },
  USD: { rate: 1.3, symbol: "$" },
  EUR: { rate: 1.15, symbol: "€" },
  JPY: { rate: 200, symbol: "¥" },
  AUD: { rate: 2, symbol: "A$" },
};

// Convert price from GBP to selected currency
export const convertPrice = (priceInGBP, currency) => {
  const rate = currencyRates[currency]?.rate || 1;
  return (parseFloat(priceInGBP) * rate).toFixed(2);
};

// Get currency symbol
export const getCurrencySymbol = (currency) => {
  return currencyRates[currency]?.symbol || "£";
};

// Format price with currency symbol
export const formatPrice = (priceInGBP, currency) => {
  const convertedPrice = convertPrice(priceInGBP, currency);
  const symbol = getCurrencySymbol(currency);

  // For JPY, don't show decimal places (yen doesn't use decimals)
  if (currency === "JPY") {
    return `${symbol}${Math.round(parseFloat(convertedPrice))}`;
  }

  return `${symbol}${convertedPrice}`;
};
