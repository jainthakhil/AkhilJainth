import React from 'react'
import { useSideNav } from '../context/SideNav'

const SideNavigation = () => {
  const sideNav = useSideNav()

  const handleClick = (id)=>{
    sideNav.setActive(id)
    
  }
  
  return (
    <div  className='sidenavigation-container h-auto w-[2rem] hidden min-[501px]:flex flex-col items-center justify-center p-5'>
    <div className="navigation-box flex flex-col">

    <a href="#home" 
    className={`navigation-btn h-[10px] w-[10px] my-2 rounded-full ${sideNav.active === 'home' ? 'bg-[#0FA4AF]' : 'bg-gray-400'} hover:bg-[#0FA4AF]`}
    onClick={()=>handleClick('home')}
    ></a>
    <a href="#about" 
    className={`navigation-btn h-[10px] w-[10px] my-2 rounded-full ${sideNav.active === 'about' ? 'bg-[#0FA4AF]' : 'bg-gray-400'} hover:bg-[#0FA4AF]`}
    onClick={()=>handleClick('about')}
    ></a>
    <a href="#work" 
    className={`navigation-btn h-[10px] w-[10px] my-2 rounded-full ${sideNav.active === 'work' ? 'bg-[#0FA4AF]' : 'bg-gray-400'} hover:bg-[#0FA4AF]`}
    onClick={()=>handleClick('work')}
    ></a>
    <a href="#skills"
    className={`navigation-btn h-[10px] w-[10px] my-2 rounded-full ${sideNav.active === 'skills' ? 'bg-[#0FA4AF]' : 'bg-gray-400'} hover:bg-[#0FA4AF]`}
    onClick={()=>handleClick('skills')}
    ></a>
    <a href="#contact" 
    className={`navigation-btn h-[10px] w-[10px] my-2 rounded-full ${sideNav.active === 'contact' ? 'bg-[#0FA4AF]' : 'bg-gray-400'} hover:bg-[#0FA4AF]`}
    onClick={()=>handleClick('contact')}
    ></a>
        
    </div>
    </div>
  )
}

export default SideNavigation