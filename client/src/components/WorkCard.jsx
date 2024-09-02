import React from 'react'

const WorkCard = (props) => {
  return (
    <div className='workcard h-[350px] w-[270px] bg-white p-5 m-8 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl'>
    <div className="img-box h-[230px] w-full relative flex items-center justify-center">
      <img src={props.img} alt="" className='h-full w-full object-cover rounded-lg' />

      <div className="shadow-box w-full h-full flex items-center justify-evenly rounded-lg bg-black/30 shadow-lg absolute opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">
      <a href={props.githublink} target='_blank' className='w-12 h-12 flex items-center justify-center bg-black/60 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-110'><i className="fa-brands fa-github fa-xl"></i></a>
      <a href={props.deployedlink} target='_blank' className='w-12 h-12 flex items-center justify-center bg-black/60 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-110'><i className="fa-solid fa-link fa-xl"></i></a>

      </div>
    </div>
    <h3 className='aboutcard-title  text-[1rem] font-medium mt-4 '>{props.title}</h3>
    <p className='aboutcard-desc text-[0.8rem] mt-2 '>{props.desc}</p>
    </div>
  )
}

export default WorkCard