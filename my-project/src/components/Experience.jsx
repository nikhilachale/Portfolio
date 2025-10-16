import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

function Experience() {
  const hdref = useRef(null);
  const cardref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
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
      title: "CDAC Patna",
      link: "https://cdac.in/index.aspx?id=PT.com",
      github: "",
      image: "https://cdac.in/img/C-DAC.jpg",
      duration: "Feb 2025 – Present",
      description:
        "Currently working as a Web Developer Intern at CDAC Patna, where I am involved in a website designing project. My responsibilities include creating and maintaining the website, ensuring its functionality, responsiveness, and user-friendliness.",
    },
    {
      title: "The Cab Bro",
      link: "https://thecabbro.com",
      github: "https://github.com/example/thecabbro",
      image:
        "https://plus.unsplash.com/premium_vector-1682269851373-65c8474a4f55?q=80&w=3214&auto=format&fit=crop&ixlib=rb-4.0.3",
      duration: "Nov 2024 – JAN 2025",
      description:
        "Developed a cab booking platform enabling seamless bookings across India. Integrated a scalable backend with Node.js and MongoDB while designing dynamic UIs using React.js and Tailwind CSS.",
    },
    {
      title: "Smart and Bright Future Academy",
      link: "https://smartandbrightfutureacademy.com/",
      github: "https://github.com/example/smartacademy",
      image:
        "https://plus.unsplash.com/premium_vector-1683134313621-c2aaa27f8c28?q=80&w=2904&auto=format&fit=crop&ixlib=rb-4.0.3",
      duration: "Dec 2023 – Jan 2024",
      description:
        "Built an interactive e-learning platform for school students to access lectures and manage lesson plans. Developed a user-friendly and secure interface with HTML, CSS, JavaScript, and WordPress, enabling seamless navigation and payment processing.",
    },
    {
      title: "Leetcode",
      link: "https://leetcode.com/u/nikhilachale/",
      github: "https://github.com/example/leetcode-profile",
      image:
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      duration: "Ongoing",
      description:
        "Sharpening problem-solving skills by solving data structure and algorithm challenges on Leetcode.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col bg-black px-4 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/5 to-transparent"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-neutral-600/5 rounded-full blur-3xl"></div>

      {/* Header Section */}
      <div className="text-center mb-20 relative z-10">
        <h2
          ref={hdref}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
        >
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full"></div>
      </div>

      {/* Timeline vertical line */}
      <div className="absolute left-1/2 top-32 w-1 h-[70%] bg-gradient-to-b from-neutral-700 via-neutral-500/40 to-neutral-700 rounded-full z-0 hidden lg:block"></div>

      {/* Experience Timeline Cards */}
      <div
        ref={cardref}
        className="flex flex-col gap-16 mx-auto w-full max-w-5xl relative z-10"
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`group flex flex-col lg:flex-row items-center relative ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Timeline Dot */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
              <div className="w-6 h-6 bg-gradient-to-br from-neutral-400 to-neutral-600 rounded-full border-4 border-black shadow-lg"></div>
            </div>

            {/* Card */}
            <div className="flex-1 bg-gradient-to-br from-neutral-900 to-black rounded-2xl shadow-2xl border border-neutral-800 hover:border-neutral-600 transition-all duration-500 hover:shadow-neutral-500/10 p-8 lg:p-12 relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left Side - Image */}
                <div className="w-full md:w-56 h-56 bg-cover bg-center rounded-xl overflow-hidden shadow-lg border-2 border-neutral-800" style={{ backgroundImage: `url(${exp.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Right Side - Details */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-neutral-400 italic mb-4 flex items-center gap-2">
                    <span className="inline-block w-4 h-4 bg-gradient-to-br from-neutral-400 to-neutral-600 rounded-full mr-2"></span>
                    {exp.duration}
                  </p>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-600 to-neutral-700 hover:from-neutral-500 hover:to-neutral-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-neutral-500/20"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Visit Site
                    </a>
                    {exp.github && (
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-2 border-neutral-600 text-neutral-300 hover:bg-neutral-600/10 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;