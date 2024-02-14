import React from "react";
import Link from "next/link";

function Title({ title }) {
  return (
    <div className="my-6 flex justify-between items-center">
      <p className="text-[19px] font-extrabold md:text-[28px]">{title}</p>
      <Link href="/houses" className="text-[#5A4fcf]" passHref>
          مشاهدة        
      </Link>
    </div>
  );
}

export default Title;
