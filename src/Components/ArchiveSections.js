import React, { useRef } from 'react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowDimensions from './WindowDimensions';
import { NewsArchive1,NewsArchive2 } from '../Imports/ImportImages';
import { Link } from 'react-router-dom';


const ArchiveSections = () => {
    const { width } = useWindowDimensions();
    const swiperRef = useRef(null);
    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const currentIndex = swiperRef.current.swiper.activeIndex;
            swiperRef.current.swiper.slideTo(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const currentIndex = swiperRef.current.swiper.activeIndex;
            swiperRef.current.swiper.slideTo(currentIndex - 1);
        }
    };

    return (
        <>
            <section className="section news-archive">
                <div className="container z-2">
                    <div className="spacer_80"></div>
                    <div slider="blog" className="slider-main_component">
                        <div className="slider-main_top-wrapper">
                            <div>
                                <h2 className="h_84 section-heading">News archive</h2>
                                <div className="p_21 text_neutral-500 text_lh-1-5 section-paragraph">Diverse Worlds, One Ecosystem: Morra Games Unleashed</div>
                            </div>
                            <div>
                                <div className="slider-main_button-wrapper" >
                                    <div>
                                    <div style={{marginRight:'10px'}} aria-label="Previous slide" onClick={handlePrevious} class="slider-main_button swiper-prev w-inline-block is-disabled" tabindex="-1" role="button" aria-controls="swiper-wrapper-d4be8da0eb428cb2" aria-disabled="true"><div class="icon_20 w-embed"><svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.28125 9.3125L11.2812 4.3125C11.6562 3.90625 12.3125 3.90625 12.6875 4.3125C13.0938 4.6875 13.0938 5.34375 12.6875 5.71875L8.40625 10L12.6875 14.3125C13.0938 14.6875 13.0938 15.3438 12.6875 15.7188C12.3125 16.125 11.6562 16.125 11.2812 15.7188L6.28125 10.7188C5.875 10.3438 5.875 9.6875 6.28125 9.3125Z" fill="currentColor"></path>
                                    </svg></div></div>
                                    <div aria-label="Next slide" onClick={handleNext} class="slider-main_button swiper-next w-inline-block" tabindex="0" role="button" aria-controls="swiper-wrapper-d4be8da0eb428cb2" aria-disabled="false"><div class="icon_20 w-embed"><svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.6875 9.3125C14.0938 9.6875 14.0938 10.3438 13.6875 10.7188L8.6875 15.7188C8.3125 16.125 7.65625 16.125 7.28125 15.7188C6.875 15.3438 6.875 14.6875 7.28125 14.3125L11.5625 10L7.28125 5.71875C6.875 5.34375 6.875 4.6875 7.28125 4.3125C7.65625 3.90625 8.3125 3.90625 8.6875 4.3125L13.6875 9.3125Z" fill="currentColor"></path>
                                    </svg></div>
                                    </div>
                                    </div>
                                    <Link to='/' className="btn neutral-wide w-inline-block">
                                        <div color-mode="light" className="btn_bg"></div>
                                        <div className="p_14">View All</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="spacer_32"></div>
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={width < 768 ? (width < 425 ? 10 : 10) : 15}
                            slidesPerView={width < 768 ? (width < 440 ? 1 : 2) : 2}
                            // navigation
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <Link to='/news1' className="blog-card_link is--more w-inline-block">
                                    <img alt="" loading="lazy" src={NewsArchive1} className="card_img-12r" />
                                    <div className="blog-card_text-wrap is--more">
                                        <div className="blog_category-detail_wrap">
                                            {/* <div style={{ color: '#97e0ff' }} className="blog_category-detail count">Ecosystem</div> */}
                                            <div className="blog_category-dot"></div>
                                            <div>
                                                <div className="blog_read same-font">November 5, 2023</div>
                                            </div>
                                        </div>
                                        <div className="spacer_16"></div>
                                        <h3>Morra TGE Quest: The Power of RA</h3>
                                        <p className="h_20 text-color-white">We’re proud to present the “Morra TGE Zealy Quest,” a journey that not only celebrates our upcoming Morra Token launch but also rewards our valued users for their support and participation.</p>
                                        <div className="blog_read same-font absolute">Gaming, Morra Studio — 15 min read</div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/news2' className="blog-card_link is--more w-inline-block">
                                    <img alt="" loading="lazy" src={NewsArchive2} className="card_img-12r" />
                                    <div className="blog-card_text-wrap is--more">
                                        <div className="blog_category-detail_wrap">
                                            {/* <div style={{ color: '#97e0ff' }} className="blog_category-detail count">Ecosystem</div> */}
                                            <div className="blog_category-dot"></div>
                                            <div>
                                                <div className="blog_read same-font">November 5, 2023</div>
                                            </div>
                                        </div>
                                        <div className="spacer_16"></div>
                                        <h3>Unlocking the Potential: Morra Token and the Epoch System</h3>
                                        <p className="h_20 text-color-white">Morra Token ($MORRA) is the native utility token of the Morra Games ecosystem. It is built on the Ethereum blockchain and is designed to serve as the primary medium of exchange within the Morra Studio platform.</p>
                                        <div className="blog_read same-font absolute">Gaming, Morra Studio — 15 min read</div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/news1' className="blog-card_link is--more w-inline-block">
                                    <img alt="" loading="lazy" src={NewsArchive1} className="card_img-12r" />
                                    <div className="blog-card_text-wrap is--more">
                                        <div className="blog_category-detail_wrap">
                                            {/* <div style={{ color: '#97e0ff' }} className="blog_category-detail count">Ecosystem</div> */}
                                            <div className="blog_category-dot"></div>
                                            <div>
                                                <div className="blog_read same-font">November 5, 2023</div>
                                            </div>
                                        </div>
                                        <div className="spacer_16"></div>
                                        <h3>Morra TGE Quest: The Power of RA</h3>
                                        <p className="h_20 text-color-white">We’re proud to present the “Morra TGE Zealy Quest,” a journey that not only celebrates our upcoming Morra Token launch but also rewards our valued users for their support and participation.</p>
                                        <div className="blog_read same-font absolute">Gaming, Morra Studio — 15 min read</div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/news2' className="blog-card_link is--more w-inline-block">
                                    <img alt="" loading="lazy" src={NewsArchive2} className="card_img-12r" />
                                    <div className="blog-card_text-wrap is--more">
                                        <div className="blog_category-detail_wrap">
                                            {/* <div style={{ color: '#97e0ff' }} className="blog_category-detail count">Ecosystem</div> */}
                                            <div className="blog_category-dot"></div>
                                            <div>
                                                <div className="blog_read same-font">November 5, 2023</div>
                                            </div>
                                        </div>
                                        <div className="spacer_16"></div>
                                        <h3>Unlocking the Potential: Morra Token and the Epoch System</h3>
                                        <p className="h_20 text-color-white">Morra Token ($MORRA) is the native utility token of the Morra Games ecosystem. It is built on the Ethereum blockchain and is designed to serve as the primary medium of exchange within the Morra Studio platform.</p>
                                        <div className="blog_read same-font absolute">Gaming, Morra Studio — 15 min read</div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/news1' className="blog-card_link is--more w-inline-block">
                                    <img alt="" loading="lazy" src={NewsArchive1} className="card_img-12r" />
                                    <div className="blog-card_text-wrap is--more">
                                        <div className="blog_category-detail_wrap">
                                            {/* <div style={{ color: '#97e0ff' }} className="blog_category-detail count">Ecosystem</div> */}
                                            <div className="blog_category-dot"></div>
                                            <div>
                                                <div className="blog_read same-font">November 5, 2023</div>
                                            </div>
                                        </div>
                                        <div className="spacer_16"></div>
                                        <h3>Morra TGE Quest: The Power of RA</h3>
                                        <p className="h_20 text-color-white">We’re proud to present the “Morra TGE Zealy Quest,” a journey that not only celebrates our upcoming Morra Token launch but also rewards our valued users for their support and participation.</p>
                                        <div className="blog_read same-font absolute">Gaming, Morra Studio — 15 min read</div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to='/news2' className="blog-card_link is--more w-inline-block">
                                    <img alt="" loading="lazy" src={NewsArchive2} className="card_img-12r" />
                                    <div className="blog-card_text-wrap is--more">
                                        <div className="blog_category-detail_wrap">
                                            {/* <div style={{ color: '#97e0ff' }} className="blog_category-detail count">Ecosystem</div> */}
                                            <div className="blog_category-dot"></div>
                                            <div>
                                                <div className="blog_read same-font">November 5, 2023</div>
                                            </div>
                                        </div>
                                        <div className="spacer_16"></div>
                                        <h3>Unlocking the Potential: Morra Token and the Epoch System</h3>
                                        <p className="h_20 text-color-white">Morra Token ($MORRA) is the native utility token of the Morra Games ecosystem. It is built on the Ethereum blockchain and is designed to serve as the primary medium of exchange within the Morra Studio platform.</p>
                                        <div className="blog_read same-font absolute">Gaming, Morra Studio — 15 min read</div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                        {/* <div className="spacer_80"></div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArchiveSections