// ImageGallery.js
import React, { useState } from 'react';
import { GameSection2Slider1,GameSection2Slider2,GameSection2Slider3,GameSection2Slider4,GameSection2Slider5 } from '../Imports/ImportImages';

const ImageGallery2 = () => {

    const images = [
        {
          image: GameSection2Slider1,
        },
        {
          image: GameSection2Slider2,
        },
        {
          
          image: GameSection2Slider3,
          
        },
        {
          image: GameSection2Slider4,
         
        },
        {
          image: GameSection2Slider5,
        },
        // Add more games as needed
      ];
      
      const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className="gallery games-gallery-area">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          alt={`Image ${index}`}
          onClick={() => openModal(index)}
          className="gallery-image"
        />
      ))}
      {selectedImage !== null && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={images[selectedImage].image} alt={`Image ${selectedImage.image}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery2;
