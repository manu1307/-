import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

export default function Card({ id }) {
  const date = new Date().toLocaleString("ko-KR").slice(0, 12);
  const [randomNum, setrandomNum] = useState(Math.round(Math.random() * 10));
  const onClick = () => {
    setrandomNum(() => {
      return randomNum + 1;
    });
  };
  return (
    <div className="card-wrapper">
      <div>
        <Link href={`/Bitcoin/${id}`} passHref>
          <div className="title">Title</div>
        </Link>
        <div>
          <Link href={`/Bitcoin/${id}`} passHref>
            <p>
              first three line first three linefirst three linefirst three line
              first three line first three linefirst three linefirst three line
              first three line first three linefirst three linefirst three line
              first three line first three linefirst three linefirst three line
            </p>
          </Link>
          <div className="date-comments">
            <div>{date}</div>
            <div>
              <span className="icon" onClick={onClick}>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span> {randomNum} likes</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card-bottom">
          by <span>HongGilDong</span>
        </div>
      </div>

      <style jsx>
        {`
          .card-wrapper {
            width: 20%;
            height: 300px;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            margin: 2rem;
            padding: 0.5rem;
            border-radius: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .card-wrapper:hover {
            cursor: pointer;
            transition: transform 0.5s;
            transform: translateY(-0.2rem);
            box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
          }
          .title {
            font-weight: 800;
            font-size: 1.6rem;
            padding: 0.2rem 0.8rem;
          }

          p {
            width: 100%;
            padding: 0.2rem 0.8rem;
            word-break: break-word;
            overflow-wrap: break-word;
            font-size: 1rem;
            line-height: 1.5;
            height: 4.5rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .date-comments {
            display: flex;
            justify-content: space-between;
            padding: 0.2rem 0.8rem;
            color: grey;
            font-size: 0.8rem;
          }
          .icon:hover {
            color: tomato;
          }
          .card-bottom {
            border-top: 1px solid lightgrey;
            padding: 0.2rem 0.8rem;
          }
          .card-bottom span {
            font-weight: 600;
          }
        `}
      </style>
    </div>
  );
}
