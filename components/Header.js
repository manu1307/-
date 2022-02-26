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
          <Link className="login" href="/Login">
            <a>log in</a>
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
          nav div {
            display: flex;
            justify-content: space-between;
          }
          a {
            margin: 0 50px;
          }
          .login {
            font-size: 1rem;
          }

          @media (max-width: 1280px) {
            .company-name {
              font-size: 1rem;
            }
            a {
              margin: 0 15px;
            }
          }
        `}
      </style>
    </div>
  );
}
