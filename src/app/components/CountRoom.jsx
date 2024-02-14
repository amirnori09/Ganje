"use client";
import { useState } from "react";

const CountRoom = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-between bg-[#F8F9FA] m-3 px-3 rounded-md">
        <p>
        عدد الغرف
        </p>
    <div className="flex items-center">
    <button className=" " onClick={increaseCount}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 18V6"
            stroke="#5A4FCF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 12H18"
            stroke="#5A4FCF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 12H11.66"
            stroke="#5A4FCF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 18V6"
            stroke="#5A4FCF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <span className=" text-black p-3">{count}</span>
      <button className="" onClick={decreaseCount}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 12H18"
            stroke="#666666"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 12H11.66"
            stroke="#666666"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    </div>
  );
};

export default CountRoom;
