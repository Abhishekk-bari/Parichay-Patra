import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className="w-full h-screen">
        <Banner />
      <Navbar />
      <LandingPage />
      <Marquee />
    </div>
  )
}

export default App
