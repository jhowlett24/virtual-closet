// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFireStore from "../hooks/useFireStore";
import "../CSS/Carousel.css"; // Import your custom styles
import next from "../Images/next.svg";
import prev from "../Images/prev.svg";
import cheetah from "../Images/cheetah.svg";

const CustomPrevArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="prev-arrow z-10 cursor-pointer"
    onClick={onClick}
  >
    <img src={prev} className="prev-arrow-clueless" alt="Previous"></img>
  </div>
);

// const CustomNextArrow: React.FC<any> = ({ onClick }) => (
//   <div
//     className="next-arrow absolute top-[80%] right-[40%]"
//     onClick={onClick}
//   >
//      <img src={next} className="next-arrow-clueless"></img>
//   </div>
// );
// below is the revised version adding cursor-pointer and z-10 put the arrow bottom above other element
// I also added alt for better accessiblitiy

const CustomNextArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="next-arrow z-10 cursor-pointer"
    onClick={onClick}
  >
    <img src={next} className="next-arrow-clueless" alt="Next" />
  </div>
);

const Carousel = () => {
  const { docs: images, isLoading } = useFireStore("images");

  if (isLoading) {
    return (
      <div className="text-center mt-20 -mb-20]">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

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

  return (
    <Slider {...settings} className="slider-top">
      {images.map((image) => (
        <div key={image.imageUrl}>
          <div className="card card-compact">
            <div className="top-carousel flex items-center justify-center">
              <img
                className="top-image-carousel"
                src={image.imageUrl}
                alt="Shoes"
                style={{
                  height: "fit-content",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
