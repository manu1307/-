import Image from "next/image";
import { useEffect, useState } from "react";

export default function MImageSecion() {
  const [mouseOver, setMouseOver] = useState(false);
  const [hiddenClass, setHiddenClass] = useState("hidden");
  const handleMouseOver = (e) => {
    setMouseOver(true);
    hiddenNameAdd(null, 200);
    setTimeout(() => {
      if (mouseOver) {
      }
    }, 150);
  };
  const handleMouseOut = (e) => {
    setMouseOver(false);
    hiddenNameAdd("hidden", 10);
  };
  const hiddenNameAdd = (hiddenName, time) => {
    setTimeout(() => {
      setHiddenClass(hiddenName);
    }, time);
  };

  return (
    <div
      className={mouseOver ? "slideImages mouseOver" : "slideImages"}
      key={imageNumber}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <div className="container">
        <Image
          src={`/image/${imageNumber}.jpg`}
          alt="Random Picture"
          width={350}
          height={200}
        />
      </div>
      <div className={mouseOver ? hiddenClass : hiddenClass}>
        <div className="small-wrapper">
          <div>Short Title</div>
          <button>Read More</button>
        </div>
      </div>
      <style jsx>
        {`
          .slideImages {
            cursor: pointer;
            margin: 0 auto 30px;
            border-radius: 10px;
          }
          .mouseOver {
            z-index: 2;
          }
          .slideImages:hover {
            transform: translatey(10%) scale(1.2);
            transition: transform 0.3s;
            transition-delay: 0.2s;
          }
          .mouseOver {
            background-color: #e3e3e3;
            border-radius: 5px;
          }
          .hidden {
            display: none;
          }
          .small-wrapper {
            padding: 5%;
          }
        `}
      </style>
    </div>
  );
}
