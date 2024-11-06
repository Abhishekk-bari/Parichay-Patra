import React from 'react';
import '../fonts/FoundersGrotesk-Semibold.ttf';
import '../fonts/28 Days Later.ttf';
import SparklesText from "../components/ui/sparkles-text";
import image from '../assets/image.jpg'; // Importing profile image

function Me() {
  return (
    <div className="pt-28  rounded-xl bg-[#41c426]">
      <div className="bg-[#121212] ml-20 w-[90vw] h-[80vw] p-10 rounded-3xl">
        <SparklesText text="About ME" className="text-white text-center font-[Freedom10eM] text-8xl" />
        
        <div className="mt-20 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10">
          
          <div className="flex-shrink-0">
            <img src={image} className="rounded-3xl w-[30vw] h-auto" alt="profile image" />
          </div>
          
          <div className="mt-20 lg:mt-0 lg:ml-10 text-white mb-5">
            <h2 className="text-3xl mb-4 font-bold">Namaste🙏<span> I'm Abhishek Bari,</span></h2>
            <p className='text-xl mb-4'>
              I'm Abhishek Bari, your friendly neighborhood frontend developer, armed with a keyboard and a passion for creating stunning web experiences. If you ever need someone to turn coffee into code, I'm your guy! ☕💻
            </p>
            <p className='text-xl mb-4'> {/* Split into separate paragraphs for better spacing */}
              I graduated with a Bachelor of Computer Applications, where I managed to juggle my studies and still find time to dive deep into the world of web development. My journey began with HTML and CSS, but I quickly leveled up to React, Next.js, and Tailwind CSS—because who doesn’t love a little flair in their code?
            </p>
            <p className='text-xl mb-4'>
              During my recent internship at Heuristic Technopark, I learned that teamwork makes the dream work—especially when it involves brainstorming over snacks! I contributed to designing a frontend that not only looks good but also feels like a breeze to navigate.
            </p>
            <p className='text-xl mb-4'>
              When I'm not coding, you might find me working on my latest project, like Tweet Deck—a full-stack platform where users can tweet their hearts out (and hopefully not get into Twitter wars). Or perhaps I'm fine-tuning a sleek SaaS landing page that dances with animations and embraces dark mode like it's the coolest thing since sliced bread.
            </p>
            <p className='text-xl mb-4'>
              I’m also no stranger to backend technologies like Node.js and GraphQL, because let’s face pt: every superhero needs a sidekick! And yes, I’ve dabbled in Docker and AWS—because what’s life without a little cloud computing?
            </p>
            <p className='text-xl'>
              So, if you're looking for someone who can bring your ideas to life with a dash of humor and a sprinkle of creativity, look no further! Let’s connect and make some web magic happen!
            </p>

          </div>
        </div>
        <div className="text-white ml-20 mt-10 flex space-x-5 font-['28DaysLater']">
          <h1 className="text-[10vw]">Stand out.</h1>
          <h1 className="text-[10vw]">Be cool</h1>
        </div>
      </div>
    </div>
  );
}

export default Me;