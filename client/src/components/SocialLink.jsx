import React from 'react'

const SocialLink = (props) => {
  return (
    <div className='social-link w-[40px] h-[40px] flex items-center justify-center my-1 border-[1px] border-gray-300 rounded-full'>
        <a href={props.address} target='_blank' className='h-full w-full flex items-center justify-center  rounded-full transition-colors duration-300 ease-in-out  hover:text-white hover:bg-[#0FA4AF]'>
                <i className={props.img}></i>
        </a>


    </div>
  )
}

export default SocialLink