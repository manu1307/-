import { useState } from "react";
import Link from "next/link";
import ImageAccordianText from "./ImageAccordianText";

export default function ImageAccordian() {
  const textPackage = [
    "Russia-Ukraine war: The companies that have taken action so far",
    "Stock market news live updates: Stock futures rise as investors eye Russia's war in Ukraine, await Powell",
    "Boeing suspends parts, maintenance and support for Russian airlines",
    "American Express halts relationships with Russia bank partners",
  ];

  return (
    <div className="wrap">
      <ul>
        {textPackage.map((text, index) => {
          return (
            <Link
              key={index}
              href={`/ExamplePage`}
              //  href={`/Bitcoin/${index}`}
              passHref
            >
              <li>
                <ImageAccordianText className="text" title={text} />
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
            background: url("image/1.jpg") top center no-repeat;
            background-size: cover;
          }
          ul li:nth-child(2) {
            background: url("image/2.jpg") top center no-repeat;
            background-size: cover;
          }
          ul li:nth-child(3) {
            background: url("image/3.jpg") top center no-repeat;
            background-size: cover;
          }
          ul li:nth-child(4) {
            background: url("image/4.jpg") top center no-repeat;
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

          @media (max-width: 1240px) {
          }
        `}
      </style>
    </div>
  );
}
// content: "";
// display: block;
