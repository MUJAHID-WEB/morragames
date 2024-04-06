import React from 'react'
import { NewsDetails2Img, archive2 } from '../Imports/ImportImages'
import NewsDetails2 from '../Components/NewsDetails2'
import NavSection from '../Components/NavSection'
import ArchiveSections from '../Components/ArchiveSections'
import FooterSections from '../Components/FooterSections'

const News2 = () => {
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
                            src={NewsDetails2Img}
                            sizes="100vw"
                            srcset={NewsDetails2Img}
                            class="blog_main-img" />
                        <div class="spacer_100 mobile-l_half"></div>
                    </div>
                    <div class="nav-transition"></div>
                    <div class="container z-2">
                        <div class="f_vertical-center_t-center">
                            <div class="blog_category-detail_wrap"><a style={{ color: '#97e0ff' }} href="/categories/ecosystem"
                                class="blog_category-detail">morra studio</a>
                                <div class="blog_category-dot"></div>
                                <div>
                                    <div class="blog_read">&nbsp; 4 min read</div>
                                    <div class="blog_read w-dyn-bind-empty"></div>
                                    <div class="blog_read w-condition-invisible">min read</div>
                                </div>
                            </div>
                            <div class="spacer_12"></div>
                            <h1 className="h_64 section-heading">Unlocking the Potential: Morra Token <br/> and the Epoch System</h1>
                            <div class="spacer_100 mobile-l_half"></div>
                        </div>
                    </div>
                </div>
                <NewsDetails2 />
            </div>
        </main>
        <ArchiveSections />
        <FooterSections />
        </div>
        </>
    )
}

export default News2