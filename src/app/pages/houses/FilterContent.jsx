"use client"
import { IconX } from "@tabler/icons-react";
import React from 'react';

const FilterContent = ({ setOpen }) => {
  return (
    <div className="bg-neutral-100 p-4 space-y-8">
      <div className="flex justify-between items-center">
        <p className="font-bold text-body-300">تعني</p>
        <div className="flex lg:hidden" onClick={() => setOpen(false)}>
            <IconX/>
        </div>
      </div>
      {/* number of rooms */}
      <div className="flex flex-col space-y-4">
        <div className="">
            <p>عدد الغرف </p>
            <div className="">
            <div className="form-control flex justify-start items-start">
              <label className="label cursor-pointer gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">غرفة واحدة</span>
              </label>
            </div>
            <div className="form-control flex justify-start items-start">
              <label className="label cursor-pointer gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">غرفة واحدة</span>
              </label>
            </div>
            <div className="form-control flex justify-start items-start">
              <label className="label cursor-pointer gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">غرفة واحدة</span>
              </label>
            </div>
            <div className="form-control flex justify-start items-start">
              <label className="label cursor-pointer gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">غرفة واحدة</span>
              </label>
            </div>
            <div className="form-control flex justify-start items-start">
              <label className="label cursor-pointer gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">غرفة واحدة</span>
              </label>
            </div>
            <div className="form-control flex justify-start items-start">
              <label className="label cursor-pointer gap-x-4">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">غرفة واحدة</span>
              </label>
            </div>
            </div>
        </div>
      </div>
      {/* Price */}
      <div className="flex flex-col space-y-4">
        <p>سعر</p>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">تا 1 میلیارد تومان</span>
          </label>
        </div>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text"> حتى مليار ريال</span>
          </label>
        </div>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">  ٥ مليار ريال</span>
          </label>
        </div>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text"> ١٠ مليارات ریال</span>
          </label>
        </div>
      </div>
      {/* meters */}
      <div className="flex flex-col space-y-4">
        <p>المساحة</p>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">حتى ۱۰۰ متر</span>
          </label>
        </div>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">حتى ۲۰۰ متر</span>
          </label>
        </div>
        <div className="form-control flex justify-start items-start">
          <label className="label cursor-pointer gap-x-4">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-primary"
            />
            <span className="label-text">حتى ۳۰۰ متر</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterContent;
