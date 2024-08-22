import React from 'react'
import ProfileGreetMessage from './ProfileGreetMessage'
import ProfileMessageBox from './ProfileMessageBox'

const ProfileMessageContainer = () => {
  return (
    <div className='profile-message-box lg:w-auto w-full h-1/2 flex flex-col items:start lg:items-end justify-between'>
    <ProfileGreetMessage
      name="Akhil"
    />
    <ProfileMessageBox
      role1="FRONTEND DEVELOPER"
      role2="BACKEND DEVELOPER"
    />

    </div>
  )
}

export default ProfileMessageContainer