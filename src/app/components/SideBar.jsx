const SideBar = () => {
  return (
    <div className="space-y-4 ">
      <div className="">
        <div className="form-control p-4 bg-[#FFF] rounded">
          <p className="text-lg">مدينة</p>
          <label className="label justify-start cursor-pointer gap-4">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="">مشهد</span>
          </label>
          <label className="label  justify-start cursor-pointer gap-4">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="label-text">تهران</span>
          </label>
          <label className="label justify-start cursor-pointer gap-4">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="label-text">کرمان</span>
          </label>
        </div>
      </div>
      <div className="form-control  p-4 bg-[#FFF] rounded">
        <p className="text-lg">عدد الغرف</p>
        <label className="label justify-start cursor-pointer gap-4">
        <input type="checkbox" className="checkbox checkbox-primary" />

          <span className="">۱</span>
        </label>
        <label className="label justify-start cursor-pointer gap-4">
        <input type="checkbox" className="checkbox checkbox-primary" />

          <span className="label-text">۲</span>
        </label>
        <label className="label justify-start cursor-pointer gap-4">
        <input type="checkbox" className="checkbox checkbox-primary" />

          <span className="label-text">۳</span>
        </label>
        <label className="label justify-start cursor-pointer gap-4">
        <input type="checkbox" className="checkbox checkbox-primary" />

          <span className="label-text">۴</span>
        </label>
        <label className="label justify-start cursor-pointer gap-4">
        <input type="checkbox" className="checkbox checkbox-primary" />

          <span className="label-text">۵</span>
        </label>
      </div>
      <div className="form-control p-4 bg-[#FFF] rounded">
        <p className="text-lg">السعر</p>
        <label className="label justify-start cursor-pointer gap-4">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-[#5A4FCF]
            checked"
          />
          <span className="label-text">۱.۰۰۰.۰۰۰</span>
        </label>
        <label className="label justify-start cursor-pointer gap-4">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-[#5A4FCF]
            checked"
          />
          <span className="label-text">۵.۰۰۰.۰۰۰</span>
        </label>
        <label className="label justify-start cursor-pointer gap-4">
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-[#5A4FCF]
            checked"
          />
          <span className="label-text">۱۰.۰۰۰.۰۰۰</span>
        </label>
      </div>
    </div>
  );
};

export default SideBar;
