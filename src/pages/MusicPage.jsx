import React from "react";
import MusicList from "../../components/MusicList";
import "./MusicPage.css";

const MusicPage = ({ currency, incrementCart }) => {
  return (
    <div className="music-page">
      <MusicList currency={currency} incrementCart={incrementCart} />
    </div>
  );
};

export default MusicPage;
