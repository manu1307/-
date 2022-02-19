import Category from "../components/Category";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { faChartColumn, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="wrapper">
      <Category
        category={`Cryptocurrency`}
        inCategory={["Bitcoin", "Ethereum"]}
        icon={faBitcoin}
        iconColor={"rgb(218, 189, 28)"}
      />
      <Category
        category={`stock`}
        inCategory={["South Korea", "US stock"]}
        icon={faChartColumn}
        iconColor={"rgb(3, 111, 251)"}
      />
      <Category
        category={`realEstate`}
        inCategory={["Office", "Resdential"]}
        icon={faHouse}
        iconColor={"rgb(70, 163, 41)"}
      />
      <style jsx>
        {`
          .wrapper {
            width: 80%;
            margin: 100px auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            grid-gap: 30px;
          }
        `}
      </style>
    </div>
  );
}
