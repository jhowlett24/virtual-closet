import NavBar from "../components/NavBar";
import "../CSS/Home.css";
import CarouselContainer from "../components/CarouselContainer";
import Footer from "../components/Footer";

//Home page

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
