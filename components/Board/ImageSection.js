import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageSection({ imageNumber }) {
  const [mouseOver, setMouseOver] = useState(false);
  const [hiddenClass, setHiddenClass] = useState("hidden");
  const handleMouseOver = (e) => {
    setMouseOver(!mouseOver);
    hiddenNameAdd(null, 250);
  };
  const handleMouseOut = (e) => {
    setMouseOver(!mouseOver);
    hiddenNameAdd("hidden", 10);
  };
  const hiddenNameAdd = (hiddenName, time) => {
    setTimeout(() => {
      setHiddenClass(hiddenName);
    }, time);
  };
  const calculateHoverTime = () => {
    let begin = new Date.getTime();
  };
  return (
    <div
      className={mouseOver ? "slideImages mouseOver" : "slideImages"}
      key={imageNumber}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <Image
        src={`/image/${imageNumber}.jpg`}
        alt="Random Picture"
        width={500}
        height={300}
      />
      <div className={mouseOver ? hiddenClass : hiddenClass}>
        <div className="small-wrapper">
          <div>Recently...</div>
          <button>Read More</button>
        </div>
      </div>
      <style jsx>
        {`
          .slideImages {
            cursor: pointer;
          }
          .mouseOver {
            z-index: 2;
          }
          .slideImages:hover {
            transform: translatey(20%) scale(1.4);
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
