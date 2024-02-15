import MainPhoto from "../pages/home/MainPhoto";
import SearchNavigation from "../pages/home/SearchNavigation";
import CitySection from "../pages/home/CitySection";

const Home = () => {
  return (
    <div className="">
     <div>
     <MainPhoto />
      <SearchNavigation />
     </div>
      <CitySection title="مشهد" />
      <CitySection title="تهران" />
      <CitySection title="کرمان" />
    </div>
  );
};

export default Home;
