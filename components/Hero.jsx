import React from 'react'
import TypeWriterText from './helpers/TypeWriterText'
import perfil from '@/public/assets/juanequex.webp'
import PdfDownload from './helpers/PdfDowload'

const Hero = () => {
  return (
    <section id="hero" className='hero'>
      <div className="hero__container">
        <div className='hero__info_container'>
          <div>
            <TypeWriterText />
          </div>
          {/* <div className='hiring-big'>
            <h1 className='hiring-text'>Hiring Me!</h1>
            <PdfDownload />
          </div> */}
        </div>
        <div className="hero__box">
          <div className="hero__img-container">
            <img src={perfil} width={300} height={300} alt="Juanequex" className='hero__profile-pic' />
          </div>
        </div>
        <div className='hiring-small'>
          <h1 className='hiring-text'>Hiring Me!</h1>
          <PdfDownload />
        </div>
      </div>
    </section>
  )
}

export default Hero
