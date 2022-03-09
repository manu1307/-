import { useState } from "react";

export default function Tab({ stockIndexes }) {
  const [index, setIndex] = useState(stockIndexes[0].id);

  const handleOnClick = (event) => {
    setIndex(event.target.innerText);
  };
  return (
    <div className="wrapper">
      <div>
        <div className="index-wrap">
          {stockIndexes.map((stockIndex, index) => {
            return (
              <span key={index} onClick={handleOnClick}>
                {stockIndex.id}
              </span>
            );
          })}
        </div>
        <div className="market-index"></div>
      </div>
      <style jsx>
        {`
          .wrapper {
            height: 45%;
            padding: 2%;
            box-shadow: -1px 0px 3px 0px rgba(0, 0, 0, 0.51);
            -webkit-box-shadow: -1px 0px 3px 0px rgba(0, 0, 0, 0.51);
            -moz-box-shadow: -1px 0px 3px 0px rgba(0, 0, 0, 0.51);
            border-radius: 5px;
          }
          .index-wrap {
            display : flex;

          }
          span {
            padding: 0 5%;
            border-left: 2px solid rgba(0, 0, 0, 0.3);
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            margin-bottom: 5px;
            font-weight: 700;
          }
          span:hover {
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.08);
            transition: all 0.4s ease-in-out;
          }
          .market-index {
            background: url("../image/StockIndexes/${index}.jpg") no-repeat;
            background-size: cover;
            width: 100%;
            height: 90px;
          }
          @media (min-width: 769px) and (max-width: 1280px) {
          }
          @media screen and (max-width: 768px) {
            .index-wrap {
              display: flex;
              margin: 2.5%;
            }
            span {
              font-size: 0.8rem;
              margin: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

// function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </Box>
//   );
// }
