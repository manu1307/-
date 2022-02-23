import Map from "../components/Map.js";
import Price from "../components/Price.js";
import { useEffect, useState } from "react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Bitcoin() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [imageClass, setImageClass] = useState();
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = (e) => {
    setImageClass(e.target.className);
    setMouseOver(!mouseOver);
    e.target.className = `${imageClass} ${mouseOver}`;
  };
  const handleMouseOut = (e) => {
    setMouseOver(!mouseOver);
    e.target.className = `${imageClass}`;
  };
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
            return (
              <div
                className="slideImages"
                key={imageNumber}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseOut}
              >
                <Image
                  src={`/image/${imageNumber}.jpg`}
                  alt="Random Picture"
                  width={500}
                  height={300}
                />
              </div>
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
          .container {
            display: flex;
          }
          .slideImages {
            cursor: pointer;
          }
          .slideImages:hover {
            transform: scale(1.2);
            transition: transform 0.5s;
            transition-delay: 0.2s;
          }
        `}
      </style>
    </div>
  );
}
