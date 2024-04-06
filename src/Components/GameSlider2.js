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
import "../App.css";


// SwiperCore.use([EffectCoverflow, Pagination, Navigation,Autoplay]);

function GameSlider2() {
  var settings = {
    centerMode: true,
    centerPadding: "380px",
  //  touchThreshold: 5,
    dots: true,
    slidesToShow: 3,
    draggable: true,
    infinite: true,
    speed: 800,
    swipeToSlide: true,
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

  const images = [slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5, slide_image_7];

  return (
    <div className="gameSlider">
      <div className="container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="sliderItem">
              <img src={image} alt={`slide-${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );


}

export default GameSlider2;
