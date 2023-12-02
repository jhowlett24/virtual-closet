import NavBar from "../components/NavBar";
import CarouselBottom from "../components/CarouselBottom";
import Carousel from "../components/Carousel";
import '../CSS/Home.css'
import CarouselContainer from "../components/CarouselContainer";


const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <CarouselContainer />
    </div>
  );
};
export default Home;