import React from 'react'

const Contactcard = (props) => {
  return (
    <div className=" w-full h-[50px] flex items-center justify-start bg-[#0FA4AF]/10 rounded-lg px-4 my-2 lg:my-8 lg:mx-[2px]">
            <img src={props.img} alt="" className='h-6 mr-4' />
            <a href={props.src} className='h-full w-full flex items-center text-sm'>{props.text}</a>
    </div>
  )
}

export default Contactcard