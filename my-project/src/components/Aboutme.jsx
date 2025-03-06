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
    <section className="py-12 bg-black min-h-screen flex flex-col justify-center">
      {/* Heading */}
      <h2 ref={headref} className="text-4xl md:text-5xl text-neutral-200 text-center font-bold mb-6 md:mb-10">
        About Me
      </h2>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div ref={textref} className="w-full bg-gradient-to-r from-neutral-500 to-neutral-100 bg-clip-text text-transparent md:w-2/3 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-200">
            I’m Nikhil Achale, a passionate MERN stack developer from NIT Patna. I specialize in building dynamic, responsive web applications using MongoDB, Express.js, React, and Node.js.
            <br /><br />
            I love solving complex problems and bringing ideas to life through clean, efficient code. I’m always eager to learn new technologies and stay updated with the latest trends in web development.
          </p>
        </div>

        {/* Image Section */}
        <div ref={imgref} className="w-full md:w-1/3 flex justify-center md:justify-end mb-6 md:mb-0">
          <img
            src={Me}
            alt="Nikhil Achale"
            className="rounded-full w-40 sm:w-52 md:w-56 lg:w-64 xl:w-72 h-40 sm:h-52 md:h-56 lg:h-64 xl:h-72 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Aboutme;