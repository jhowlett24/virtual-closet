import useFireStore from "../hooks/useFireStore";

const ImageGallery = () => {
  const { docs: images, isLoading } = useFireStore("bottom");

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  // bottom image gallery that is displayed in the closet page
  return (
    <div className="text-center text-black font-bold text-4xl mt-10">
      Bottoms:
      <div className="grid sm:grid-cols-1 md:grid-cols-3 justify-content-center gap-1 mt-10">
        {images.map((image) => (
          <div
            key={image.imageUrl}
            className="card card-compact closet-image"
          >
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
