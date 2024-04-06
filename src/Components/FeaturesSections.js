import React from 'react'
import { Web3Adoption,MorraIcn, DiverseWorlds, MultiplePlatforms} from '../Imports/ImportImages'

const FeaturesSections = () => {
  return (
    <>
         <section className="section features">
                    <div className="container z-2">
                        {/* <div className="spacer_100"></div> */}
                        <div className="f_vertical-center_t-center">
                            <div className="btn outline-green">
                                <div color-mode="light" className="btn_bg bg_outline"></div>
                                <div color-mode="light" className="btn_outline-wrap is--label">
                                    <div className="p_16 features-top">Features</div>
                                </div>
                            </div>
                            <div className="spacer_16"></div>
                            <div className="text_maxch-85">
                                <h2 className="h_84 section-heading">We are not just a studio, we are the future of web3 entertainment</h2>
                            </div>
                            <div className="spacer_16"></div>
                            <div className="p_21 text_neutral-500 text_lh-1-5 section-paragraph">Our vibrant ecosystem brings people together, united by a shared <br/> passion for web3 entertainment.</div>
                        </div>
                        <div className="spacer_80"></div>
                        <div className="bento-grid_12">
                            
                            <div id="w-node-_2c9966b3-6b86-6ccd-a186-c4db427ea0dd-0c8ce33a" className="bento_item is-clipped">
                                <img src={Web3Adoption} alt='web3 adoption' className="bento-home_image-double" />
                                <div></div>
                                <div className="f_vertical-left relative features-head-box">
                                    <h3 className="p_24 ">Web3 <br/> Adoption</h3>
                                    <div className="spacer_8"></div>
                                    <div className="p_16 text_lh-1-5 text_neutral-400 features-box-para">Adoption of blockchain technology for transparency and decentralization in our products and services.</div>
                                </div>
                            </div>
                            <div id="w-node-_3705b813-0272-6558-d729-6135602dbde1-0c8ce33a" className="bento_item is-clipped">
                            <img src={MorraIcn} alt='morra icon' className="bento-home_image-double is-2" />
                                <div></div>
                                <div className="text_align-right">
                                    <div className="f_vertical-right relative features-head-box">
                                        <div className="text_maxch-15">
                                            <h3 className="p_24">Community <br/> Driven</h3>
                                        </div>
                                        <div className="spacer_8"></div>
                                        <div className="p_16 text_lh-1-5 text_neutral-400 features-box-para">Involve the community in content creation, fostering collaborative growth.</div>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_61ae5c5c-a66d-38f7-b78d-ed0eac0ca4d4-0c8ce33a" className="bento_item is-clipped">
                                <img src={DiverseWorlds} loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 991px) 33vw, 17vw" alt="" className="bento-home_image-wasm" />
                                <div></div>
                                <div className="f_vertical-center-100 relative features-head-box">
                                    <div className="text_align-center">
                                        <h3 className="p_24">Explore Our <br/> Diverse Worlds</h3>
                                        <div className="spacer_8"></div>
                                        <div className="p_16 text_lh-1-5 text_neutral-400 features-box-para">Discover a world of entertainment from gaming, comics, esports, and augmented reality</div>
                                    </div>
                                </div>
                            </div>
                            <div id="w-node-_5c34622b-097c-1e81-a62f-e8a7955c8634-0c8ce33a" className="bento_item is-clipped">
                                <img src={MultiplePlatforms} alt="" sizes="(max-width: 479px) 100vw, (max-width: 991px) 20vw, 10vw" className="bento-home_image-bottom is-2" />
                                <div className="f_vertical-left relative _100 features-head-box">
                                    <div className="text_maxch-15">
                                        <h3 className="p_24" style={{textAlign: 'left'}}>Support For <br/> Multiple <br/> Platforms</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="spacer_80"></div> */}
                    </div>
                </section>
    </>
  )
}

export default FeaturesSections