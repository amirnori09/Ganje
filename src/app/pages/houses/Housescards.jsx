import HouseCard from "./HouseCard";

const HousesCards = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ">
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
        </div>
     );
}
 
export default HousesCards;