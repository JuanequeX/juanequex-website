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
          <p className="about-us__subtext">I have a Software Enginnering degree at Universidad de Colima, My working experience runs around ruby on rails, react JS and more recently, solidus.</p>
          <p className="about-us__subtext">My profesional career started at Bright Coders Academy, with a successful course on Ruby on Rails, a few months after i began working at MagmaLabs.</p>
          <p className="about-us__subtext">My actual role is RoR dev on MagmaLabs and mentoring at BrightCoders Academy. I‘m part of the Playas on tech community in Manzanillo and enjoy my time creating content and code for my personal brand.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
