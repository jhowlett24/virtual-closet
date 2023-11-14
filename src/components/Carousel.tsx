// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFireStore from "../hooks/useFireStore";
import "../CSS/Carousel.css"; // Import your custom styles

const CustomPrevArrow: React.FC<any> = ({ onClick }) => (
  <div className="slick-arrow custom-prev-arrow" onClick={onClick}>
    Prev
  </div>
);

const CustomNextArrow: React.FC<any> = ({ onClick }) => (
  <div className="slick-arrow custom-next-arrow" onClick={onClick}>
    Next
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
    dots: true,
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
            <div className="card-body">
              <p>Upload by: {image.userEmail}</p>
              <span>Created On: {image.createdAt.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
