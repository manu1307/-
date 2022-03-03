import { useRouter } from "next/router";
import Image from "next/image";

const ColumnLink = () => {
  const titlePackage = [
    "Jobless claims preview: Another 225,000 Americans likely filed new claims last week",
    "Stock market news live updates: Stocks rise, oil prices soar as investors eye Russia's war, Powell's testimony",
    "Stock market news live updates: Stock futures steady after rally",
    "Stock Market Tries To Steady Itself As Oil Tops $100 Again; These Mining Stocks Rally",
  ];
  const textPackage = [
    "At 225,000, the expected number of new jobless claims would mark a back-to-back week of declines. Jobless claims rose to nearly 300,000 in mid-January, reflecting some momentary backsliding in the labor market's improvements as Omicron virus cases surged to a record and seasonal adjustments in data became choppy due to the pandemic over the past two years. Still, claims have fallen precipitously compared to this time last year, with new claims coming in around 750,000 in late February 2021.",
    "Amid the ongoing geopolitical concerns, energy prices climbed, and West Texas intermediate crude oil prices rocketed further above $100 per barrel to top $112 and reach the highest level since 2011. OPEC+ said Wednesday that it would continue to increase output in April by 400,000 barrels per day compared to March, keeping this rate of production increases in-line with recent months' rises despite strained oil supplies.",
    "Stock futures opened slightly lower Wednesday evening to steady after rallying during the regular trading day. Affirmation from Federal Reserve Chair Jerome Powell that the central bank will take a measured approach to raising interest rates amid geopolitical uncertainty helped to momentarily appease volatile markets. Contracts on the S&P 500 edged lower. The index ended higher by 1.9% Wednesday afternoon to close marginally below 4,400 during the regular trading day. Treasury yields also rebounded as investors slowed a flight to safe havens, and the benchmark 10-year yield hovered just below 1.9%.",
    "The stock market fell Tuesday morning as the Russian assault on Ukraine caused oil prices to top $100 a barrel again. After weeks of volatile trading, it was almost strange to see the main stock indexes fall only moderately.",
  ];

  const router = useRouter();
  const { param } = router.query;
  return (
    <div className="wrap">
      <h2>{titlePackage[param]}</h2>
      <div className="container">
        <Image
          src={`/image/${Number(param) + 1}.jpg`}
          alt="Some Picture"
          width={500}
          height={400}
        />
      </div>
      <p>{textPackage[param]}</p>
      <style jsx>
        {`
          .wrap {
            width: 1280px;
            margin: 100px auto;
          }
          .container {
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default ColumnLink;
