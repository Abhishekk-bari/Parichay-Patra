import React from 'react'
import '../fonts/NeueMontreal-Regular.ttf';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  // import TextReveal from "..//components/magicui/text-reveal";



function About() {
  return (
    <div  className="w-full p-20 bg-[#bfff0a] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='text-xl '>About Me</h1>
      <h1 className="font-['NeueMontrealRegular'] text-[3vw] leading-[3.5vw] ">
      Hello! <span className='underline'>I'm Abhishek Bari,</span> a passionate Full Stack Developer and QA Enthusiast. My journey in tech began during my studies at Moolji Jaitha College, where I <span className='underline'>completed a Bachelor's in Computer Application</span> with a CGPA of 8.72. Since then, I've expanded my skills across both development and testing, giving me a unique perspective on building and refining digital experiences.      </h1>
    <div className="pt-3">
    <HoverCard>
  <HoverCardTrigger className="px-1 py-1 text-white text-sm cursor-pointer border border-black rounded-full bg-zinc-900">Read More
  </HoverCardTrigger>
  <HoverCardContent>
  I have a strong foundation in front-end and back-end technologies, including HTML, JavaScript, React, Next.js, Tailwind CSS, Node.js, Express, and GraphQL. 
  </HoverCardContent>
</HoverCard>
    </div>
    </div>
    
  )
}

export default About;
