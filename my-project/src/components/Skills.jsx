import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // ✅ Only register ScrollTrigger
import './style.css';

function Skills() {


  const ref = useRef(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      x: "-140%",
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",

      scrollTrigger: {
        trigger: ref.current, // ✅ Correct reference
        scroller: "body",
        markers: false,
        start: "top 0%", // ✅ Adjust start position
        end: "top -150%", // ✅ Adjust end position
        scrub: 2,
        pin: true,
      },
    });
  }, []); // ✅ Empty dependency array to avoid re-runs

  return (
    <>
   
      
      <div ref={ref} className="box">
      <div className="bg-white text-7xl font-extrabold fixed right-20 uppercase ">
      <h1>Skills</h1>
    </div>
        <div className="card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <h3>React</h3>
        </div>
        <div className="card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            alt="Tailwind"
          />
          <h3>Tailwind CSS</h3>
        </div>
        <div className="card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
          />
          <h3>HTML</h3>
        </div>
        <div className="card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
          />
          <h3>CSS</h3>
        </div>
        <div className="card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
          />
          <h3>C++</h3>
        </div>
        <div className="card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
          />
          <h3>MongoDB</h3>
        </div>
        <div className="card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express"
          />
          <h3>Express</h3>
        </div>
        <div className="card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
            alt="C"
          />
          <h3>C</h3>
        </div>
        <div className="card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <h3>JavaScript</h3>
        </div>
        <div className="card">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
          />
          <h3>TypeScript</h3>
        </div>
      </div>
    </>
  );
}

export default Skills;