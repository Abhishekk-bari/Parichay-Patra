import React from 'react'
import IconCloud from "../components/ui/icon-cloud";
import '../fonts/Freedom-10eM.ttf'

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

function Skills() {
  return (
    
    <div className="w-full h-fit p-20 bg-zinc-100 rounded-tl-3xl rounded-tr-3xl text-zinc-900">
      <div className='w-full '>
      <h1 className="border-b-[1px] border-zinc-300 pb-20 text-7xl font-['NeueMontrealRegular'] tracking-tight">Skills</h1>
      <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  )
}

export default Skills;
