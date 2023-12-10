// CarouselBottom.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFireStore from "../hooks/useFireStore";
import "../CSS/Carousel.css"; // Import your custom styles
import next from "../Images/next.svg";
import prev from "../Images/prev.svg";


// previous arrow for home page
const CustomPrevArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="prev-arrow prev-arrow-bottom absolute z-10 cursor-pointer"
    onClick={onClick}
  >
    <img src={prev} className="prev-arrow-clueless"></img>
  </div>
);

// next arrow for home page
const CustomNextArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="next-arrow next-arrow-bottom absolute cursor-pointer"
    onClick={onClick}
  >
    <img src={next} className="next-arrow-clueless"></img>
  </div>
);

const Carousel = () => {
  const { docs: images, isLoading } = useFireStore("bottom");  //gathers the bottom images from firestore database

  if (isLoading) {
    return (
      <div className="text-center -mt-30">
        <progress className="progress w-56"></progress>
      </div>
    );
  }


  //customizes certain aspects of the bottom carousel for the home page
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    centerMode: true, // Center the current slide
    centerPadding: "0", // No padding for the center mode
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  //returns slider (carousel) that gathers images from firestore and displays them as a card with certain settings
  //such as centering items, height, margin-top, width, etc. 
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.imageUrl}>
          <div className="bottom-carousel-card card card-compact">
            <figure className="flex items-center justify-center -mt-10">
              <img
                className="bottom-image-carousel"
                src={image.imageUrl}
                alt="Shoes"
                style={{
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
