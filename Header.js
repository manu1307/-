import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const handleOnClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <nav className="company-name">
        <div>
          <Link href="/">
            <a>Company Name</a>
          </Link>
          <Link className="login" href="/">
            <a onClick={handleOnClick}>{isLogin ? "Log Out" : "Log in"}</a>
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
