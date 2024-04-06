import { React, useState, useEffect } from 'react'
import { GameSection2Slider1,GameSection2Slider2,GameSection2Slider3,GameSection2Slider4,GameSection2Slider5 } from '../Imports/ImportImages';
import useWindowDimensions from '../Components/WindowDimensions'
import ImageGallery2 from './ImageGallery2';

function GamesSection2Slider() {
  const {width} = useWindowDimensions();
  const [currentGame, setCurrentGame] = useState(0); 
  const [loadedImages, setLoadedImages] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);
  const games = [
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
  useEffect(() => {
    const preloadImages = () => {
      const images = games.map(game => {
        const img = new Image();
        img.src = game.image;
        return img;
      });
      setLoadedImages(images);
    };

    preloadImages();
  }, [games]);

  const changeGame = (index) => {
    setFadeIn(true);
    setTimeout(() => {
      setCurrentGame(index);
      setFadeIn(false);
    }, 300); // Adjust timeout to match transition duration
  };


  return (
    <div className='game-slider-sec game-section-part game-section-2' >
      
      <div class="container">
        <div className="game-slider games-slider-sectionn">
          {width > 576 ? 
         <>
         <div className={`main-image ${fadeIn ? 'fade-in' : ''}`}>
            {loadedImages.map((image, index) => (
              <img
                key={index}
                src={games[index].image}
                alt='image'
                style={{ opacity: currentGame === index ? 1 : 0, position: currentGame === index ? 'relative' : 'absolute' }}
              />
            ))}

          </div>
          <div className="thumbnail-slider">
            {games.map((game, index) => (
              <>
                <div className={`thumbnail-part ${index === currentGame ? 'active' : ''}`} onClick={() => changeGame(index)}>
                  <img
                    key={index}
                    src={game.image}
                    alt='image'
                  />
                </div>
              </>
            ))}
          </div>
         </>  
         : <ImageGallery2/>
        }
          
        </div>
      </div>
    </div>
  )
}

export default GamesSection2Slider