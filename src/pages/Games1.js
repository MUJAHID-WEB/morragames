import React, { useState } from 'react'
import NavSection from '../Components/NavSection'
import { Cancel, FaceIcon, GameSection1Img1, GameSection1Img2, Games1Bg, PlayIcon, Games1BgMob } from '../Imports/ImportImages'
import ArchiveSections from '../Components/ArchiveSections'
import FooterSections from '../Components/FooterSections'
import GamesSection1Slider from '../Components/GamesSection1Slider'
import useWindowDimensions from '../Components/WindowDimensions'

const Games1 = () => {
    const {width} = useWindowDimensions();
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    return (
        <>

            <NavSection />
            <div style={{ position: 'relative' }}>
                <img src={width < 576 ? Games1BgMob : Games1Bg} alt="" className='game-section-bg' />
                {/* <img src={FaceIcon} alt="" className='faceicon-manage' /> */}
                <img src={PlayIcon} alt="" className='playicon-manage' onClick={() => setShowModal(true)} />
            </div>

            <main class="main-wrapper games-section">
                <div class="inner-wrapper bg_dark">
                    <div class="section">
                        <div class="container pad_8">
                            <div className='spacer-3'></div>
                            <div className='featured_grid'>
                                <div>
                                    <h1 >Karnak Legacy</h1>
                                    <div className='spacer-2'></div>
                                    <p>Karnak Legacy is a mobile extraction royale shooter game set in steampunk Egyptian world. Players battle each other to extract the legendary karnak scrolls which is believe to have the power to unlock
                                        technological advancement.</p>
                                </div>
                                <div>
                                    <p className="extra-bold-p">Task</p>
                                    <div className='spacer-1'></div>
                                    <p className="p_21 text_neutral-500 text-white">At the heart of Karnak Legacy lies the quest for Karnak Scrolls – legendary artifacts that hold the key to unlocking technological marvels. These scrolls are scattered across the desert, hidden amidst ruins and guarded by formidable foes. Players must brave the dangers of the desert and outmaneuver their rivals to secure these prized possessions.</p>
                                    <div className='display right-sub-box'>
                                        <div className='right-section-top-line'>
                                            <p className='extra-bold-p'>Genre</p>
                                            <p className="text_neutral-500 text-white">FPS, Survival & Strategy</p>
                                        </div>
                                        <div className='right-section-top-line'>
                                            <p className='extra-bold-p'>Developer &
                                                Publisher</p>
                                            <p className="text_neutral-500 text-white">Morra Games</p>
                                        </div>
                                        <div className='right-section-top-line'>
                                            <p className='extra-bold-p'>Platform</p>
                                            <p className="text_neutral-500 text-white">Android & iOS</p>
                                        </div>
                                        <div className='right-section-top-line'>
                                            <p className='extra-bold-p'>Blockchain</p>
                                            <p className="text_neutral-500 text-white">Immutable zkEVM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='spacer-4'></div>
                            <div className='featured_grid'>
                                <div>
                                    <div className="text_maxch-85">
                                        <div className="tag_wrapper">
                                            <aside className="tag-dot is-yellow"></aside>
                                            <div className="text-size-hero text-white partner-subtitle">GAME MODES</div>
                                        </div>
                                        <div className='spacer-2'></div>
                                        <div className='space-padding-manage-h2'>
                                            <h2>Karnak Scrolls offers two
                                                xhilarating game modes to
                                                cater to different playstyles.</h2>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="p_21 text_neutral-500 text-white">Survival Mode: </span>every player is pitted against each other, fighting as lone wolves in a battle for supremacy. It’s a test of skill, strategy, and survival instincts as players navigate the treacherous terrain and vie for control.</p><br />
                                        <p><span className="p_21 text_neutral-500 text-white">Team-Based Mode: </span> Players are grouped into teams of four, with each team consisting of three players. Together, they must coordinate their efforts, strategize their moves, and work collaboratively to outwit their opponents and claim victory.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='spacer-4'></div>
                            <div className='featured_grid'>
                                <div><img src={GameSection1Img1} alt="" /></div>
                                <div><img src={GameSection1Img2} alt="" /></div>
                            </div>
                            <div className='spacer-4'></div>
                            <div className='featured_grid'>
                                <div>
                                    <div className="text_maxch-85">
                                        <div className="tag_wrapper">
                                        <aside class="tag-dot is-yellow"></aside>
                                            <div className="text-size-hero text-white partner-subtitle">GAMEPLAY</div>
                                        </div>
                                        <div className='spacer-2'></div>
                                        <div className='space-padding-manage-h2'>
                                            <h2>Experience the rush of adrenaline as you engage in heart-pounding battles, where survival is the ultimate prize.</h2>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p>As players dive into the heart of Karnak Legacy, they’ll find themselves immersed in fast-paced, adrenaline-fueled battles. Armed with an array of weapons and gadgets, they must utilize every resource at their disposal to gain the upper hand. From close-quarters combat to long-range skirmishes, Karnak Legacy offers a diverse range of gameplay experiences to keep players on the edge of their seats.
                                        </p><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <GamesSection1Slider />
                        
                        </div>
                        <div class="container pad_8 teams-area">
                            <div className='spacer-4'></div>
                            <div className='display' style={{ alignItems: 'start' }}>
                                <div>
                                    <div className="text_maxch-85">
                                        <div className="tag_wrapper">
                                            <div className="text-size-hero text-white partner-subtitle">THE TEAM</div>
                                        </div>
                                        <div className='spacer-2'></div>
                                        <div className='space-padding-manage-h2'>
                                            <h2>Meet our
                                                Professional
                                                team.</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row-11' style={{paddingRight:'4px',paddingBottom:'12px'}}>
                                    <div>
                                        <p>Project Management</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Alexis Office</p>
                                        <p>Project Owner</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Ashish Kumar</p>
                                        <p>Creative Director</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Surbhi Sharma</p>
                                        <p>3D Generalist</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Ivan Pavliv</p>
                                        <p>Product manager</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Povar Vitalii</p>
                                        <p>Game Designer</p><br />
                                    </div>
                                </div>
                                <div className='row-11' style={{paddingBottom:'12px'}}>
                                    <div>
                                        <p>Developers</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Shreyas</p>
                                        <p>Game Developer</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Sahil</p>
                                        <p>Game Developer</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Vitaliy Teliatnyk</p>
                                        <p>3D Generalist</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Ishaan Sharma</p>
                                        <p>3D Character Artist</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Ahsan Akber</p>
                                        <p>Full Stack Developer</p><br />
                                    </div>
                                </div>
                                <div className='row-11' style={{paddingBottom:'12px'}}>
                                    <div>
                                        <p>Developers</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Jay Soni</p>
                                        <p>3D animation</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Anuj</p>
                                        <p>Environment Artist</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Ahmed Farid</p>
                                        <p>UI/UX Artist</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Yeysson Jimenez</p>
                                        <p>Concept Artist</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Muhammad Yehia</p>
                                        <p>3D Weapon Artist</p><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterSections />
                <div className={`model-background ${showModal ? 'classshow' : null}`}>
                    <div className='blocker'></div>
                    <div className='modelbody-background model-game-section' centered>


                        <div className="close-icon" onClick={handleModalClose}>
                            <img src={Cancel} alt='close' />
                        </div>
                        {/* <div class="video-controller hidden visible"> */}
                        <iframe width='80%' height='80%' src="https://www.youtube.com/embed/t67_zAg5vvI?&amp;controls=1&amp;start=0&amp;mute=1&amp;autoplay=1&amp;rel=0" allowfullscreen="true" frameborder="0"></iframe>

                        {/* </div> */}
                    </div>

                </div>
            </main>


        </>
    )
}

export default Games1