// Import required dependencies
import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eye from './components/Eye';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Me from './pages/Me';
import Work from './pages/Work';
// Import Lenis instead of LocomotiveScroll
import Lenis from '@studio-freight/lenis';

function App() {
  const scrollRef = useRef(null);
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis on mount
    lenisRef.current = new Lenis({
      duration: 1.2,  // Duration for smooth scrolling
      easing: (t) => t,  // Default easing function
      smooth: true,
    });

    // Request animation frame to update Lenis
    const animate = (time) => {
      lenisRef.current.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    // Trigger Lenis scroll position reset on route change
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 0 }); // Reset scroll position
    }
  }, [location.pathname]);

  return (
    <div ref={scrollRef} className="w-full h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <LandingPage />
            <Marquee />
            <About />
            <Eye />
            <Projects />
            <Skills />
            <Footer />
          </>
        }/>
        <Route path="/me" element={<Me />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
