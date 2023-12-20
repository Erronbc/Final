import React, { useState } from 'react'
import './Header.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";


const Header = () => {

//Code statement to toggle the navbar in and out
 const [active, setActive] = useState('menu');
 const showNavBar = ()=> {
  setActive('menu showMenu');
 }

 //Remove NavBar
 const RemoveShowNavBar = ()=> {
  setActive('menu');
 }
 
 



  return (
    <div className='NavBar'>
      <div className="logoDiv">
        <h2 className='logo'>CaGo</h2>
      </div>

      <div className={active}>
        <div className='lists flex'>
          <li>
            <a href="">Packages</a>
          </li>
          <li>
            <a href="">Contests</a>
          </li>
          <li>
            <a href="">Free Drops</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
        </div>

        <div className='btns flex'>
          <button className="btn">Login</button>
          <button className="btn">SignUp</button>
          <select className='lang'>
            <option value="">EN</option>
            <option value="">RU</option>
            <option value="">KZ</option>
          </select>
        </div>

        <div className="closeIcon" onClick={RemoveShowNavBar}><AiFillCloseCircle className='icon'/></div>
      </div>
      <div className="toggleIcon" onClick={showNavBar}><TbGridDots className='icon'/></div>
    </div>
  )
}

export default Header
