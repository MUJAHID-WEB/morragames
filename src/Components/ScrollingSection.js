import React from 'react'
import { merquee1, merquee2, merquee3, merquee4, merquee5,merquee6,merquee7,merquee8,merquee9,Karrnakk, karnatkLogo } from '../Imports/ImportImages'


const ScrollingSection = () => {
  return (
    <>
        <section class="section players-section-scroll">
                    <div class="spacer_80"></div>
                    {/* <div class="container no-pad">
                        <div class="marquee-community">
                            <div move="left" class="marquee_content">
                                <img src={merquee1} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee3} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <div class="community_stat">
                                    <img src={karnatkLogo} alt='image'/>
                                    <p class="p_32">Karnak Legacy is a multiplayer shooter game set in steampunk Egypt.</p>
                                </div>

                                <img src={merquee4} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee5} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee1} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee3} alt="Photo of the crowed at xDays 2023" class="community_img"/>
                            </div>
                            <div move="left" class="marquee_content">
                                <img src={merquee1} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee3} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <div class="community_stat">
                                    <img src={karnatkLogo} alt='image'/>
                                    <p class="p_32">Karnak Legacy is a multiplayer shooter game set in steampunk Egypt.</p>
                                </div>
                                <img src={merquee4} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee5} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee1} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee3} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                            </div>
                        </div>
                        <div class="marquee-community">
                        <div move="right" class="marquee_content">
                                <img src={merquee6} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee7} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee8} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee9} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <div class="community_stat">
                                    <img src={karnatkLogo} alt='image'/>
                                    <p class="p_32">Karnak Legacy is a multiplayer shooter game set in steampunk Egypt.</p>
                                </div>

                                <img src={merquee6} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee7} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee8} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee9} alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee6} alt="Photo of the crowed at xDays 2023" class="community_img"/>
                            </div>
                            <div move="right" class="marquee_content">
                                <img src={merquee6} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee8} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee9} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee6} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <div class="community_stat">
                                    <img src={karnatkLogo} alt='image'/>
                                    <p class="p_32">Karnak Legacy is a multiplayer shooter game set in steampunk Egypt.</p>
                                </div>

                                <img src={merquee6} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee7} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee8} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee9} alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee3} alt="Photo of the crowed at xDays 2023" class="community_img"/>
                            </div>
                           
                        </div>
                    </div> */}
                    <div>
                        <div move="left" className='first-row'>
                        <img src={merquee1} style={{minWidth:'260px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} style={{minWidth:'219px'}} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee3} style={{minWidth:'290px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} style={{minWidth:'219px'}} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <div class="community_stat" style={{minWidth:'380px'}}>
                                    <img src={karnatkLogo} alt='image'/>
                                    <p class="p_32">Karnak Legacy is a multiplayer shooter game set in steampunk Egypt.</p>
                                </div>

                                <img src={merquee4} style={{minWidth:'130px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee5} style={{minWidth:'313px'}} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee1} style={{minWidth:'260px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} style={{minWidth:'219px'}} alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee3} style={{minWidth:'290px'}} alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee1} style={{minWidth:'260px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} style={{minWidth:'219px'}} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee3} style={{minWidth:'290px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} style={{minWidth:'219px'}} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <div class="community_stat" style={{minWidth:'380px'}}>
                                    <img src={karnatkLogo} alt='image'/>
                                    <p class="p_32">Karnak Legacy is a multiplayer shooter game set in steampunk Egypt.</p>
                                </div>
                                <img src={merquee4} style={{minWidth:'130px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee5} style={{minWidth:'313px'}} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee1} style={{minWidth:'260px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} style={{minWidth:'219px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee3} style={{minWidth:'290px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                        </div>
                        <div move="right" className='first-row'>
                        <img src={merquee6} style={{minWidth:'290px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee7} style={{minWidth:'208px'}} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee8} style={{minWidth:'208px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee9} style={{minWidth:'208px'}} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <div class="community_stat" style={{minWidth:'380px'}}>
                                    <img src={karnatkLogo} alt='image'/>
                                    <p class="p_32">Karnak Legacy is a multiplayer shooter game set in steampunk Egypt.</p>
                                </div>

                                <img src={merquee6} style={{minWidth:'290px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee7} style={{minWidth:'208px'}}  loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee8} style={{minWidth:'208px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee9} style={{minWidth:'208px'}} alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee2} style={{minWidth:'219px'}} alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee1} style={{minWidth:'260px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee3} style={{minWidth:'290px'}} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee4} style={{minWidth:'130px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee5} style={{minWidth:'313px'}} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <div class="community_stat" style={{minWidth:'380px'}}>
                                    <img src={karnatkLogo} alt='image'/>
                                    <p class="p_32">Karnak Legacy is a multiplayer shooter game set in steampunk Egypt.</p>
                                </div>
                                <img src={merquee6} style={{minWidth:'290px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee7} style={{minWidth:'208px'}} loading="lazy" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee8} style={{minWidth:'208px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee9} style={{minWidth:'208px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw"  alt="Photo of the crowed at xDays 2023" class="community_img"/>
                                <img src={merquee1} style={{minWidth:'260px'}} loading="lazy" sizes="(max-width: 767px) 8vw, (max-width: 991px) 9vw, 10vw" alt="Photo of the crowed at xDays 2023" class="community_img"/>
                        </div>
                    </div>
                  
                </section>
    </>
  )
}

export default ScrollingSection