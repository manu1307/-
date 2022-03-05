import { useState } from "react";
import Link from "next/link";
import ImageAccordianText from "./ImageAccordianText";

export default function ImageAccordian() {
  const titlePackage = [
    "금융 '메기' 빅테크…규제 사각지대 이용하면 효율성 떨어져",
    "거래소, 7일부터 ‘러시아 ETF’ 거래 정지 소식에 개미들 '멘붕'",
    "차지포인트, 가속화되는 외형 성장세…저점 매수",
    "블랙록, 아이셰어즈 MSCI 러시아 ETF 중단...주주 이익 보호할 것",
  ];

  return (
    <div className="wrap">
      <ul>
        {titlePackage.map((title, index) => {
          return (
            <Link
              key={index}
              href={{
                pathname: "/stock/column/[param]",
                query: { param: index },
              }}
              passHref
            >
              <li>
                <ImageAccordianText className="text" title={title} />
              </li>
            </Link>
          );
        })}
      </ul>
      <style jsx>
        {`
          .wrap {
          }
          ul {
            list-style: none;
            max-width: 1280px;
            margin: 0 auto;
            margin-left: 0;
            padding-left: 0;
            padding: 2rem;
          }
          ul li .text {
          }
          ul li {
            cursor: pointer;
            float: left;
            width: 24.7%;
            height: 300px;
            opacity: 0.66;
            margin-left: 0.3%;
            -moz-transition: all 0.4s ease-in-out;
            -ms-transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            box-shadow: rgba(100, 100, 111, 0.1) 0px 10px 10px 0px;
          }

          ul li:hover,
          ul li:first-child ~ li:first-child {
            opacity: 1;
            -moz-transition: all 0.4s ease-in-out;
            -ms-transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            box-shadow: rgba(100, 100, 111, 0.4) 10px 10px 10px 0px;
          }

          ul li:nth-child(1) {
            background: url("../image/1.jpg") top center no-repeat;
            background-size: cover;
          }
          ul li:nth-child(2) {
            background: url("../image/2.jpg") top center no-repeat;
            background-size: cover;
          }
          ul li:nth-child(3) {
            background: url("../image/3.jpg") top center no-repeat;
            background-size: cover;
          }
          ul li:nth-child(4) {
            background: url("../image/4.jpg") top center no-repeat;
            background-size: cover;
          }

          /** Add cool filter efects **/
          ul li::before {
            width: 100%;
            height: 100%;
            -moz-transition: all 0.4s ease-in-out;
            -ms-transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
          }

          @media (max-width: 1280px) {
          }
        `}
      </style>
    </div>
  );
}
// content: "";
// display: block;
