import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ColumnLink = () => {
  const titlePackage = [
    "금융 '메기' 빅테크…규제 사각지대 이용하면 효율성 떨어져",
    "거래소, 7일부터 ‘러시아 ETF’ 거래 정지 소식에 개미들 '멘붕'",
    "차지포인트, 가속화되는 외형 성장세…저점 매수",
    "블랙록, 아이셰어즈 MSCI 러시아 ETF 중단...주주 이익 보호할 것",
  ];
  const textPackage = [
    "금융업계 ‘메기’로 꼽히는 빅테크 업체들이 규제차익에 기대 성장하면 경쟁력을 상실할 수 있다는 경고가 나왔다. 기존의 대형 금융사처럼 ‘대마불사’와 같은 존재로 전락할 수 있다는 우려다.",
    "한국거래소는 지난 4일 주식시장 마감 후 “한국투자신탁운용의 ‘KINDEX 러시아MSCI(합성) ETF’의 거래를 오는 7일부터 정지한다”고 공시했다. 거래소는 “투자 유의 종목으로 투자자 보호 및 시장 안정을 위해 매매 거래를 정지한다”며 “매매 거래 정지 해제는 별도의 시장 안내가 있을 예정”이라고 덧붙였다.",
    "전기차 충전 인프라 업체로 충전설비와 소프트웨어 서비스 통합 플랫폼을 제공하는 차지포인트에 대해 외형 성장을 감안한 분할 매수 전략이 합리적이란 분석이 나온다.",
    "세계 최대 자산운용사 블랙록이 약 30개의 러시아 관련 주식에 투자하는 1억500만달러 규모의 '아이셰어즈 MSCI 러시아(iShares MSCI Russia) ETF(ERUS)를 중단한다고 4일(현지시간) 밝혔다.",
  ];
  const date = new Date();
  const dateString = date.toLocaleDateString("ko-KR");
  const timeString = date.toLocaleTimeString("ko-KR").slice(2, 50);

  const router = useRouter();
  const { param } = router.query;

  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");

  const saveComment = (event) => {
    event.preventDefault();
    if (currentComment.length === 0) {
      alert("There is nothing on the comment. Please write a comment.");
      return;
    }
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
        <Link href={"/stock/Board"} passHref>
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
            placeholder="댓글을 작성해주세요."
          />
          <button type="submit">댓글 쓰기</button>
        </form>
        <div className="comment-content">
          <ul>
            {comments.map((comment, index) => {
              return (
                <li key={index}>
                  {comment}
                  <span>{`${dateString}   ${timeString}`}</span>
                </li>
              );
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
            width: 80px;
            height: 40px;
            border: none;
            border-radius: 8px;
            background: #fff;
            font-size: 0.8rem;
            -webkit-box-shadow: 0px 0px 3px 5px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 3px 5px rgba(0, 0, 0, 0.1);
            transition: all 0.2s ease-in-out;
          }
          .comment-write button:hover {
            cursor: pointer;
            background: #1e90ff;
            color: white;
          }
          .comment-content ul {
            margin-left: 0;
            padding-left: 0;
          }
          .comment-content ul li {
            padding: 20px 7px 10px;
            list-style: none;
            border-bottom: 0.2px solid grey;
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: space-between;
          }
          .comment-content ul li span {
            font-size: 0.3rem;
            color: grey;
          }
        `}
      </style>
    </div>
  );
};

export default ColumnLink;
