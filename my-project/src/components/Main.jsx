import React, { useRef } from 'react';
import Coverimg from '../images/bgg.jpg';
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
        className="h-screen  bg-black flex flex-col items-center justify-center text-white text-center bg-cover bg-center relative"
       
      >
        {/* SVG Line and Social Links */}
        <div className="fixed z-30 p-2 top-6 right-6 sm:top-10 sm:right-10">
      <div className="flex flex-col mt-2 items-center space-y-4 sm:space-y-6">
        {/* GitHub */}
        <a
          href="https://github.com/nikhilachale"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300"

        >
          <i className="fab fa-github fa-2x sm:fa-3x"></i>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/nikhil-achale-b398aa195/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-400 transition-all duration-300"
        >
          <i className="fab fa-linkedin fa-2x sm:fa-3x"></i>
        </a>
        {/* Email */}
        <a
          href="mailto:nikhilsmailbox01@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-400 transition-all duration-300"
        >
          <i className="fas fa-envelope fa-2x sm:fa-3x"></i>
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/7691912890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-400 transition-all duration-300"
        >
          <i className="fab fa-whatsapp fa-2x sm:fa-3x"></i>
        </a>
      </div>
    </div>

        {/* Main Text Section */}
        <div ref={nameref} className="container  bg-gradient-to-r from-neutral-500  to-neutral-100 bg-clip-text text-transparent">
        <p className="text-4xl sm:text-5xl mt-2">
            I am Nikhil Achale
          </p>

          <h2 className="text-6xl sm:text-9xl font-bold">
            Full Stack
          </h2>

          <h5 className="text-6xl sm:text-9xl mt-2">
            Developer
          </h5>
        </div>
      </section>
    </div>
  );
}

export default Main;