import React from 'react'
import NavSection from '../Components/NavSection'
import FooterSections from '../Components/FooterSections'
import { Link } from 'react-router-dom'
import { Chainlink, DigitalArms, Gameswift, Myria, Polygon, right_arrow_icon } from '../Imports/ImportImages'

const Partner = () => {
    return (
        <>
            <div className='partner-pagee'>
            <NavSection/>
            <section className="section news-archive">
                <div className="container z-2">
                    <div className="spacer_200 mobile_300"></div>
                    <div slider="blog" className="slider-main_component">
                        <div className="slider-main_top-wrapper">
                            <div>
                                <h2 className="h_84 section-heading">Partner</h2>
                                <div className="p_21 text_neutral-500 text_lh-1-5 section-paragraph text-color-white">Diverse Worlds, One Ecosystem: Morra Games Unleashed</div>
                            </div>
                            <div>
                                <div className="slider-main_button-wrapper" >
                                    <div class="btn teal w-inline-block" >
                                        <div color-mode="light" class="btn_bg bg_dark-teal"></div>
                                        <div className="p_16 text-white display"><span>BECOME A PARTNER</span> <img src={right_arrow_icon} className="icon_20 margin-left-10" alt='->' /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="spacer_30"></div>
                        <div class="tags ">
                            <div class="tag btn neutral w-inline-block">All</div>
                            <div class="tag btn neutral w-inline-block">Exchanges</div>
                            <div class="tag btn neutral w-inline-block">Infrastructure</div>
                            <div class="tag btn neutral w-inline-block">Media</div>
                            <div class="tag btn neutral w-inline-block">Oracles</div>
                            <div class="tag btn neutral w-inline-block">Research</div>
                            <div class="tag btn neutral w-inline-block">Transparency</div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container z-2">
                    <div class="spacer_80"></div>
                    <div slider="project-category" class="slider-main_component">
                        <div class="slider-main_top-wrapper">
                            <h2 class="h_26">Media</h2>
                        </div>
                        <div class="spacer_32"></div>
                        <div className='list-items-of-partners'>
                            <div role="listitem" class="swiper-slide is-slider-partner w-dyn-item">
                                <Link to='' class="partner_link w-inline-block">
                                    <div class="partner_logo-wrap">
                                        <img loading="lazy" alt="UpBit" src={DigitalArms} class="partner_logo" />
                                    </div>
                                    <div class="partner_content">
                                        <h3 class="p_16  text-color-white">Digital Arms</h3>
                                        <div line-clamp="1" class="p_14 text_neutral-500">Digital Arms is an NFT Trading</div>
                                    </div>
                                </Link>
                            </div>
                            <div role="listitem" class="swiper-slide is-slider-partner w-dyn-item">
                                <Link to='' class="partner_link w-inline-block">
                                    <div class="partner_logo-wrap">
                                        <img loading="lazy" alt="Brand Minds" src={Myria} class="partner_logo" />
                                    </div>
                                    <div class="partner_content">
                                        <h3 class="p_16  text-color-white">Myria</h3>
                                        <div line-clamp="1" class="p_14 text_neutral-500">Myria Cryptocurrency MYRIA Token</div>
                                    </div>
                                </Link>
                            </div>
                            <div role="listitem" class="swiper-slide is-slider-partner w-dyn-item">
                                <Link to='' class="partner_link w-inline-block">
                                    <div class="partner_logo-wrap">
                                        <img loading="lazy" alt="Cartesi" src={Gameswift} class="partner_logo" />
                                    </div>
                                    <div class="partner_content">
                                        <h3 class="p_16  text-color-white">GameSwift</h3>
                                        <div line-clamp="1" class="p_14 text_neutral-500">GameSwift [GSWIFT] is a token based</div>
                                    </div>
                                </Link>
                            </div>
                            <div role="listitem" class="swiper-slide is-slider-partner w-dyn-item">
                                <Link to='' class="partner_link w-inline-block">
                                    <div class="partner_logo-wrap">
                                        <img loading="lazy" alt="Swipe" src={Polygon} class="partner_logo" />
                                    </div>
                                    <div class="partner_content">
                                        <h3 class="p_16  text-color-white">Polygon</h3>
                                        <div line-clamp="1" class="p_14 text_neutral-500">Polygon’s native cryptocurrency</div>
                                    </div>
                                </Link>
                            </div>
                            <div role="listitem" class="swiper-slide is-slider-partner w-dyn-item">
                                <Link to='' class="partner_link w-inline-block">
                                    <div class="partner_logo-wrap">
                                        <img loading="lazy" alt="Untold" src={Chainlink} class="partner_logo" />
                                    </div>
                                    <div class="partner_content">
                                        <h3 class="p_16  text-color-white">Chainlink</h3>
                                        <div line-clamp="1" class="p_14 text_neutral-500">Chainlink Crypto LINK Cryptocurrency</div>
                                    </div>
                                </Link>
                            </div>
                            <div role="listitem" class="swiper-slide is-slider-partner w-dyn-item">
                                <Link to='' class="partner_link w-inline-block">
                                    <div class="partner_logo-wrap">
                                        <img loading="lazy" alt="Copper" src={Gameswift} class="partner_logo" />
                                    </div>
                                    <div class="partner_content">
                                        <h3 class="p_16  text-color-white">Star5 Production</h3>
                                        <div line-clamp="1" class="p_14 text_neutral-500">Star5 Production...</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="spacer_40"></div>
                    </div>
                </div>
            </section>
            <FooterSections />
            </div>
        </>
    )
}

export default Partner