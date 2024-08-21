import React from 'react'
import Social from './Social'
import SideNavigation from './SideNavigation'
import SkillCircle from './SkillCircle'
import { skills } from '../content/skillcontent'
import { experience } from '../content/experience'
import Experiencebox from './Experiencebox'

const Skills = () => {
  return (
    <section id='skills' className='h-auto w-full flex bg-white'>
      <Social />
      <div className="content-box h-full w-full flex flex-col items-center justify-center text-center py-16 px-8">
        <h1 className='text-[3rem] font-semibold'><span className='text-[#0FA4AF]'>Skills</span> & Experiences</h1>
        <div className="skills-experience-box w-full h-full flex lg:flex-row flex-col mt-8">
          <div className="skills-box h-full w-full lg:w-1/2 flex items-center justify-center flex-wrap ">

            {skills.map((skill) => (
              <SkillCircle
                key={skill.id}
                img={skill.img}
                skillname={skill.name}
              
              />
            ))}

          </div>
          <div className="experience-box w-full lg:w-1/2 mt-8 lg:mt-0 ">
          {experience.map((exp)=>(
            <Experiencebox 
              key={exp.id}
              year={exp.year}
              role={exp.role}
              company={exp.company}
            />
          ))}
          

          </div>

        </div>

      </div>
      <SideNavigation />
    </section>
  )
}

export default Skills