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
    const splitText = new SplitType(textref.current, {
      types: 'lines, words',
    });

    gsap.from([headref.current, imgref.current], {
      opacity: 0,
      y: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: headref.current,
        start: 'top 90%',
       

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
        start: 'top 90%',
        end: 'top 55%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section className="py-12 bg-black min-h-screen flex flex-col justify-center">
      <h2 ref={headref} className="text-5xl md:text-6xl text-white text-center font-bold mb-8 md:mb-12">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={imgref} className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-10 lg:mb-0">
          <img
            src={Me}
            alt="Nikhil Achale"
            className="rounded-full w-48 sm:w-56 md:w-64 lg:w-72 h-48 sm:h-56 md:h-64 lg:h-72 object-cover shadow-xl"
          />
        </div>

        <div ref={textref} className="w-full lg:w-2/3 text-center lg:text-left">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white">
            I’m Nikhil Achale, a passionate MERN stack developer from NIT Patna. I specialize in building dynamic, responsive web applications using MongoDB, Express.js, React, and Node.js. As a freelancer, I’ve worked on diverse projects, honing my skills in both front-end and back-end development.
            <br /><br />
            I love solving complex problems and bringing ideas to life through clean, efficient code. I’m always eager to learn new technologies and stay updated with the latest trends in web development. Whether it’s crafting a sleek user interface or optimizing server-side performance, I take pride in delivering high-quality solutions that meet and exceed client expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;