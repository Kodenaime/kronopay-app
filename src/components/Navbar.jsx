import { nav } from 'motion/react-client'
import React from 'react'

import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <ul className="nav-menu">
        <a className='nav-item' href="#">Features</a>
        <a className='nav-item' href="#">Usecases</a>
        <a className='nav-item' href="#">Support</a>
        <a className='nav-item' href="#">About</a>

        <a href="#" className="btn">Get the App!</a>

      </ul>

    </nav>
  )
}

export default Navbar