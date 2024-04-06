// import useWindowDimensions from './WindowDimensions';
// import React, { useEffect, useRef, useState } from 'react'
// // import { ListingSlidesData } from '../resources/localData'
// // import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router-dom';
// import { appleLogo, playstoreLogo, right_arrow_icon } from '../Imports/ImportImages';
// import '../assets/css/ourgame-section.css'
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// const OurGameSections = () => {
//   const { width } = useWindowDimensions();
//   // const swiperRef = useRef(null);
//   const [thumbsSwiper, setThumbsSwiper] = useState(null)


//   return (
//     <>
//       <section className="section">
//         <div className="container z-2">
//           <div className="spacer_100"></div>
//           <div className="f_vertical-center_t-center">
//             <div className="btn outline-green">
//               <div color-mode="light" className="btn_bg bg_outline"></div>
//               <div color-mode="light" className="btn_outline-wrap is--label">
//                 <div className="p_16">Our Game</div>
//               </div>
//             </div>
//             <div className="spacer_16"></div>
//             <div className="text_maxch-85">
//               <h2 className="h_84">The technology that powers innovation</h2>
//             </div>
//             <div className="spacer_16"></div>
//             <div className="p_21 text_neutral-500 text_lh-1-5">MultiversX provides the infrastructure you need to tackle any use case.</div>
//           </div>
//           <div className="spacer_80"></div>

//           {/*           
//           <div className='homepage-outer'>
//           <section className='homepage-banner listing-banner' style={{maxWidth: (width > 1280 ) ? width :(width > 680 ) ? width-((width-1280)/2) : '100%' }}>
//             <Swiper
//               ref={swiperRef}
//               spaceBetween={width < 768 ? (width < 425 ? 10 : 10) : 15}
//               slidesPerView={width < 768 ? 1 : 1.5}
//               // navigation
//               pagination={{ clickable: true }}
//             >
//                 {ListingSlidesData.map((slide) =>
//                   <SwiperSlide>
//                     <div className='banner-content' >
//                       <img className="slick-slide-image" alt='image' src={width < 640 ? slide.imageUrlMob : slide.imageUrl} />
//                       <div className={`meta ${width < 640 ? 'text-align-center  flex-direction-column' : ''} `} key={slide.id}>
//                         <h1 className="page-title slick-slide-title">{slide.title}</h1>
//                         <p className="slick-slide-desc page-paragraph">{slide.desc}</p>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 )}
//             </Swiper>
//           </section>
//           </div> */}
//           <div class="css-1ktypff">
//             <div class="css-1dacand">
//               {/* <div class="css-lai20k"> */}
//               <div class="css-1knv3fd">
//                 <div class="meta-schema"></div>
//                 <h1 class="css-5ur8x">Discover</h1>
//                 <div
//                   data-testid="discover-page-0"
//                   style={{ position: "relative" }}
//                 >
//                   <div
//                     data-testid="absolute-watcher"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       position: "absolute",
//                       visibility: "hidden",
//                     }}
//                   ></div>

//                   <span>
//                     <div class="css-1xdp7yz">
//                       <div>
//                         <h2 class="css-uj7726">New Featured Carousel </h2>
//                         <div>
//                           <div
//                             aria-roledescription="carousel"
//                             aria-live="off"
//                             data-testid="SaleCarouselDesktop"
//                             class="css-1mgolpb"
//                             tabindex="-1"
//                           >
//                             <div class="css-1kosn1k">
//                               <div class="css-u421q6">
//                                 <div class="css-rl9sa6">

//                                   <Swiper
//                                     style={{
//                                       '--swiper-navigation-color': '#fff',
//                                       '--swiper-pagination-color': '#fff',
//                                     }}
//                                     loop={true}
//                                     spaceBetween={0}
//                                     autoplay={{ delay: 3000 }}
//                                     thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
//                                     modules={[FreeMode, Navigation, Thumbs]}
//                                     className="mySwiper2"
//                                   >

//                                     <SwiperSlide>

//                                       <div class="css-ark9g" tabindex="-1">
//                                         <Link to='/' tabindex="-1" class="css-4rx3j2">
//                                           <div
//                                             data-testid="slide-media-asset"
//                                             class="css-uwwqev"
//                                           >
//                                             <div
//                                               class="css-uwwqev"
//                                               data-testid="picture"
//                                             >
//                                               <img
//                                                 alt="Play Expeditions: A MudRunner Game on Epic Games Store"
//                                                 src="https://cdn2.unrealengine.com/egs-expeditions-carousel-desktop-1920x1080-4597dcd7ea34.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 class="css-w2hg22"
//                                                 data-image="https://cdn2.unrealengine.com/egs-expeditions-carousel-desktop-1920x1080-4597dcd7ea34.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 data-testid="picture-image"
//                                               />
//                                             </div>
//                                             <div class="css-rvwbuf"></div>
//                                           </div>
//                                         </Link>
//                                         <div class="css-3pmzyf">
//                                           <div data-testid="slide-description-section">
//                                             <div class="css-m6ym0a"></div>
//                                             <h3 class="css-5ur8x">
//                                               Morra Game
//                                             </h3>
//                                             <div class="css-1bznwnc">
//                                               <div className="p_21 text_neutral-500 text_lh-1-5 text-color-white font-family-unbound">
//                                                 MultiversX provides the infrastructure you need to tackle any use
//                                                 case.
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div
//                                             data-testid="CarouselOffer"
//                                             tabindex="-1"
//                                           >
//                                             <div class="css-14zgbwr">
//                                               <div className="spacer_20"></div>
//                                               <div class="css-1q7njkh">
//                                                 <Link to='/' className="btn teal w-inline-block margin-right-20">
//                                                   <div color-mode="light" className="btn_bg bg_dark-teal"></div>
//                                                   <div className="p_16 text-white display"><span>Discover More</span> <img src={right_arrow_icon} className="icon_20 margin-left-10" alt='->' />
//                                                   </div>
//                                                 </Link>
//                                                 {/* <div className="social_wrap"> */}

//                                                 <Link to='/' target="_blank" className="w-inline-block margin-right-20">
//                                                   <img src={appleLogo} alt='apple' />
//                                                 </Link>
//                                                 <Link to='/' target="_blank" className="w-inline-block margin-right-20">
//                                                   <img src={playstoreLogo} alt='playstore' />
//                                                 </Link>
//                                                 {/* </div> */}
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide>

//                                       <div class="css-ark9g" tabindex="-1">
//                                         <Link to='/' tabindex="-1" class="css-4rx3j2">
//                                           <div
//                                             data-testid="slide-media-asset"
//                                             class="css-uwwqev"
//                                           >
//                                             <div
//                                               class="css-uwwqev"
//                                               data-testid="picture"
//                                             >
//                                               <img
//                                                 alt="Play Dead by Daylight on Epic Games Store"
//                                                 src="https://cdn2.unrealengine.com/egs-dead-by-daylight-all-things-wicked-carousel-desktop-1920x1080-436f25abec89.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 class="css-w2hg22"
//                                                 data-image="https://cdn2.unrealengine.com/egs-dead-by-daylight-all-things-wicked-carousel-desktop-1920x1080-436f25abec89.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 data-testid="picture-image"
//                                               />
//                                             </div>
//                                             <div class="css-rvwbuf"></div>
//                                           </div>
//                                         </Link>
//                                         <div class="css-3pmzyf">
//                                           <div data-testid="slide-description-section">
//                                             <div class="css-v859gu"></div>
//                                             <h3 class="css-5ur8x">
//                                               Dead by Daylight
//                                             </h3>
//                                             <div class="css-1kodzjq">
//                                               <span class="css-1v7dpmq">
//                                                 All Things Wicked
//                                               </span>
//                                               <span class="css-hk4gpv">
//                                                 <div class="css-lgj0h8">
//                                                   <div class="css-1h3di0n">
//                                                     Face the unknown in Dead by
//                                                     Daylight&#x27;s All Things
//                                                     Wicked.
//                                                   </div>
//                                                 </div>
//                                               </span>
//                                             </div>
//                                           </div>
//                                           <div
//                                             data-testid="CarouselOffer"
//                                             tabindex="-1"
//                                           >
//                                             <div class="css-14zgbwr">
//                                               <div class="css-1q7njkh">
//                                                 <span class="css-nc3gnj">
//                                                   Starting at{" "}
//                                                   <span
//                                                     class="css-14tsud1"
//                                                     data-testid="price-args"
//                                                   >
//                                                     <div class="css-u4p24i">
//                                                       <div class="css-l24hbj">
//                                                         <div class="css-o1hbmr">
//                                                           <div class="css-l24hbj">
//                                                             <span class="css-119zqif">
//                                                               ₹350
//                                                             </span>
//                                                           </div>
//                                                         </div>
//                                                       </div>
//                                                     </div>
//                                                   </span>
//                                                 </span>
//                                               </div>
//                                               <div class="css-9mhi7u">
//                                                 <div class="css-1owogvj">

//                                                   <Link to='/' class="css-wcoqwn">
//                                                     Buy Now
//                                                   </Link>
//                                                   <button
//                                                     class="css-m81adj"
//                                                     aria-label="Add to Wishlist"
//                                                   >
//                                                     <span class="css-66k900">
//                                                       <div
//                                                         class="css-mrbz4w"
//                                                         data-testid="wishbutton-circle"
//                                                       >
//                                                         <div
//                                                           data-testid="spinner"
//                                                           class="css-1j81ycl"
//                                                         ></div>
//                                                       </div>
//                                                       <span class="css-1kn2h2p">
//                                                         <span>
//                                                           Add to Wishlist
//                                                         </span>
//                                                       </span>
//                                                     </span>
//                                                   </button>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide>

//                                       <div class="css-ark9g" tabindex="-1">
//                                         <Link to='/' tabindex="-1" class="css-4rx3j2">
//                                           <div
//                                             data-testid="slide-media-asset"
//                                             class="css-uwwqev"
//                                           >
//                                             <div
//                                               class="css-uwwqev"
//                                               data-testid="picture"
//                                             >
//                                               <img
//                                                 alt="Fortnite on Epic Games Store"
//                                                 src="https://cdn2.unrealengine.com/egs-fortnite-c5s2-carousel-desktop-1920x1080-57e5adc24cb6.jpeg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 class="css-w2hg22"
//                                                 data-image="https://cdn2.unrealengine.com/egs-fortnite-c5s2-carousel-desktop-1920x1080-57e5adc24cb6.jpeg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 data-testid="picture-image"
//                                               />
//                                             </div>
//                                             <div class="css-rvwbuf"></div>
//                                           </div>
//                                         </Link>
//                                         <div class="css-3pmzyf">
//                                           <div data-testid="slide-description-section">
//                                             <div class="css-gzgajk"></div>
//                                             <h3 class="css-5ur8x">Fortnite</h3>
//                                             <div class="css-1kodzjq">
//                                               <span class="css-1v7dpmq">
//                                                 New Season
//                                               </span>
//                                               <span class="css-hk4gpv">
//                                                 <div class="css-lgj0h8">
//                                                   <div class="css-1h3di0n">
//                                                     Olympian legends rule the
//                                                     Island. Use their mythological
//                                                     means against them in Chapter
//                                                     5 Season 2: Myths &amp;
//                                                     Mortals!
//                                                   </div>
//                                                 </div>
//                                               </span>
//                                             </div>
//                                           </div>
//                                           <div
//                                             data-testid="CarouselOffer"
//                                             tabindex="-1"
//                                           >
//                                             <div class="css-14zgbwr">
//                                               <div class="css-1q7njkh">
//                                                 <div class="css-u4p24i">
//                                                   <div class="css-l24hbj">
//                                                     <div class="css-o1hbmr">
//                                                       <div class="css-l24hbj">
//                                                         <span class="css-119zqif">
//                                                           <span>Free</span>
//                                                         </span>
//                                                       </div>
//                                                     </div>
//                                                   </div>
//                                                 </div>
//                                               </div>
//                                               <div class="css-9mhi7u">
//                                                 <div class="css-1owogvj">
//                                                   <Link to='/' class="css-wcoqwn">

//                                                     Play For Free
//                                                   </Link>
//                                                   <button
//                                                     class="css-m81adj"
//                                                     aria-label="Add to Wishlist"
//                                                   >
//                                                     <span class="css-66k900">
//                                                       <div
//                                                         class="css-mrbz4w"
//                                                         data-testid="wishbutton-circle"
//                                                       >
//                                                         <div
//                                                           data-testid="spinner"
//                                                           class="css-1j81ycl"
//                                                         ></div>
//                                                       </div>
//                                                       <span class="css-1kn2h2p">
//                                                         <span>
//                                                           Add to Wishlist
//                                                         </span>
//                                                       </span>
//                                                     </span>
//                                                   </button>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide>

//                                       <div class="css-ark9g" tabindex="-1">
//                                         <Link to='/' tabindex="-1" class="css-4rx3j2">

//                                           <div
//                                             data-testid="slide-media-asset"
//                                             class="css-uwwqev"
//                                           >
//                                             <div
//                                               class="css-uwwqev"
//                                               data-testid="picture"
//                                             >
//                                               <img
//                                                 alt="Play Far Horizon on Epic Games Store"
//                                                 src="https://cdn2.unrealengine.com/egs-far-horizon-carousel-desktop-1920x1080-92b3391bc632.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 class="css-w2hg22"
//                                                 data-image="https://cdn2.unrealengine.com/egs-far-horizon-carousel-desktop-1920x1080-92b3391bc632.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 data-testid="picture-image"
//                                               />
//                                             </div>
//                                             <div class="css-rvwbuf"></div>
//                                           </div>
//                                         </Link>
//                                         <div class="css-3pmzyf">
//                                           <div data-testid="slide-description-section">
//                                             <div class="css-1vg1log"></div>
//                                             <h3 class="css-5ur8x">Far Horizon</h3>
//                                             <div class="css-1kodzjq">
//                                               <span class="css-1v7dpmq">
//                                                 From Epic First Run
//                                               </span>
//                                               <span class="css-hk4gpv">
//                                                 <div class="css-lgj0h8">
//                                                   <div class="css-1h3di0n">
//                                                     Embark on an epic adventure of
//                                                     exploration, ingenuity, and
//                                                     survival as you loot, shoot,
//                                                     and craft to forge your
//                                                     destiny.
//                                                   </div>
//                                                 </div>
//                                               </span>
//                                             </div>
//                                           </div>
//                                           <div
//                                             data-testid="CarouselOffer"
//                                             tabindex="-1"
//                                           >
//                                             <div class="css-14zgbwr">
//                                               <div>
//                                                 <span class="css-1kn2h2p">
//                                                   <div class="css-1wdpl2f">
//                                                     <div class="css-jhimc4">
//                                                       <span
//                                                         class="css-1fo8py6"
//                                                         aria-hidden="true"
//                                                         data-testid="icon"
//                                                       >
//                                                         <span
//                                                           class="bgImage css-h4owmf"
//                                                           style={{
//                                                             backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik02LjM2MDIgMi4wODE4QzYuNDE4NSAxLjk3MjczIDYuNTgxMzkgMS45NzI3MyA2LjYzOTcgMi4wODE4TDguNzAzMjEgNS45NDIwNUM4Ljc0NzQgNi4wMjQ3IDguODU4NTcgNi4wNDk1OSA4LjkzNjQ5IDUuOTk0MjhMMTEuNzQ5MiAzLjk5NzQzQzExLjg2NjIgMy45MTQzNiAxMi4wMjgxIDQuMDE1MzkgMTEuOTk1OCA0LjE1MTM0TDEwLjc3NzYgOS4yODAxNUMxMC43NjE0IDkuMzQ4NTMgMTAuNjk3OCA5LjM5NzA2IDEwLjYyNDYgOS4zOTcwNkgyLjM3NTRDMi4zMDIxMSA5LjM5NzA2IDIuMjM4NTggOS4zNDg1MyAyLjIyMjMzIDkuMjgwMTRMMS4wMDQxOCA0LjE1MTM0QzAuOTcxODg3IDQuMDE1MzkgMS4xMzM3NiAzLjkxNDM2IDEuMjUwNzcgMy45OTc0M0w0LjA2MzQ4IDUuOTk0MjdDNC4xNDE0IDYuMDQ5NTkgNC4yNTI1OCA2LjAyNDcgNC4yOTY3NiA1Ljk0MjA1TDYuMzYwMiAyLjA4MThaIiBmaWxsPSIjRkZEMTVDIi8+CiAgICA8cGF0aCBkPSJNMi40MDc1MyAxMC4xNTY0SDEwLjU5MzNDMTAuNjggMTAuMTU2NCAxMC43NTAzIDEwLjIyMzYgMTAuNzUwMyAxMC4zMDY2TDEwLjc1MDMgMTAuODQ5OEMxMC43NTAzIDEwLjkzMjggMTAuNjggMTEgMTAuNTkzMyAxMUgyLjQwNzU0QzIuMzIwODUgMTEgMi4yNTA1NyAxMC45MzI4IDIuMjUwNTcgMTAuODQ5OEwyLjI1MDU2IDEwLjMwNjZDMi4yNTA1NiAxMC4yMjM2IDIuMzIwODQgMTAuMTU2NCAyLjQwNzUzIDEwLjE1NjRaIiBmaWxsPSIjRkZEMTVDIi8+Cjwvc3ZnPgo=)`,
//                                                           }}
//                                                         ></span>
//                                                       </span>
//                                                     </div>
//                                                     <span>First Run</span>
//                                                   </div>
//                                                 </span>
//                                               </div>
//                                               <div class="css-1q7njkh">
//                                                 <span class="css-nc3gnj">
//                                                   Starting at{" "}
//                                                   <span
//                                                     class="css-14tsud1"
//                                                     data-testid="price-args"
//                                                   >
//                                                     <div class="css-u4p24i">
//                                                       <div class="css-l24hbj">
//                                                         <div class="css-o1hbmr">
//                                                           <div class="css-l24hbj">
//                                                             <span class="css-119zqif">
//                                                               ₹1,069
//                                                             </span>
//                                                           </div>
//                                                         </div>
//                                                       </div>
//                                                     </div>
//                                                   </span>
//                                                 </span>
//                                               </div>
//                                               <div class="css-9mhi7u">
//                                                 <div class="css-1owogvj">
//                                                   <Link
//                                                     class="css-wcoqwn"
//                                                     to='/'
//                                                   >
//                                                     Buy Now
//                                                   </Link>
//                                                   <button
//                                                     class="css-m81adj"
//                                                     aria-label="Add to Wishlist"
//                                                   >
//                                                     <span class="css-66k900">
//                                                       <div
//                                                         class="css-mrbz4w"
//                                                         data-testid="wishbutton-circle"
//                                                       >
//                                                         <div
//                                                           data-testid="spinner"
//                                                           class="css-1j81ycl"
//                                                         ></div>
//                                                       </div>
//                                                       <span class="css-1kn2h2p">
//                                                         <span>
//                                                           Add to Wishlist
//                                                         </span>
//                                                       </span>
//                                                     </span>
//                                                   </button>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide>

//                                       <div class="css-ark9g" tabindex="-1">
//                                         <Link to='/' tabindex="-1" class="css-4rx3j2">

//                                           <div
//                                             data-testid="slide-media-asset"
//                                             class="css-uwwqev"
//                                           >
//                                             <div
//                                               class="css-uwwqev"
//                                               data-testid="picture"
//                                             >
//                                               <img
//                                                 alt="Play Grand Theft Auto Online on Epic Games Store"
//                                                 src="https://cdn2.unrealengine.com/gtao-lsdw-epic-featuredcarousel-desktop-1248x702-deliv-1248x702-599614d3385f.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 class="css-w2hg22"
//                                                 data-image="https://cdn2.unrealengine.com/gtao-lsdw-epic-featuredcarousel-desktop-1248x702-deliv-1248x702-599614d3385f.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 data-testid="picture-image"
//                                               />
//                                             </div>
//                                             <div class="css-rvwbuf"></div>
//                                           </div>
//                                         </Link>
//                                         <div class="css-3pmzyf">
//                                           <div data-testid="slide-description-section">
//                                             <div class="css-j2vm5u"></div>
//                                             <h3 class="css-5ur8x">GTA Online</h3>
//                                             <div class="css-1kodzjq">
//                                               <span class="css-1v7dpmq">
//                                                 Cluckin’ Bell Farm Raid
//                                               </span>
//                                               <span class="css-hk4gpv">
//                                                 <div class="css-lgj0h8">
//                                                   <div class="css-1h3di0n">
//                                                     Discover just how deep
//                                                     corruption in Los Santos runs…
//                                                   </div>
//                                                 </div>
//                                               </span>
//                                             </div>
//                                           </div>
//                                           <div
//                                             data-testid="CarouselOffer"
//                                             tabindex="-1"
//                                           >
//                                             <div class="css-14zgbwr">
//                                               <div class="css-1q7njkh">
//                                                 <span class="css-nc3gnj">
//                                                   Starting at{" "}
//                                                   <span
//                                                     class="css-14tsud1"
//                                                     data-testid="price-args"
//                                                   >
//                                                     <div class="css-u4p24i">
//                                                       <div class="css-l24hbj">
//                                                         <div class="css-o1hbmr">
//                                                           <div class="css-l24hbj">
//                                                             <span class="css-119zqif">
//                                                               ₹2,321.44
//                                                             </span>
//                                                           </div>
//                                                         </div>
//                                                       </div>
//                                                     </div>
//                                                   </span>
//                                                 </span>
//                                               </div>
//                                               <div class="css-9mhi7u">
//                                                 <div class="css-1owogvj">
//                                                   <Link
//                                                     class="css-wcoqwn"
//                                                     to='/'
//                                                   >
//                                                     Play Now
//                                                   </Link>
//                                                   <button
//                                                     class="css-m81adj"
//                                                     aria-label="Add to Wishlist"
//                                                   >
//                                                     <span class="css-66k900">
//                                                       <div
//                                                         class="css-mrbz4w"
//                                                         data-testid="wishbutton-circle"
//                                                       >
//                                                         <div
//                                                           data-testid="spinner"
//                                                           class="css-1j81ycl"
//                                                         ></div>
//                                                       </div>
//                                                       <span class="css-1kn2h2p">
//                                                         <span>
//                                                           Add to Wishlist
//                                                         </span>
//                                                       </span>
//                                                     </span>
//                                                   </button>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide>

//                                       <div class="css-ark9g" tabindex="-1">
//                                         <Link to='/' tabindex="-1" class="css-4rx3j2">
//                                           <div
//                                             data-testid="slide-media-asset"
//                                             class="css-uwwqev"
//                                           >
//                                             <div
//                                               class="css-uwwqev"
//                                               data-testid="picture"
//                                             >
//                                               <img
//                                                 alt="Wishlist Frostpunk 2 on Epic Games Store"
//                                                 src="https://cdn2.unrealengine.com/egs-frostpunk-2-carousel-desktop-1920x1080-c57a98a33421.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 class="css-w2hg22"
//                                                 data-image="https://cdn2.unrealengine.com/egs-frostpunk-2-carousel-desktop-1920x1080-c57a98a33421.jpg?h=720&amp;quality=medium&amp;resize=1&amp;w=1280"
//                                                 data-testid="picture-image"
//                                               />
//                                             </div>
//                                             <div class="css-rvwbuf"></div>
//                                           </div>
//                                         </Link>
//                                         <div class="css-3pmzyf">
//                                           <div data-testid="slide-description-section">
//                                             <div class="css-87jc64"></div>
//                                             <h3 class="css-5ur8x">Frostpunk 2</h3>
//                                             <div class="css-1kodzjq">
//                                               <span class="css-1v7dpmq">
//                                                 Coming July 25
//                                               </span>
//                                               <span class="css-hk4gpv">
//                                                 <div class="css-lgj0h8">
//                                                   <div class="css-1h3di0n">
//                                                     Discover a city-survival game
//                                                     set 30 years after an
//                                                     apocalyptic blizzard ravaged
//                                                     Earth.
//                                                   </div>
//                                                 </div>
//                                               </span>
//                                             </div>
//                                           </div>
//                                           <div
//                                             data-testid="CarouselOffer"
//                                             tabindex="-1"
//                                           >
//                                             <div class="css-14zgbwr">
//                                               <div class="css-1q7njkh"></div>
//                                               <div class="css-9mhi7u">
//                                                 <div class="css-1owogvj">
//                                                   <a
//                                                     class="css-wcoqwn"
//                                                     href="/en-US/p/frostpunk-2"
//                                                   >
//                                                     Wishlist Now
//                                                   </a>
//                                                   <button
//                                                     class="css-m81adj"
//                                                     aria-label="Add to Wishlist"
//                                                   >
//                                                     <span class="css-66k900">
//                                                       <div
//                                                         class="css-mrbz4w"
//                                                         data-testid="wishbutton-circle"
//                                                       >
//                                                         <div
//                                                           data-testid="spinner"
//                                                           class="css-1j81ycl"
//                                                         ></div>
//                                                       </div>
//                                                       <span class="css-1kn2h2p">
//                                                         <span>
//                                                           Add to Wishlist
//                                                         </span>
//                                                       </span>
//                                                     </span>
//                                                   </button>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </SwiperSlide>

//                                   </Swiper>
//                                 </div>
//                               </div>
//                               </div>
//                           </div>
//                           <div class="css-1sqpkm6">
                            
//                               <Swiper
//                                 onSwiper={setThumbsSwiper}
//                                 loop={true}
//                                 spaceBetween={10}
//                                 slidesPerView={4}
//                                 freeMode={true}
//                                 watchSlidesProgress={true}
//                                 modules={[FreeMode, Navigation, Thumbs]}
//                                 className="mySwiper"
//                               >
//                               <ul class="css-lbqvje">
//                                 <SwiperSlide>
//                                   <li class="css-1r9qz56">
//                                     <div class="css-uwwqev">
//                                       <Link to='/' tabindex="-1" >
//                                         <div
//                                           data-testid="CarouselThumbnail-0"
//                                           class="css-1swnkgg"
//                                           tabindex="0"
//                                           role="button"
//                                         >
//                                           <div class="css-p02mvh">
//                                             <div class="css-yb58t8">
//                                               <div class="css-rl9sa6">
//                                                 <img
//                                                   class="css-b4kcmh"
//                                                   src="https://cdn2.unrealengine.com/egs-expeditions-carousel-thumb-1200x1600-72e70037d7b0.jpg?h=128&amp;quality=medium&amp;resize=1&amp;w=96"
//                                                   alt="Play Expeditions: A MudRunner Game on Epic Games Store"
//                                                 />
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1h6tojh">
//                                             <div class="css-lgj0h8">
//                                               <div class="css-rgqwpc">
//                                                 Expeditions: A MudRunner Game
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1plgqh1">
//                                             <div class="css-k30nri"></div>
//                                             <div
//                                               data-testid="CarouselProgress-0"
//                                               style={{
//                                                 animationPlayState: "paused",
//                                               }}
//                                               class="css-gf3kl0"
//                                             ></div>
//                                           </div>
//                                         </div>
//                                       </Link>
//                                     </div>
//                                   </li>
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                   <li class="css-1r9qz56">
//                                     <div class="css-uwwqev">
//                                       <Link to='/' tabindex="-1" >
//                                         <div
//                                           data-testid="CarouselThumbnail-1"
//                                           class="css-9objmj"
//                                           tabindex="0"
//                                           role="button"
//                                         >
//                                           <div class="css-ne46yq">
//                                             <div class="css-yb58t8">
//                                               <div class="css-rl9sa6">
//                                                 <img
//                                                   class="css-b4kcmh"
//                                                   src="https://cdn2.unrealengine.com/egs-dead-by-daylight-all-things-wicked-carousel-thumb-1200x1600-0e004aed0588.jpg?h=128&amp;quality=medium&amp;resize=1&amp;w=96"
//                                                   alt="Play Dead by Daylight on Epic Games Store"
//                                                 />
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1h6tojh">
//                                             <div class="css-lgj0h8">
//                                               <div class="css-rgqwpc">
//                                                 Dead by Daylight
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1mlzebu">
//                                             <div class="css-k30nri"></div>
//                                             <div
//                                               data-testid="CarouselProgress-1"
//                                               class="css-15e51po"
//                                             ></div>
//                                           </div>
//                                         </div>
//                                       </Link>
//                                     </div>
//                                   </li>
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                   <li class="css-1r9qz56">
//                                     <div class="css-uwwqev">
//                                       <Link to='/' tabindex="-1" >
//                                         <div
//                                           data-testid="CarouselThumbnail-2"
//                                           class="css-9objmj"
//                                           tabindex="0"
//                                           role="button"
//                                         >
//                                           <div class="css-ne46yq">
//                                             <div class="css-yb58t8">
//                                               <div class="css-rl9sa6">
//                                                 <img
//                                                   class="css-b4kcmh"
//                                                   src="https://cdn2.unrealengine.com/en-egs-fortnite-c5s2-carousel-thumb-1200x1600-ff6ae694ac06.jpg?h=128&amp;quality=medium&amp;resize=1&amp;w=96"
//                                                   alt="Fortnite on Epic Games Store"
//                                                 />
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1h6tojh">
//                                             <div class="css-lgj0h8">
//                                               <div
//                                                 class="css-8uhtka"
//                                                 data-testid="one-line-text"
//                                               >
//                                                 Fortnite
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1mlzebu">
//                                             <div class="css-k30nri"></div>
//                                             <div
//                                               data-testid="CarouselProgress-2"
//                                               class="css-15e51po"
//                                             ></div>
//                                           </div>
//                                         </div>
//                                       </Link>
//                                     </div>
//                                   </li>
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                   <li class="css-1r9qz56">
//                                     <div class="css-uwwqev">
//                                       <Link to='/' tabindex="-1" >
//                                         <div
//                                           data-testid="CarouselThumbnail-3"
//                                           class="css-9objmj"
//                                           tabindex="0"
//                                           role="button"
//                                         >
//                                           <div class="css-ne46yq">
//                                             <div class="css-yb58t8">
//                                               <div class="css-rl9sa6">
//                                                 <img
//                                                   class="css-b4kcmh"
//                                                   src="https://cdn2.unrealengine.com/egs-far-horizon-carousel-thumb-1200x1600-10d2c8a12a07.jpg?h=128&amp;quality=medium&amp;resize=1&amp;w=96"
//                                                   alt="Play Far Horizon on Epic Games Store"
//                                                 />
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1h6tojh">
//                                             <div class="css-lgj0h8">
//                                               <div class="css-rgqwpc">
//                                                 Far Horizon
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1mlzebu">
//                                             <div class="css-k30nri"></div>
//                                             <div
//                                               data-testid="CarouselProgress-3"
//                                               class="css-15e51po"
//                                             ></div>
//                                           </div>
//                                         </div>
//                                       </Link>
//                                     </div>
//                                   </li>
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                   <li class="css-1r9qz56">
//                                     <div class="css-uwwqev">
//                                       <Link to='/' tabindex="-1" >
//                                         <div
//                                           data-testid="CarouselThumbnail-4"
//                                           class="css-9objmj"
//                                           tabindex="0"
//                                           role="button"
//                                         >
//                                           <div class="css-ne46yq">
//                                             <div class="css-yb58t8">
//                                               <div class="css-rl9sa6">
//                                                 <img
//                                                   class="css-b4kcmh"
//                                                   src="https://cdn2.unrealengine.com/gtao-cbfr-epic-carouselmobileimage-1200x1600-deliv-1200x1600-26fb7bed87d8.jpg?h=128&amp;quality=medium&amp;resize=1&amp;w=96"
//                                                   alt="Play Grand Theft Auto Online on Epic Games Store"
//                                                 />
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1h6tojh">
//                                             <div class="css-lgj0h8">
//                                               <div class="css-rgqwpc">
//                                                 GTA Online
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1mlzebu">
//                                             <div class="css-k30nri"></div>
//                                             <div
//                                               data-testid="CarouselProgress-4"
//                                               class="css-15e51po"
//                                             ></div>
//                                           </div>
//                                         </div>
//                                       </Link>
//                                     </div>
//                                   </li>
//                                 </SwiperSlide>
//                                 <SwiperSlide>
//                                   <li class="css-1r9qz56">
//                                     <div class="css-uwwqev">
//                                       <Link to='/' tabindex="-1" >
//                                         <div
//                                           data-testid="CarouselThumbnail-5"
//                                           class="css-9objmj"
//                                           tabindex="0"
//                                           role="button"
//                                         >
//                                           <div class="css-ne46yq">
//                                             <div class="css-yb58t8">
//                                               <div class="css-rl9sa6">
//                                                 <img
//                                                   class="css-b4kcmh"
//                                                   src="https://cdn2.unrealengine.com/egs-frostpunk-2-carousel-thumb-1200x1600-818d1da7a903.jpg?h=128&amp;quality=medium&amp;resize=1&amp;w=96"
//                                                   alt="Wishlist Frostpunk 2 on Epic Games Store"
//                                                 />
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1h6tojh">
//                                             <div class="css-lgj0h8">
//                                               <div class="css-rgqwpc">
//                                                 Frostpunk 2
//                                               </div>
//                                             </div>
//                                           </div>
//                                           <div class="css-1mlzebu">
//                                             <div class="css-k30nri"></div>
//                                             <div
//                                               data-testid="CarouselProgress-5"
//                                               class="css-15e51po"
//                                             ></div>
//                                           </div>
//                                         </div>
//                                       </Link>
//                                     </div>
//                                   </li>
//                                 </SwiperSlide>
//                             </ul>
//                               </Swiper>
//                           </div>
//                         </div>
                        
//                       </div>
//                       {/* </div> */}
//                     </div>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="spacer_80"></div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default OurGameSections;
