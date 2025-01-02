import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

function Skills() {
  const hdref = useRef(null);
  const cardref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hdref.current,
        start: "top 60%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(hdref.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
    });

    tl.from(cardref.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      stagger: 0.1,
    });
  });

  return (
    <section className="py-16 bg-black min-h-screen flex flex-col justify-center">
      <h2 ref={hdref} className="text-5xl md:text-6xl text-center text-white font-bold mb-16">
        My Skills
      </h2>

      <div ref={cardref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6 md:px-12 lg:px-24">
        {/* Skill Card: React */}
        <div className="w-full bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">React</h3>
        </div>

        {/* Skill Card: Tailwind CSS */}
        <div className="w-full bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="Tailwind" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">Tailwind CSS</h3>
        </div>

        {/* Skill Card: HTML */}
        <div className="w-full bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">HTML</h3>
        </div>

        {/* Skill Card: CSS */}
        <div className="w-full bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">CSS</h3>
        </div>

        {/* Skill Card: C++ */}
        <div className="w-full bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">C++</h3>
        </div>

        {/* Skill Card: MongoDB */}
        <div className="w-full bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">MongoDB</h3>
        </div>

        {/* Skill Card: Express */}
        <div className="w-full bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">Express</h3>
        </div>

        {/* Skill Card: C */}
        <div className="w-full bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-24 h-24 mb-4" />
          <h3 className="text-xl font-semibold">C</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;