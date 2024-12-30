import React, { useRef } from 'react';
import Me from '../images/me.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

function Aboutme() {
  const headref = useRef(null);
  const textref = useRef(null);
  const imgref = useRef(null);

  useGSAP(() => {
    // Split the text into lines and words
    const splitText = new SplitType(textref.current, {
      types: 'lines, words',  // Split into lines and words
    });

    // Heading and Image Animation
    gsap.from([headref.current, imgref.current], {
      opacity: 0,
      y: 100,
      duration: 0.5,
      scrollTrigger: {
        trigger: headref.current,
        start: 'top 60%',
        end: 'top 40%',
        toggleActions: 'play none none reverse',
        markers: true,
      },
    });

    // Animate Split Text (Lines and Words Staggered)
    gsap.from(splitText.words, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.05,  // Stagger words by 0.05s
      scrollTrigger: {
        trigger: textref.current,
        start: 'top 70%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
        markers: true,
      },
    });
  }, []);

  return (
    <section className="py-12 bg-black h-screen">
      <h2 ref={headref} className="text-6xl text-white text-center font-bold mb-12">
        About Me
      </h2>

      <div ref={imgref} className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl mx-auto">
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <img
            src={Me}
            alt="Nikhil Achale"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>

        <div ref={textref} className="w-full lg:w-2/3 text-center text-white lg:text-left px-6">
          <p className="text-2xl leading-relaxed">
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