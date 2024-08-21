import React from 'react'

const Experiencebox = (props) => {
  return (
    <div className="experience w-full flex items-center justify-center">
            <div className="year-box p-4">
            <h2 className='text-xl text-[#0FA4AF] '>{props.year}</h2>

            </div>
            <div className="job-box p-4">
            <h2 className='text-lg font-semibold'>{props.role}</h2>
            <p>{props.company}</p>
            </div>
          </div>
  )
}

export default Experiencebox