import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'

function App() {
  return (
    <div className="w-full h-screen">
        <Banner />
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eye />
    </div>
  )
}

export default App
