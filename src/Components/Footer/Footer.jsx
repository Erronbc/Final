import React from 'react'
import './Footer.css'

import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import { BiLogoFacebookCircle} from 'react-icons/bi'
import { BsYoutube} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='Footer container'>
      <div className="secContainer grid">
        <div className="singleSection">
          <h2>
            Cago
          </h2>
          <p>
            Best Gaming Expirience
          </p>
        </div>

        <div className="singleSection">
          <h3>Company</h3>
          <li>About</li>
          <li>Careers</li>
          <li>Support</li>
        </div>

        <div className="singleSection">
          <h3>Contact</h3>
          <li>Adresses</li>
          <li>Mail us</li>
          <li>Officials</li>
        </div>

        <div className="singleSection">
          <h3>More</h3>
          <li>Guide</li>
          <li>Partners</li>
          <li>Sponsors</li>
        </div>

        <div className="singleSection">
          <div className="socials flex">
              <AiFillInstagram className='icon'/>
              <BiLogoFacebookCircle className='icon'/>
              <AiFillTwitterCircle className='icon'/>
              <BsYoutube className='icon'/>
          </div>
          {/* 
          <span className="text">Discover our app</span>
          <span className="flex">
            <img src={dwnl} alt="" />
          </span>
          */}
          
        </div>

      </div>
    </div>
  )
}

export default Footer