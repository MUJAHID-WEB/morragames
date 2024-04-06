import React from 'react'
import { logo } from '../Imports/ImportImages'
import { Link } from 'react-router-dom'
const FooterSections = () => {
    return (
        <>
            <div className="inner-wrapper bg_dark " style={{paddingBottom:'12px'}}>
                <div className="section z-1 newsletter-area">
                    <div className="container z-2">
                        <div className="spacer_100"></div>
                        <div className="spacer_100 show_mobile-l"></div>
                        <div className="newsletter_form-block w-form">
                            <div className="text_maxch-65">
                                <h4 words-slide-from-right="" text-split="" className="h_40">Stay in-the-know and never miss an update</h4>
                            </div>
                            <div className="spacer_24"></div>
                            <form id="" name="" className="newsletter_form">
                                <div className="newsletter_input-wrap">
                                    <input className="form_input w-input" maxLength="256" name="Email" placeholder="Enter a valid email address" type="email" id="Email" required="" />
                                    <Link className='signn-btn'>
                                    Sign Up
                                    </Link>
                                </div>
                            </form>
                            <div className="success w-form-done">
                                <div className="h2">
                                    <span className="text_tiel">Thank you!</span>
                                    Your submission has been received!
                                </div>
                            </div>
                            <div className="error w-form-fail">
                                <div className="p_xs text_grey">Oops! Something went wrong while submitting the form.</div>
                            </div>
                            <div className="text_maxch-48">
                                <div className="spacer_24"></div>
                                <p text-split="" words-slide-from-right="" className="p_14 text_neutral-500">$MORRA, an Ethereum-based utility token, plays a pivotal role in driving the dynamic, community-driven, and innovative world of Morra Games. </p>
                            </div>
                        </div>
                        {/* <div className="spacer_100"></div> */}
                    </div>
                </div>
                <footer className="section">
                    <div className="container">
                        {/* <div className="container_bg z-minus-1">
                            <img src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659fcbc933f30061199cf5c8_bg%20visual.webp" loading="lazy" sizes="(max-width: 479px) 99vw, (max-width: 767px) 98vw, (max-width: 991px) 73vw, 55vw" srcSet="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659fcbc933f30061199cf5c8_bg%20visual-p-500.webp 500w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659fcbc933f30061199cf5c8_bg%20visual-p-800.webp 800w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659fcbc933f30061199cf5c8_bg%20visual-p-1080.webp 1080w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659fcbc933f30061199cf5c8_bg%20visual.webp 1400w" alt="" className="img_footer" />
                        </div> */}
                        <div className="spacer_100 mobile_half"></div>
                        <div className="footer_grid-2">
                            <div className="f_vertical-left">
                                <Link to='/' className="nav_logo-link w-inline-block">
                                    <Link to='/' className="nav_logo-link w-inline-block w--current">
                                        <img src={logo} loading="eager" alt="morra-games" style={{ maxWidth: '66%' }} />
                                    </Link>
                                </Link>
                                <div className="spacer_50"></div>
                                <div className="social_wrap">
                                
                                <Link to='' className="st-custom-button w-inline-block">
                                        <div className="social-icon w-embed">
                                            <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24 4.5C24.7969 4.5 25.5 5.20312 25.5 6.04688V24C25.5 24.8438 24.7969 25.5 24 25.5H5.95312C5.15625 25.5 4.5 24.8438 4.5 24V6.04688C4.5 5.20312 5.15625 4.5 5.95312 4.5H24ZM10.8281 22.5V12.5156H7.73438V22.5H10.8281ZM9.28125 11.1094C10.2656 11.1094 11.0625 10.3125 11.0625 9.32812C11.0625 8.34375 10.2656 7.5 9.28125 7.5C8.25 7.5 7.45312 8.34375 7.45312 9.32812C7.45312 10.3125 8.25 11.1094 9.28125 11.1094ZM22.5 22.5V17.0156C22.5 14.3438 21.8906 12.2344 18.75 12.2344C17.25 12.2344 16.2188 13.0781 15.7969 13.875H15.75V12.5156H12.7969V22.5H15.8906V17.5781C15.8906 16.2656 16.125 15 17.7656 15C19.3594 15 19.3594 16.5 19.3594 17.625V22.5H22.5Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </Link>
                                    <Link to='' className="st-custom-button w-inline-block">
                                        <div className="social-icon w-embed">
                                            <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.2344 5.25H24.5156L17.2969 13.5469L25.8281 24.75H19.1719L13.9219 17.9531L7.96875 24.75H4.64062L12.375 15.9375L4.21875 5.25H11.0625L15.75 11.4844L21.2344 5.25ZM20.0625 22.7812H21.8906L10.0781 7.125H8.10938L20.0625 22.7812Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </Link>
                                    
                                    <Link to='' className="st-custom-button w-inline-block">
                                        <div className="social-icon w-embed">
                                            <svg width="100%" height="100%" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.5625 2.28125C27.6562 6.875 29.2031 12.0312 28.6406 17.9844C28.6406 17.9844 28.6406 18.0312 28.5938 18.0312C26.5312 19.5781 24.1875 20.75 21.7031 21.5C21.6562 21.5469 21.6562 21.5 21.6094 21.5C21.0938 20.75 20.625 20 20.2031 19.2031C20.2031 19.1562 20.2031 19.1562 20.2031 19.1094L20.25 19.0625C21 18.7812 21.7031 18.4531 22.4062 18.0312C22.4062 18.0312 22.4531 18.0312 22.4531 17.9844C22.4531 17.9375 22.4531 17.9375 22.4062 17.8906C22.2656 17.7969 22.125 17.7031 21.9844 17.5625C21.9375 17.5625 21.9375 17.5625 21.8906 17.5625C17.4375 19.625 12.5625 19.625 8.0625 17.5625C8.01562 17.5625 7.96875 17.5625 7.96875 17.5625C7.82812 17.7031 7.6875 17.7969 7.54688 17.8906C7.5 17.9375 7.5 17.9375 7.5 17.9844C7.5 18.0312 7.5 18.0312 7.54688 18.0312C8.20312 18.4531 8.95312 18.7812 9.70312 19.0625C9.70312 19.0625 9.70312 19.1094 9.75 19.1094C9.75 19.1562 9.75 19.1562 9.75 19.2031C9.32812 20 8.85938 20.75 8.34375 21.5C8.29688 21.5 8.25 21.5469 8.25 21.5C5.76562 20.75 3.42188 19.5781 1.35938 18.0312C1.3125 18.0312 1.3125 17.9844 1.3125 17.9844C0.84375 12.8281 1.82812 7.625 5.39062 2.28125C5.39062 2.28125 5.39062 2.28125 5.4375 2.28125C7.21875 1.4375 9.09375 0.875 11.0156 0.546875C11.0625 0.5 11.1094 0.546875 11.1094 0.546875C11.3906 1.01562 11.625 1.53125 11.8125 2C13.9219 1.67188 16.0312 1.67188 18.1406 2C18.3281 1.53125 18.5625 1.01562 18.8438 0.546875C18.8438 0.546875 18.8906 0.5 18.9375 0.546875C20.8594 0.875 22.7344 1.4375 24.5156 2.28125C24.5625 2.28125 24.5625 2.28125 24.5625 2.28125ZM10.4062 14.8438C11.7656 14.8438 12.8906 13.5781 12.8906 12.0781C12.8906 10.5312 11.8125 9.3125 10.4062 9.3125C9.04688 9.3125 7.92188 10.5312 7.92188 12.0781C7.92188 13.5781 9.04688 14.8438 10.4062 14.8438ZM19.5469 14.8438C20.9531 14.8438 22.0312 13.5781 22.0312 12.0781C22.0781 10.5312 20.9531 9.3125 19.5469 9.3125C18.1875 9.3125 17.1094 10.5312 17.1094 12.0781C17.1094 13.5781 18.1875 14.8438 19.5469 14.8438Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </Link>
                                    <Link to='' className="st-custom-button w-inline-block">
                                        <div className="social-icon w-embed">
                                            {/* <svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 3.375C21.375 3.375 26.625 8.625 26.625 15C26.625 21.4219 21.375 26.625 15 26.625C8.57812 26.625 3.375 21.4219 3.375 15C3.375 8.625 8.57812 3.375 15 3.375ZM20.3438 11.2969C20.3906 11.1562 20.3906 11.0156 20.3438 10.8281C20.3438 10.7344 20.25 10.5938 20.2031 10.5469C20.0625 10.4062 19.8281 10.4062 19.7344 10.4062C19.3125 10.4062 18.6094 10.6406 15.375 12C14.25 12.4688 12 13.4062 8.625 14.9062C8.0625 15.1406 7.78125 15.3281 7.73438 15.5625C7.6875 15.9375 8.29688 16.0781 9 16.3125C9.60938 16.5 10.4062 16.7344 10.8281 16.7344C11.2031 16.7344 11.625 16.5938 12.0938 16.2656C15.2344 14.1094 16.875 13.0312 16.9688 13.0312C17.0625 13.0312 17.1562 12.9844 17.2031 13.0312C17.2969 13.125 17.2969 13.2188 17.25 13.2656C17.2031 13.5 14.25 16.2188 14.0625 16.4062C13.4062 17.0625 12.6562 17.4844 13.8281 18.2344C14.8125 18.8906 15.375 19.3125 16.4062 19.9688C17.0625 20.3906 17.5781 20.9062 18.2344 20.8594C18.5625 20.8125 18.8906 20.5312 19.0312 19.6406C19.4531 17.625 20.2031 13.125 20.3438 11.2969Z" fill="currentColor"></path>
                                            </svg> */}
                                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.7205 12.5566H7.08861C5.08075 12.5566 3.45312 14.1859 3.45312 16.1933V19.1154C3.45312 21.1229 5.08075 22.7517 7.08861 22.7517H19.7205C21.7279 22.7517 23.356 21.1229 23.356 19.1154V16.1933C23.356 14.1859 21.7279 12.5566 19.7205 12.5566ZM9.74249 14.8315H8.56813V20.6668H7.43353V14.8315H6.25998V13.8389H9.74249V14.8315ZM13.0598 20.6668H12.0535V20.1149C11.8664 20.319 11.6736 20.4748 11.4724 20.5799C11.2711 20.6895 11.0767 20.7406 10.8876 20.7406C10.6539 20.7406 10.4802 20.6664 10.3613 20.5154C10.2445 20.3649 10.1848 20.1417 10.1848 19.8402V15.6293H11.1912V19.4936C11.1912 19.6129 11.2135 19.6986 11.2537 19.7517C11.2971 19.8065 11.3661 19.8317 11.4606 19.8317C11.5337 19.8317 11.6278 19.7968 11.741 19.7262C11.855 19.6547 11.9589 19.5655 12.0535 19.4551V15.6289H13.0598V20.6668ZM16.7136 19.6267C16.7136 19.9826 16.6344 20.2561 16.4766 20.4468C16.3196 20.6376 16.0899 20.7313 15.7924 20.7313C15.5944 20.7313 15.4183 20.6956 15.2653 20.6217C15.1115 20.5487 14.9666 20.4363 14.8348 20.2805V20.6664H13.8162V13.8389H14.8348V16.0379C14.9711 15.8858 15.1152 15.7677 15.2657 15.6885C15.4195 15.6078 15.5741 15.5688 15.7308 15.5688C16.0493 15.5688 16.292 15.6751 16.46 15.8898C16.6288 16.1045 16.7128 16.419 16.7128 16.8312V19.6267H16.7136ZM20.2046 18.2694H18.2787V19.2185C18.2787 19.4831 18.3112 19.6673 18.3769 19.77C18.4443 19.8731 18.5575 19.9234 18.7186 19.9234C18.8858 19.9234 19.0014 19.88 19.0688 19.7931C19.1337 19.7055 19.1686 19.5147 19.1686 19.2185V18.9892H20.2046V19.2477C20.2046 19.7639 20.0792 20.1531 19.8248 20.4156C19.5744 20.6757 19.197 20.8048 18.6955 20.8048C18.2438 20.8048 17.8879 20.6672 17.6294 20.3904C17.3718 20.1153 17.2403 19.7335 17.2403 19.2481V16.9854C17.2403 16.55 17.3839 16.1917 17.6692 15.917C17.9537 15.6423 18.3201 15.5051 18.7709 15.5051C19.2323 15.5051 19.5866 15.6321 19.8337 15.887C20.0808 16.1422 20.2046 16.5074 20.2046 16.985V18.2694Z" fill="#D4D4D4"/>
                                            <path d="M18.727 16.3848C18.5663 16.3848 18.4518 16.4298 18.382 16.524C18.3106 16.6124 18.2773 16.7638 18.2773 16.9752V17.4845H19.1672V16.9752C19.1672 16.7638 19.1315 16.612 19.0609 16.524C18.9932 16.4302 18.8799 16.3848 18.727 16.3848Z" fill="#D4D4D4"/>
                                            <path d="M15.2567 16.3682C15.1853 16.3682 15.1131 16.384 15.0437 16.4169C14.9731 16.4489 14.9041 16.5021 14.8359 16.5711V19.709C14.9167 19.7902 14.9966 19.8527 15.0745 19.8884C15.152 19.9229 15.2324 19.9424 15.318 19.9424C15.4418 19.9424 15.5319 19.9067 15.5899 19.8344C15.6471 19.763 15.6763 19.649 15.6763 19.4879V16.8864C15.6763 16.7151 15.6422 16.5869 15.5708 16.4988C15.497 16.412 15.3923 16.3682 15.2567 16.3682Z" fill="#D4D4D4"/>
                                            <path d="M8.74256 10.8058H10.0184V7.68523L11.504 3.2832H10.2071L9.41739 6.29012H9.33704L8.50801 3.2832H7.22287L8.74256 7.82563V10.8058Z" fill="#D4D4D4"/>
                                            <path d="M13.2307 10.9444C13.7461 10.9444 14.1502 10.8093 14.4448 10.539C14.7374 10.2676 14.8839 9.89708 14.8839 9.42231V6.55579C14.8839 6.13337 14.7342 5.7856 14.4359 5.51737C14.1356 5.24996 13.7509 5.11523 13.2818 5.11523C12.7665 5.11523 12.3562 5.24265 12.0511 5.49708C11.7467 5.75152 11.5938 6.09279 11.5938 6.52414V9.40039C11.5938 9.87233 11.7427 10.2457 12.0401 10.5257C12.3376 10.8044 12.7352 10.9444 13.2307 10.9444ZM12.7608 6.48194C12.7608 6.36142 12.8042 6.26403 12.889 6.18774C12.9771 6.11308 13.0887 6.07696 13.2275 6.07696C13.3772 6.07696 13.4985 6.11308 13.5911 6.18774C13.6832 6.26403 13.729 6.36142 13.729 6.48194V9.50549C13.729 9.65361 13.684 9.77129 13.5927 9.8561C13.5022 9.94131 13.3805 9.98311 13.2275 9.98311C13.0777 9.98311 12.9621 9.94253 12.8809 9.85731C12.801 9.77413 12.7604 9.65726 12.7604 9.50509L12.7608 6.48194Z" fill="#D4D4D4"/>
                                            <path d="M16.5956 10.8878C16.8086 10.8878 17.0273 10.8269 17.2526 10.71C17.4802 10.5915 17.6981 10.4183 17.9055 10.1922V10.807H19.0388V5.25781H17.9055V9.46993C17.8 9.59045 17.6827 9.68946 17.5569 9.76819C17.4287 9.8461 17.3232 9.88505 17.24 9.88505C17.1337 9.88505 17.0553 9.85584 17.0095 9.79537C16.9628 9.73734 16.9364 9.64239 16.9364 9.51213V5.25781H15.8047V9.8956C15.8047 10.2263 15.8712 10.4735 16.0027 10.6374C16.1366 10.8038 16.3322 10.8878 16.5956 10.8878Z" fill="#D4D4D4"/>
                                            </svg>

                                        </div>
                                    </Link>
                                    
                                </div>
                                <div className="footer-links_minus">
                                    <div className="spacer_16"></div>
                                    <Link to='' className="footer-link">
                                        <div className="p_14" style={{paddingRight: '6px'}}>Discover more</div>
                                        <div className="icon_10 w-embed">
                                            <svg style={{marginTop:'3px'}} width="100%" height="100%" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.1875 0C7.49219 0 7.75 0.257812 7.75 0.5625V6.1875C7.75 6.51562 7.49219 6.75 7.1875 6.75C6.85938 6.75 6.625 6.51562 6.625 6.1875V1.92188L1.21094 7.33594C0.976562 7.57031 0.625 7.57031 0.414062 7.33594C0.179688 7.125 0.179688 6.77344 0.414062 6.5625L5.82812 1.14844H1.5625C1.23438 1.14844 1 0.890625 1 0.585938C1 0.257812 1.23438 0.0234375 1.5625 0.0234375H7.1875V0Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div id="w-node-_6121deff-1e28-450d-3597-60a1622e40f0-2bf1fd79" className="footer_links-wrap">
                                <div className="f_vertical-left">
                                    <div className="footer-link_header">
                                        <div className="p_14 text_neutral-200 font-family-unbound">Dubai</div>
                                    </div>
                                    <Link to='' className="footer-link w-inline-block">
                                        <div className="p_14">Morra Games.</div>
                                    </Link>
                                    <Link to='' className="footer-link w-inline-block">
                                        <div className="p_14">Marasi Drive</div>
                                    </Link>
                                    <Link to='' className="footer-link w-inline-block">
                                        <div className="p_14">Business Bay, Dubai</div>
                                    </Link>
                                    <Link to='' className="footer-link w-inline-block">
                                        <div className="p_14">United Arab Emirates</div>
                                    </Link>
                                </div>
                                <div className="f_vertical-left">
                                    <div className="footer-link_header">
                                        <div className="p_14 text_neutral-200 font-family-unbound">Partnership Inquiries</div>
                                    </div>
                                    <Link to='' className="footer-link w-inline-block">
                                        <div className="p_14">Interested in working with us?</div>
                                    </Link>
                                    <Link to='' className="footer-link w-inline-block" style={{paddingTop: '0'}}>
                                        <div className="p_14">partnership@morragames.com</div>
                                    </Link>
                                    <div className="f_vertical-left">
                                        <div className="footer-link_header">
                                            <div className="p_14 text_neutral-200 font-family-unbound" style={{padding: '10px 0'}}>Business Inquiries</div>
                                        </div>
                                        <Link to='' className="footer-link w-inline-block">
                                            <div className="p_14">Interested in working with us?</div>
                                        </Link>
                                        <Link to='' style={{paddingTop: '0'}} className="footer-link w-inline-block">
                                            <div className="p_14">business@morragames.com</div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="f_vertical-left">
                                    <div className="footer-link_header">
                                        <div className="p_14 text_neutral-200 font-family-unbound">Sitemap</div>
                                    </div>
                                    <Link to='/' className="footer-link w-inline-block">
                                        <div className="p_14">Home</div>
                                    </Link>
                                    <Link to='/partner' className="footer-link w-inline-block">
                                        <div className="p_14">Partner</div>
                                    </Link>
                                    <Link to='/archive' className="footer-link w-inline-block">
                                        <div className="p_14">News Archive</div>
                                    </Link>
                                    <Link to='' className="footer-link w-inline-block">
                                        <div className="p_14">Contact</div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="spacer_50"></div>
                        <div className="f_vertical-center_t-center">
                            <div className="p_14 text_neutral-500">
                                Copyright© <span className="year-change">2024</span>
                                Morra Studio. All right reserved.
                            </div>
                            <div className="spacer_20"></div>
                            <div className="p_14 text_neutral-700">
                                Design and developed by
                            </div>
                        </div>
                        {/* <div className="spacer_50"></div> */}
                    </div>
                </footer>
            </div>
        </>
    )
}

export default FooterSections