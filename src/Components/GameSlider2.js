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
    centerPadding: "460px",
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
        breakpoint: 1920,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "460px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "320px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "300px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "280px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "260px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "210px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "150px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 3,
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
