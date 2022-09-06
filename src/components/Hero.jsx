import React from 'react'
import TypeWriterText from './helpers/TypeWriterText'
import perfil from '../assets/perfil.jpg'

const Hero = () => {
  return (
    <section id="hero" className='hero'>
      <div className="hero__container">
        <div className="hero__box">
          <TypeWriterText />
        </div>
        <div className="hero__box">
          <div className="hero__img-container">
            <img src={perfil} alt="Juanequex" className='hero__profile-pic' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
