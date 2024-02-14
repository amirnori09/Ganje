import { IconFilterCog, IconX } from "@tabler/icons-react";
import { useState } from "react";

const Filter2 = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="lg:hidden flex justify-between px-3 ">
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
          onChange={() => setDrawerOpen(!drawerOpen)}
        />

        <div className="drawer-content">
          <label htmlFor="my-drawer" className="btn drawer-button">
            <IconFilterCog />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[20px]">تعني</p>
              <button
                className="btn drawer-close-button self-end"
                onClick={() => setDrawerOpen(false)}
              >
                <IconX />
              </button>
            </div>
            <div className="">
              <div className="form-control  p-4 bg-neutral-100 rounded-xl">
                <p className="text-lg">مدينة</p>
                <label className="label cursor-pointer gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="">مشهد</span>
                </label>
                <label className="label cursor-pointer gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text">تهران</span>
                </label>
                <label className="label cursor-pointer gap-4">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text">کرمان</span>
                </label>
              </div>
            </div>
          
            <div className="form-control  p-4 bg-neutral-100 rounded-xl">
              <p className="text-lg">عدد الغرف</p>
              <label className="label cursor-pointer gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-[#5A4FCF]
            checked"
                />
                <span className="">۱</span>
              </label>
              <label className="label cursor-pointer gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-[#5A4FCF]
            checked"
                />
                <span className="label-text">۲</span>
              </label>
              <label className="label cursor-pointer gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-[#5A4FCF]
            checked"
                />
                <span className="label-text">۳</span>
              </label>
              <label className="label cursor-pointer gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-[#5A4FCF]
            checked"
                />
                <span className="label-text">۴</span>
              </label>
              <label className="label cursor-pointer gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-[#5A4FCF]
            checked"
                />
                <span className="label-text">۵</span>
              </label>
            </div>
            <div className="form-control p-4 bg-neutral-100 rounded-xl">
              <p className="text-lg">السعر</p>
              <label className="label cursor-pointer gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-[#5A4FCF]
            checked"
                />
                <span className="label-text">۱.۰۰۰.۰۰۰</span>
              </label>
              <label className="label cursor-pointer gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-[#5A4FCF]
            checked"
                />
                <span className="label-text">۵.۰۰۰.۰۰۰</span>
              </label>
              <label className="label cursor-pointer gap-4">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-[#5A4FCF]
            checked"
                />
                <span className="label-text">۱۰.۰۰۰.۰۰۰</span>
              </label>
            </div>
          </ul>
        </div>
      </div>
      <select className="select select-bordered focus:outline-none">
        <option disabled selected>
          السعر
        </option>
        <option>أعلى سعر</option>
        <option>السعر الأدنى</option>
      </select>
    </div>
  );
};

export default Filter2;
