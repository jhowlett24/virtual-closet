import NavBar from "../components/NavBar";
import CarouselBottom2 from "../components/CarouselBottom2";
import Carousel2 from "../components/Carousel2";
import "../CSS/Home.css";
import CarouselContainer from "../components/CarouselContainer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <CarouselContainer />
      <Footer />
    </div>
  );
};
export default Home;
