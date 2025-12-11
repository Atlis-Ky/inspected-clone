import { useCart } from "../src/context/CartContext";
import MusicCard from "./MusicCard";
import "./MusicCard.css";

const MusicList = ({ currency }) => {
  const { addToCart } = useCart();
  const musicItems = [
    {
      id: 1,
      image: "/assets/Ankou-Wayback-1.jpg",
      name: "Ankou & Tesseracts - Way Back",
      price: "1.50",
    },
    {
      id: 2,
      image: "/assets/Vorso-2082-1.jpg",
      name: "Vorso - 2082",
      price: "1.50",
    },
    {
      id: 3,
      image: "/assets/Ankou-Cosmogony-1.jpg",
      name: "Ankou - Cosmogony EP",
      price: "6.00",
    },
    {
      id: 4,
      image: "/assets/Refraq-Bloode-1.jpg",
      name: "Refraq - Bloode",
      price: "1.50",
    },
    {
      id: 5,
      image: "/assets/Eckle-Clandestine-1.jpg",
      name: "Eckle - Yoja EP",
      price: "5.00",
    },
    {
      id: 6,
      image: "/assets/Monuman-Polychloral-1.jpg",
      name: "Monuman - Polychloral EP",
      price: "6.00",
    },
    {
      id: 7,
      image: "/assets/PBI-Series1.jpg",
      name: "Powered By Inspected - Series 1 EP",
      price: "5.00",
    },
    {
      id: 8,
      image: "/assets/PBI-Series2.jpg",
      name: "Powered By Inspected - Series 2 EP",
      price: "5.00",
    },
    {
      id: 9,
      image: "/assets/PBI-Series3.jpg",
      name: "Powered By Inspected - Series 3 LP",
      price: "10.00",
    },
    {
      id: 10,
      image: "/assets/Refraq-Northlands-1.jpg",
      name: "Refraq - Northlands EP",
      price: "4.00",
    },
    {
      id: 11,
      image: "/assets/Vorso-Imperitive-1.jpg",
      name: "Vorso - The Imperative EP",
      price: "5.00",
    },
    {
      id: 12,
      image: "/assets/Vellum-Swivel-1.jpg",
      name: "Vellum - Swivel EP",
      price: "6.00",
    },
    {
      id: 13,
      image: "/assets/Emperor-Jackhammer-1.jpg",
      name: "Emperor - Jackhammer EP",
      price: "4.00",
    },
    {
      id: 14,
      image: "/assets/Scope-StrangeScience-1.jpg",
      name: "Skope - Strange Science EP",
      price: "5.00",
    },
    {
      id: 15,
      image: "/assets/TheMovemberCollection-1.jpg",
      name: "The Movember Collection",
      price: "4.00",
    },
  ];

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
