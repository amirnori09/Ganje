import Link from "next/link";

const HouseCard = () => {
  return (
    <Link
      href="/"
      className="flex justify-between bg-neutral-100 rounded   "
    >
      <figure>
        <img
          src="https://tekce.net/files/emlaklar/dis/850x550/ayt-3365-ultra-luxury-villa-with-nature-and-sea-view-in-alanya-ah-14.jpeg"
          alt="Villa"
          className=" w-40 bg-cover rounded"
        />
      </figure>
      <div className="card-body h-full p-2 pt-0 w-2/3">
        <div className="">
          <p className="card-title text-[12px] lg:text-[14px]">
            فيلا بمساحة 500 متر مربع
          </p>
        </div>
        <div className="flex w-full text-[10px]  lg:text-[12px]">
          <div className="flex justify-start items-center">
            السعر : ۵.۰۰۰.۰۰۰{" "}
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex justify-start items-center">۵ الغرف</div>
          <div className="divider divider-horizontal"></div>
          <div className="flex justify-start items-center">۵۰۰متر مربع</div>
        </div>
        <div className="flex items-center justify-between text-[12px] pt-4 mx-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-current-location"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
              <path d="M12 2l0 2" />
              <path d="M12 20l0 2" />
              <path d="M20 12l2 0" />
              <path d="M2 12l2 0" />
            </svg>
            <p className="text-body-200 ">مشهد</p>
          </div>
          <div className="text-body-200">لحظات قليلة مضت</div>
        </div>
      </div>
    </Link>
  );
};

export default HouseCard;
