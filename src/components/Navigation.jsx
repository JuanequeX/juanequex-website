import React, { useState } from 'react'
import Logo from './helpers/Logo'
import HeaderItem from '../shared/HeaderItem/headerItem'
import MenuIcon from '../assets/navigation/hamburguer-menu.svg'

const Navigation = ({ isOpen }) => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    window.scrollY >= 60 ? setNavbar(true) : setNavbar(false)
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className='navbar__container'>
        <Logo />
        <div className="menu-container">
          <img
            alt="Hamburguer icon"
            className="menu-container__hamburguer-icon"
            src={MenuIcon}
            onClick={() => isOpen()}
          />

          <HeaderItem
            goTo="hero"
            text="Home"
            itemClass="menu-container__link"
          />

          <HeaderItem
            goTo="about"
            text="About Me"
            itemClass="menu-container__link"
          />

          <HeaderItem
            goTo="roadmap"
            text="Roadmap"
            itemClass="menu-container__link"
          />

          <HeaderItem
            goTo="contact"
            text="Contact"
            itemClass="menu-container__link"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
