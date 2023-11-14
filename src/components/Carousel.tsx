// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFireStore from "../hooks/useFireStore";
import "../CSS/Carousel.css"; // Import your custom styles

const CustomPrevArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="custom-arrow custom-prev-arrow absolute top-[50%] left-[-40px] transform -translate-y-1/2 text-4xl"
    onClick={onClick}
  >
    &larr;
  </div>
);

const CustomNextArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="custom-arrow custom-next-arrow absolute top-[50%] right-0 transform -translate-y-1/2 text-4xl"
    onClick={onClick}
  >
    &rarr;
  </div>
);

const Carousel = () => {
  const { docs: images, isLoading } = useFireStore("images");

  if (isLoading) {
    return (
      <div className="text-center mt-10">
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
          <div className="card card-compact bg-base-100 square-slide">
            <figure className="flex items-center justify-center">
              <img
                src={image.imageUrl}
                alt="Shoes"
                style={{
                  width: "30%",
                  height: "fit-content",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </figure>
            <div className="card-body text-center">
              <p>Upload by: {image.userEmail}</p>
              <span>Uploaded On: {image.createdAt.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
