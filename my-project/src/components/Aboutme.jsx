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
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Section */}
          <div ref={textref} className="w-full md:w-2/3 text-center md:text-left">
           <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-neutral-400">
  I'm <span className="font-semibold text-neutral-100">Nikhil Achale</span>, a <span className="text-neutral-100 font-medium">Full Stack Developer</span> and final-year Computer Science student at <span className="text-neutral-100 font-medium">NIT Patna</span>.
  <br /><br />
  I build <span className="text-neutral-100 font-medium">scalable, high-performance web applications</span> with a strong focus on <span className="text-neutral-100">real-time systems, backend logic, and modern frontend architectures</span>. My work spans across <span className="text-neutral-100">Node.js, WebSockets, React, Next.js, and databases</span>.
  <br /><br />
  I have hands-on experience developing <span className="text-neutral-100">real-time multiplayer applications</span>, collaborative tools, and <span className="text-neutral-100">Web3 integrations</span> including wallets and smart contract interactions on <span className="text-neutral-100">Ethereum and Solana</span>.
  <br /><br />
  I value <span className="text-neutral-100">clean system design, performance optimization,</span> and <span className="text-neutral-100">writing maintainable code</span>. I enjoy solving complex problems and turning them into reliable, user-focused products, while continuously exploring new technologies that push both scalability and innovation.
</p>
          </div>

          {/* Image Section */}
          <div ref={imgref} className="w-full md:w-1/3 flex justify-center md:justify-end mb-6 md:mb-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neutral-500 to-neutral-300 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:scale-110"></div>
              <img
                src={Me}
                alt="Nikhil Achale"
                className="relative rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-cover shadow-2xl border-4 border-neutral-800 group-hover:border-neutral-600 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;