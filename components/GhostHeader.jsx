import React from "react";
import "./GhostHeader.css";

const GhostHeader = ({ cartCount }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

    // Event Handlers for Navigation Menu
    const handleStoreClick = () => {
      alert("You're already on the store page!");
    };
  
    const handleMusicClick = () => {
      alert("This would have taken you to an external web store link to purchase Inspected releases.");
    };
  
    const handleJournalClick = () => {
      alert("This would have taken you to an external blog for Inspected music and clothing releases.");
    };
  
    const handleContactClick = () => {
      alert("This would lead to a contact sheet to get in touch with the guys at Inspected with all of their E-mail's, but we won't actually be buying anything on this web-clone :)");
    };

  return (
    <div className="ghost-header">
      <div className="ghost-logo-container" onClick={scrollToTop}>
        <img
          src="https://inspected.co.uk/cdn/shop/files/inspected-classic-logo-400-x-200-_web_410x.png"
          alt="Inspected"
        />
      </div>
      <ul className="ghost-nav-menu">
        <li onClick={handleStoreClick}>
          <a>Store</a>
        </li>
        <li onClick={handleMusicClick}>
          <a>Music</a>
        </li>
        <li onClick={handleJournalClick}>
          <a>Journal</a>
        </li>
        <li onClick={handleContactClick}>
          <a>Contact</a>
        </li>
      </ul>
      <a href="/cart" className="ghost-cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span>{cartCount}</span>
      </a>
    </div>
  );
};

export default GhostHeader;
