const PickCityInput = () => {
  return ( 
    <div className=" mt-3 lg:m-0 flex items-center">
    <select className="  w-full md:w-full focus:outline-none p-2 rounded-md bg-[#F8F9Fa]  ">
    <option  selected className="">اختر مدينتك.</option>
    <option>زاهدان</option>
    <option>مشهد</option>
  </select>
    </div>
   );
}
 
export default PickCityInput;