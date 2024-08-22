import React, { useState, useEffect } from 'react'
import logo from '../media/images/logo2.png'
import Sidebar from './Sidebar'
import Navlink from './Navlink'

const Navbar = () => {
    const [display, setDisplay] = useState(false);

    const handleSidebarToggle = () => {
        setDisplay(prevState => !prevState);
    };
    const handleSidebarClose = () => {
        setDisplay(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setDisplay(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <div className='navbar-container w-100 h-[4rem] flex justify-between bg-opacity-50 backdrop-blur-sm sticky top-0 z-10 '>
            
            <div className="navbar-logo w-[100px] h-full flex items-center justify-center ml-4 ">
                <img src={logo} alt="" className='h-full w-full' />

            </div>
            <div className="navbar-menu w-auto min-[900px]:flex hidden mx-auto">
                <ul className='navbar-links  flex text-gray-500 uppercase text-sm'>

                    <Navlink 
                        linkname="HOME"
                        id = '#home'
                    />
                    <Navlink 
                        linkname="ABOUT"
                        id = '#about'
                    />
                    <Navlink 
                        linkname="WORK"
                        id = '#work'
                    />
                    <Navlink 
                        linkname="SKILLS"
                        id = '#skills'
                    />
                    <Navlink 
                        linkname="CONTACT"
                        id = '#contact'
                    />
                </ul>
            </div>
            <div className="sidebar-btn h-full w-[40px] min-[900px]:hidden flex items-center mx-4">

                <button onClick={handleSidebarToggle}>
                    <i className="fa-solid fa-bars" style={{ color: "#0fa4af" }}></i>
                </button>

            </div>
            <Sidebar
                isVisible={display} onClose={handleSidebarClose}
            />
        </div>
    )
}

export default Navbar