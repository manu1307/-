import Card from "../components/Board/Card";
import ImageSection from "../components/Board/ImageSection";

export default function Bitcoin() {
  // fetch("https://yh-finance.p.rapidapi.com/market/v2/get-summary?region=US", {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "yh-finance.p.rapidapi.com",
  //     "x-rapidapi-key": "a822f67825mshc6796f51d76222fp17eb0cjsn89f6db84fa78",
  //   },
  // })
  //   .then((response) => {
  //     console.log(response.json());
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  const imageNum = [1, 2, 3];
  const cardNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="wrapper">
      <div className="board-top">
        <div>Coin Map</div>
        <div>current Market</div>
      </div>
      <div className="board-middle">
        <h2>Trending Board</h2>
        <div className="container">
          {imageNum.map((num) => {
            return <ImageSection key={num} imageNumber={num} />;
          })}
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
            justify-content: space-around;
            margin: 3rem 0;
          }
          .board-top div {
            width: 30%;
            height: 250px;
            background-color: yellow;
          }
          h2 {
            padding: 0.2rem 0.8rem;
          }
          .container {
            display: flex;
            flex-wrap: wrap;
          }
          .board-card {
            display: flex;
            flex-wrap: wrap;
          }
          @media (max-width: 1280px) {
            .wrapper {
              width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
}
