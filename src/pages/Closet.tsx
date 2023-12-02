import NavBar from "../components/NavBar";
import UploadForm from "../components/UploadForm";
import ImageGallery from "../components/ImageGallery";
import UploadFormBottom from "../components/UploadFormBottom";
import ImageGalleryBottom from "../components/ImageGalleryBottom";
import '../CSS/Closet.css'

const Closet = () => {
  return (
    <div>
        <NavBar/>
        <div className="closet">
          <div className="tops"> 
            <UploadForm />
            <ImageGallery />
          </div>
          <div className="bottoms">
            <UploadFormBottom />
            <ImageGalleryBottom />
          </div>
        </div>
    </div>
  );
};

export default Closet;