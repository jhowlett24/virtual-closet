// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFireStore from "../hooks/useFireStore";
import "../CSS/Carousel.css"; // Import your custom styles
import '../CSS/Inspiration.css'
import next from "../Images/next.svg";
import prev from "../Images/prev.svg";
import cheetah from "../Images/cheetah.svg";


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
    autoplay: true,
    autoplaySpeed: 1300,
    speed: 500,
    slidesToShow: 3, // Show one slide at a time
    slidesToScroll: 1,
    centerMode: true, // Center the current slide
    centerPadding: "0", // No padding for the center mode
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="inspiration slider-top">
      {images.map((image) => (
        <div key={image.imageUrl}>
          <div className="card card-compact">
            <div className="flex items-center justify-center mt-10 -mb-20">
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
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
