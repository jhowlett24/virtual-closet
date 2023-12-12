// Import necessary dependencies and styles
import React, { useEffect, useState } from "react";
import useFireStore from "../hooks/useFireStore";
import "../CSS/Carousel.css";

// Define the props interface for RandomImageDisplay component
interface RandomImageDisplayProps {
  images: { imageUrl: string }[];
  bottoms: { imageUrl: string }[];
  forceRerender: string;
}

// Define the RandomImageDisplay component
const RandomImageDisplay: React.FC<RandomImageDisplayProps> = ({
  images,
  bottoms,
  forceRerender,
}) => {
  // State to store a random top image and bottom image
  const [randomImage, setRandomImage] = useState<{ imageUrl: string } | null>(
    null
  );
  const [randomBottom, setRandomBottom] = useState<{ imageUrl: string } | null>(
    null
  );

  // useEffect to update randomImage and randomBottom when images, bottoms, or forceRerender change
  useEffect(() => {
    // Select a random top image if images array is not empty
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    }

    // Select a random bottom image if bottoms array is not empty
    if (bottoms.length > 0) {
      const randomBottomIndex = Math.floor(Math.random() * bottoms.length);
      setRandomBottom(bottoms[randomBottomIndex]);
    }
  }, [images, bottoms, forceRerender]);

  // Display a loading spinner if randomImage or randomBottom is null
  if (!randomImage || !randomBottom) {
    return (
      <div className="text-center mt-20 -mb-20">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  // Display the random top and bottom images
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

// Define the Random component
const Random = () => {
  // Fetch top and bottom images from Firestore using custom hook
  const { docs: images, isLoading: isImagesLoading } = useFireStore("images");
  const { docs: bottoms, isLoading: isBottomsLoading } = useFireStore("bottom");

  // State to force re-render when needed
  const [forceRerender, setForceRerender] = useState("");

  // Function to update forceRerender and trigger a re-render
  const getRandomImage = () => {
    setForceRerender(Date.now().toString()); // Update the forceRerender to force re-render
  };

  // useEffect to trigger an initial load of random images
  useEffect(() => {
    getRandomImage(); // Initial load
  }, [images, bottoms]);

  // Display the RandomImageDisplay component along with a button to show another random outfit
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
          className="random-text bg-black px-8 py-4 mt-4 text-xl rounded-xl mb-10"
          disabled={isImagesLoading || isBottomsLoading}
        >
          Show Another Random Outfit
        </button>
      </div>
    </div>
  );
};

// Export the Random component as the default export
export default Random;
