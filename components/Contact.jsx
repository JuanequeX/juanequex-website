"use client"

import Github from '@/public/assets/contact/github.png'
import Linkedin from '@/public/assets/contact/linkedin.png'
import Arrow from '@/public/assets/contact/arrow.svg'
import Image from 'next/image'

const Contact = () => {
  return (
    <section className="contact" id='contact'>
      <h1 className='contact__title'>Contact Me</h1>
      <div className="contact__container">
        <div className='contact__social'>
            <p className="contact__information">More About Juanequex</p>
            <div className='contact__arrow'>
            <Image width={100} height={110} src={Arrow} alt="Arrow" />
            </div>
            <div className="contact__social__icons">
              <a href="https://github.com/JuanequeX" ><Image width={80} height={95} src={Github} alt="Github" className='contact__social__icon'/></a>
              <a href="https://www.linkedin.com/in/juan-ram%C3%B3n-guzm%C3%A1n-aguilar-084a42176/" ><Image width={80} height={95} src={Linkedin} alt="Linkedin" className='contact__social__icon'/></a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
