import React from 'react';
import '../fonts/NeueMontreal-Regular.ttf';
import card from '../assets/card1.png'
import card2 from '../assets/card2.png';
import '../fonts/FoundersGrotesk-Semibold.ttf';
import { motion, useAnimation } from 'framer-motion';

function Projects() {
  const controls = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    controls[index].start({ y: "0%", opacity: 1 });
  };

  const handleHoverEnd = (index) => {
    controls[index].start({ y: "100%", opacity: 0 });
  };

  return (
    <div className='w-full py-20  bg-[#ff7ac9] rounded-tl-3xl rounded-tr-3xl'>
      <div className='w-full px-20 border-b-[1px] border-zinc-300 pb-10 '>
        <h1 className="text-7xl text-white font-['NeueMontrealRegular'] tracking-tight">Projects</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-20 mt-10">
          
          {/* First Card */}
          <motion.div 
            onHoverStart={() => handleHover(0)} 
            onHoverEnd={() => handleHoverEnd(0)} 
            className='cardcontainer relative w-1/2 h-[70vh]'
          >
            <h1 className="absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none z-[9] uppercase text-[#CDEA68] font-['FoundersGroteskSemibold'] text-6xl">
              {"TWEET_DECK".split('').map((item, index) => (
                <motion.span 
                  initial={{ y: "100%", opacity: 0 }} 
                  animate={controls[0]} 
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden bg-zinc-300 relative'>
              <img className="w-full h-full object-cover" src={card} alt="Project Card" />
            </div>
          </motion.div>

          {/* Second Card */}
          <motion.div 
            onHoverStart={() => handleHover(1)} 
            onHoverEnd={() => handleHoverEnd(1)} 
            className='cardcontainer relative w-1/2 h-[70vh]'
          >
            <h1 className="absolute flex right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none z-[9] uppercase text-[#CDEA68] font-['FoundersGroteskSemibold'] text-6xl">
              {"SAAS WEBSITE".split('').map((item, index) => (
                <motion.span 
                  initial={{ y: "100%", opacity: 0 }} 
                  animate={controls[1]} 
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-lg overflow-hidden bg-zinc-300 relative'>
              <img className="w-full h-full object-cover" src={card2} alt="Card Image" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
