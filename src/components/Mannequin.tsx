import '../CSS/Mannequin.css'
import cheetah from '../Images/cheetah.svg'
import CarouselContainer from './CarouselContainer';

const Mannequin = () => {
    return (
      <div className = "mannequin-class">

        <img src={cheetah} className="cheetah-background cheetah-background-left"></img>
        <CarouselContainer/>
        <img src={cheetah} className="cheetah-background cheetah-background-right"></img>

      </div>
    )
  }
export default Mannequin