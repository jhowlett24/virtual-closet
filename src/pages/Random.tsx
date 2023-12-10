import NavBar from "../components/NavBar";
import RandomizeOutfit from "../components/RandomizeOutfit"
import '../CSS/Random.css'

//Random Outfit Generator page

const Random = () => {
  return (
    <div className="random">
      <NavBar/>
      <RandomizeOutfit/>
    </div>
  );
};
export default Random;