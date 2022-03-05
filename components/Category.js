import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Category({ category, inCategory, icon, iconColor }) {
  return (
    <div className="box">
      <div className="front-face">
        <div className={category}>
          <span style={{ color: `${iconColor}` }}>
            <FontAwesomeIcon icon={icon} size="2x" />
          </span>
          <div>{category}</div>
        </div>
      </div>
      <div className="back-face">
        <span>{category}</span>
        {inCategory.map((detail, index) => {
          return (
            <p key={index}>
              <Link href={`/${category}/Board`}>{detail}</Link>
            </p>
          );
        })}
      </div>
      <style jsx>{`
        .box {
          width: 350px;
          margin: 0 auto;
          position: relative;
          perspective: 1000px;
        }
        .box .front-face {
          background: rgb(218, 218, 218);
          height: 220px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 5px 20px 0px rgb(218, 218, 218);
          transition: all 0.5s ease;
          -webkit-transition: all 0.5s ease;
        }

        .box .front-face div,
        .box .back-face span {
          font-size: 1.5rem;
          font-weight: 600;
          text-transform: uppercase;
        }
        .Cryptocurrency {
          text-align: center;
          background: rgb(218, 189, 28);
        }
        .box .front-face div {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stock {
          text-align: center;
          background: rgb(3, 111, 251);
        }
        .realEstate {
          text-align: center;
          background: rgb(70, 163, 41);
        }
        .box .back-face {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          height: 100%;
          width: 100%;
          padding: 30px;
          color: #fff;
          background-color: rgb(83, 83, 83);
          opacity: 0;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          backface-visibility: hidden;
          transform: translateY(110px) rotateX(-90deg);
          -webkit-transform: translateY(110px) rotateX(-90deg);
          transition: all 0.5s ease;
          -webkit-transition: all 0.5s ease;
          /* display: none; */
        }
        .box .back-face p {
          margin-top: 10px;
          text-align: justify;
        }
        .box .back-face p a {
          text-decoration: none;
          color: #fff;
          font-size: 1.2rem;
        }
        .box:hover .back-face {
          opacity: 1;
          transform: rotateX(0deg);
          -webkit-transform: rotateX(0deg);
        }
        .box:hover .front-face {
          opacity: 0;
          transform: translateY(-110px) rotateX(90deg);
          -webkit-transform: translateY(-110px) rotateX(90deg);
        }
        @media (min-width: 769px) and (max-width: 1280px) {
          .wrapper {
            width: 90%;
          }
        }
        @media screen and (max-width: 768px) {
          .box {
            margin: 0 auto;
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
}
