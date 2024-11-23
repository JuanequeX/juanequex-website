"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/helpers/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/AboutUs";
import Roadmap from '@/components/Roadmap'
import Contact from '@/components/Contact'
import Footer  from '@/components/Footer'

export default function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      <Navigation isOpen={toggleSidebar} />
      <Sidebar toggle={sidebarIsOpen} isOpen={toggleSidebar} />
      <Hero />
      <About />
      <Roadmap />
      <Contact />
      <Footer />
    </>
  );
}
