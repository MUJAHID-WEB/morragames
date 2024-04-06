import {React, useState} from 'react'

function SliderWithThumbnails (props) {
  const {images} = props;
   
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };
  return (
    <div className='container'>
    <div className="slider-container game-section-sliderr">
      <div className="main-image">
      <img
          src={images[selectedImageIndex]}
          alt="Main"
          style={{
            width: '100%',
            height: 'auto',
            opacity: 1,
            transition: 'opacity 0.3s ease', // Ensure smooth transition
          }}
        />
      </div>
      <div className="thumbnail-slider">
      {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={index === selectedImageIndex ? 'active' : ''}
            onClick={() => handleThumbnailClick(index)}
            style={{
              width: '50px',
              height: 'auto',
              marginBottom: '5px',
              cursor: 'pointer',
              opacity: index === selectedImageIndex ? 1 : 0.5,
              transition: 'opacity 0.5s ease',
            }}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default SliderWithThumbnails 