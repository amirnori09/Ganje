import AreaCounter from "../../components/AreaCounter";
import CountRoom from "../../components/CountRoom";
import CountTraveler from "../../components/CountTraveler";
import PickCityInput from "../../components/PickCity";
import Price from "../../components/Price";


const SearchNavigation = () => {
    return ( 
        <div className="md:flex items-center md:justify-center lg:rounded-xl lg:shadow-xl space-y-4 lg:pb-3 bg-white_custom p-2  lg:max-w-7xl lg:m-auto  lg:-mt-10 z-[999] ">
            <div className="grid grid-col-1 gap-4 md:grid-cols-6 lg:grid-cols-6 ">

            <PickCityInput />
            <CountRoom />
            <CountTraveler />
            <AreaCounter />
            <Price />
            <button className="bg-[#5A4FCF] rounded-xl btn mt-3 max-w-2xl  text-white_custom">
            بحث
            </button>

            </div>
        </div>
     );
}
 
export default SearchNavigation;
