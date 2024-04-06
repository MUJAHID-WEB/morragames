import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { right_arrow_icon, Cancel, BraveWallet,Uniswap,Mexc } from '../Imports/ImportImages'
// import { Modal } from 'react-bootstrap';

const EcoSystemSection = () => {

    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);
    return (
        <>
            <section class="section ecosystem">
                <div class="container z-2">
                    <div class="container_bg z-minus-1">
                        {/* <img src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b632600ee72a952f031c51_EGLD-Get-Section07.webp" loading="lazy" alt="" class="crystal-get is-7" />
                        <img src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b632613037cbbc2a8b1814_EGLD-Get-Section06.webp" loading="lazy" alt="" class="crystal-get is-6" />
                        <img src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b63262aef99f67e0fd0a2d_EGLD-Get-Section01.webp" loading="lazy" sizes="(max-width: 479px) 50vw, 30vw" srcset="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b63262aef99f67e0fd0a2d_EGLD-Get-Section01-p-500.webp 500w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b63262aef99f67e0fd0a2d_EGLD-Get-Section01-p-800.webp 800w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b63262aef99f67e0fd0a2d_EGLD-Get-Section01.webp 831w" alt="" class="crystal-get" />
                        <img src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b6326117c3ad76b124b6a6_EGLD-Get-Section02.webp" loading="lazy" alt="" class="crystal-get is-2" />
                        <img src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b632624b8e99cd2d4acea1_EGLD-Get-Section03.webp" loading="lazy" alt="" class="crystal-get is-3" />
                        <img src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b632610a4536d4fca3c491_EGLD-Get-Section04.webp" loading="lazy" alt="" class="crystal-get is-4" />
                        <img src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b63262fc4c59f7f2b37243_EGLD-Get-Section05.webp" loading="lazy" sizes="(max-width: 479px) 70vw, 35vw" srcset="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b63262fc4c59f7f2b37243_EGLD-Get-Section05-p-500.webp 500w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b63262fc4c59f7f2b37243_EGLD-Get-Section05-p-800.webp 800w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b63262fc4c59f7f2b37243_EGLD-Get-Section05.webp 999w" alt="" class="crystal-get is-5" /> */}
                    </div>
                    {/* <div class="spacer_100"></div> */}
                    <div class="f_vertical-center_t-center">
                        <div class="btn outline-green">
                            <div color-mode="light" class="btn_bg bg_outline"></div>
                            {/* <div color-mode="light" class="btn_outline-wrap is--label">
                                <div class="p_16">The EGLD Token</div>
                            </div> */}
                        </div>
                        <div class="spacer_24"></div>
                        <div class="text_maxch-90">
                            <h2 class="h_84 section-heading">Fueling the Morra Games Ecosystem</h2>
                        </div>
                        <div class="spacer_16"></div>
                        <div >
                            <div class="p_21 text_lh-1-5 text-color-white section-paragraph">$MORRA, an Ethereum-based utility token, plays a pivotal role in driving the dynamic, community, and innovative world of Morra Games</div>
                        </div>
                        <div class="spacer_32"></div>
                        <div class="btn_wrap">
                            <div class="btn teal w-inline-block" onClick={handleModalShow}>
                                <div color-mode="light" class="btn_bg bg_dark-teal"></div>
                                <div className="p_16 text-white display"><span>Buy $MORRA</span> <img src={right_arrow_icon} className="icon_20 margin-left-10" alt='->' /> </div>
                            </div>
                            <div class="btn neutral w-inline-block">
                                <div color-mode="light" class="btn_bg"></div>
                                <div className="p_16 text-white display"><span>Learn More</span> <img src={right_arrow_icon} className="icon_20 margin-left-10" alt='->' /> </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="spacer_100"></div> */}
                </div>
                {/* <Modal show={showModal} className={`model-background ${showModal ? 'classshow' : null}`} onHide={handleModalClose} centered>
                    <Modal.Body className='modelbody-background'>
                        <div className="left-column">
                            <h4 className="section-heading">Connect a Wallet</h4>
                            <div className="description-section">
                                <div className="p_21 text_neutral-500 text_lh-1-5 text-white section-title">Installed</div>
                                <div className="image-section">
                                    <div className="without-bg-img">
                                        <img className="image" src={BraveWallet} alt="" />
                                    </div>
                                    <div className="p_21 text_neutral-500 text_lh-1-5 text-white">Brave Wallet</div>
                                </div>
                                <div className="image-section">
                                    <div className="without-bg-img">
                                        <img className="image" src={MetaMask} alt="" />
                                    </div>
                                    <div className="p_21 text_neutral-500 text_lh-1-5 text-white">MetaMask</div>
                                </div>
                            </div>
                            <div className="description-section">
                                <div className="p_21 text_neutral-500 text_lh-1-5 text-white section-title">Popular</div>
                                <div className="image-section">
                                    <div className='background-img'>
                                        <img className="image" src={BraveWallet} alt="" />
                                    </div>
                                    <div className="p_21 text_neutral-500 text_lh-1-5 text-white">Brave Wallet</div>
                                </div>
                                <div className="image-section">
                                    <div className='background-img'>
                                        <img className="image" src={BraveWallet} alt="" />
                                    </div>
                                    <div className="p_21 text_neutral-500 text_lh-1-5 text-white">MetaMask</div>
                                </div>
                                <div className="image-section">
                                    <div className='background-img'>
                                        <img className="image" src={BraveWallet} alt="" />
                                    </div>
                                    <div className="p_21 text_neutral-500 text_lh-1-5 text-white">MetaMask</div>
                                </div>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="close-icon" onClick={handleModalClose}>
                                <img src={Cancel} alt='close' />
                            </div>
                            <h4 className="section-heading">What is a Wallet?</h4>
                            <div className="card-section">
                                <div className="card">
                                    <div className='background-img'>
                                        <img className="image" src={MetaMask} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6>A Home for your Digital Assets</h6>
                                        <p>Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className='background-img'>
                                        <img className="image" src={MetaMask} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h6>A New Way to Log in</h6>
                                        <p>Instead of creating new accounts and passwords on every website, just connect your wallet.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="btn_wrap button-section">
                                <div class="btn teal w-inline-block" onClick={handleModalShow}>
                                    <div color-mode="light" class="btn_bg bg_dark-teal"></div>
                                    <div className="p_16 text-white display"><span>GET A WALLET</span> <img src={right_arrow_icon} className="icon_20 margin-left-10" alt='->' /> </div>
                                </div>
                                <div class="btn neutral w-inline-block">
                                    <div color-mode="light" class="btn_bg"></div>
                                    <div className="p_16 text-white display"><span>Learn More</span> </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                </Modal> */}
                <div className={`model-background ${showModal ? 'classshow' : null}`}>
                    <div className='blocker'></div>
                    {/* <div className="close-icon" onClick={handleModalClose}>
                                <img src={Cancel} alt='close' />
                            </div> */}
                    <div className='modelbody-background' onHide={handleModalClose} centered>
                        <div className="left-column">
                            <h4 className="section-heading">Buy Morra Token</h4>
                            <div className="description-section">
                                <div className="p_21 text_neutral-500 text_lh-1-5 text-white section-title">CEX</div>
                                <Link to='https://www.mexc.com/exchange/MORRA_USDT' target='_blank' className="image-section">
                                    <div className="without-bg-img">
                                        <img className="image" src={Mexc} alt="" />
                                    </div>
                                    <div className="p_21 text_neutral-500 text_lh-1-5 text-white">MEXC</div>
                                </Link>
                              
                            </div>
                            <div className="description-section">
                                <div className="p_21 text_neutral-500 text_lh-1-5 text-white section-title">DEX</div>
                                {/* <div className="image-section">
                                    <div className='background-img'>
                                        <img className="image" src={BraveWallet} alt="" />
                                    </div>
                                    <div className="p_21 text_neutral-500 text_lh-1-5 text-white">Brave Wallet</div>
                                </div>
                                <div className="image-section">
                                    <div className='background-img'>
                                        <img className="image" src={BraveWallet} alt="" />
                                    </div>
                                    <div className="p_21 text_neutral-500 text_lh-1-5 text-white">MetaMask</div>
                                </div>
                                <div className="image-section">
                                    <div className='background-img'>
                                        <img className="image" src={BraveWallet} alt="" />
                                    </div>
                                    <div className="p_21 text_neutral-500 text_lh-1-5 text-white">MetaMask</div>
                                </div> */}
                                  <Link to='https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xd9adfb67381d392c6e9671f64cdd9014bfcd74f2' target='_blank' className="image-section">
                                    <div className="without-bg-img">
                                        <img className="image" src={Uniswap} alt="" />
                                    </div>
                                    <div className="p_21 text_neutral-500 text_lh-1-5 text-white">Uniswap</div>
                                </Link>
                            </div>
                        </div>
                        <div className="close-icon" onClick={handleModalClose}>
                                <img src={Cancel} alt='close' />
                            </div>
                        {/* <div className="right-column">
                            <div className="close-icon" onClick={handleModalClose}>
                                <img src={Cancel} alt='close' />
                            </div>
                            <h4 className="section-heading">What is a Wallet?</h4>
                            <div className="card-section">
                                <div className="card">
                                    <div>
                                    <div className='background-img'>
                                        <img className="image" src={MetaMask} alt="" />
                                    </div>
                                    </div>
                                    <div className="card-content">
                                        <h6>A Home for your Digital Assets</h6>
                                        <p>Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div>
                                    <div className='background-img'>
                                        <img className="image" src={MetaMask} alt="" />
                                    </div>
                                    </div>
                                    <div className="card-content">
                                        <h6>A New Way to Log in</h6>
                                        <p>Instead of creating new accounts and passwords on every website, just connect your wallet.</p>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="btn_wrap button-section">
                                <div class="btn teal w-inline-block" onClick={handleModalShow}>
                                    <div color-mode="light" class="btn_bg bg_dark-teal"></div>
                                    <div className="p_16 text-white display"><span>GET A WALLET</span> <img src={right_arrow_icon} className="icon_20 margin-left-10" alt='->' /> </div>
                                </div>
                                <div class="btn neutral w-inline-block">
                                    <div color-mode="light" class="btn_bg"></div>
                                    <div className="p_16 text-white display"><span>Learn More</span> </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                </div>
            </section>



        </>
    )
}

export default EcoSystemSection