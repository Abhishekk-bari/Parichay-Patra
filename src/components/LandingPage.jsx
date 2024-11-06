import React, { useEffect, useState } from 'react';
import '../fonts/FoundersGrotesk-Semibold.ttf';
import '../fonts/NeueMontreal-Regular.ttf';
import CircleImg from '../assets/CircleImg.png';
import { CiCircleChevDown } from "react-icons/ci";
import { motion } from 'framer-motion';
import GradualSpacing from "../components/ui/gradual-spacing";

function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLandingPage, setIsLandingPage] = useState(true); // Track if on landing page

  useEffect(() => {
    // Track mouse position only if on landing page
    if (isLandingPage) {
      const mouseMove = e => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      };
      window.addEventListener("mousemove", mouseMove);
      return () => {
        window.removeEventListener("mousemove", mouseMove);
      };
    }
  }, [isLandingPage]);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4
    }
  };

  return (
    <div 
      data-scroll 
      data-scroll-speed="-.3" 
      className="cursor-none w-full h-screen flex items-center justify-center pb-40"
      onMouseEnter={() => setIsLandingPage(true)}  // Set to true on mouse enter
      onMouseLeave={() => setIsLandingPage(false)} // Set to false on mouse leave
    >
      <div className="textstructure mt-32 px-23 text-center font-['FoundersGroteskSemibold']">
        
        {/* Flex container for ABHISHEK, Image, and BARI */}
        <div className="flex items-center justify-center space-x-10">
          <h1 className="text-9xl">
            <GradualSpacing text="ABHISHEK" />
          </h1>

          <img 
            src={CircleImg} 
            alt="profile image" 
            className="h-40 w-40 object-cover mx-auto"
          />

          <h1 className="text-9xl">
            <GradualSpacing text="BARI" />
          </h1>
        </div>

        {/* Description text below the names and image */}
        <div className="font-['NeueMontrealRegular'] mt-6">
          <p className="text-lg">
            Frontend Developer specialized in crafting seamless, interactive websites
          </p>
        </div>

        {/* Custom cursor */}
        {isLandingPage && (
          <motion.div 
            variants={variants}
            animate="default"
            className="bg-black h-8 w-8 fixed top-0 left-0 rounded-full"
          />
        )}

        <div className='absolute bottom-5 right-5 h-15 w-12 flex items-center justify-center'>
          <CiCircleChevDown className='h-8 w-8'/>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
