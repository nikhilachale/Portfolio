import React, { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Main() {
  const nameref = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Background Image Fade-in Animation
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },  // Start with opacity 0
      { opacity: 1, duration: 1, ease: "back.out" 
        
      }  // Fade in to full opacity
    );

    // Text Animation
    gsap.from(nameref.current, {
      duration: 1.5,
      delay: 0.7,
      opacity: 0,
      y: 100,
      clipPath: "inset(0 0 100% 0)",
      ease: "power3.out",
      stagger: 0.3,
      onUpdate: () => {
        gsap.to(nameref.current, {
          clipPath: "inset(0 0 0% 0)",
        });
      }
    });
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="h-screen bg-black flex flex-col items-center justify-center text-white text-center bg-cover bg-center relative overflow-hidden"
       
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* SVG Line and Social Links */}
        <div className="fixed z-30 p-2 top-20 right-4 sm:top-24 sm:right-6 lg:top-28 lg:right-10">
      <div className="flex flex-col mt-2 items-center space-y-3 sm:space-y-4 lg:space-y-6 bg-neutral-900/40 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-neutral-700/30 shadow-2xl">
        {/* GitHub */}
        <a
          href="https://github.com/nikhilachale"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-white hover:scale-110 transition-all duration-300 hover:rotate-6"
        >
          <i className="fab fa-github text-2xl sm:text-3xl lg:text-4xl"></i>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nikhil-achale-b398aa195/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 hover:scale-110 transition-all duration-300 hover:rotate-6"
        >
          <i className="fab fa-linkedin text-2xl sm:text-3xl lg:text-4xl"></i>
        </a>
        {/* Email */}
        <a
          href="mailto:nikhilsmailbox01@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-400 hover:scale-110 transition-all duration-300 hover:rotate-6"
        >
          <i className="fas fa-envelope text-2xl sm:text-3xl lg:text-4xl"></i>
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/7691912890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 hover:scale-110 transition-all duration-300 hover:rotate-6"
        >
          <i className="fab fa-whatsapp text-2xl sm:text-3xl lg:text-4xl"></i>
        </a>
      </div>
    </div>

        {/* Main Text Section */}
        <div ref={nameref} className="container relative z-10 px-4 sm:px-6">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 text-neutral-300 font-light tracking-wide">
            Hi, I am
          </p>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-400 bg-clip-text text-transparent mb-2 leading-tight">
            Nikhil Achale
          </h1>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-500 bg-clip-text text-transparent leading-tight">
            Full Stack
          </h2>

          <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-neutral-500 via-neutral-300 to-neutral-500 bg-clip-text text-transparent mt-1 sm:mt-2 leading-tight">
            Developer
          </h3>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed px-4">
            Crafting elegant solutions with modern web technologies
          </p>
        </div>
      </section>
    </div>
  );
}

export default Main;