import React from 'react'
import HighlightImg from './HighlightImg'
import reactimg from '../media/images/atom.png'
import reduximg from '../media/images/redux1.png'
import vscodeimg from '../media/images/vscodeimg.png'

const ProfileHighlightContainer = () => {
    return (
        <div className='profile-highlight-box w-full h-full hidden md:flex lg:w-[30%] lg:flex-col lg:mt-0 mt-10 justify-between'>

        <div className="highlight-box w-full h-32 flex justify-center">
        <HighlightImg
            img = {reactimg}
        />
        </div>
        <div className="highlight-box w-full h-36 flex lg:justify-start justify-center">
        <HighlightImg
            img = {vscodeimg}
        />
        </div>
        <div className="highlight-box w-full  h-32 flex justify-center">
        <HighlightImg
            img = {reduximg}
        />
        </div>
        
        </div>


    )
}

export default ProfileHighlightContainer