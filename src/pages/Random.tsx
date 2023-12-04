import NavBar from "../components/NavBar";
import RandomizeOutfit from "../components/RandomizeOutfit"
import '../CSS/Random.css'

const Random = () => {
  return (
    <div className="random">
      <NavBar/>
      <RandomizeOutfit/>
    </div>
  );
};
export default Random;