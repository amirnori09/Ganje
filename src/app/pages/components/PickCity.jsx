const PickCityInput = () => {
  return ( 
    <div className=" pt-5 mx-3">
    <select className="select w-full focus:outline-none bg-[#F8F9FA] ">
    <option  selected className="">شهر خود را انتخب کنید</option>
    <option>زاهدان</option>
    <option>مشهد</option>
  </select>
    </div>
   );
}
 
export default PickCityInput;