import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <p className="text-2xl text-black font-bold"> هتل آنلاین</p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف
        </p>
      </aside>
      <div className="flex w-full ">
        <nav className=" w-full">
          <div className="w-2/4 ">
            <h6 className="footer-title">دسترسی ها</h6>
            <ul>
              <li>
                <a className="link link-hover">خانه</a>
              </li>
              <li>
                <a className="link link-hover"> درباره ما</a>
              </li>
              <li>
                <a className="link link-hover">ارتباط با ما</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="">
          <h6 className="footer-title">راه های ارتباطی</h6>
          <div className=" flex gap-2 w-2/4">
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 4.79004C15.9 9.34004 10.89 11.95 5.66998 11.48L2.5 11.19"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 19.37C8.1 14.82 13.11 12.21 18.33 12.68L21.5 12.97"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.63 3L10.81 6.95001C12.94 9.59001 14.45 12.66 15.25 15.95L16.46 20.94"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.19997 2.30001 7.96997 2.85001"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 13.03V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.6361 7H17.6477"
                  stroke="#666666"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8901 3.49003C19.7001 2.22003 21.7701 4.30003 20.5101 8.11003L17.6801 16.6C15.7801 22.31 12.6601 22.31 10.7601 16.6L9.92005 14.08L7.40005 13.24C1.69005 11.34 1.69005 8.23003 7.40005 6.32003L12.0001 4.79003"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.11 13.6501L13.69 10.0601"
                  stroke="#666666"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <div className="flex  gap-6  ">
        <div className="border rounded-lg">
          <Image
            src="/assets/Images/logo.png"
            className="w-full"
            width={72}
            height={72}
          />
        </div>
        <div className="border rounded-lg">
          <Image
            src="/assets/Images/logo2.png"
            className="w-full"
            width={72}
            height={72}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
