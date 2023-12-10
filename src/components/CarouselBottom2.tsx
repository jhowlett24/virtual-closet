// Carousel.tsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFireStore from "../hooks/useFireStore";
import "../CSS/Carousel.css"; // Import your custom styles


const Carousel = () => {
  const { docs: images, isLoading } = useFireStore("bottom"); //gathers the bottom images from firestore database

  if (isLoading) {
    return (
      <div className="text-center -mt-30">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  const settings = { //customizes certain aspects of the bottom carousel for the inspiration page
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: 3, // Show three outfits at a time
    slidesToScroll: 1,
    centerMode: true, // Center the current slide
    centerPadding: "0", // No padding for the center mode
    autoplay: true,
    autoplaySpeed: 1300,
    rtl: true,
    pauseOnHover: false,
    responsive: [ {breakpoint: 480, //changes to show one outfit for mobile device
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }}],
  };

  //returns slider (carousel) that gathers images from firestore and displays them as a card with certain settings
  //such as centering items, height, margin-top, width, etc. 

  return ( 
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.imageUrl}>
          <div className="card card-compact">
            <figure className="flex items-center justify-center h-[500px] -mt-20">
              <img
                src={image.imageUrl}
                alt="Shoes"
                style={{
                  width: "70%",
                  height: "fit-content",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </figure>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
