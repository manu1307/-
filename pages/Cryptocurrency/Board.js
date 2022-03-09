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

  const cardNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const stockName = [
    "삼성전자",
    "LG에너지솔루션",
    "SK하이닉스",
    "NAVER",
    "삼성바이오로직스",
    "카카오",
    "LG화학",
    "현대차",
    "삼성SDI",
    "기아",
    "POSCO",
    "현대모비스",
  ];
  const contextSet = [
    "러시아서 철수한 애플…1위 삼성전자 압박할까",
    "'LG엔솔 쏠림'에 짓눌린 배터리주, 미국發 훈풍에 살아나나",
    "외국인이 삼성전자 팔고 SK하이닉스 쓸어담는 이유",
    "네이버 vs 카카오…라방 해외시장서 격돌",
    "삼성에피스 완전히 품은 삼바… 年매출 3조 시대 연다",
    "매출 120배 폭풍성장한 카카오 '비밀병기'…'오딘'도 제쳤다",
    "물 탄 개미들 어쩌나…LG화학 장중 4%↓, 52주 신저가 또 경신",
    "현대차, 3월 러 생산 반토막…유연탄값 하루새 45% 폭등",
    "삼성SDI, 3월 17일 정기 주총…최윤호 사장 신규 선임",
    "기아, 목표시총 100조…PBV사업에 기대",
    "포스코, 14조 투자 '100년 철강기업' 다진다",
    "현대모비스, 지난해 첨단 車램프 글로벌 수주 1조원 달성",
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
