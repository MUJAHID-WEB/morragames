import React, { useState } from 'react'
import NavSection from '../Components/NavSection'
import { Cancel, FaceIcon, GameSection1Img1, GameSection1Img2, GameSection2Img1, GameSection2Img2,Games2BgMob, Games1Bg, Games2Bg, Mythya, PlayIcon } from '../Imports/ImportImages'
import ArchiveSections from '../Components/ArchiveSections'
import FooterSections from '../Components/FooterSections'
import GamesSection1Slider from '../Components/GamesSection1Slider'
import GamesSection2Slider from '../Components/GamesSection2Slider'
import useWindowDimensions from '../Components/WindowDimensions'


const Games2 = () => {
    const {width} = useWindowDimensions();
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);
    return (
        <>

            <NavSection />
            <div style={{ position: 'relative' }}>
                <img src={width < 576 ? Games2BgMob : Games2Bg} alt="" className='game-section-bg' />
                {/* <img src={Mythya} alt="" className='faceicon-manage' /> */}
                <img src={PlayIcon} alt="" className='playicon-manage' onClick={() => setShowModal(true)} />
            </div>

            <main class="main-wrapper games-section">
                <div class="inner-wrapper bg_dark">
                    <div class="section">
                        <div class="container pad_8">
                            <div className='spacer-3'></div>
                            <div className='featured_grid'>
                                <div>
                                    <h1 >Play Mythya</h1>
                                    <div className='spacer-2'></div>
                                    <p>Mythya is a mobile real-time strategy game where players recruit powerful commanders, train troops, gather and manage resources, and build powerful kingdoms.</p>
                                </div>
                                <div>
                                    <p className="extra-bold-p">Task</p>
                                    <div className='spacer-1'></div>
                                    <p className="p_21 text_neutral-500 text-white">The objective is to establish dominance in a mythical world by forging alliances, completing quests, and conquering rival kingdoms. Players engage in strategic battles, diplomacy, and exploration to advance their kingdoms and become the ultimate ruler of Mythya.</p>
                                    <div className='display right-sub-box'>
                                        <div className='right-section-top-line'>
                                            <p className='extra-bold-p'>Genre</p>
                                            <p className="text_neutral-500 text-white">Real-time strategy</p>
                                        </div>
                                        <div className='right-section-top-line'>
                                            <p className='extra-bold-p'>Developer &
                                                Publisher</p>
                                            <p className="text_neutral-500 text-white">Morra Games</p>
                                        </div>
                                        <div className='right-section-top-line'>
                                            <p className='extra-bold-p'>Platform</p>
                                            <p className="text_neutral-500 text-white">Mobile</p>
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
                                            <div className="text-size-hero text-white partner-subtitle">GAME ELEMENTS</div>
                                        </div>
                                        <div className='spacer-2'></div>
                                        <div className='space-padding-manage-h2'>
                                            <h2>Mythya offers a diverse range of gameplay elements that combine strategy, resource management, and tactical warfare to deliver an engaging and immersive gaming experience.</h2>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="p_21 text_neutral-500 text-white">Kingdom Building: </span>At the heart of Mythya lies the concept of kingdom building. Players must construct and upgrade various structures within their kingdom</p><br />
                                        <p><span className="p_21 text_neutral-500 text-white">Resource Management: </span>Resources play a vital role in Mythya, serving as the lifeblood of your kingdom. Players must gather and manage resources such as food, wood, stone, and gold to fuel their kingdom’s growth, train troops, conduct research, and maintain their economy.</p><br/>
                                        <p><span className="p_21 text_neutral-500 text-white">Troop Training and Deployment: </span>Assemble a powerful army of mythical creatures, legendary warriors, and divine beings to defend your kingdom and wage war against your enemies. Train and deploy troops strategically, taking advantage of each unit’s unique strengths and abilities to overcome your adversaries.</p><br/>
                                        <p><span className="p_21 text_neutral-500 text-white">Combat and Warfare: </span> Engage in thrilling real-time battles against AI-controlled opponents and other players. Command your troops, unleash devastating abilities, and outmaneuver your enemies on the battlefield to secure victory and expand your influence across the realm.</p><br/>
                                    </div>
                                </div>
                            </div>
                            <div className='spacer-4'></div>
                            <div className='featured_grid'>
                                <div><img src={GameSection2Img1} alt="" /></div>
                                <div><img src={GameSection2Img2} alt="" /></div>
                            </div>
                            <div className='spacer-4'></div>
                            <div className='featured_grid'>
                                <div>
                                    <div className="text_maxch-85">
                                        <div className="tag_wrapper">
                                            <div className="text-size-hero text-white partner-subtitle">GAMEPLAY</div>
                                        </div>
                                        <div className='spacer-2'></div>
                                        <div className='space-padding-manage-h2'>
                                            <h2>Mythya offers a rich
                                                and immersive gaming experience that combines strategy, diplomacy, and epic warfare</h2>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p>As you play Mythya, you will earn experience points, unlock new technologies, and discover powerful artifacts that will enhance your kingdom’s capabilities. Progress through the game, level up your commanders, and unlock new features and content to keep the adventure fresh and exciting. With its engaging gameplay, stunning visuals, and endless opportunities for adventure, Mythya promises to captivate players and transport them to a realm where legends are forged and destinies are shaped.
                                        </p><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <GamesSection2Slider />
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
                                <div className='row-11'>
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
                                        <p className='extra-bold-p'>— Milan</p>
                                        <p>Team Lead</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>—Pritesh Agarwal</p>
                                        <p>Product manager</p><br />
                                    </div>
                                </div>
                                <div className='row-11'>
                                    <div>
                                        <p>Developers</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Amit Kachhadiya</p>
                                        <p>Lead Game Developer</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Deep Kumar</p>
                                        <p>Game Developer</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Annery Pate</p>
                                        <p>3D Generalist</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Syed Arslan</p>
                                        <p>Full Stack Developer</p><br />
                                    </div>
                                </div>
                                <div className='row-11'>
                                    <div>
                                        <p>Developers</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Jay Soni</p>
                                        <p>3D animation</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Paras Chhantbar</p>
                                        <p>UI/UX Artist</p><br />
                                    </div>
                                    <div className='team-names'>
                                        <p className='extra-bold-p'>— Het Soni</p>
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

export default Games2