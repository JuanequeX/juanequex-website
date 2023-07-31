import React from 'react'
import Carousel from './helpers/Carousel'

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us__container">
        <div className="about-us__box">
          <Carousel />
        </div>
        <div className="about-us__box">
          <h2 className="about-us__title">
            who the hell is Juanequex?
          </h2>
          <p className="about-us__subtext">I have a Software Engineering degree from the Universidad de Colima. My working experience revolves around Ruby on Rails, JS, and, React JS</p>
          <p className="about-us__subtext">My professional career started at BrightCoders Academy with a successful course on Ruby on Rails. A few months after, I began working at MagmaLabs.</p>
          <p className="about-us__subtext">My current role is a RoR developer at MagmaLabs, and I also mentor at BrightCoders Academy. I'm part of the Playas in Tech community in Manzanillo and enjoy spending my time creating content and code for my personal brand's growth</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
