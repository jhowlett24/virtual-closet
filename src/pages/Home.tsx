import React from "react";
import NavBar from "../components/NavBar";
import UploadForm from "../components/UploadForm";
import ImageGallery from "../components/ImageGallery";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <NavBar />
      <Carousel />
      <UploadForm />
      <ImageGallery />
    </div>
  );
};

export default Home;
