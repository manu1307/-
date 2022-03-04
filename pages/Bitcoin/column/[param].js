import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ColumnLink = () => {
  const titlePackage = [
    "Jobless claims preview: Another 225,000 Americans likely filed new claims last week",
    "Stock market news live updates: Stocks rise, oil prices soar as investors eye Russia's war, Powell's testimony",
    "Stock market news live updates: Stock futures steady after rally",
    "Stock Market Tries To Steady Itself As Oil Tops $100 Again; These Mining Stocks Rally",
  ];
  const textPackage = [
    "At 225,000, the expected number of new jobless claims would mark a back-to-back week of declines. Jobless claims rose to nearly 300,000 in mid-January, reflecting some momentary backsliding in the labor market's improvements as Omicron virus cases surged to a record and seasonal adjustments in data became choppy due to the pandemic over the past two years. Still, claims have fallen precipitously compared to this time last year, with new claims coming in around 750,000 in late February 2021.",
    "Amid the ongoing geopolitical concerns, energy prices climbed, and West Texas intermediate crude oil prices rocketed further above $100 per barrel to top $112 and reach the highest level since 2011. OPEC+ said Wednesday that it would continue to increase output in April by 400,000 barrels per day compared to March, keeping this rate of production increases in-line with recent months' rises despite strained oil supplies.",
    "Stock futures opened slightly lower Wednesday evening to steady after rallying during the regular trading day. Affirmation from Federal Reserve Chair Jerome Powell that the central bank will take a measured approach to raising interest rates amid geopolitical uncertainty helped to momentarily appease volatile markets. Contracts on the S&P 500 edged lower. The index ended higher by 1.9% Wednesday afternoon to close marginally below 4,400 during the regular trading day. Treasury yields also rebounded as investors slowed a flight to safe havens, and the benchmark 10-year yield hovered just below 1.9%.",
    "The stock market fell Tuesday morning as the Russian assault on Ukraine caused oil prices to top $100 a barrel again. After weeks of volatile trading, it was almost strange to see the main stock indexes fall only moderately.",
  ];

  const router = useRouter();
  const { param } = router.query;

  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");

  const saveComment = (event) => {
    event.preventDefault();
    setComments((prevComments) => {
      return [...prevComments, currentComment];
    });
    setCurrentComment("");
  };
  const writeComment = (event) => {
    setCurrentComment(event.target.value);
  };
  return (
    <div className="wrap">
      <div className="column-top">
        <h2>{titlePackage[param]}</h2>
        <Link href={"/Bitcoin"} passHref>
          <button>X</button>
        </Link>
      </div>
      <div className="column-middle">
        <Image
          className="X"
          src={`/image/${Number(param) + 1}.jpg`}
          alt="Some Picture"
          width={500}
          height={400}
        />
      </div>
      <div className="column-bottom">
        <p>{textPackage[param]}</p>
      </div>
      <div className="comment-wrap">
        <h2>{comments.length} Comments</h2>
        <form onSubmit={saveComment} className="comment-write">
          <input
            name="comment"
            id="comment"
            value={currentComment}
            onChange={writeComment}
            type="text"
            placeholder="write a comment"
          />
          <button type="submit">Submit</button>
        </form>
        <div className="comment-content">
          <ul>
            {comments.map((comment, index) => {
              return <li key={index}>{comment}</li>;
            })}
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .wrap {
            width: 1280px;
            margin: 100px auto;
            height: 100%;
            padding: 40px 60px;
            border-radius: 20px;
            -webkit-box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);
            box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.3);
          }
          .column-top {
            display: flex;
            justify-content: space-between;
          }
          .column-top button {
            width: 40px;
            height: 40px;
            position: relative;
            left: 80px;
            bottom: 60px;
            background-color: white;
            border-radius: 20px;
            border: none;
            -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
            font-weight: bold;
            font-size: 1.2rem;
            color: lightgrey;
            font-family: sans-serif;
            text-align: center;
          }

          .column-top button:hover {
            cursor: pointer;
            transition: all 0.3s ease-out;
            color: tomato;
          }
          .column-middle {
            border-radius: 10px;
          }
          .comment-wrap {
            margin-top: 100px;
          }
          .comment-write {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
          .comment-write input {
            width: 100%;
            height: 100px;
            margin-bottom: 10px;
            border-radius: 10px;
            border: 0.3px solid lightgrey;
            -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
            font-size: 1.05rem;
            padding: 5px 10px;
            vertical-align: top;
            text-align: left;
          }
          .comment-write input:focus-visible {
            border: 0.7px solid red;
          }
          .comment-write button {
            width: 200px;
          }
        `}
      </style>
    </div>
  );
};

export default ColumnLink;
