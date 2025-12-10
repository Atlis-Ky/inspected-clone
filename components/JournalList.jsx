import React from "react";
import JournalCard from "./JournalCard";
import "./JournalCard.css";

const JournalList = () => {
  const journalArticles = [
    {
      id: 1,
      image: "/assets/Inspecting-Tesseracts.jpg",
      title: "INSPECTING: TESSERACTS",
      date: "May 28, 2024",
    },
    {
      id: 2,
      image: "/assets/journal-placeholder-2.jpg",
      title: "ARTICLE TITLE 2",
      date: "May 15, 2024",
    },
    {
      id: 3,
      image: "/assets/journal-placeholder-3.jpg",
      title: "ARTICLE TITLE 3",
      date: "April 22, 2024",
    },
    {
      id: 4,
      image: "/assets/journal-placeholder-4.jpg",
      title: "ARTICLE TITLE 4",
      date: "April 10, 2024",
    },
    {
      id: 5,
      image: "/assets/journal-placeholder-5.jpg",
      title: "ARTICLE TITLE 5",
      date: "March 30, 2024",
    },
    {
      id: 6,
      image: "/assets/journal-placeholder-6.jpg",
      title: "ARTICLE TITLE 6",
      date: "March 18, 2024",
    },
    {
      id: 7,
      image: "/assets/journal-placeholder-7.jpg",
      title: "ARTICLE TITLE 7",
      date: "March 5, 2024",
    },
    {
      id: 8,
      image: "/assets/journal-placeholder-8.jpg",
      title: "ARTICLE TITLE 8",
      date: "February 20, 2024",
    },
    {
      id: 9,
      image: "/assets/journal-placeholder-9.jpg",
      title: "ARTICLE TITLE 9",
      date: "February 8, 2024",
    },
    {
      id: 10,
      image: "/assets/journal-placeholder-10.jpg",
      title: "ARTICLE TITLE 10",
      date: "January 25, 2024",
    },
    {
      id: 11,
      image: "/assets/journal-placeholder-11.jpg",
      title: "ARTICLE TITLE 11",
      date: "January 12, 2024",
    },
    {
      id: 12,
      image: "/assets/journal-placeholder-12.jpg",
      title: "ARTICLE TITLE 12",
      date: "December 30, 2023",
    },
  ];

  return (
    <div className="journal-list">
      {journalArticles.map((article) => (
        <JournalCard
          key={article.id}
          image={article.image}
          title={article.title}
          date={article.date}
        />
      ))}
    </div>
  );
};

export default JournalList;
