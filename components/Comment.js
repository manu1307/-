import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Comment() {
  const date = new Date();
  const dateString = date.toLocaleDateString("ko-KR");
  const timeString = date.toLocaleTimeString("ko-KR").slice(2, 50);

  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");
  const [randomNum, setrandomNum] = useState(
    Math.round(Math.random() * 90 + 10)
  );

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

  const onClick = () => {
    setrandomNum(() => {
      return randomNum + 1;
    });
  };
  return (
    <div>
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
            placeholder="댓글을 작성해주세요."
          />
          <button type="submit">write</button>
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
      <style jsx>{`
        .comment-wrap {
          text-align: left;
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
          background: transparent;
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
        }
        @media screen and (max-width: 768px) {
          .comment-write button {
            color: black;
            width: 70px;
            height: 35px;
          }
          .comment-write button:hover {
            cursor: pointer;
            background: none;
            color: black;
          }
        }
      `}</style>
    </div>
  );
}
