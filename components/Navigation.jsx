"use client"

import Logo from './helpers/Logo'
import HeaderItem from '@/components/helpers/headerItem'
import MenuIcon from '@/public/assets/navigation/hamburguer-menu.svg'
import Image from 'next/image'

const Navigation = ({ isOpen }) => {

  return (
    <nav className="navbar active">
      <div className='navbar__container'>
        <Logo />
        <div className="menu-container">
          <Image
            alt="Logo"
            className="menu-container__hamburguer-icon"
            src={MenuIcon}
            width={30}
            height={30}
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
