import React from 'react'
import waveimg from '../media/images/wave.png'

const ProfileGreetMessage = (props) => {
  return (
    <div className='greet-message w-[250px] h-[100px] flex items-center justify-start bg-white rounded-2xl shadow-lg p-4'>
    <img src={waveimg} alt="" className='h-12 aspect-square mr-8'/>
        <div className="message-cont h-full ">
            <p className='text-sm'>Hello, I am</p>
            <h2 className='text-[2.5rem] font-semibold'>{props.name}</h2>
        </div>

    </div>
  )
}

export default ProfileGreetMessage