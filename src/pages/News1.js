import React from 'react'
import { archive1 } from '../Imports/ImportImages'
import NavSection from '../Components/NavSection'
import ArchiveSections from '../Components/ArchiveSections'
import FooterSections from '../Components/FooterSections'
import NewsDetails1 from '../Components/NewsDetails1'
import { Link } from 'react-router-dom'

const News1 = () => {
    return (
        <>
        <div className='article-pagee'>
        <NavSection />
        <div className="spacer_80"></div>
            <main class="main-wrapper">
            <div class="inner-wrapper bg_dark">
                <div class="section">
                    <div class="container pad_8">
                        <div class="spacer_40"></div><img alt="" loading="eager"
                            src={archive1}
                            sizes="100vw"
                            srcset={archive1}
                            class="blog_main-img" />
                        <div class="spacer_100 mobile-l_half"></div>
                    </div>
                    <div class="nav-transition"></div>
                    <div class="container z-2">
                        <div class="f_vertical-center_t-center">
                            <div class="blog_category-detail_wrap"><Link to='' style={{ color: '#97e0ff' }} 
                                class="blog_category-detail">morra studio</Link>
                                <div class="blog_category-dot"></div>
                                <div>
                                    <div class="blog_read">&nbsp; 4 min read</div>
                                    <div class="blog_read w-dyn-bind-empty"></div>
                                    <div class="blog_read w-condition-invisible">min read</div>
                                </div>
                            </div>
                            <div class="spacer_12"></div>
                            <h1 className="h_64 section-heading">Morra TGE Quest: The Power of RA</h1>
                            <div class="spacer_100 mobile-l_half"></div>
                        </div>
                    </div>
                </div>
                <NewsDetails1 />
            </div>
        </main>
        </div>
            <ArchiveSections />
            <FooterSections />
        </>
    )
}

export default News1