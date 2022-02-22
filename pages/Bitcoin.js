import Map from "../components/Map.js";
import Price from "../components/Price.js";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Bitcoin() {
  const [pictures, setPictures] = useState([]);
  const [items, setItems] = useState([]);
  const pictureData = () => {
    let finals = [];
    const count = 8; // Considering 5 numbers
    const max = 30;
    for (let i = 0; i < max; i++) {
      const rand = Math.round(1000 + Math.random() * max);
      !finals.includes(rand) && finals.push(rand);
    }
    setPictures(finals.slice(0, count));

    setItems(
      pictures.map((id) => {
        return (
          <img
            key={id.index}
            src={`https://picsum.photos/id/${id}/300/200`}
            onDragStart={handleDragStart}
            role="presentation"
          />
        );
      })
    );
  };
  useEffect(() => {
    pictureData();
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  return (
    <div className="board">
      <div className="board-top">
        <Map />
        <Price />
      </div>
      <div className="board-bottom">
        <h1>Board Name</h1>
        <AliceCarousel mouseTracking items={items} />
      </div>

      <style jsx>
        {`
          .board {
            width: 70%;
            margin: 0 auto;
          }
          .board-top {
            display: flex;
            justify-content: space-around;
          }
          .carousel {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(25%, auto));
          }
          img:hover {
            transform: scale(1.2);
            transition: transform 0.5s;
            transition-delay: 0.2s;
          }
        `}
      </style>
    </div>
  );
}
