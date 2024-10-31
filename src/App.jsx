import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full h-screen">
        <Banner />
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eye />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
