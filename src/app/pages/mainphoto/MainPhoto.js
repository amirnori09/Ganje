import Image from "next/image";

const MainPhoto = () => {
  return (
    <>
      <div className="w-full relative flex items-center justify-center">
        <Image
          className="w-full"
          src="/assets/Images/hotel.png" // Updated path to the correct one
          alt="hotel"
          width={340}
          height={137.5}
        />
        <p className="absolute text-white text-xl md:text-4xl lg:text-5xl font-bold no-underline text-center">
         رزرو آنلاین و سریع هتل <br/> بدون وقفه و در سریع ترین زمان ممکن
        </p>
      </div>
    </>
  );
};

export default MainPhoto;
