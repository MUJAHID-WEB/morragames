import React from 'react'
import { Chainlink, DigitalArms, Gameswift, Myria, Polygon } from '../Imports/ImportImages'

function PartnersLogos() {
  return (
    <div className='our-partnerssarea'>
        <div className='container'>
        <div>
        <h2 className="section-heading">Our Partners</h2>
        <div className='flexarea'>
            <div>
                <img src={DigitalArms} alt='image1'/>
            </div>
            <div>
                <img src={Myria} alt='image1'/>
            </div>
            <div>
                <img src={Gameswift} alt='image1'/>
            </div>
            <div>
                <img src={Polygon} alt='image1'/>
            </div>
            <div>
                <img src={Chainlink} alt='image1'/>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default PartnersLogos