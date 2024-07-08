import React from 'react'
import logo from '../assets/Hutly_logo_upscale.png'
function Navbar() {
  return (
    <div className='nav-bar'>
        <div className='logo'>
            <img src={logo} alt=""  />
        </div>
        <div className='nav-links'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ's</a></li>
            </ul>
        </div>
        <div className='btn'>
            <button>Contact us</button>
        </div>
    </div>
  )
}

export default Navbar