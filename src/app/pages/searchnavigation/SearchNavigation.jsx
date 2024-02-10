import AreaCounter from "../components/AreaCounter";
import CountRoom from "../components/CountRoom";
import CountTraveler from "../components/CountTraveler";
import PickCityInput from "../components/PickCity";
import Price from "../components/Price";
import SearchButton from "../components/SearchButton";

const SearchNavigation = () => {
    return ( 
        <div className="md:flex md:items-center  md:justify-around md:p-3">
            <PickCityInput />
            <CountRoom />
            <CountTraveler />
            <AreaCounter />
            <Price />
            <SearchButton />
        </div>
     );
}
 
export default SearchNavigation;