import React from 'react'
import Social from './Social'
import SideNavigation from './SideNavigation'
import ProfileImgContainer from './ProfileImgContainer'
import profileimg from '../media/images/profileimg.png'
import ProfileMessageContainer from './ProfileMessageContainer'
import ProfileHighlightContainer from './ProfileHighlightContainer'


const Home = () => {
  return (
    <section id='home' className=' home-container h-auto w-full flex bg-[#EDF2F8] '>
    <Social/>
    <div className="home-box w-full h-auto flex flex-col lg:flex-row  p-8 pb-0 ">
    <ProfileMessageContainer/>
    <ProfileImgContainer
      img={profileimg}
    />
    <ProfileHighlightContainer/>

    </div>

    
    <SideNavigation
    />
    </section>
  )
}

export default Home