import React, { useState } from "react";
import useStorageBottom from "../hooks/useStorageBottom";

const UploadFormBottom = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { startUpload, progress } = useStorageBottom(); //uploads users local files to firestore database (bottoms only)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);  // setSelectedFile sets selectedFile = True if user is attempting to upload a file
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) { //if selectedFile equals True, startUpload(selectedFile) is called
      startUpload(selectedFile); //uploads the user's file to firestore
    }
    setSelectedFile(null); //selectedFile now equals false until user tries to upload again
  };

  return (
    <div className="text-center mt-10">
      <div className="font-bold text-black normal-case text-2xl mb-5">
        New Bottoms?
      </div>

      {/* Returning the form that allows for a user to upload a photo to firestore from their computer */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center flex-col gap-8"
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input file-input-bordered w-full max-w-xs"
        />
        <button //on clicking this button the file is actually uploaded
          type="submit"
          className={`btn gap-3 ${Boolean(progress) && "loading"}`}
          disabled={!selectedFile}
        >
          Upload Bottom<span></span>
        </button>
      </form>
    </div>
  );
};

export default UploadFormBottom;
