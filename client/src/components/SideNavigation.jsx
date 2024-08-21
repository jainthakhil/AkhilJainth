import React from 'react'
import { useSidebar } from '../context/Sidebar'

const SideNavigation = () => {
  const sidebar = useSidebar()
  // const [active, setActive] = useState('')

  const handleClick = (id)=>{
    // setActive(id)
    sidebar.setActive(id)
    // console.log(active);
    
  }
  
  return (
    <div  className='sidenavigation-container h-auto w-[2rem] hidden min-[501px]:flex flex-col items-center justify-center p-5'>
    <div className="navigation-box flex flex-col">

    <a href="#home" 
    className={`navigation-btn h-[10px] w-[10px] my-2 rounded-full ${sidebar.active === 'home' ? 'bg-[#0FA4AF]' : 'bg-gray-400'} hover:bg-[#0FA4AF]`}
    onClick={()=>handleClick('home')}
    ></a>
    <a href="#about" 
    className={`navigation-btn h-[10px] w-[10px] my-2 rounded-full ${sidebar.active === 'about' ? 'bg-[#0FA4AF]' : 'bg-gray-400'} hover:bg-[#0FA4AF]`}
    onClick={()=>handleClick('about')}
    ></a>
    <a href="#work" 
    className={`navigation-btn h-[10px] w-[10px] my-2 rounded-full ${sidebar.active === 'work' ? 'bg-[#0FA4AF]' : 'bg-gray-400'} hover:bg-[#0FA4AF]`}
    onClick={()=>handleClick('work')}
    ></a>
    <a href="#skills"
    className={`navigation-btn h-[10px] w-[10px] my-2 rounded-full ${sidebar.active === 'skills' ? 'bg-[#0FA4AF]' : 'bg-gray-400'} hover:bg-[#0FA4AF]`}
    onClick={()=>handleClick('skills')}
    ></a>
    <a href="#contact" 
    className={`navigation-btn h-[10px] w-[10px] my-2 rounded-full ${sidebar.active === 'contact' ? 'bg-[#0FA4AF]' : 'bg-gray-400'} hover:bg-[#0FA4AF]`}
    onClick={()=>handleClick('contact')}
    ></a>
        
    </div>
    </div>
  )
}

export default SideNavigation