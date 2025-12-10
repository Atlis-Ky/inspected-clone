import React from "react";
import "./JournalCard.css";

const JournalCard = ({ image, title, date, onClick }) => {
  return (
    <div className="journal-card" onClick={onClick}>
      <div className="journal-image">
        <img src={image} alt={title} className="journal-img" />
      </div>
      <div className="journal-title">{title}</div>
      <div className="journal-date">{date}</div>
    </div>
  );
};

export default JournalCard;
