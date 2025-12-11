import MusicList from "../../components/MusicList";
import "./MusicPage.css";

const MusicPage = ({ currency }) => {
  return (
    <div className="music-page">
      <MusicList currency={currency} />
    </div>
  );
};

export default MusicPage;
