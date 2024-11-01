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
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  // const scrollRef = useRef(null);
  // const location = useLocation();
  // const locomotiveScrollRef = useRef(null);

  // useEffect(() => {
  //   // Initialize LocomotiveScroll on mount
  //   locomotiveScrollRef.current = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   // Clean up LocomotiveScroll on unmount
  //   return () => {
  //     if (locomotiveScrollRef.current) {
  //       locomotiveScrollRef.current.destroy();
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   // Reinitialize LocomotiveScroll on route change
  //   if (locomotiveScrollRef.current) {
  //     locomotiveScrollRef.current.update();
  //     locomotiveScrollRef.current.scrollTo(0, { duration: 0 }); // Reset scroll position
  //   }
  // }, [location.pathname]);
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div  className="w-full h-screen">
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
