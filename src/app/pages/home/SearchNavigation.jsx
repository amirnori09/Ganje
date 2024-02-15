import AreaCounter from "../../components/AreaCounter";
import CountRoom from "../../components/CountRoom";
import CountTraveler from "../../components/CountTraveler";
import PickCityInput from "../../components/PickCity";
import Price from "../../components/Price";


const SearchNavigation = () => {
    return ( 
        <div className="md:flex  md:justify-center lg:rounded-xl lg:shadow-xl space-y-4 lg:pb-3 bg-[#FFF] p-2  lg:max-w-7xl lg:m-auto  lg:-mt-10 lg:z-[999]  md:h-[88px] ">
            <div className="grid grid-col-1 gap-4 md:grid-cols-5 lg:grid-cols-5  ">

            <PickCityInput />
            <CountRoom />
            {/* <CountTraveler /> */}
            <AreaCounter />
            <Price />
            <div className="md:flex md:justify-center">
            <button className="bg-[#5A4FCF] rounded-xl mt-3 w-full  md:w-[102px]  h-[48px]  text-[#FFF]">
            بحث
            </button>

            </div>
            </div>
        </div>
     );
}
 
export default SearchNavigation;
