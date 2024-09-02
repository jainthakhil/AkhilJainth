import React from 'react'
import { useSideNav } from '../context/SideNav'

const SideNavigation = () => {
  const sideNav = useSideNav()

  const handleClick = (id)=>{
    sideNav.setActive(id)
  }

  const linkArray = ['#home', '#about', '#work', '#skills', '#contact'] 
  
  return (
    <div  className='sidenavigation-container h-auto w-[2rem] hidden min-[501px]:flex flex-col items-center justify-center p-5'>
    <div className="navigation-box flex flex-col">

    {linkArray.map((link)=>(
      <a href={link} 
    className={`navigation-btn h-[10px] w-[10px] my-2 rounded-full ${sideNav.active === link ? 'bg-[#0FA4AF]' : 'bg-gray-400'} hover:bg-[#0FA4AF]`}
    onClick={()=>handleClick(link)}
    ></a>
    ))}

    
        
    </div>
    </div>
  )
}

export default SideNavigation