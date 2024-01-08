import React, { useState } from "react";
import ImageModal from "./ImageModal";
import LoadingSpinner from "./LoadingSpinner";
import "./css/GalleryPage.css";
import Hero from "./Hero";

// require all images from the assets folder
const images = require.context("./assets/images/gallery", true);

// create an array of image objects
const imageObjects = images.keys().map((path) => ({
  id: path,
  title: path
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, ""),
  thumbnailUrl: images(path),
  fullUrl: images(path),
}));

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Hero
        title="Premium Images"
        subtitle="Explore my selection of premium images"
      />
      {loading && <LoadingSpinner />}
      <div className="row">
        {imageObjects.map((image) => (
          <div key={image.id} className="col-lg-3 col-md-4 col-6 mb-4">
            <a href="#" onClick={() => handleImageClick(image)}>
              <img
                src={image.thumbnailUrl}
                className={`img-fluid ${
                  selectedImage ? "fade-out" : "fade-in"
                }`}
                alt={image.title}
                onLoad={() => setLoading(false)}
              />
            </a>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} closeModal={handleModalClose} />
      )}
    </>
  );
};

export default GalleryPage;
