import React from "react";
import NavBar from "../components/NavBar";
import UploadForm from "../components/UploadForm";
import ImageGallery from "../components/ImageGallery";
import CarouselBottom from "../components/CarouselBottom";
import UploadFormBottom from "../components/UploadFormBottom";
import Carousel from "../components/Carousel";
import ImageGalleryBottom from "../components/ImageGalleryBottom";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <NavBar />
      <Carousel />
      <CarouselBottom />
      <UploadForm />
      <UploadFormBottom />
      <ImageGallery />
      <ImageGalleryBottom />
    </div>
  );
};

export default Home;
