import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMemo, useRef } from "react";
import { motion } from "framer-motion";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import "./style.css";

function Skills() {
  const ref = useRef(null);

  const mobileCardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      visible: (
        custom => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.35,
            ease: "easeOut",
            delay: custom * 0.08,
          },
        })
      ),
    }),
    []
  );

  useGSAP(() => {
    if (typeof window === "undefined") return; // Avoid SSR issues
    if (window.innerWidth >= 768) {
      // Apply marquee-style scrub animation on larger screens only
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
    <div className="bg-black text-neutral-200 min-h-screen overflow-x-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/5 to-transparent"></div>
      
      {/* Animated Skills Section - Desktop Only */}
      <div ref={ref} className="hidden md:block relative">
          <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold fixed right-20 lg:right-40 uppercase bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent leading-tight">
          <h1>Skills</h1>
        </div>
        <div className="box flex space-x-8 mt-20">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="card bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 p-6 rounded-2xl shadow-2xl hover:scale-110 hover:shadow-neutral-500/20 transition-all duration-300 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-500/10 to-neutral-300/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src={skill.icon} alt={skill.name} className="w-24 h-24 relative" />
              </div>
              <h3 className="text-neutral-200 text-xl font-semibold mt-4 group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Static Grid Layout for Mobile & Tablets */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-6 md:hidden relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="col-span-full text-center text-3xl font-bold uppercase mb-4 sm:mb-8 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent leading-tight"
          variants={mobileCardVariants}
          custom={0}
        >
          <h1>Skills</h1>
        </motion.div>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-3 bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 shadow-2xl p-6 rounded-2xl hover:scale-105 hover:shadow-neutral-500/20 transition-all duration-300 group"
            variants={mobileCardVariants}
            custom={index + 1}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-500/10 to-neutral-300/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src={skill.icon} alt={skill.name} className="w-20 h-20 relative" />
            </div>
            <h3 className="text-neutral-200 text-lg font-semibold group-hover:text-white transition-colors">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
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