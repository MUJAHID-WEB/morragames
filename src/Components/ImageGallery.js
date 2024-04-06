// ImageGallery.js
import React, { useState } from 'react';
import { GameSection1Slider1, GameSection1Slider2, GameSection1Slider3, GameSection1Slider4, GameSection1Slider5, GameSection1SliderBg } from '../Imports/ImportImages';

const ImageGallery = () => {

    const images = [
        {
          image: GameSection1Slider1,
        },
        {
         
          image: GameSection1Slider2,
         
        },
    
        {
          
          image: GameSection1Slider3,
          
        },
        {
          image: GameSection1Slider4,
         
        },
        {
          image: GameSection1Slider5,
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

export default ImageGallery;
