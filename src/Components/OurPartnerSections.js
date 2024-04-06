import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/partner-section.css'
import useWindowDimensions from './WindowDimensions';
import { AndroidL, AwsIconn, ImmutableL, IosL, PhotonIconn, UnityIconn, Unreal, Web3Iconn } from '../Imports/ImportImages';

const OurPartnerSections = () => {
    const { width } = useWindowDimensions();
    const [objectPosition, setObjectPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const objectPositionLeft = Math.max(0, ((window.innerWidth - (60)) * (scrollPosition / document.body.scrollHeight)));
            setObjectPosition(objectPositionLeft - (width < 768 ? objectPosition : 0));
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section className="section_backers-hero our-partnerss">
        <div className="container z-2">
            <div className="padding-global">
                <div className="padding-section-large">
                    <div className="container-large">
                        <div className="tag_wrapper">
                            <aside className="tag-dot is-yellow"></aside>
                            <div className="text-size-hero text-color-transparent-white partner-subtitle">Our Tech Stacks</div>
                        </div>
                        {/* <div className="spacer-2-5"></div> */}
                        <div className={`_12-columns vertical-align-center ${width < 769 ? "flex-direction-column" : ""}`}>
                            <div className={`column _5-col-desktop content-box tablet-12-col ${width < 769 ? "manage-width display flex-direction-column" : ""}`}>
                                <div className="max-width-medium">
                                <h1 className="h_64 section-heading">Building the <br/> future of web3<br/> entertainment</h1>
                                </div>
                                {/* <div className="spacer-4"></div> */}
                                <div className="_12-columns">
                                    <div className="column tablet-4-col"></div>
                                    <div className="column _12-col-desktop tablet-8-col">
                                        <div className="max-width-medium">
                                            <p className="text-size-main text-color-white lines-up section-para" text-split="" lines-up="" style={{ opacity: 1 }}>We're not just building games – we're shaping experiences. By embracing cutting-edge technologies from industry leaders, we're creating the future of web3 entertainment, one innovation at a time.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="visible-tablet-down spacer-5-5 spacer-mobile-3-5"></div>
                            </div>
                            <div className="column _7-col-desktop tablet-12-col">
                                <div className="backers_mask">
                                    <div className="backers_wrapper">
                                        <div data-w-id="0ab75b2d-74b3-30fe-246a-21d23c564212" className="backers-line" style={{position: 'relative', right: `${objectPosition - (width - objectPosition - 700)}px `,   transformStyle: "preserve-3d" }}>
                                            
                                           
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={UnityIconn} loading="lazy"  alt="Islamic Coin Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={Web3Iconn} loading="lazy"  alt="Blocktrade Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={Unreal} loading="lazy"  alt="Kalima Logo"  className="backer-logo kalima" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={AndroidL} loading="lazy" alt="Spheroid Universe Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={AwsIconn} loading="lazy" alt="Islamic Coin Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={Web3Iconn} loading="lazy"  alt="Blocktrade Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={PhotonIconn} loading="lazy"  alt="Kalima Logo"  className="backer-logo kalima" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={AwsIconn} loading="lazy" alt="Spheroid Universe Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={UnityIconn} loading="lazy" alt="Islamic Coin Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={Web3Iconn} loading="lazy"  alt="Blocktrade Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={PhotonIconn} loading="lazy"  alt="Kalima Logo"  className="backer-logo kalima" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={AwsIconn} loading="lazy"  alt="Spheroid Universe Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={UnityIconn} loading="lazy"  alt="Islamic Coin Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={Web3Iconn} loading="lazy"  alt="Blocktrade Logo" className="backer-logo" />
                                            </Link>
                                            
                                            {/* <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c50_spheroid-logo.svg" loading="lazy" height="54" alt="Spheroid Universe Logo" width="179" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4d_ratio-logo.svg" loading="lazy" height="25" alt="Ratio Finance Logo" width="106" className="backer-logo ratio" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4e_islamic-coin-logo.svg" loading="lazy" height="31" alt="Islamic Coin Logo" width="182" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4f_blocktrade-logo.svg" loading="lazy" height="40" alt="Blocktrade Logo" width="190" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4e_islamic-coin-logo.svg" loading="lazy" height="31" alt="Islamic Coin Logo" width="182" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4f_blocktrade-logo.svg" loading="lazy" height="40" alt="Blocktrade Logo" width="190" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4e_islamic-coin-logo.svg" loading="lazy" height="31" alt="Islamic Coin Logo" width="182" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4f_blocktrade-logo.svg" loading="lazy" height="40" alt="Blocktrade Logo" width="190" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4e_islamic-coin-logo.svg" loading="lazy" height="31" alt="Islamic Coin Logo" width="182" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4f_blocktrade-logo.svg" loading="lazy" height="40" alt="Blocktrade Logo" width="190" className="backer-logo" />
                                            </Link> */}
                                            
                                          
                                        </div>
                                        <div data-w-id="a0f4fe76-57d6-72d6-ac3d-465e466d14a6" className="backers-line second" style={{position: 'relative', left: `${objectPosition - (width - objectPosition - 200) }px `,  transformStyle: "preserve-3d" , justifyContent: 'flex-start'}}>
                                            {/* <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c51_kalima-logo.png" loading="lazy" height="46" alt="Kalima Logo" width="161.5" className="backer-logo kalima" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4f_blocktrade-logo.svg" loading="lazy" height="40" alt="Blocktrade Logo" width="190" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4e_islamic-coin-logo.svg" loading="lazy" height="31" alt="Islamic Coin Logo" width="182" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c51_kalima-logo.png" loading="lazy" height="46" alt="Kalima Logo" width="161.5" className="backer-logo kalima" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4f_blocktrade-logo.svg" loading="lazy" height="40" alt="Blocktrade Logo" width="190" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4e_islamic-coin-logo.svg" loading="lazy" height="31" alt="Islamic Coin Logo" width="182" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4d_ratio-logo.svg" loading="lazy" height="25" alt="Ratio Finance Logo" width="106" className="backer-logo ratio" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c50_spheroid-logo.svg" loading="lazy" height="54" alt="Spheroid Universe Logo" width="179" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c50_spheroid-logo.svg" loading="lazy" height="54" alt="Spheroid Universe Logo" width="179" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4d_ratio-logo.svg" loading="lazy" height="25" alt="Ratio Finance Logo" width="106" className="backer-logo ratio" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4d_ratio-logo.svg" loading="lazy" height="25" alt="Ratio Finance Logo" width="106" className="backer-logo ratio" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c50_spheroid-logo.svg" loading="lazy" height="54" alt="Spheroid Universe Logo" width="179" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c50_spheroid-logo.svg" loading="lazy" height="54" alt="Spheroid Universe Logo" width="179" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src="https://assets-global.website-files.com/64b7f7b6e0e962310ae14c1e/64b7f7b6e0e962310ae14c4d_ratio-logo.svg" loading="lazy" height="25" alt="Ratio Finance Logo" width="106" className="backer-logo ratio" />
                                            </Link> */}
                                              <Link to='/' className="backer w-inline-block">
                                                <img src={PhotonIconn} loading="lazy"  alt="Islamic Coin Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={IosL} loading="lazy"  alt="Blocktrade Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={ImmutableL} loading="lazy"  alt="Kalima Logo"  className="backer-logo kalima" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={UnityIconn} loading="lazy" alt="Spheroid Universe Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={UnityIconn} loading="lazy" alt="Islamic Coin Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={Web3Iconn} loading="lazy"  alt="Blocktrade Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={PhotonIconn} loading="lazy"  alt="Kalima Logo"  className="backer-logo kalima" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={PhotonIconn} loading="lazy" alt="Spheroid Universe Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={Web3Iconn} loading="lazy" alt="Islamic Coin Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={Web3Iconn} loading="lazy"  alt="Blocktrade Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={PhotonIconn} loading="lazy"  alt="Kalima Logo"  className="backer-logo kalima" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={AwsIconn} loading="lazy"  alt="Spheroid Universe Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={UnityIconn} loading="lazy"  alt="Islamic Coin Logo" className="backer-logo" />
                                            </Link>
                                            <Link to='/' className="backer w-inline-block">
                                                <img src={Web3Iconn} loading="lazy"  alt="Blocktrade Logo" className="backer-logo" />
                                            </Link>
                                        </div>
                                        <div className="backer-gradient is-right pointer-events-off hide-tablet"></div>
                                    </div>
                                    <div className="backer-gradient is-right pointer-events-off visible-tablet-down"></div>
                                    <div className="backer-gradient pointer-events-off"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default OurPartnerSections;
