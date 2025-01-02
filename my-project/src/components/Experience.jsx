import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

function Experience() {
  const hdref = useRef(null);
  const cardref = useRef(null);

  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: hdref.current,
        start: "top 60%",
        end: "top 40%",
        toggleActions: "play none none reverse",

      },
    });

    // Animate heading
    tl.from(hdref.current, {
      opacity: 0,
      y: 100,
      duration: .5,
    });

    // Animate cards
    tl.from(cardref.current, {
      opacity: 0,
      y: 100,
      duration: .5,
      stagger: 0.3,
    });
  });

  return (
    <div className="h-screen flex flex-col bg-black">
      {/* Header Section */}
      <div className="header">
        <h2 ref={hdref} className="text-6xl text-center text-white font-bold p-5 ">
          Experience
        </h2>
      </div>

      {/* Card Section */}
      <div ref={cardref} className="flex flex-wrap justify-center items-center pt-11 gap-12">
        {/* Card 1 - The Cabbro */}
        <div
          className="w-96 h-64 bg-cover bg-center text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            backgroundImage: `url(https://plus.unsplash.com/premium_vector-1682269851373-65c8474a4f55?q=80&w=3214&auto=format&fit=crop&ixlib=rb-4.0.3)`,
            filter: 'brightness(90%)',
          }}
        >
          <a
            href="https://thecabbro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between items-center h-full p-6 text-center bg-black bg-opacity-40 rounded-lg"
          >
            <h3 className="text-3xl font-semibold mb-2">The Cabbro</h3>
            <p className="text-lg">Explore this amazing platform for insightful content.</p>
          </a>
        </div>

        {/* Card 2 - Smart and Bright Future Academy */}
        <div
          className="w-96 h-64 bg-cover bg-center text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            backgroundImage: `url(https://plus.unsplash.com/premium_vector-1683134313621-c2aaa27f8c28?q=80&w=2904&auto=format&fit=crop&ixlib=rb-4.0.3)`,
            filter: 'brightness(90%)',
          }}
        >
          <a
            href="https://smartandbrightfutureacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between items-center h-full p-6 text-center bg-black bg-opacity-40 rounded-lg"
          >
            <h3 className="text-3xl font-semibold mb-2">Smart and Bright Future Academy</h3>
            <p className="text-lg">A leading academy focused on bright futures.</p>
          </a>
        </div>

        {/* Card 3 - Leetcode */}
        <div
          className="w-96 h-64 bg-cover bg-center text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3)`,
            filter: 'brightness(90%)',
          }}
        >
          <a
            href="https://leetcode.com/u/nikhilachale/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between items-center h-full p-6 text-center bg-black bg-opacity-40 rounded-lg"
          >
            <h3 className="text-3xl font-semibold mb-2">Leetcode</h3>
            <p className="text-lg">Sharpen your coding skills on Leetcode.</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;