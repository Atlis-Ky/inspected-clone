import JournalList from "../../components/JournalList";
import "./JournalPage.css";

const JournalPage = () => {
  return (
    <div className="journal-page">
      <h1 className="journal-page-title">JOURNAL</h1>
      <JournalList />
    </div>
  );
};

export default JournalPage;
