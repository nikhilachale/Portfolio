import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import exc from "../images/excc.png";
import mudra from "../images/mudrax.png";
import chessImg from "../images/chess.png";
import tttImg from "../images/xo.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Realtime Chess",
      description: "A real-time multiplayer Chess game with live WebSocket-based gameplay, context state management, and interactive UI built with React and Tailwind.",
      longDescription: "A real-time multiplayer Chess game with live WebSocket-based gameplay, context state management, and interactive UI. Features include move validation, game state persistence, and an intuitive interface for seamless gameplay experience.",
      img: chessImg,
      github: "https://github.com/nikhilachale/Chess",
      live: "https://chesss.thecabbro.com/",
      tags: ["React", "Tailwind", "TypeScript", "WebSocket", "Context API"],
      category: "Real-time Gaming",
      featured: true,
    },
    {
      id: 2,
      title: "XOXO Clash",
      description: "A real-time multiplayer Tic Tac Toe game built with React and WebSockets, supporting live moves and persistent game state.",
      longDescription: "A real-time multiplayer Tic Tac Toe game built with React and WebSockets. Players can compete in live matches with instant move synchronization and persistent game state tracking for an engaging gaming experience.",
      img: tttImg,
      github: "https://github.com/nikhilachale/XOXO-Clash",
      live: null,
      tags: ["React", "Tailwind", "TypeScript", "WebSocket", "Context API"],
      category: "Real-time Gaming",
      featured: true,
    },
    {
      id: 3,
      title: "MudraX",
      description: "A Solana-based Web3 DApp to generate HD wallets, request SOL airdrops, sign messages, and transfer tokens with both mnemonic and wallet adapter support.",
      longDescription: "A comprehensive Solana-based Web3 DApp that enables users to generate HD wallets, request SOL airdrops, sign messages, and transfer tokens. Built with both mnemonic and wallet adapter support for enhanced security and flexibility.",
      img: mudra,
      github: "https://github.com/nikhilachale/MudraX",
      live: "https://mudrax.vercel.app/",
      tags: ["React", "Tailwind", "TypeScript", "Solana", "Web3", "Wallet Adapter", "bip39"],
      category: "Web3 Application",
      featured: true,
    },
    
    
    {
      id: 4,
      title: "Excalidraw Clone",
      description: "A collaborative whiteboard tool mimicking Excalidraw, built for real-time visual ideation and sketching.",
      longDescription: "A collaborative whiteboard tool inspired by Excalidraw, designed for real-time visual ideation and sketching. Perfect for brainstorming sessions and creative collaboration with an intuitive drawing interface.",
      img: exc,
      github: "https://github.com/nikhilachale/Excalidraw",
      live: null,
      tags: ["React", "Tailwind", "TypeScript", "Canvas", "Realtime"],
      category: "Creative Tools",
      featured: false,
    }
  ];

  const sectionRef = useRef(null);
  const [lineActive, setLineActive] = useState(false);
  const lastScrollY = useRef(0);
  const isScrollingDown = useRef(true);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      isScrollingDown.current = currentY > lastScrollY.current;
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isScrollingDown.current) {
            setLineActive(true);
          } else if (!entry.isIntersecting) {
            setLineActive(false);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/5 to-transparent"></div>
      <div className="absolute top-40 left-10 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-neutral-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, real-time applications, and modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Project Info */}
              <motion.div
                className={`space-y-5 ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
                initial={{
                  x: index % 2 === 1 ? 100 : -100,
                  opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 12,
                  duration: 0.8,
                  delay: index * 0.12,
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span className="text-neutral-400 font-medium text-xs sm:text-sm uppercase tracking-wide">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="bg-gradient-to-r from-neutral-600/30 to-neutral-500/30 border border-neutral-500/50 text-neutral-200 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>

                  <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                    {project.longDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-neutral-300 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-neutral-200 px-4 py-2 rounded-lg text-sm border border-neutral-700/50 hover:border-neutral-500/50 hover:shadow-lg hover:shadow-neutral-500/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-neutral-600 to-neutral-700 hover:from-neutral-500 hover:to-neutral-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-neutral-500/30"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  )}

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border-2 border-neutral-600 text-neutral-200 hover:bg-neutral-600/20 hover:border-neutral-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    Source Code
                  </motion.a>
                </div>
              </motion.div>

              {/* Project Image */}
              <motion.div
                className={`relative group ${
                  index % 2 === 1
                    ? 'lg:col-start-1 lg:row-start-1'
                    : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-600/30 to-neutral-500/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-gradient-to-br from-neutral-900 to-black backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 group-hover:border-neutral-600 transition-all duration-500 shadow-2xl">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.img}
                      alt={`${project.title} screenshot`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    {project.live && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.1 }}
                          className="bg-gradient-to-r from-neutral-600 to-neutral-700 text-white p-5 rounded-full shadow-2xl hover:shadow-neutral-500/50"
                        >
                          <FaExternalLinkAlt className="w-7 h-7" />
                        </motion.a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Continuous Decorative Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={lineActive ? { scaleY: 1.12 } : { scaleY: 0 }}
            transition={{
              duration: 2.0,
              delay: lineActive ? 0.3 : 0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent from-10% via-neutral-400/60 via-50% to-transparent to-90% origin-top hidden lg:block z-0"
          >
            {/* Animated dots along the line */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                lineActive
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0, opacity: 0 }
              }
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: 'backOut',
              }}
              className="absolute top-[17%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-400 rounded-full shadow-lg shadow-neutral-400/50"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                lineActive
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0, opacity: 0 }
              }
              transition={{
                duration: 0.6,
                delay: 1.2,
                ease: 'backOut',
              }}
              className="absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-300 rounded-full shadow-md shadow-neutral-300/50"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                lineActive
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0, opacity: 0 }
              }
              transition={{
                duration: 0.6,
                delay: 1.6,
                ease: 'backOut',
              }}
              className="absolute top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-400 rounded-full shadow-xl shadow-neutral-400/60"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                lineActive
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0, opacity: 0 }
              }
              transition={{
                duration: 0.6,
                delay: 2.0,
                ease: 'backOut',
              }}
              className="absolute top-[76%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-300 rounded-full shadow-md shadow-neutral-300/50"
            />
           
          </motion.div>
        </motion.div>

      
      </div>
    </section>
  );
}

export default Projects;