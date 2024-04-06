import { React, useState, useEffect } from 'react'
import { GameSection1Slider1, GameSection1Slider2, GameSection1Slider3, GameSection1Slider4, GameSection1Slider5, GameSection1SliderBg } from '../Imports/ImportImages';
import ImageGallery from './ImageGallery';
import useWindowDimensions from '../Components/WindowDimensions'


function GamesSection1Slider() {
  const {width} = useWindowDimensions();
  const [currentGame, setCurrentGame] = useState(0); // Index of current game
  // const [fadeIn, setFadeIn] = useState(false); // State to trigger fade-in effect
  // const [preloadedImage, setPreloadedImage] = useState(null); // State to store preloaded image
  const [loadedImages, setLoadedImages] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);
  const games = [
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
    <div className='game-slider-sec game-section-part game-sectionn-1'>
      
        {/* <img src={GameSection1SliderBg} alt="" className='game-section-img'/> */}
      
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
          :
          <ImageGallery/>
          }
        </div>
      </div>
    </div>
  )
}

export default GamesSection1Slider