import Category from "../components/Category";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { faChartColumn, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="wrapper">
      <Category
        category={`Cryptocurrency`}
        inCategory={["Board", "Coin Tracker"]}
        icon={faBitcoin}
        iconColor={"rgb(218, 189, 28)"}
      />
      <Category
        category={`stock`}
        inCategory={["Board", "stock map"]}
        icon={faChartColumn}
        iconColor={"rgb(3, 111, 251)"}
      />
      <Category
        category={`realEstate`}
        inCategory={["RE Board", "Apartment info"]}
        icon={faHouse}
        iconColor={"rgb(70, 163, 41)"}
      />
      <style jsx>
        {`
          .wrapper {
            width: 1280px;
            margin: 100px auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            grid-gap: 30px;
          }
          @media (min-width: 769px) and (max-width: 1280px) {
            .wrapper {
              width: 90%;
            }
          }
          @media screen and (max-width: 768px) {
            .wrapper {
              width: 90%;
              margin: 30px 5%;
            }
          }
        `}
      </style>
    </div>
  );
}
