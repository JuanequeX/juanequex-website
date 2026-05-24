"use client"

import Carousel from '@/components/helpers/Carousel'

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us__container">
        <div className="about-us__box-carousel">
          <Carousel />
        </div>
        <div className="about-us__box-content">
          <h2 className="about-us__title">
            who the hell is Juanequex?
          </h2>
          <span className="about-us__subtext">
            I started my career at <a href="https://www.magmalabs.io/" target="_blank" rel="noopener noreferrer">Magmalabs</a>, where I grew as a full-stack software engineer shipping products across multiple industries. That experience taught me to move fast, collaborate across disciplines, and build software that actually matters.
          </span>
          <span className="about-us__subtext">
            Today I engineer at <a href="https://www.monato.com/" target="_blank" rel="noopener noreferrer">Monato</a>, a Mexican fintech redefining digital payments and financial infrastructure. Beyond the day job, I lead <a href="https://playasontech.com/" target="_blank" rel="noopener noreferrer">Playas on Tech</a> and the <a href="https://www.meetup.com/es-es/aws-user-group-colima/" target="_blank" rel="noopener noreferrer">AWS User Group Colima</a> — two communities where I bring local engineers together to learn, build, and grow.
          </span>
          <span className="about-us__subtext">
            I also run <a href="https://www.sumus.mx/" target="_blank" rel="noopener noreferrer">Sumus</a>, my own company where I build software solutions, create content, and help founders and small teams scale with technology.
          </span>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
