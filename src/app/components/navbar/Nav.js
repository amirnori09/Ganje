import ThemeSwitch from "../ThemeSwitch";

const Nav = () => {
  return (
    <div className=" p-5 flex justify-between items-center bg-[#FFF] max-w-7xl m-auto">
      <div className="flex lg:space-x-14 items-center gap-4">
     <ThemeSwitch/>
        <button className="block lg:hidden">
          
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7H21"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M9.48999 12H21"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 12H5.99"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button className="flex items-center gap-4 ">
          <svg
            className=""
            width="36"
            height="40"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="36" rx="18" fill="#5A4FCF" />
            <path
              d="M10.5 17.25C10.5 15.75 11.25 15 12.75 15H16.5V23.25C16.5 24.75 17.25 25.5 18.75 25.5H12.75C11.25 25.5 10.5 24.75 10.5 23.25V20.25"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5825 12C16.5225 12.225 16.5 12.4725 16.5 12.75V15H12.75V13.5C12.75 12.675 13.425 12 14.25 12H16.5825Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.5 15V18.75"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.5 15V18.75"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.75 21.75H20.25C19.8375 21.75 19.5 22.0875 19.5 22.5V25.5H22.5V22.5C22.5 22.0875 22.1625 21.75 21.75 21.75Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5 18.75V21.75"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 23.25V12.75C16.5 11.25 17.25 10.5 18.75 10.5H23.25C24.75 10.5 25.5 11.25 25.5 12.75V23.25C25.5 24.75 24.75 25.5 23.25 25.5H18.75C17.25 25.5 16.5 24.75 16.5 23.25Z"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="lg:block hidden  font-extrabold self-center ">گنجه</p>
        </button>
        <div className="hidden lg:flex gap-5 text-sm text-body-200  ">
          <button>صفحة البداية</button>
          <button>درباره نا</button>
          <button>للتواصل معنا</button>
        </div>
      </div>
      <div>
        <button>
          <div className="flex items-center gap-4">
            <svg
              className=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.02 3.01001C14.18 2.37001 13.14 2 12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p
              className="text-sm hidden lg:block font-bold  text-body-200
        "
            >
              للدخول
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Nav;
