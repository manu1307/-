import { useEffect, useState } from "react";
import Card from "../components/Board/Card";
import ImageAccordian from "../components/Board/ImageAccordian";
import Tab from "../components/Board/Tab";

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
  const KoreaIndexes = [{ id: "KOSPI" }, { id: "KOSDAQ" }];
  const USIndexes = [{ id: "S&P500" }, { id: "Nasdaq" }, { id: "Dow Jones" }];

  return (
    <div className="wrapper">
      <div className="board-top">
        <div className="map"></div>
        <div className="index">
          <Tab stockIndexes={KoreaIndexes}></Tab>
          <Tab stockIndexes={USIndexes}></Tab>
        </div>
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
            margin: 3rem 0;
          }
          .board-top .map {
            width: 500px;
            height: 300px;
            background: url("image/StockBoard.jpg") no-repeat;
            background-size: cover;
            border-radius: 10px;
          }
          .board-top .index {
            width: 500px;
            height: 300px;
            border-radius: 10px;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
            .board-top .map {
              margin-bottom: 20px;
            }
          }
          @media (max-width: 768px) {
            .board-middle {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
}
