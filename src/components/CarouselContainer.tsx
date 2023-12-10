import Carousel from './Carousel'
import CarouselBottom from "./CarouselBottom";

// calls the top and bottom carousel and places them in a container together
// this allows for easier CSS manipulation and sizing on the page

const CarouselContainer = () => {
    return (
        <div> 
            <Carousel/>
            <CarouselBottom/>
        </div>
    )
  }
export default CarouselContainer