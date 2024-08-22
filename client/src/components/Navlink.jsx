import React from 'react'
import { useSideNav } from '../context/SideNav'

const Navlink = (props) => {
    const sideNav = useSideNav()
    const handleClick = (id) => {
        sideNav.setActive(id)

    }
  return (
    <li className='nav-link mx-3 my-auto '>
        <a href={props.id} className='hover:text-[#0fa4af]' onClick={handleClick}>{props.linkname}</a>
    </li>
  )
}

export default Navlink