import React, { useEffect, useState } from "react";
import useFireStore from "../hooks/useFireStore";
import "../CSS/Carousel.css"; // Import your custom styles

interface RandomImageDisplayProps {
  images: { imageUrl: string }[];
  bottoms: { imageUrl: string }[];
  forceRerender: string;
}

const RandomImageDisplay: React.FC<RandomImageDisplayProps> = ({
  images,
  bottoms,
  forceRerender,
}) => {
  const [randomImage, setRandomImage] = useState<{ imageUrl: string } | null>(
    null
  );
  const [randomBottom, setRandomBottom] = useState<{ imageUrl: string } | null>(
    null
  );

  useEffect(() => {
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    }

    if (bottoms.length > 0) {
      const randomBottomIndex = Math.floor(Math.random() * bottoms.length);
      setRandomBottom(bottoms[randomBottomIndex]);
    }
  }, [images, bottoms, forceRerender]);

  if (!randomImage || !randomBottom) {
    return (
      <div className="text-center mt-20 -mb-20">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div>
      <div className="card card-compact">
        <div className="flex items-center justify-center h-full">
          <img
            src={randomImage.imageUrl}
            alt="Random Top"
            style={{
              width: "90%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>

      <div className="card card-compact mt-4">
        <div className="flex items-center justify-center h-full">
          <img
            src={randomBottom.imageUrl}
            alt="Random Bottom"
            style={{
              width: "90%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Random = () => {
  const { docs: images, isLoading: isImagesLoading } = useFireStore("images");
  const { docs: bottoms, isLoading: isBottomsLoading } = useFireStore("bottom");

  const [forceRerender, setForceRerender] = useState("");

  const getRandomImage = () => {
    setForceRerender(Date.now().toString()); // Update the forceRerender to force re-render
  };

  useEffect(() => {
    getRandomImage(); // Initial load
  }, [images, bottoms]);

  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <RandomImageDisplay
          images={images}
          bottoms={bottoms}
          forceRerender={forceRerender}
        />
        <button
          onClick={getRandomImage}
          className="bg-black text-white px-8 py-4 mt-4 text-xl rounded-xl mb-10"
          disabled={isImagesLoading || isBottomsLoading}
        >
          Show Another Random Outfit
        </button>
      </div>
    </div>
  );
};

export default Random;
