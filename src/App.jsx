import React, { useState } from 'react'
import'./sass/application.scss'
import Navigation from './components/Navigation'
import Sidebar from './components/helpers/Sidebar'
import Hero from './components/Hero'
import About from './components/AboutUs'
import "@fontsource/akaya-telivigala"
import "@fontsource/sora"

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);

  const show = () => {
    setSidebarOpen((prevState) => !prevState);
  };
  return (
    <>
      <Navigation isOpen={show}/>
      <Sidebar toggle={sidebarIsOpen} isOpen={show} />
      <Hero />
      <About />
    </>
  )
}

export default App
