import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const exp = {
    title: "CDAC Patna",

    image: "https://www.presentations.gov.in/wp-content/uploads/2020/06/Preview-22.png",
    duration: "Feb 2025 – April 2025",
    description:
      "Currently working as a Web Developer Intern at CDAC Patna, where I am involved in a website designing project. My responsibilities include creating and maintaining the website, ensuring its functionality, responsiveness, and user-friendliness.",
  };

  return (
    <section className="min-h-screen flex flex-col bg-black px-4 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/5 to-transparent"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-neutral-600/5 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent mb-4"
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "6rem", opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-neutral-500 to-neutral-100 mx-auto rounded-full"
        ></motion.div>
      </div>

      {/* Experience Card */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center justify-center gap-12 mx-auto w-full max-w-5xl relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -8 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="flex-1 bg-gradient-to-br from-neutral-900 to-black rounded-2xl border border-neutral-800 hover:border-neutral-600 transition-all duration-500 shadow-2xl p-8 lg:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <div
              className="w-full md:w-56 h-56 bg-cover bg-center rounded-xl overflow-hidden shadow-lg border-2 border-neutral-800"
              style={{ backgroundImage: `url(${exp.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent mb-2">
                {exp.title}
              </h3>
              <p className="text-sm text-neutral-400 italic mb-4 flex items-center gap-2">
                <span className="inline-block w-4 h-4 bg-gradient-to-br from-neutral-400 to-neutral-600 rounded-full"></span>
                {exp.duration}
              </p>
              <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                {exp.description}
              </p>

             
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experience;