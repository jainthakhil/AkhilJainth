import React from 'react'
import Social from './Social'
import SideNavigation from './SideNavigation'
import WorkCard from './WorkCard'
import { works } from '../content/workcontent'

const Work = () => {
  return (
    <section id='work' className='h-auto w-full flex bg-[#EDF2F8]'>
      <Social/>
      <div className="content-box h-full w-full text-center lg:py-16 py-8 px-8 ">
      <h1 className='lg:text-[3rem] text-[1.5rem] font-semibold'><span className='text-[#0FA4AF]'>Projects</span> I Made</h1>

        <div className="cardbox w-full cardbox flex items-center justify-center flex-wrap mt-8">

        {works.map((work)=>(
          <WorkCard
            key={work.id}
            img={work.img}
            githublink={work.githublink}
            deployedlink = {work.deployedlink}
            title={work.title}
            desc={work.desc}
          />
        ))}
        </div>
      </div>
      <SideNavigation/>
    </section>
  )
}

export default Work