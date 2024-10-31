import React from 'react'
import '../fonts/FoundersGrotesk-Semibold.ttf';


function Marquee() {
  return (
    <div className="w-full py-20 rounded-3xl bg-[#004D43]">
      <div className="text-white gap-16 border-t-2 border-b-2 border-zinc-800  overflow-hidden flex whitespace-nowrap">
        <div className="text-[15vw] leading-none font-['FoundersGroteskSemibold'] ">DEVELOPER</div>
        <h1 className="text-[15vw] leading-none font-['FoundersGroteskSemibold']">TESTER</h1>
        <div className="text-[15vw] leading-none font-['FoundersGroteskSemibold'] ">DEVELOPER</div>
        <h1 className="text-[15vw] leading-none font-['FoundersGroteskSemibold']">TESTER</h1>
      </div>
    </div>
  )
}

export default Marquee;
