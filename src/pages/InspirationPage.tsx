import NavBar from "../components/NavBar";
import "../CSS/Random.css";
import '../CSS/Inspiration.css'
import Inspiration from "../components/Inspiration";

//Inspiration outfits page

const InspirationPage = () => {
  return (
    <div className="inspiration">
      <NavBar />
      <Inspiration />
    </div>
  );
};
export default InspirationPage;