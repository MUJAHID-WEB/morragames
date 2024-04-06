import React from 'react'
import ServiceSections from './ServiceSections'
import FeaturesSections from './FeaturesSections'
import ArchiveSections from './ArchiveSections'
import FooterSections from './FooterSections'
import OurPartnerSections from './OurPartnerSections'
import EcoSystemSection from './EcoSystemSection'
import ScrollingSection from './ScrollingSection'
import TechStacks from './TechStacks'
import EpicAdventure from './EpicAdventure'
import GameSectionNewSlider from './GameSectionNewSlider'
import PartnersLogos from './PartnersLogos'

const MainSection = () => {
    return (
        <>
            <main className="main-wrapper">
                {/* <img src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c0706e77100ec0ebec81c_Hero%20section%20background.webp" loading="eager" sizes="100vw" srcSet="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c0706e77100ec0ebec81c_Hero%20section%20background-p-500.webp 500w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c0706e77100ec0ebec81c_Hero%20section%20background-p-800.webp 800w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c0706e77100ec0ebec81c_Hero%20section%20background-p-1080.webp 1080w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c0706e77100ec0ebec81c_Hero%20section%20background.webp 1200w" alt="" className="section_img-overflow" /> */}
                <ServiceSections />
                <TechStacks/>
                <GameSectionNewSlider/>
                <FeaturesSections />
                <OurPartnerSections /> 
                <EpicAdventure/>
                <EcoSystemSection />
                <ScrollingSection />
                <ArchiveSections />
                <PartnersLogos/>
                <FooterSections />
            </main>
        </>
    )
}

export default MainSection