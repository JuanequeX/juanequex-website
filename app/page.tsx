"use client"

import React, { useState } from 'react'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/helpers/Sidebar'
// import Hero from './components/Hero'
// import About from './components/AboutUs'
// import Roadmap from './components/Roadmap'
// import Contact from './components/Contact'
// import Footer  from './components/Footer'


function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);

  const show = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <Navigation isOpen={show}/>
      <Sidebar toggle={sidebarIsOpen} isOpen={show} />
      {/* <Hero /> */}
      {/* <About />
      <Roadmap />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App
