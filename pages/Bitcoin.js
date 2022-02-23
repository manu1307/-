import Map from "../components/Map.js";
import Price from "../components/Price.js";
import { useEffect, useState } from "react";
import ImageSection from "../components/Board/ImageSection.js";

export default function Bitcoin() {
  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="board">
      <div className="board-top">
        <Map />
        <Price />
      </div>
      <div className="board-bottom">
        <h1>Board Name</h1>
        <div className="container">
          {numbers.map((imageNumber) => {
            return <ImageSection key={imageNumber} imageNumber={imageNumber} />;
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
          .container {
            display: flex;
          }
        `}
      </style>
    </div>
  );
}
