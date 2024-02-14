import HouseCard from "./HouseCard";

const HousesCards = () => {
    return ( 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full ">
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
        </div>
     );
}
 
export default HousesCards;