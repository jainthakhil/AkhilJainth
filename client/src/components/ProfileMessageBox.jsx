import React from 'react'

const ProfileMessageBox = (props) => {
  return (
    <div className='role-message w-[150px] h-20 flex flex-col items-end justify-between bg-white rounded-2xl my-12 p-4 text-sm text-[#758694]-800 shadow-lg'>
    <h2>{props.role1}</h2>
    <h2>{props.role2}</h2>

    </div>
  )
}

export default ProfileMessageBox