import React from 'react'
import Social from './Social'
import SideNavigation from './SideNavigation'
import Contactcard from './Contactcard'
import mailimg from '../media/images/mail.png'
import phoneimg from '../media/images/phone.png'
import ContactForm from './ContactForm'


const Contact = () => {
  return (
    <section id='contact' className='h-auto w-full flex bg-[#EDF2F8]'>
      <Social/>
      <div className="content-box h-full w-full flex flex-col items-center justify-center text-center py-16 px-8 ">
        <h1 className=' lg:text-[3rem] text-[2.5rem]'><span className='text-[#0FA4AF]'>Contact</span>  Me Here</h1>
        
        <div className="contact-option-box min-[320px]:w-full max-[768px]:w-[60%] md:w-[60%] flex flex-col lg:flex-row items-center mt-12 m-8 text-[#9CA3AF]">
        <Contactcard
          img={mailimg}
          src="mailto:akhiljainth16@gmail.com"
          text='akhiljainth16@gmail.com'
        />
        <Contactcard
          img={phoneimg}
          src='tel: +91 1234567890'
          text='+91 1234567890'
        />
        </div>
        <ContactForm />
      </div>
      <SideNavigation/>
    </section>
  )
}

export default Contact