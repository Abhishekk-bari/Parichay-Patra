import React from "react";
import BlurIn from "../components/ui/blur-in";
import Project1 from "../assets/Project1.png";
import Project3 from "../assets/card3.mp4";
import project4 from "../assets/project4.png";
import Project2 from "../assets/Project2.mp4";
import { FaNodeJs, FaReact, FaAws } from "react-icons/fa";
import {
  SiGraphql,
  SiPrisma,
  SiPostgresql,
  SiRedis,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoGoogle } from "react-icons/io";

function Work() {
  return (
    <div className="pt-28 rounded-3xl bg-[#41c426]">
      <div className="bg-[#121212] w-[90vw] ml-20 h-[70vw] p-10 rounded-3xl">
        <h1 className="text-white font-[Freedom10eM] text-center text-8xl">
          <BlurIn word="Projects" />
        </h1>
        <div className="Project-container mt-20 flex flex-col space-y-20">
          
          {/* Project 1 */}
          <div className="flex items-start text-white pb-10">
            <a
              href="https://twitter.abhibari.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Project1}
                className="w-[40vw] h-[20vw] mr-5"
                alt="Project 1"
              />
            </a>
            <div className="ml-5">
              <h1 className="font-['NeueMontrealRegular'] text-2xl">
                TweetDeck | Full Stack
              </h1>
              <p className="mt-2">Tech Stack:</p>
              <div className="flex space-x-4 mt-2">
                <FaNodeJs size={30} title="Node.js" />
                <SiGraphql size={30} title="GraphQL" />
                <SiPrisma size={30} title="Prisma" />
                <SiPostgresql size={30} title="PostgreSQL" />
                <SiRedis size={30} title="Redis" />
                <IoLogoGoogle size={30} title="Google OAuth" />
                <SiNextdotjs size={30} title="Next.js" />
                <SiTailwindcss size={30} title="TailwindCSS" />
                <SiTypescript size={30} title="TypeScript" />
                <FaAws size={30} title="AWS" />
              </div>
              <p className="mt-4 text-lg">
                TweetDeck is a full-stack application for managing tweets,
                providing a dynamic interface for users to view and post tweets
                efficiently.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex items-start text-white pb-10">
            <a href="/" target="_blank" rel="aa">
              <img
                src={Project3}
                className="w-[40vw] h-[20vw] mr-5"
                alt="Project 1"
              />
            </a>
            <div className="ml-5">
              <h1 className="font-['NeueMontrealRegular'] text-2xl">
                Bookifi | Full stack
              </h1>
              <p className="mt-2">Tech Stack:</p>
              <div className="flex space-x-4 mt-2">
                <SiTailwindcss size={30} title="Angular" />
                <SiTailwindcss size={30} title="TailwindCSS" />
                <SiTailwindcss size={30} title="Lenis" />
                <SiTailwindcss size={30} title="Nodejs" />
                <SiTailwindcss size={30} title="ExpressJS" />
                <SiTailwindcss size={30} title="MongoDB" />
                <FaAws size={30} title="Vercel" />
              </div>
              <p className="mt-4 text-lg">
                Designed a feature-rich booking platform for photographers,
                integrating React, Node.js, Express, and MongoDB for secure data
                handling and management and animations using GSAP. Developed a
                custom admin panel with secure login/logout functionality,
                enabling photographers to monitor booking sessions and
                communicate with clients directly{" "}
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex items-start text-white">
            <div className="mr-5">
              <h1 className="font-['NeueMontrealRegular'] text-2xl">
                Landing Page | Front End
              </h1>
              <p className="mt-2">Tech Stack:</p>
              <div className="flex space-x-4 mt-2">
                <SiNextdotjs size={30} title="Next.js" />
                <SiTailwindcss size={30} title="TailwindCSS" />
                <SiTypescript size={30} title="TypeScript" />
                <FaAws size={30} title="AWS" />
              </div>
              <p className="mt-4 mr-70 ">
                This project focuses on developing a dark-themed SaaS landing
                page that showcases your abilities in front-end technologies. By
                the end of the tutorial, you'll have a fully functional landing
                page equipped with smooth animations and responsive design,
                ready to impress potential employers.
              </p>
            </div>
            <a
              href="https://saas-landing-page-production.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                src={Project2}
                className="w-[100vw] h-[20vw] ml-4"
                controls
                autoPlay
                alt="Project 2"
              />
            </a>
          </div>

          {/* Project 4 */}
          <div className="flex items-start text-white">
            <div className="mr-5">
              <h1 className="font-['NeueMontrealRegular'] text-2xl">
                Landing Page | Front End
              </h1>
              <p className="mt-2">Tech Stack:</p>
              <div className="flex space-x-4 mt-2">
                <SiNextdotjs size={30} title="Next.js" />
                <SiTailwindcss size={30} title="TailwindCSS" />
                <SiTypescript size={30} title="TypeScript" />
                <FaAws size={30} title="AWS" />
              </div>
              <p className="mt-4 mr-70 ">
                Design website that gives Interactive User Experience fully
                animated and interactive and add some spice using javascript,
                landing page equipped with smooth animations and responsive
                design.
              </p>
            </div>
            <a
              href="https://thirty-six-studio-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                src={card3}
                className="w-[100vw] h-[20vw] ml-4"
                controls
                autoPlay
                alt="Project3"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
