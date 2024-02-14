const PickCityInput = () => {
  return ( 
    <div className=" py-3 mx-3">
    <select className="select  w-3/6 md:w-full focus:outline-none bg-[#F8F9FA]  ">
    <option  selected className="">اختر مدينتك.</option>
    <option>زاهدان</option>
    <option>مشهد</option>
  </select>
    </div>
   );
}
 
export default PickCityInput;