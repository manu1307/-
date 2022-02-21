import styles from "../styles/Bitcoin.module.css";
import Map from "../components/Map.js";
import Price from "../components/Price.js";
import { useState } from "react";
import Image from "next/image";

export default function Bitcoin() {
  const [pictures, setPictures] = useState([]);
  const pictureData = () => {
    fetch(`https://picsum.photos/v2/list`)
      .then((response) => {
        return response.json();
      })
      .then((picture) => {
        setPictures(picture.slice(0, 6));
      });
  };
  pictureData();
  return (
    <div className="board">
      <div className="board-top">
        <Map />
        <Price />
      </div>
      <div className="board-bottom">
        <h1>Board Name</h1>
        <div className="carousel">
          {pictures.map((picture, index) => {
            return (
              <img
                key={index}
                src={`https://picsum.photos/id/${picture.id}/300/200`}
                alt={`image`}
              />
            );
          })}
        </div>
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
            transition: transform 0.3s;
          }
        `}
      </style>
    </div>
  );
}
