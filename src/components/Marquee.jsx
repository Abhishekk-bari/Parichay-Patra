import React from 'react';
import '../fonts/FoundersGrotesk-Semibold.ttf';
import { motion } from 'framer-motion';

function Marquee() {
  
  return (
    <div   className="w-full py-20 rounded-3xl bg-[#004D43]">
      <div className="text-white border-t-2 border-b-2 border-zinc-800 overflow-hidden flex whitespace-nowrap">
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }} 
          className="text-[15vw] leading-none font-['FoundersGroteskSemibold'] mr-10" // Added margin-right
        >
          DEVELOPER & TESTER
        </motion.h1>
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }} 
          className="text-[15vw] leading-none font-['FoundersGroteskSemibold']"
        >
          DEVELOPER & TESTER
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;