import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5 } from '../Imports/ImportImages';

import useWindowDimensions from './WindowDimensions';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function GameSlider() {
  const {width} = useWindowDimensions()
  return (
    <div className='gameSlider'>
      <div className="container z-2">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={2}
          spaceBetween={15}
          // loop={true}
          slidesPerView={width < 768 ? 2 : 5}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth:width < 768 ? 150 : 150 ,
            modifier: width < 768 ? 8 : 3 ,
          }}
          pagination={{ clickable: true }}
          navigation={width < 768 ? false : true}
          className="swiper_container"
          style={{ width :width < 768 ? '100%' : '100%' }}
        >
          <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
        </Swiper>
        
      </div>
    </div>
  );
}

export default GameSlider;
