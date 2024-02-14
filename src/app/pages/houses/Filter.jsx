"use client";
import React, { useState } from "react";
import { IconFilterCog } from '@tabler/icons-react';
import ModalBottom from "@/app/components/ModalBottom";
import FilterContent from "./FilterContent";
function Filter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-white_custom w-full p-4 lg:rounded-md lg:hidden">
        <div
          className="flex justify-start items-center gap-x-2 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <IconFilterCog />
          <small>تعني</small>
        </div>
        <div className="flex justify-end items-center">
          <select className="select select-bordered select-xs focus:outline-none  w-full max-w-xs">
            <option disabled selected>
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
