import React from "react";
import Box from "./Box";

const BoxRow = () => {
  return (
    // TODO: make grid centered on the page
    <div className="grid grid-cols-4 items-center">
      <Box ticker="TSLA" price="912.32" />
      <Box ticker="AAPL" price="912.32" />
      <Box ticker="AMZN" price="912.32" />
      <Box ticker="BRCC" price="912.32" />
    </div>
  );
};

export default BoxRow;
