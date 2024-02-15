"use client";
import React, { useState } from "react";
import { IconFilterCog } from '@tabler/icons-react';
import ModalBottom from "@/app/components/ModalBottom";
import FilterContent from "./FilterContent";
function Filter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-[#FFF] mt-2 w-full p-4 lg:hidden">
        <div
          className="flex justify-start items-center gap-x-2 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <IconFilterCog />
          <small>تعني</small>
        </div>
        <div className="flex  items-center">
          <select className=" p-2 focus:outline-none rounded bg-[#F8F9Fa] ">
            <option disabled selected className="">
              ترتيب حسب
            </option>
            <option>الأحدث</option>
            <option>الاكبر</option>
          </select>
        </div>
      </div>
      <ModalBottom open={open} setOpen={setOpen}>
    <FilterContent setOpen={setOpen}/>
      </ModalBottom>

    </>
  );
}

export default Filter;
