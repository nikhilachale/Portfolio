import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import "./style.css";

function Skills() {
  const ref = useRef(null);

  useGSAP(() => {
    if (window.innerWidth >= 768) { // Apply animation only on desktop
      gsap.to(ref.current, {
        x: "-210%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          scroller: "body",
          start: "top 0%",
          end: "top -150%",
          scrub: 2,
          pin: true,
        },
      });
    }
  }, []);

  return (
    <div className="bg-black text-neutral-200 min-h-screen overflow-x-hidden">
      {/* Animated Skills Section - Desktop Only */}
      <div ref={ref} className="hidden md:block">
      <div className="text-7xl font-extrabold fixed right-40 uppercase bg-gradient-to-r from-neutral-500 to-neutral-100 bg-clip-text text-transparent">
  <h1>Skills</h1>
</div>
        <div className="box flex space-x-8 mt-20">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="card bg-black p-4 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              <img src={skill.icon} alt={skill.name} className="w-20 h-20" />
              <h3 className="text-neutral-200 text-lg font-semibold mt-2">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Static Grid Layout for Mobile & Tablets */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6 md:hidden">
      <div className="col-span-full text-center text-4xl font-extrabold uppercase mb-4 bg-gradient-to-r from-neutral-500 to-neutral-100 bg-clip-text text-transparent">
  <h1>Skills</h1>
</div>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center space-y-2 bg-black shadow-lg p-4 rounded-lg hover:scale-105 transition-all duration-300"
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            <h3 className="text-neutral-200 text-lg font-semibold">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

// Skill Data
const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

export default Skills;