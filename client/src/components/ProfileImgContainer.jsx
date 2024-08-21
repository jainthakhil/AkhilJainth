import React from 'react'

const ProfileImg = (props) => {
  return (
    <div className='profile-img-box w-full lg:w-1/2 h-auto flex items-center justify-center'>
    <img src={props.img} alt="" className='aspect-auto h-full' />

    </div>
  )
}

export default ProfileImg