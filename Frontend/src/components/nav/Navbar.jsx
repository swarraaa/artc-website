import React, { useState } from 'react'
import './navbar.css'
import IMG from '../../assets/art circle logo orgl white (1).png'

const Navbar = () => {
  const[activeNav,SetActiveNav]=useState('#')

  return (
    <header className='head'>
      <div>
        <img src={IMG} alt=''></img>
      </div>
      <div className='sections'>
        <a href='#' onClick={()=>SetActiveNav('#')} className={activeNav==='#' ? 'active': ''}>Home</a>
        <a href='#about' onClick={()=>SetActiveNav('#about')} className={activeNav==='#about' ? 'active': ''}>About Us</a>
        <a href='#teams' onClick={()=>SetActiveNav('#teams')} className={activeNav==='#teams' ? 'active': ''}>Teams</a>
        <a href='#events' onClick={()=>SetActiveNav('#events')} className={activeNav==='#events' ? 'active': ''}>Events</a>
        <a href='#contact' onClick={()=>SetActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}>Contact Us</a>
      </div>
    </header>
  )
}

export default Navbar