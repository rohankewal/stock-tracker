import React from "react";
import Box from "./Box";

const BoxRow = () => {
  return (
    // TODO: make grid centered on the page
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Box ticker="TSLA" price="912.32" />
        <Box ticker="AAPL" price="912.32" />
        <Box ticker="AMZN" price="912.32" />
        <Box ticker="BRCC" price="912.32" />
      </div>
    </div>
  );
};

export default BoxRow;
