import React from 'react'
import './Categories.css'

//Import images
import hardware from "../../Assets/hardware.png"
import bag from "../../Assets/bag.png"
import contest from "../../Assets/contest.jpeg"
import settings from "../../Assets/settings.png"

const Categories = () => {
  return (
    <div className='Categories
    container section'>
      <div className="secHeader">
        <span>
          Category
        </span>
        <h2>
          We Offer best services
        </h2>
      </div>

      <div className="secContainer grid">
      <div className="singleCard grid">
        <div className="imgDiv">
          <img src={hardware} alt="" className='mainImage' />
        </div>
        <span>
          Powerfull Hardware
        </span>
        <p>
        Our PCs are equipped with powerful hardware: latest generation processors, high-performance graphics cards and fast RAM.
        </p>
      </div>
      

      <div className="singleCard grid">
        <div className="imgDiv">
          <img src={bag} alt="" className='mainImage' 
          style={{width: 90}}/>
        </div>
        <span>
         Service Packages
        </span>
        
        <p>Standard - 1000 tg/h, 144Hz, 2080</p> 
       <p>V.I.P - 1500/h , 240 Hz, 3090</p> 
        <p>Boot camp - 2000/h,  360 Hz, 4090</p>
        
      </div>

      <div className="singleCard grid">
        <div className="imgDiv">
          <img src={contest} alt="" className='mainImage' 
          style={{width: 50}}/>
        </div>
        <span>
          Local contests
        </span>
        <p>
        We have exciting contests every month where you can win free packages of our services! Join us and participate.
        </p>
      </div>
  

  <div className="singleCard grid">
        <div className="imgDiv">
          <img src={settings} alt="" className='mainImage' 
          style={{width: 90}}/>
        </div>
        <span>
          Best Employees
        </span>
        <p>
        The best employees who will help with all the problems and brighten up your time
        </p>
      </div>

  </div>
  </div> 

    
  )
}

export default Categories