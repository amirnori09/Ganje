'use client'

import React, { useState } from 'react';

const Price = () => {
  const [selectedPrice, setSelectedPrice] = useState('');

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  return (
    <div className="flex  items-center bg-[#FFF]">
      <div className="flex m-3 w-full items-center">
        <select
          id="price"
          name="price"
          className="w-full p-2  rounded bg-[#F8F9Fa] focus:outline-none "
          onChange={handlePriceChange}
        >
          <optgroup label="min">
          <option>العسر</option>
            <option value="50000000">۵۰.۰۰۰.۰۰۰</option>
            <option value="100000000">۱۰۰.۰۰۰.۰۰۰</option>
            <option value="150000000">۱۵۰.۰۰۰.۰۰۰</option>
          </optgroup>
          <optgroup label="max">
          <option></option>
            <option value="200000000">۲۰۰.۰۰۰.۰۰۰</option>
            <option value="250000000">۲۵۰.۰۰۰.۰۰۰</option>
            <option value="300000000">۳۰۰.۰۰۰.۰۰۰</option>
          </optgroup>
        </select>
      </div>
      {/* {selectedPrice && (
        <p>السعر من{new Intl.NumberFormat('fa-IR').format(selectedPrice)} </p>
      )} */}
    </div>
  );
};

export default Price;