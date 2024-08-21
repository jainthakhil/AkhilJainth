import React from 'react'
// import { Link } from 'react-scroll'
import logo from '../media/images/logo2.png'

const Navbar = () => {
  return (
    <div className='navbar-container w-100 h-[4rem] flex bg-opacity-50 backdrop-blur-sm sticky top-0 z-10'>
    <div className="navbar-logo w-40 h-full flex items-center justify-center ">
    <img src={logo} alt="" className='h-full' />

    </div>
    <div className="navbar-menu w-auto flex mx-auto">
    <ul className='navbar-links w-50 flex text-gray-500 uppercase text-sm'>
        
        <li className='nav-link mx-3 my-auto '>
            <a href="#home" >Home</a>
        </li>
        <li className='nav-link mx-3 my-auto '>
            <a href='#about' >About</a>
        </li>
        <li className='nav-link mx-3 my-auto'>
            <a href='#work'>Work</a>
        </li>
        <li className='nav-link mx-3 my-auto '>
            <a href='#skills' >Skills</a>
        </li>
        <li className='nav-link mx-3 my-auto '>
            <a href='#contact' >Contact</a>
        </li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar