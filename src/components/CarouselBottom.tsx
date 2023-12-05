// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFireStore from "../hooks/useFireStore";
import "../CSS/Carousel.css"; // Import your custom styles
import next from "../Images/next.svg";
import prev from "../Images/prev.svg";

const CustomPrevArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="prev-arrow absolute top-[30%] left-[25%] z-10 cursor-pointer"
    onClick={onClick}
  >
    <img src={prev} className="prev-arrow-clueless"></img>
  </div>
);

const CustomNextArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="next-arrow absolute top-[30%] right-[25%] cursor-pointer"
    onClick={onClick}
  >
    <img src={next} className="next-arrow-clueless"></img>
  </div>
);

const Carousel = () => {
  const { docs: images, isLoading } = useFireStore("bottom");

  if (isLoading) {
    return (
      <div className="text-center -mt-30">
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
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.imageUrl}>
          <div className="card card-compact">
            <figure className="flex items-center justify-center h-[500px] -mt-10">
              <img
                className="bottom-image-carousel"
                src={image.imageUrl}
                alt="Shoes"
                style={{
                  width: "25%",
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
