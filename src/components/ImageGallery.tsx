import useFireStore from "../hooks/useFireStore";
import '../CSS/Closet.css'

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
    <div className="text-center font-bold text-4xl mt-10">
      Tops:
      <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-center gap-1 mt-10">
        {images.map((image) => (
          <div
            key={image.imageUrl}
            className="card card-compact closet-image closet-image-top"
          >
            <figure>
              <img src={image.imageUrl} alt="Shoes"/>
            </figure>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;