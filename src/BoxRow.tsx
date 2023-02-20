import React from "react";
import Box from "./Box";

const BoxRow = () => {
  return (
    // TODO: make grid centered on the page
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Box symbol="TSLA" />
        <Box symbol="AAPL" />
        <Box symbol="AMZN" />
        <Box symbol="BRCC" />
      </div>
    </div>
  );
};

export default BoxRow;
