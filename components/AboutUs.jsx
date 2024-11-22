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
          <p className="about-us__subtext">My professional journey took flight at BrightCoders Academy, where I successfully completed a course on Ruby on Rails. A few months later, I embarked on my tenure at MagmaLabs.</p>
          <p className="about-us__subtext">Presently, I serve as a Ruby On Rails developer at MagmaLabs, concurrently mentoring at BrightCoders Academy. I'm an active participant in the Playas in Tech community in Manzanillo, dedicating time to crafting content and code to foster the growth of my personal brand.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
