import React from 'react'

const Sidebar = ({isVisible, onClose}) => {
    
  return (
        <div 
            className='fixed right-0 top-0 w-[80%] min-h-[100vh] bg-[#fff]/100 rounded-2xl' style={{ display: isVisible ? 'block' : 'none' }}
        >
            <button onClick={onClose} className='w-full flex justify-end p-8'><i className="fa-solid fa-xmark fa-xl" style={{color: "#0fa4af"}} ></i></button>
            <ul className='text-gray-600 font-semibold mx-8'>
             <li className='m-4 '><a href="#home" className='hover:text-[#0fa4af]'>HOME</a></li>
             <li className='m-4 '><a href="#about" className='hover:text-[#0fa4af]'>ABOUT</a></li>
             <li className='m-4 '><a href="#work" className='hover:text-[#0fa4af]'>WORK</a></li>
             <li className='m-4 '><a href="#skills" className='hover:text-[#0fa4af]'>SKILLS</a></li>
             <li className='m-4 '><a href="#contact" className='hover:text-[#0fa4af]'>CONTACT</a></li>
         </ul>
        </div>
  )
}

export default Sidebar