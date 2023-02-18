import React from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Box = (props: { ticker: string; price: string }) => {
  return (
    <div className="box-content h-8 w-64 p-4 rounded-lg bg-gray-900 inline-flex">
      <BsArrowUpSquareFill className="text-4xl" />
      <div className="text-white text-center font-bold pl-4 text-xl">
        {props.ticker}
      </div>
      <div className="text-center text-white">{props.price}</div>
    </div>
  );
};

export default Box;
