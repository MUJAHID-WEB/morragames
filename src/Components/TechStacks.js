import React from 'react'
import { Link } from 'react-router-dom'
import { company_1, company_2, company_3, company_4 } from '../Imports/ImportImages'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation,Pagination } from 'swiper/core';
import useWindowDimensions from './WindowDimensions';
import { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import ImageGallery from './ImageGallery';

SwiperCore.use([Navigation,Autoplay,Pagination]);


function TechStacks() {
  const { width } = useWindowDimensions()
  return (
    <div className='tech-stacks'>
      <div class="container z-2">
        <div class="f_vertical-center_t-center">
          <div class="p_16 op_40 tech-stack-para">As Seen On</div>
          <div class="spacer_32"></div>
          <div class="w-layout-grid home_partner-wrap">
            <Swiper
            
              // navigation={true} 
              slidesPerView={width < 840 ? (width < 630 ? (width < 300 ? 1: 2) : 3 ): 4} // Number of slides per view
              // spaceBetween={30} 
              loop={true}
              autoplay={true}
              pagination= {true }
              style={{padding: "0px 40px"}}
            >
            <div style={{paddingBottom:"100px"}}>
              <SwiperSlide>
                <a href="https://www.igdb.com/companies/morra-games" target="_blank" className="home-partner_logo">
                  <img src={company_1} loading="lazy" alt="Google Cloud" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://playtoearn.net/news/the-morra-games-store-is-launching-soon-in-early-access" target="_blank" className="home-partner_logo">
                  <img src={company_2} loading="lazy" alt="Telekom" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://www.playtoearn.online/tag/karnak-legacy/" target="_blank" className="home-partner_logo">
                  <img src={company_3} loading="lazy" alt="Tencent Cloud" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="https://www.imdb.com/title/tt21358490/" target="_blank" className="home-partner_logo">
                  <img src={company_4} loading="lazy" alt="AWS" />
                </a>
              </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStacks