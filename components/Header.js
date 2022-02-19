import Link from "next/link";
// import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <nav className="company-name">
        <div>
          <Link href="/">
            <a>Company Name</a>
          </Link>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            background-color: rgb(102, 102, 102);
            height: 10vh;
            text-align: left;

            line-height: 10vh;
            color: #fff;
            font-weight: bolder;
            font-size: 2rem;
          }
          a {
            margin-left: 30px;
          }

          @media (min-width: 769px) and (max-width: 1280px) {
            nav .company-name {
              text-align: center;
              left: 0;
            }
          }
          @media screen and (max-width: 768px) {
            nav .company-name {
              text-align: center;
              left: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
