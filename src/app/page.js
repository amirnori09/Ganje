import Nav from "@/app/pages/navbar/Nav";
import MainPhoto from "./pages/mainphoto/MainPhoto";
import SearchNavigation from "./pages/searchnavigation/SearchNavigation";
import CitySection from "./pages/cities/CitySection";
import Footer from "./pages/footer/Footer";
import FavoriteCities from "./pages/cities/FavoriteCities";

const Home = () => {
  return (
    <div>
      <Nav />
      <MainPhoto />
      <SearchNavigation />
      <CitySection />
      <FavoriteCities />
      <Footer />
    </div>
  );
};

export default Home;
