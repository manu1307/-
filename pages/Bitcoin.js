import { useEffect, useState } from "react";
import Card from "../components/Board/Card";
import ImageAccordian from "../components/Board/Accordian/ImageAccordian";

export default function Bitcoin() {
  // fetch("https://yh-finance.p.rapidapi.com/market/v2/get-summary?region=US", {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "yh-finance.p.rapidapi.com",
  //     "x-rapidapi-key": {process.env.X-RAPIDAPI-KEY},
  //   },
  // })
  //   .then((response) => {
  //     console.log(response.json());
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });

  const [windowSize, setWindowSize] = useState(null);
  useEffect(() => {
    setWindowSize(window.innerWidth);
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  console.log(windowSize);

  const cardNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="wrapper">
      <div className="board-top">
        <div>Coin Map</div>
        <div>current Market</div>
      </div>
      <div className="board-middle">
        <h2>Trending Board</h2>
        <div className="container">
          <ImageAccordian />
        </div>
      </div>
      <div className="board-bottom">
        <h2>Board</h2>
        <div className="board-card">
          {cardNum.map((num) => {
            return <Card key={num} id={num} />;
          })}
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            width: 1280px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
          }
          .board-top {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 1rem 0;
          }
          .board-top div {
            margin-top: 2rem;
            width: 400px;
            height: 250px;
            background-color: yellow;
          }
          .container {
            height: 400px;
          }
          h2 {
            padding: 0.2rem 0.8rem;
          }
          .board-card {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }
          @media (max-width: 1280px) {
            .wrapper {
              width: 90%;
            }
            .board-top div {
              width: 300px;
              height: 200px;
            }
          }
        `}
      </style>
    </div>
  );
}
