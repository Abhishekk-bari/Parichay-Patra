import React from 'react';
import '../fonts/NeueMontreal-Regular.ttf';
import card from '../assets/card 3.png';
import card2 from '../assets/card2.png';
import '../fonts/FoundersGrotesk-Semibold.ttf';



function Projects() {
  return (
    <div className='w-full py-20 bg-zinc-100'>
      <div className='w-full px-20 border-b-[1px] border-zinc-300 pb-10'>
        <h1 className="text-7xl font-['NeueMontrealRegular'] tracking-tight">Projects</h1>
      </div>
      <div className='px-20'>
        <div className="cards w-full flex gap-20 mt-10">
            
          <div className='cardcontainer relative w-1/2 h-[75vh]'>
          <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 leading-none z-[9] uppercase text-[#CDEA68] font-['FoundersGroteskSemibold'] text-6xl">
          {"TWEET_DECK".split('').map((item, index)=> (
          <span>{item}</span>))}
          </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden bg-zinc-300 relative'>
              <img className="w-full h-[80%] object-contain" src={card} alt="Project Card" />
            </div>
          </div>
          <div className='cardcontainer relative w-1/2 h-[75vh]'>
          <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 leading-none z-[9] uppercase text-[#CDEA68] font-['FoundersGroteskSemibold'] text-6xl">
          {"SAAS WEBSITE".split('').map((item, index)=> (
          <span>{item}</span>))}
          </h1>
            <div className='card w-full h-full rounded-lg overflow-hidden bg-zinc-300 relative'>
              <img className="w-full h-[80%] object-contain" src={card2} alt="Card Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;