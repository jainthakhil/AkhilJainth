import React from 'react'
import Social from './Social'
import SideNavigation from './SideNavigation'
import AboutCard from './AboutCard'
import { abouts } from '../content/aboutcontent'

const About = () => {
  return (
    <section id='about' className='h-auto w-full flex bg-white'>
      <Social />
      <div className="content-box h-full w-full text-center lg:py-16 py-8 px-8 ">
        <h1 className='lg:text-[3rem] text-[1.5rem] font-semibold leading-normal'>A Passionate <span className='text-[#0FA4AF]'>Developer</span> <br />Believe in <span className='text-[#0FA4AF]'>Quality</span> </h1> 
        {/* <h1 className='text-[3rem] font-semibold'>Believe in <span className='text-[#0FA4AF]'>Quality</span></h1> */}
        <div className="w-full cardbox flex items-center justify-center flex-wrap mt-8">
          
          {abouts.map((about)=>(
            <AboutCard 
              key={about.id}
              img={about.img}
              title={about.title}
              desc={about.desc}
            />

          ))}
          {/* <AboutCard
            img='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*HIacsR7qVKy2JqY5AWnpzQ.png'
            title='Backend Developer'
            desc='I am a backend developer with a passion for building beautiful and functional web applications.'
          />
          <AboutCard
            img='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*HIacsR7qVKy2JqY5AWnpzQ.png'
            title='Backend Developer'
            desc='I am a backend developer with a passion for building beautiful and functional web applications.'
          />
          <AboutCard
            img='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*HIacsR7qVKy2JqY5AWnpzQ.png'
            title='Backend Developer'
            desc='I am a backend developer with a passion for building beautiful and functional web applications.'
          />
          <AboutCard
            img='https://miro.medium.com/v2/resize:fit:1100/format:webp/1*HIacsR7qVKy2JqY5AWnpzQ.png'
            title='Backend Developer'
            desc='I am a backend developer with a passion for building beautiful and functional web applications.'
          /> */}

        </div>
      </div>
      <SideNavigation />
    </section>
  )
}

export default About