import React from 'react'
import './Home.css'

//Import Image
import MainImage from '../../Assets/simple.png'
import ter from '../../Assets/ter.png'
//Import icons
import {FaPlay} from "react-icons/fa"

const Home = () => {
  return (
    <div className='Home container section'>
      <div className='textDivgrid'>
        <span className='redText'>
          Best Computer club in Almaty
        </span>
        <h2>
        Enjoy your favorite games on the most powerful systems
        </h2>
        <p>
        Discover a new world of digital possibilities in Cago: modern equipment, fast Internet and a friendly community are waiting for you!
        </p>
        <div className='buttons flex'>
          <button className='btn'>Find More</button>
          <div className="playBtn flex">
            <FaPlay className='icon'/>
            <span>Play Demo</span>
          </div>
        </div>
      </div>

      <div className="imgDiv flex">
        <img src={MainImage} alt="MainImage" />
      </div>
        <img src={ter} alt="ter" className='a'/>
    </div>
  )
}

export default Home
