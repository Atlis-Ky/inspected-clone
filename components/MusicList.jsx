import { useState, useEffect } from "react";
import { useCart } from "../src/context/CartContext";
import { supabase } from "../src/lib/supabase";
import MusicCard from "./MusicCard";
import "./MusicCard.css";

const MusicList = ({ currency }) => {
  const { addToCart } = useCart();
  const [musicItems, setMusicItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = async () => {
    try {
      const { data, error } = await supabase
        .from("music")
        .select("*")
        .order("id");

      if (error) throw error;

      // Transform data to match existing component structure
      const transformedMusic = data.map((item) => ({
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price.toString(),
      }));

      setMusicItems(transformedMusic);
    } catch (error) {
      console.error("Error fetching music:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className="music-list"
        style={{ textAlign: "center", padding: "40px" }}
      >
        Loading music...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="music-list"
        style={{ textAlign: "center", padding: "40px", color: "#e74c3c" }}
      >
        Error loading music: {error}
      </div>
    );
  }

  return (
    <div className="music-list">
      {musicItems.map((item) => (
        <MusicCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          currency={currency}
          onAddToCart={() =>
            addToCart({
              id: item.id,
              name: item.name,
              price: parseFloat(item.price),
              image: item.image,
            })
          }
        />
      ))}
    </div>
  );
};

export default MusicList;
