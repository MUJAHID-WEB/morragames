import React, { useRef } from 'react'
import NavSection from '../Components/NavSection'
import FooterSections from '../Components/FooterSections'
import { ArchiveBg, Hero_bg, NewsArchive1, NewsArchive2, NewsArchive3, ourGame1, right_arrow_icon } from '../Imports/ImportImages'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowDimensions from '../Components/WindowDimensions';

const Archive = () => {
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
        <>  <div className='news-archive-page'>
            <NavSection/>
            <section className="inner-wrapper bg_dark ">
                <div className="hero_bg-gradient"></div>
                <div>
                    <div className="container_bg z-0">
                        <img src={ArchiveBg} alt="" sizes="(max-width: 767px) 100vw, 62vw" className="hero_bg-image" />
                        {/* <img src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c08906102d36e42281d15_Home%20Hero%20Bg%2003.webp" alt="" sizes="(max-width: 767px) 100vw, 68vw" srcSet="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c08906102d36e42281d15_Home%20Hero%20Bg%2003-p-500.webp 500w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c08906102d36e42281d15_Home%20Hero%20Bg%2003-p-800.webp 800w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c08906102d36e42281d15_Home%20Hero%20Bg%2003.webp 1032w" className="hero_bg-image is-2" />
                            <img src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65ae7d564c5383698df27957_Glass%20shield%404-1080x1080%201.webp" loading="eager" sizes="(max-width: 479px) 100vw, 92vw" srcSet="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65ae7d564c5383698df27957_Glass%20shield%404-1080x1080%201-p-500.webp 500w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65ae7d564c5383698df27957_Glass%20shield%404-1080x1080%201-p-800.webp 800w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65ae7d564c5383698df27957_Glass%20shield%404-1080x1080%201.webp 1203w" alt="" className="hero_bg-image is-3" /> */}
                    </div>
                    <div className="container z-2">
                        <div className="f_vertical-center_t-center">
                            <div className="spacer_200 mobile_300"></div>
                            <link rel="prefetch" href="/blog/multiversx-blockchain-data-google-bigquery" />
                            <div className="spacer_16"></div>
                            <h1 className="h_64 page-title">News Archive</h1>
                            <div className="spacer_24"></div>
                            <div className="text_maxch-85">
                                <p className="page-paragraph p_21 text_neutral-500 text-white">It also plays a significant role in shaping the governance and direction of the Morra Studio ecosystem, offering users the opportunity to influence the platform’s development.</p>
                            </div>
                            <div className="spacer_40"></div>
                            <link rel="prefetch" href="/ecosystem" />

                            <link rel="prefetch" href="/builders/start-building" />
                        </div>
                        <div className="nav-transition"></div>
                        <section className="section news-archive">
                            <div slider="blog" className="slider-main_component">
                                <Swiper
                                    ref={swiperRef}
                                    spaceBetween={width < 768 ? (width < 425 ? 10 : 10) : 15}
                                    slidesPerView={width < 768 ? (width < 425 ? 1 : 2) : 2}
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
                                </Swiper>
                            </div>
                        </section>
                        <div className="spacer_20"></div>
                        <section className="section news-archive">
                            <div slider="blog" className="slider-main_component">
                                <Swiper
                                    ref={swiperRef}
                                    spaceBetween={width < 768 ? (width < 425 ? 10 : 10) : 15}
                                    slidesPerView={1}
                                    // navigation
                                    pagination={{ clickable: true }}
                                >
                                    <SwiperSlide>
                                        <Link to='' className="blog-card_link is--more w-inline-block" style={{ height: '300px' }}>
                                            <img alt="" loading="lazy" src={NewsArchive3} className="card_img-12r" />
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
                                                <p className="h_20 text-color-white">Morra Token ($MORRA) is the native utility token of the Morra Games ecosystem. It is built on the <br/> Ethereum blockchain and is designed to serve as the primary medium of exchange within the Morra <br/> Studio platform.</p>
                                                <div className="blog_read same-font absolute">Gaming, Morra Studio — 15 min read</div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="spacer_80"></div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <FooterSections />
            </div>
        </>
    )
}

export default Archive