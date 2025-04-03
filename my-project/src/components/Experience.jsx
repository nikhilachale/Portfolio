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
        start: "top 90%",
        end: "top 40%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate heading
    tl.from(hdref.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
    });

    // Animate cards
    tl.from(cardref.current, {
      opacity: 0,
      y: 100,
      duration: 0.5,
      stagger: 0.9,
    });
  });

  const experiences = [
    {
      title: "The Cab Bro",
      link: "https://thecabbro.com",
      github: "https://github.com/example/thecabbro",
      image: "https://plus.unsplash.com/premium_vector-1682269851373-65c8474a4f55?q=80&w=3214&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Developed a cab booking platform enabling seamless bookings across India. Integrated a scalable backend with Node.js and MongoDB while designing dynamic UIs using React.js and Tailwind CSS.",
    },
    {
      title: "Smart and Bright Future Academy",
      link: "https://smartandbrightfutureacademy.com/",
      github: "https://github.com/example/smartacademy",
      image: "https://plus.unsplash.com/premium_vector-1683134313621-c2aaa27f8c28?q=80&w=2904&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Built an interactive e-learning platform for school students to access lectures and manage lesson plans. Developed a user-friendly and secure interface with HTML, CSS, JavaScript, and WordPress, enabling seamless navigation and payment processing.",
    },
    {
      title: "Leetcode",
      link: "https://leetcode.com/u/nikhilachale/",
      github: "https://github.com/example/leetcode-profile",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Sharpening problem-solving skills by solving data structure and algorithm challenges on Leetcode.",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-black px-4 py-10">
      {/* Header Section */}
      <h2 ref={hdref} className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-neutral-500 to-neutral-100 bg-clip-text text-transparent">
  Experience
</h2>

      {/* Experience Cards */}
      <div ref={cardref} className="flex flex-col gap-8 mx-auto w-full max-w-5xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-gray-900 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Left Side - Image */}
            <div
              className="w-full sm:w-1/3 h-48 sm:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${exp.image})` }}
            ></div>

            {/* Right Side - Details */}
            <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-neutral-200">{exp.title}</h3>
              <p className="text-gray-300 mt-2">{exp.description}</p>

              {/* Links */}
              <div className="mt-4 flex gap-4">
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Visit Site
                </a>
                <a
                  href={exp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;