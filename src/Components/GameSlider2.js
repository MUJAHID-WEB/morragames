import React from "react";


// import SwiperCore, { EffectCoverflow, Pagination, Navigation,Autoplay } from 'swiper';
// import { slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5,slide_image_6,slide_image_7 } from '../Imports/ImportImages';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import {
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
  slide_image_7,
} from "../Imports/ImportImages";

import useWindowDimensions from "./WindowDimensions";

// SwiperCore.use([EffectCoverflow, Pagination, Navigation,Autoplay]);

function GameSlider2() {
  const { width } = useWindowDimensions();
  var settings = {
    centerMode: true,
    centerPadding: "15px",
    // touchThreshold: 100,
    dots: true,
    slidesToShow: 5,
    draggable: true,
    infinite: true,
    speed: 800,
    // autoplay : true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="gameSlider">
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={slide_image_1} />
          </div>
          <div>
            <img src={slide_image_2} />
          </div>
          <div>
            <img src={slide_image_3} />
          </div>
          <div>
            <img src={slide_image_4} />
          </div>
          <div>
            <img src={slide_image_5} />
          </div>
          <div>
            <img src={slide_image_7} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default GameSlider2;
