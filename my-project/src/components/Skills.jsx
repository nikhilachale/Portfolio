import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import './style.css';

function Skills() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      x: "-210%",
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        scroller: "body",
        markers: false,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
      },
    });
  }, []);

  return (
    <>
      {/* Animated Skills Section - Visible only on Desktop */}
      <div ref={ref} className="hidden md:block">
        <div className="bg-white text-7xl font-extrabold fixed right-40 uppercase">
          <h1>Skills</h1>
        </div>
        <div className="box flex space-x-8">
          {/* Skill Cards */}
          {skills.map((skill, index) => (
            <div key={index} className="card">
              <img src={skill.icon} alt={skill.name} />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Grid Layout for Mobile & Tablets */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6 md:hidden">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </>
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