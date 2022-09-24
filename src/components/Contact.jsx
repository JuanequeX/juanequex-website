import React from 'react'
import Calendly from '../assets/contact/calendly.png'
import Github from '../assets/contact/github.png'
import Linkedin from '../assets/contact/linkedin.png'
import Instagram from '../assets/contact/instagram.png'
import Twitter from '../assets/contact/twitter.png'
import Arrow from '../assets/contact/arrow.svg'
import styled from 'styled-components'
import { keyframes } from 'styled-components'


const Contact = () => {

  const rotate = keyframes`
    100%{
      transform: rotate(1turn);
    }
  `
  const Round = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
      margin-top: 1rem;
    }

    img {
      animation: ${rotate} 6s linear infinite reverse;
      height: auto;
      width: 7rem;
    }
  `
  return (
    <section className="contact" id='contact'>
      <h1 className='contact__title'>Contact Me</h1>
      <div className="contact__container">
        <div className='contact__container-information'>
          <p className='contact__information'>Do you wanna have a meeting with me?</p>
          <p className='contact__information'>Schedule here</p>
          <div className='contact__arrow'>
            <img src={Arrow} alt="Arrow" />
          </div>
          <Round>
            <a href='https://calendly.com/juanequex/30min?back=1&month=2022-09'><img src={Calendly} alt="Calendly" className='contact__icon'/></a>
          </Round>
        </div>
        <div className='contact__social'>
            <p className="contact__information">More About Juanequex</p>
            <div className="contact__social__icons">
              <a href="https://github.com/JuanequeX" ><img src={Github} alt="Github" className='contact__social__icon'/></a>
              <a href="https://www.linkedin.com/in/juan-ram%C3%B3n-guzm%C3%A1n-aguilar-084a42176/" ><img src={Linkedin} alt="Linkedin" className='contact__social__icon'/></a>
              <a href="https://www.instagram.com/juanequex/" ><img src={Instagram} alt="instagram" className='contact__social__icon'/></a>
              <a href="https://twitter.com/juanequeX" ><img src={Twitter} alt="Twitter" className='contact__social__icon'/></a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
