import React from "react";
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";

const Box = (props: { ticker: string; price: string }) => {
  return (
    <div className="box-content text-red-700 h-10 w-64 p-4 rounded-lg bg-gray-800 inline-flex">
      <BsArrowDownSquareFill className="text-4xl" />{" "}
      <div className="flex-col text-red-700">
        <div className="text-center font-bold pl-4 text-xl">{props.ticker}</div>
        <div className="text-center text-lg pl-4">${props.price}</div>
      </div>
      <div className="flex-col pl-12">
        <div className="text-center pl-4 text-lg">10.35%</div>
        <div className="text-center text-lg pl-4">$10.50</div>
      </div>
    </div>
  );
};

export default Box;
