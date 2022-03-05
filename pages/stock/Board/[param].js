import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const BoardLink = ({}) => {
  const stockName = [
    "",
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
    "",
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
  const [randomNum, setrandomNum] = useState(
    Math.round(Math.random() * 90 + 10)
  );
  const onClick = () => {
    setrandomNum(() => {
      return randomNum + 1;
    });
  };
  return (
    <div className="wrap">
      <div className="column-top">
        <h2>{stockName[param]}</h2>
        <Link href={"/stock/Board"} passHref>
          <button>X</button>
        </Link>
      </div>
      <div className="column-bottom">
        <p>{contextSet[param]}</p>
      </div>
      <div className="comment-wrap">
        <span className="like">
          {" "}
          <span className="icon" onClick={onClick}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span> {randomNum} likes</span>
        </span>
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

          .comment-wrap {
            margin-top: 100px;
          }
          .icon:hover {
            color: tomato;
            cursor: pointer;
          }
          .comment-wrap .like {
            font-size: 0.9rem;
            color: grey;
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
          @media (min-width: 769px) and (max-width: 1280px) {
            .wrap {
              width: 100%;
            }
          }
          @media screen and (max-width: 768px) {
            .wrap {
              width: 90%;
              padding: 5%;
              margin: 6% auto;
              -webkit-box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.1);
              box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.1);
            }
            .column-top button {
              width: 30px;
              height: 30px;
              position: relative;
              left: 10%;
              bottom: 30px;
            }
            .comment-write button {
              width: 70px;
              height: 35px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BoardLink;
