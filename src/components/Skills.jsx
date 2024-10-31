import React from 'react'
import IconCloud from "../components/ui/icon-cloud";
 
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
  "nginx",
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
      <div>
      <h1 className="text-7xl font-['NeueMontrealRegular'] tracking-tight">Skills</h1>
      <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  )
}

export default Skills
