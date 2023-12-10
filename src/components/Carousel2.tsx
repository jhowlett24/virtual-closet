// Carousel.tsx
import React, {Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFireStore from "../hooks/useFireStore";
import "../CSS/Carousel.css"; // Import your custom styles
import '../CSS/Inspiration.css'

const Carousel = () => {
  const { docs: images, isLoading } = useFireStore("images"); //gathers the top images from firestore database

  if (isLoading) {
    return (
      <div className="text-center mt-20 -mb-20]">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  //customizes certain aspects of the top carousel for the home page
   const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1300,
        speed: 1300,
        slidesToShow: 3, // Show three outfits at a time
        slidesToScroll: 1,
        centerMode: true, // Center the current slide
        centerPadding: "0", // No padding for the center mode
        pauseOnHover: false,
        responsive: [ {breakpoint: 480,  //changes to show one outfit for mobile device
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }}],
    };

  //returns slider (carousel) that gathers images from firestore and displays them as a card with certain settings
  //such as centering items, height, margin-top, width, etc. 
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
