import React from 'react'

const SkillCircle = (props) => {
  return (
    <div className='skill-cricle w-24 h-24 text-center  m-6  '>
    <div className="skill-img-box w-full h-full bg-[#EDF2F8] flex items-center justify-center rounded-full transition-shadow duration-300 ease-in-out shadow-md">
        <img src={props.img} alt="" className=' h-12 object-contain aspect-square' />
    </div>
    <p>
    {props.skillname}
    </p>
    </div>
  )
}

export default SkillCircle