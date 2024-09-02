// import React from 'react'
// import { useSideNav } from '../context/SideNav'

// const Navlink = (props) => {
//     const sideNav = useSideNav()
//     const handleClick = (id) => {
//         sideNav.setActive(id)

//     }
//   return (
//     <li className='nav-link mx-3 my-auto '>
//         <a href={props.id} className='hover:text-[#0fa4af]' onClick={handleClick}>{props.linkname}</a>
//     </li>
//   )
// }

// export default Navlink

import React from 'react'
import { useSideNav } from '../context/SideNav'

const Navlink = (props) => {
    const sideNav = useSideNav();

    const handleClick = (id) => {
        sideNav.setActive(id);
    }

    const isActive = sideNav.active === props.id;

    return (
        <li className={`nav-link mx-3 my-auto ${isActive ? 'text-[#0fa4af]' : ''}`}>
            <a 
                href={props.id} 
                className={`hover:text-[#0fa4af] ${isActive ? 'text-[#0fa4af]' : ''}`} 
                onClick={() => handleClick(props.id)}
            >
                {props.linkname}
            </a>
        </li>
    )
}

export default Navlink;
