import useFireStore from "../hooks/useFireStore";
import "../CSS/Closet.css";

const ImageGallery = () => {
  const { docs: images, isLoading } = useFireStore("images");

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="text-center text-black font-bold text-4xl mt-10">
      Tops:
      <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
        {images.map((image) => (
          <div key={image.imageUrl} className="card card-compact closet-image">
            <figure>
              <img src={image.imageUrl} alt="Shoes" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
