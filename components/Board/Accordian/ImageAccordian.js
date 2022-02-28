import { text } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import Link from "next/link";
import Bitcoin from "../../../pages/Bitcoin";

export default function ImageAccordian() {
  const textPackage = [
    "Lorem Ipsum has been the industry standard",
    "it to make a type specimen book. It has survived not only",
    "Contrary to popular belief, Lorem Ipsum is not simply random text",
    " It is a long established fact that a reader will be distracted by the readable content",
  ];

  return (
    <div className="wrap">
      <ul>
        {textPackage.map((text, index) => {
          return (
            <Link key={index} href={`/Bitcoin/${index}`} passHref>
              <li>
                <h3>{text}</h3>
              </li>
            </Link>
          );
        })}
      </ul>
      <style jsx>
        {`
          ul {
            list-style: none;
            max-width: 1280px;
            margin: 0 auto;
          }
          ul li {
            cursor: pointer;
            float: left;
            width: 20%;
            height: 300px;
            opacity: 0.4;
            -moz-transition: all 0.4s ease-in-out;
            -ms-transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
          }
          ul li h3 {
            margin: 10px 10%;
            height: 50px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          ul li:hover,
          ul li:first-child ~ li:last-child {
            width: 40%;
            opacity: 1;
            -moz-transition: all 0.4s ease-in-out;
            -ms-transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
          }
          ul li:hover ~ li:last-child {
            width: 20%;
            opacity: 0.4;
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
            content: "";
            display: block;
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
