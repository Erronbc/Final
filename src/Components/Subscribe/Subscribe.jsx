import React from 'react'
import './Subscribe.css'

import {HiOutlineMail} from 'react-icons/hi'

const Subscribe = () => {
  return (
    <div className='Subscribe container section'>
      <div className="secContent grid">
        <h1>Subscribe for latest news</h1>
        <div className="inputDiv flex">
          <div className="input flex">
            <HiOutlineMail  className='icon'/>
            <input type="text" placeholder='Your email'/>
          </div>
          <button className='btn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe