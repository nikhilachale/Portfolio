import React, { useRef } from 'react';
import Me from '../images/me.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

function Aboutme() {
  const headref = useRef(null);
  const textref = useRef(null);
  const imgref = useRef(null);

  useGSAP(() => {
    const splitText = new SplitType(textref.current, { types: 'lines, words' });

    gsap.from([headref.current, imgref.current], {
      opacity: 0,
      y: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: headref.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(splitText.words, {
      opacity: 0,
      y: 50,
      duration: 0.3,
      stagger: 0.03,
      scrollTrigger: {
        trigger: textref.current,
        start: 'top 70%',
        end: 'top 55%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section className="py-20 bg-black min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-neutral-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-neutral-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 ref={headref} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            About Me
          </h2> 
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Section */}
          <div ref={textref} className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-neutral-300">
              I'm <span className="font-semibold bg-gradient-to-r from-neutral-300 to-neutral-100 bg-clip-text text-transparent">Nikhil Achale</span>, a passionate MERN stack developer from NIT Patna. I specialize in building dynamic, responsive web applications using MongoDB, Express.js, React, and Node.js.
              <br /><br />
              I love solving complex problems and bringing ideas to life through clean, efficient code. I'm always eager to learn new technologies and stay updated with the latest trends in web development.
            </p>
          </div>

          {/* Image Section */}
          <div ref={imgref} className="w-full md:w-1/3 flex justify-center md:justify-end mb-6 md:mb-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neutral-500 to-neutral-300 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src={Me}
                alt="Nikhil Achale"
                className="relative rounded-full w-48 sm:w-60 md:w-64 lg:w-72 xl:w-80 h-48 sm:h-60 md:h-64 lg:h-72 xl:h-80 object-cover shadow-2xl border-4 border-neutral-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;