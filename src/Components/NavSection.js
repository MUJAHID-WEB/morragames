import React, { useState,useEffect } from 'react'
import { logo, slider_icon,Cancel } from '../Imports/ImportImages'
import { Link } from 'react-router-dom';

const NavSection = (props) => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isHeaderActive, setHeaderActive] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the scroll position is greater than a certain threshold (e.g., 100 pixels)
      if (window.scrollY > 100) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <nav className={`nav ${isHeaderActive ? 'active' : ''}`}>
            <div click="off" className="nav-overlay" style={{ opacity: isOpen ? 1 : 0, display: isOpen ? 'flex' : 'none' }}></div>

            <div className="nav-menu_backdrop">
                <Link to='/'className="nav_logo-link w-inline-block w--current">
                    <img src={logo} loading="eager" alt="morra-games" style={{maxWidth: '66%'}}/>
                </Link>
                {/* <div className="nav_link-wrap" > */}
                <div className={`nav_link-wrap ${isOpen ? 'active' : null}`}>
                    <div>
                        <img src={Cancel} onClick={toggleMenu} className='close-navigation-box' alt='close'/>
                    </div>
                    <div className="nav_link-wrap_center">
                        <div data-w-id="a3154880-70cd-30fb-62fc-6b7dd3a49d89" className="nav-link_drop-wrap">
                            <div className="drop_trigger">
                                <Link to='/' className="nav-llnk text-white">
                                    <div>Home</div>
                                </Link>
                            </div>
                        </div>
                        <div data-w-id="f48ab5da-4350-7b50-2de3-258870a7d043" className="nav-link_drop-wrap">
                            <div className="drop_trigger">
                                <Link to='/partner' className="nav-llnk text-white">
                                    <div>Partner</div>
                                </Link>
                            </div>
                        </div>
                        <div data-w-id="f997643b-91a8-ddf8-1fe6-9295ab5ad346" className="nav-link_drop-wrap">
                            <div className="drop_trigger">
                                <Link to='/archive' className="nav-llnk text-white">
                                    <div>News</div>
                                </Link>
                            </div>
                        </div>
                        <div data-w-id="d4a768de-1b55-7610-cebd-14c0127a8cd3" className="nav-link_drop-wrap">
                            <div className="drop_trigger">
                                <div className="nav-llnk text-white">
                                    <div>Contact</div>
                                </div>
                            </div>
                        </div>
                        <div className='logins-areaa'>
                            <Link to='' >
                            Marketplace
                            </Link>
                            <Link to='' >
                            Login
                            </Link>
                        </div>
                        {/* <div data-w-id="f1e9dc3c-c342-6fab-59d5-cd53f0afecd5" className="nav-link_drop-wrap">
                            <div className="drop_trigger">
                                <div className="nav-llnk">
                                    <img src={slider_icon} loading="eager" alt="morra-games" />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div role="Navigation" aria-label="Mobile Navigation" className='nav-menu_button' onClick={toggleMenu}>
                    <div
                        data-is-ix2-target="1"
                        className="nav-menu_lottie"
                        data-w-id="fe9aaf11-fc83-e8d2-99e4-79d077c1cfad"
                        data-animation-type="lottie"
                        data-src="https://assets-global.website-files.com/63c67e1faff95c11945da274/63c67e1faff95c0ab35da28c_lottieflow-menu-nav-09-000000-easey.json"
                        data-loop="0"
                        data-direction="1"
                        data-autoplay="0"
                        data-renderer="svg"
                        data-default-duration="2.5"
                        data-duration="0"
                        data-ix2-initial-state="0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 850 850" width="850" height="850" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}>
                            <defs>
                                <clipPath id="__lottie_element_2">
                                    <rect width="850" height="850" x="0" y="0"></rect>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#__lottie_element_2)">
                                <g transform="matrix(1,0,0,1,425,425)" opacity="1" style={{ display: 'block' }}>
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="60" d=" M324,-250 C324,-250 3,-250 3,-250 C3,-250 -324,-250 -324,-250"></path>
                                    </g>
                                </g>
                                <g transform="matrix(1,0,0,1,425,425)" opacity="1" style={{ display: 'block' }}>
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="0" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="60" d=" M-324,250 C-324,250 3,250 3,250 C3,250 324,250 324,250"></path>
                                    </g>
                                </g>
                                <g transform="matrix(1,0,0,1,425,425)" opacity="1" style={{ display: 'block' }}>
                                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                        <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="10" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="60" d=" M-324,0 C-324,0 324,0 324,0"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavSection