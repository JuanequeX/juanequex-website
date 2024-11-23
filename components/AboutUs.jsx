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
            My professional journey began at <a href="https://www.magmalabs.io/" target="_blank" rel="noopener noreferrer">Magmalabs</a>, where I honed my skills as a full-stack software engineer, contributing to diverse projects and collaborating with multidisciplinary teams to deliver high-quality software systems. This foundational experience shaped my ability to navigate complex challenges and produce impactful solutions.
          </span>
          <span className="about-us__subtext">
            Building on this expertise, I am now immersed in the dynamic world of fintech, working with <a href="https://www.finch.lat/" target="_blank" rel="noopener noreferrer">Finch</a> by <a href="https://www.monato.com/" target="_blank" rel="noopener noreferrer">Monato</a> to innovate within the Mexican financial technology landscape. Alongside this role, I proudly lead the <a href="https://playasontech.com/" target="_blank" rel="noopener noreferrer">Playas on Tech</a> community in Manzanillo, Colima, where I foster collaboration and inspire local tech talent.
          </span>
          <span className="about-us__subtext">
            In addition to my community and fintech work, I am dedicated to driving the success of <a href="https://www.sumus.mx/" target="_blank" rel="noopener noreferrer">Sumus</a>, my personal company, where I create content, write code, and serve as CEO, steering the organization toward sustainable growth and meaningful impact.
          </span>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
