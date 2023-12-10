import Carousel2 from "./Carousel2";
import CarouselBottom2 from "./CarouselBottom2";
import '../CSS/Inspiration.css'

// Inspiration page calls Carousel2 (tops) and CarouselBottom2 (bottoms)
// The reason for creating new Carousel pages is because we had to change the settings
// to allow them to swipe on their own and for their order to be randomized

const Inspiration = () => {
  return (
    <div className="inspiration">
      <Carousel2 />
      <CarouselBottom2 />
    </div>
  );
};
export default Inspiration;