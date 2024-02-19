"use client"

import Desc from "@/app/pages/houses/Description";
import SideBar from "@/app/components/SideBar";
import HousesCards from "@/app/pages/houses/Housescards";
import Filter from "@/app/pages/houses/Filter";
// import Filter2 from "@/app/pages/houses/Filter2";

const page = () => {
  return (
    <div className="max-w-7xl m-auto space-y-4 p-3 lg:p-0 ">
      <Filter/>
      {/* <Filter2 /> */}
      <Desc
        title=" فيلا بمساحة 500 متر مربع"
        text=" من الهدوء والاسترخاء.

            كما تحتوي الفيلا على مطبخ مجهز بالكامل بأحدث الأجهزة وصالة معيشة فسيحة توفر مساحة مثالية للاسترخاء والترفيه. توفر النوافذ الكبيرة إطلالات خلابة على المناظر الطبيعية المحيطة بالفيلا، مما يجعلها ملاذًا مثاليًا للعيش الهادئ بعيدًا عن صخب المدينة.
            
            باختصار، تعتبر هذه الفيلا بمساحة 500 متر مربع منزلًا فاخرًا يجمع بين الفخامة والراحة، ويوفر بيئة مثالية للعيش والاستمتاع بالحياة"
      />
      <div className="flex ">
        <div className="hidden lg:block lg:w-1/4"><SideBar/></div>
        <div className="w-full lg:w-3/4 lg:pr-2"><HousesCards /> </div>
      </div>


    </div>
  );
};

export default page;
