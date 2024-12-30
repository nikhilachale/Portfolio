import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

function Skills() {

  const hdref=useRef(null);
  const cardref=useRef(null);

  useGSAP(()=>{
    var tl=gsap.timeline({
      scrollTrigger: {
        trigger: hdref.current,  // Trigger the animation on this element
        start: "top 60%",          // Start when the element enters 80% of viewport
        end: "top 40%",            // End when it reaches 40%
        toggleActions: "play none none reverse",  // Replays when scrolled back
        markers: true, 
    }

    })
    tl.from ([hdref.current],{
      opacity: 0,
      y: 100,  // Heading slides up from below
      duration: .5,
      })
      tl.from ([cardref.current],{
        opacity: 0,
        y: 100,  // Heading slides up from below
        duration: .5,
        })

  })

   

  return (
    <section  className="py-12 bg-black">
      <h2  ref={hdref} className="text-6xl text-center text-white font-bold mb-12">My Skills</h2>

      <div ref={cardref} className="flex flex-wrap justify-center gap-8">
        {/* Skill Card: React */}
        <div className="w-72 h-72 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">React</h3>
        </div>

        {/* Skill Card: Tailwind CSS */}
        <div className="w-72 h-72 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="Tailwind" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">Tailwind CSS</h3>
        </div>

        {/* Skill Card: HTML */}
        <div className="w-72 h-72 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">HTML</h3>
        </div>

        {/* Skill Card: CSS */}
        <div className="w-72 h-72 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">CSS</h3>
        </div>

        {/* Skill Card: C++ */}
        <div className="w-72 h-72 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">C++</h3>
        </div>

        {/* Skill Card: MongoDB */}
        <div className="w-72 h-72 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">MongoDB</h3>
        </div>

        {/* Skill Card: Express */}
        <div className="w-72 h-72 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">Express</h3>
        </div>

        {/* Skill Card: C */}
        <div className="w-72 h-72 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">C</h3>
        </div>

        {/* Skill Card: JavaScript */}
        {/* <div className="w-72 h-72 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">JavaScript</h3>
        </div> */}
      </div>
    </section>
  );
}

export default Skills;