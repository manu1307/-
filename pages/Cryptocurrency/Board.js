import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "../../components/Board/Card";
import ImageAccordian from "../../components/Board/ImageAccordian";
import Tab from "../../components/Board/Tab";

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

  const cardNum = [1, 2, 3, 4];
  const stockName = ["비트코인", "이더리움", "솔라나", "바이낸스 USD"];
  const contextSet = [
    "우크라 긴장 완화에 비트코인·이더리움↑…가상화폐 관련株도 동반 상승",
    "웨이브, 경제 제재로 떠오른 '러시아 이더리움'",
    "우크라 암호화폐 기부 400억 돌파 도지코인-솔라나도 받겠다",
    "‘고래’들이 ‘스테이블코인’ 사 모으는 이유",
  ];
  const KoreaIndexes = [
    { id: "KOSPI", name: "코스피" },
    { id: "KOSDAQ", name: "코스닥" },
  ];
  const USIndexes = [
    { id: "S&P500", name: "S&P 500" },
    { id: "Nasdaq", name: "나스닥" },
    { id: "Dow", name: "다우존스" },
  ];

  return (
    <div className="wrapper">
      <div className="board-top">
        <Link href={"https://finviz.com/map.ashx"} passHref>
          <div className="map"></div>
        </Link>
        <div className="index">
          <Tab stockIndexes={KoreaIndexes}></Tab>
          <Tab stockIndexes={USIndexes}></Tab>
        </div>
      </div>
      <div className="board-middle">
        <h2>Trend Column</h2>
        <div className="container">
          <ImageAccordian />
        </div>
      </div>
      <div className="board-bottom">
        <h2>Board</h2>
        <div className="board-card">
          {cardNum.map((num, index) => {
            return (
              <Card
                key={num}
                id={num}
                title={stockName[index]}
                context={contextSet[index]}
                dataSet={[stockName, contextSet]}
              />
            );
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
            justify-content: space-between;
            margin: 3rem 1.8rem;
          }
          .board-top .map {
            cursor: pointer;
            width: 600px;
            height: 300px;
            background: url("../image/StockBoard.jpg") no-repeat;
            background-size: cover;
            border-radius: 4px;
          }
          .board-top .index {
            width: 550px;
            height: 300px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .board-middle h2 {
            text-align: left;
            padding: 0 2rem;
          }
          .board-bottom h2 {
            text-align: left;
            padding: 0 2rem;
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
            .board-top {
              justify-content: center;
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
