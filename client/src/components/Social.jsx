import React from 'react'
import { links } from '../content/socialcontent'
import SocialLink from './SocialLink'

const Social = () => {
  return (
    <div className='social-container h-auto w-[4rem] hidden min-[501px]:flex items-center justify-center  p-5 '>

    <div className="social-links w-full h-30 flex flex-col items-center justify-center text-[#6B7688]">

      {links.map((link)=>(
        <SocialLink 
          key={link.id}
          address={link.address}
          img={link.img}
        />
      ))}






        {/* <a href="" className='social-link w-[40px] h-[40px] flex items-center justify-center my-1 border-[1px] border-gray-300 rounded-full transition-colors duration-300  hover:text-white hover:bg-black'>
            <i className="fa-brands fa-github fa-lg"></i>
        </a>
        <a href="" className='social-link w-[40px] h-[40px] flex items-center justify-center my-1 border-[1px] border-gray-300 rounded-full transition-colors duration-300  hover:text-white hover:bg-black'>
            <i className="fa-brands fa-linkedin-in fa-lg"></i>
        </a>
        <a href="" className='social-link w-[40px] h-[40px] flex items-center justify-center my-1 border-[1px] border-gray-300 rounded-full transition-colors duration-300  hover:text-white hover:bg-black'>
            <i className="fa-brands fa-instagram fa-lg"></i>
        </a> */}
    </div>
        
    </div>
  )
}

export default Social