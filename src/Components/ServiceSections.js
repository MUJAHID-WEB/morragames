import React, { useEffect, useState } from 'react'
import { Hero_bg1, Hero_icon_1, Hero_bg2, Hero_bg3, Hero_bgMobb,Morraverse, Comics, Escort, right_arrow_icon } from '../Imports/ImportImages'
import { Link } from 'react-router-dom'
import { HeroSlidesData } from '../resources/localData'
import useWindowDimensions from './WindowDimensions'

const ServiceSections = () => {
    const [activeItem, setActiveItem] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
    const {width} = useWindowDimensions();

    useEffect(() => {
        setFadeIn(true);
    }, [activeItem]);

    const handleItemClick = async(index) => {
        if(activeItem !== index){
        setFadeIn(false);
        setActiveItem(index);
        }
    };

    // const backgroundImages = [
    //     {web:Hero_bg3,mob:Hero_bg3},
    //     {web:Hero_bg3,mob:Hero_bg3},
    //     {web:Hero_bg3,mob:Hero_bg3},
    //     Hero_bg1, Hero_bg2, Hero_bg3,Hero_bgMobb
    // ];
    return (
        <>
            <section className="inner-wrapper bg_dark">
                <div className="hero_bg-gradient"></div>
                <div>

                    <div style={{height:'100vh',overflow:'hidden',borderRadius:'12px',backgroundColor: '#000'}} className="container_bg z-0 banner-homee">
                        
                            <> 
                            <img src={Hero_bg3} alt="" sizes="(max-width: 767px) 100vw, 62vw" className='hero_bg-image' />
                            </>
                        

                    </div>
                    <div className="container z-2 h-small-mobb" style={{ position: 'relative',height: '100vh',display:'flex',flexDirection : 'column', justifyContent:'center' }}>
                        {/* <div className='swiper-silder-menu f_vertical-center_t-center '>
                            {['Ownership', 'Innovation', 'Sustainability'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`menu-item ${index === activeItem ? 'active' : ''}`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div> */}
                        <div className="f_vertical-center_t-center">
                            <div className="spacer_200 mobile_300"></div>
                            <div className='swiper-silder-menu f_vertical-center_t-center '>
                            {['Ownership', 'Innovation', 'Sustainability'].map((item, index) => (
                                <div
                                    key={index}
                                    className={`menu-item ${index === activeItem ? 'active' : ''}`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div> 
                       
                            <Link to='/' className="btn outline-green w-inline-block">
                                <div color-mode="light" data-w-id="122a7b7b-7a76-5b49-a473-0c09ae6c842b" className="btn_bg bg_outline"></div>
                               
                                <div color-mode="light" className="btn_outline-wrap">
                                    <div className="btn_new">New</div>
                                    <div className="p_14 text_inline">Diverse Worlds, One Ecosystem</div>
                                </div>
                            </Link>
                            <link rel="prefetch" href="/blog/multiversx-blockchain-data-google-bigquery" />
                           
                            <div className="spacer_12"></div>
                            <h1 className="h_64 page-title">{HeroSlidesData[activeItem].title}</h1>
                            <div className="spacer_24"></div>
                            <div className="text_maxch-85">
                                <p className="page-paragraph p_21 text_neutral-500 text-white">{HeroSlidesData[activeItem].desc} </p>
                            </div>
                            <div className="spacer_40"></div>
                            <link rel="prefetch" href="/ecosystem" />
                            <Link to='/' className="btn teal w-inline-block">
                                <div color-mode="light" className="btn_bg bg_dark-teal"></div>
                                <div className="p_16 text-white display"><span>Discover More</span> <img src={right_arrow_icon} className="icon_20 margin-left-10" alt='->' />
                                </div>

                            </Link>
                            <link rel="prefetch" href="/builders/start-building" />
                            <div className="spacer_100"></div>
                        </div>
                        <div className="nav-transition"></div>
                    </div>
                </div>

                <section className='services'>
                    <div className="container z-2">
                        <div>
                            <h2 className="h_84 section-heading" style={{fontSize: '38px'}}>Services</h2>
                            <div className="p_21 text_neutral-500 text_lh-1-5 text-white">Diverse Worlds, One Ecosystem: Morra Games Unleashed</div>
                        </div>
                        <div className="spacer_40"></div>
                        <div className="bento-grid_12">
                            <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac317-0c8ce33a" className="grid_1 mobile_2 full-height">
                                <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac322-0c8ce33a" className="bento_item">
                                    <div className="bento-inner_vertical-24">
                                        <div className="text_maxch-15 mobile-100">
                                            <h2 className="p_16 text_neutral-500 service-para">Immerse yourself in the world of <br /> gaming, from epic adventures to<br /> competitive play.</h2>
                                        </div>
                                        <div className="text_align-right">
                                            <div className="h_40 service-icon-title mobile_vw font-family-unbound text-icon1">
                                                <img src={Hero_icon_1} alt="gaming" style={{ height: '35px',width:'auto'}} /><br />
                                                <div className="spacer_20 hide_mobile-l"></div>
                                                Gaming
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac322-0c8ce33a" className="bento_item">
                                    <div className="bento-inner_vertical-24">
                                
                                        <h2 className="p_16 service-para text_neutral-500">Step into augmented realities where the digital and physical worlds converge.</h2>
                                        <div className="text_align-right _100">
                                            <div className="h_56 service-icon-title mobile_vw">
                                                <img src={Morraverse} alt="gaming" style={{ width: '50px' }} /><br />
                                                <div className="spacer_20 hide_mobile-l"></div>
                                                <span count="transaction-count" className='text-icon2 font-family-unbound' api-data="transaction-count">
                                                    Morraverse<br />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bento_curtain"></div>
                                </div>
                            </div>
                            <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac329-0c8ce33a" className="grid_1">
                                <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac32b-0c8ce33a" className="bento_item is--validator full-height">
                                    <div className="bento-inner_vertical-24 comics-box">
                                        <h2 className="p_16 text_neutral-500 service-para">Journey into captivating stories and interactive storytelling brought to life through comics.</h2>
                                        <div className="spacer_50 hide_mobile-l"></div>
                                        <div className="text_align-right _100 comics-bottom">
                                            <div count="static" className="h_56 text-icon3 service-icon-title font-family-unbound">Comics</div>
                                            <img src={Comics} alt="gaming" style={{ width: '50px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_162be752-0a0b-aa87-7fd6-7728c9cac334-0c8ce33a" className="bento_item carbon-free">
                                <div className="f_vertical-left relative">
                                    <img src={Escort} alt="gaming" style={{ width: '50px', marginBottom: '16px' }} />
                                    <div className="h_40 text-icon4 font-family-unbound service-icon-title">Escort</div>
                                    <div className="spacer_80"></div>

                                    <h2 className="p_16 text_neutral-500 service-para">Gear up for the future of competitive gaming; we're building a community for all.</h2>

                                </div>
                                <div className="bento_curtain"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </>

    )
}

export default ServiceSections
