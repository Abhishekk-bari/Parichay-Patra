import React from 'react';
import '../fonts/FoundersGrotesk-Semibold.ttf';
import '../fonts/NeueMontreal-Regular.ttf'; // Third step to use font
import CircleImg from '../assets/CircleImg.png';
import { CiCircleChevDown } from "react-icons/ci";
import { Button } from './ui/button';
// import  TextReveal  from '@/components/ui/text-reveal'; 

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen flex items-center justify-center pt-1">
      <div className="textstructure mt-32 px-23 text-center font-['FoundersGroteskSemibold']">
        <h1 className="text-9xl">ABHISHEK <span>BARI</span></h1>
        <div className="font-['NeueMontrealRegular']">
          <p className='text-lg'>Frontend Developer specialized in crafting seamless, interactive websites</p>
        </div>
        <div className='mt-5'> 
          <img 
            src={CircleImg} 
            alt='profile image' 
            className="h-40 w-40 object-cover mx-auto"
          />
          <Button className="mt-10 font-thin">Download</Button>
        </div>
        <div className='absolute bottom-5 right-5 h-15 w-12 flex items-center justify-center'>
        
        <CiCircleChevDown /></div>

        {/* //some scroll section that i am using */}
        {/* <div className="flex justify-center mt-5">
          <a 
            href="#" 
            className="inline-flex items-center gap-3 border py-2 px-4 rounded-lg border-white transition-all duration-300 hover:bg-white/10"
          >
            <span className="bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]">
              Scroll
            </span>
            <FaArrowDownLong className="text-white w-6 h-6" />
          </a>
        </div> */}


      </div>
    </div>
  );
}

export default LandingPage;