import React, { useState, useEffect } from "react";
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";

interface StockData {
  symbol: string;
  price: number;
  volume: number;
  change: number;
  percentChange: number;
}

const Box: React.FC<{ symbol: string }> = ({ symbol }) => {
  const [data, setData] = useState<StockData>({
    symbol: "",
    price: 0,
    volume: 0,
    change: 0,
    percentChange: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=YOUR_API_KEY`
      );
      const json = await response.json();
      const price = parseFloat(json["Global Quote"]["05. price"]);
      const previousPrice = parseFloat(
        json["Global Quote"]["08. previous close"]
      );
      const change = price - previousPrice;
      const percentChange = (change / previousPrice) * 100;
      const newData: StockData = {
        symbol: json["Global Quote"]["01. symbol"],
        price: price,
        volume: parseInt(json["Global Quote"]["06. volume"]),
        change: change,
        percentChange: percentChange,
      };
      setData(newData);
    };
    fetchData();
    const interval = setInterval(() => fetchData(), 5000); // Refresh data every 5 seconds
    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="box-content text-red-700 h-10 w-64 p-4 rounded-lg bg-gray-800 inline-flex">
      <BsArrowDownSquareFill className="text-4xl" />{" "}
      <div className="flex-col text-red-700">
        <div className="text-center font-bold pl-4 text-xl">{data.symbol}</div>
        <div className="text-center text-lg pl-4">${data.price}</div>
      </div>
      <div className="flex-col pl-12">
        <div className="text-center pl-4 text-lg">
          {data.percentChange.toFixed(2)}%
        </div>
        <div className="text-center text-lg pl-4">{data.change.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Box;
