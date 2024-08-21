import React from 'react'

const AboutCard = (props) => {
    return (
        <div className='about-card w-[200px] m-8 transition-transform duration-500 ease-in-out transform hover:scale-110 text-left'>
            <img src={props.img} className='aboutcard-img w-full h-[170px]  object-cover rounded-2xl ' alt="" />
            <h3 className='aboutcard-title  text-[1rem] font-medium mt-4 '>{props.title}</h3>
            <p className='aboutcard-desc text-[0.8rem] mt-2 '>{props.desc}</p>
        </div>
    )
}

export default AboutCard