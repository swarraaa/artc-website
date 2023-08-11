import React from 'react'
import './gallery.css'
import IMG1 from '../../assets/gallery-1.jpg'
import IMG2 from '../../assets/gallery-2.jpg'
import IMG3 from '../../assets/gallery-3.jpg'
import IMG4 from '../../assets/gallery-4.jpg'
import IMG5 from '../../assets/gallery-5.jpg'
import IMG6 from '../../assets/gallery-6.jpg'
import IMG7 from '../../assets/gallery-7.jpg'
import IMG8 from '../../assets/gallery-8.jpg'
import IMG9 from '../../assets/gallery-9.jpg'
import IMG10 from '../../assets/gallery-10.jpg'
import IMG11 from '../../assets/gallery-11.jpg'


const Gallery = () => {
  return (
    <div id="gallery">
        <div className='strip'>
            <div className='slide'>
                <div className='gallery-image-odd'>
                    <img src={IMG1} alt=''/>
                </div>
                <div className='gallery-image-even'>
                    <img src={IMG2} alt=''/>
                </div>
                <div className='gallery-image-odd'>
                    <img src={IMG3} alt=''/>
                </div>
                <div className='gallery-image-even'>
                    <img src={IMG4} alt=''/>
                </div>
                <div className='gallery-image-odd'>
                    <img src={IMG5} alt=''/>
                </div>
                <div className='gallery-image-even'>
                    <img src={IMG6} alt=''/>
                </div>
                <div className='gallery-image-odd'>
                    <img src={IMG7} alt=''/>
                </div>
                <div className='gallery-image-even'>
                    <img src={IMG8} alt=''/>
                </div>
                <div className='gallery-image-odd'>
                    <img src={IMG9} alt=''/>
                </div>
                <div className='gallery-image-even'>
                    <img src={IMG10} alt=''/>
                </div>
                <div className='gallery-image-odd'>
                    <img src={IMG11} alt=''/>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Gallery