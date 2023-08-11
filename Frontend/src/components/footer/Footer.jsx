import React from 'react'
import './footer.css'
// import {MdOutlineMailOutline} from 'react-icons/md'
import {SiYoutube} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <h5>Get In Touch</h5>
      <a href='#'>WCE ART CIRCLE</a>
      <div className='logos'>
        <a href='https://youtube.com/@wceartcircle' target={'_blank'}><SiYoutube className='logo'/></a>
        <a href='https://www.instagram.com/wce_artcircle/' target={'_blank'}><FaInstagramSquare className='logo'/></a>
        <a href='https://www.linkedin.com/company/wce-art-circle/mycompany/' target={'_blank'}><BsLinkedin className='logo'/></a>
      </div>
      
    </footer>
  )
}

export default Footer