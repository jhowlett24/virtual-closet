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

  return (
    <div className="text-center font-bold text-4xl mt-10">
      Bottoms:
      <div className="grid md:grid-cols-3 justify-center gap-4 mt-10">
        {images.map((image) => (
          <div
            key={image.imageUrl}
            className="card card-compact w-full bg-base-100 shadow-xl"
          >
            <figure>
              <img src={image.imageUrl} alt="Shoes" />
            </figure>
            <div className="card-body">
              <p>Upload by: {image.userEmail}</p>
              <span>Uploaded On: {image.createdAt.toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
