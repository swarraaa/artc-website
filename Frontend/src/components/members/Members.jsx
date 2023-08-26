import React from 'react'
import './members.css'
import {GrInstagram} from 'react-icons/gr'
import {AiOutlineLinkedin} from 'react-icons/ai'
import PRESIDENT from '../../assets/sarvadnya.JPG'
import VICEPRESIDENT from '../../assets/ruturaj2.jpg'
import SECRETARY from '../../assets/prajval.jpeg'
import SIR from '../../assets/sir.jpeg'


const Members = () => {
  return (
    <div id='members'>
      <h2>Our Leaders</h2>
      <div className='group'>
      <div className="member">
          <div className="member-image">
            <img src={SIR} alt=''/>
          </div>
          <div className="member-info">
            <div className='member-name'>
              <h5>Prof. Kiran Madhale</h5>
              <h6>Staff Advisor-WCE Art Circle</h6>
            </div>
            {/* <div className="member-socials">
              <a href=''><GrInstagram className='profiles'/></a>
              <a href=''><AiOutlineLinkedin className='profiles'/></a>
            </div> */}
          </div>
        </div>
        <div className="member">
          <div className="member-image">
            <img src={PRESIDENT} alt=''/>
          </div>
          <div className="member-info">
            <div className='member-name'>
              <h5>Sarvadnya More</h5>
              <h6>President-WCE Art Circle</h6>
            </div>
            {/* <div className="member-socials">
              <a href='https://instagram.com/smile_with_sarvadnya?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'><GrInstagram className='profiles'/></a>
              <a href='https://www.linkedin.com/company/wce-art-circle/mycompany/'><AiOutlineLinkedin className='profiles'/></a>
            </div> */}
          </div>
        </div>
        <div className="member">
          <div className="member-image">
            <img src={VICEPRESIDENT} alt=''/>
          </div>
          <div className="member-info">
            <div className='member-name'>
              <h5>Ruturaj Chikurde</h5>
              <h6>Vice-President-WCE Art Circle</h6>
            </div>
            {/* <div className="member-socials">
              <a href='https://www.instagram.com/r__ruturaj/?igshid=ZDdkNTZiNTM%3D' target={'_blank'}><GrInstagram className='profiles'/></a>
              <a href='https://www.linkedin.com/in/ruturaj-chikurde-72033b243' target={'_blank'}><AiOutlineLinkedin className='profiles'/></a>
            </div> */}
          </div>
        </div>
        
        <div className="member">
          <div className="member-image">
            <img src={SECRETARY} alt=''/>
          </div>
          <div className="member-info">
            <div className='member-name'>
              <h5>Prajval Tayde-Patil</h5>
              <h6>Secretary-WCE Art Circle</h6>
            </div>
            {/* <div className="member-socials">
              <a href='https://instagram.com/prajval_tayde_patil?igshid=MzRlODBiNWFlZA=='><GrInstagram className='profiles'/></a>
              <a href='https://www.linkedin.com/in/prajvaltayde'><AiOutlineLinkedin className='profiles'/></a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members