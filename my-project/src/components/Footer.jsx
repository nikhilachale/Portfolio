import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaHeart, FaArrowUp, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const resumeDownloadLink = "https://drive.google.com/file/d/1sh6S-4UWksgaM-Rfn8a44AN-u6gHdXNY/view?usp=sharing"; // Update with your resume link

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub className="w-5 h-5" />,
    href: "https://github.com/nikhilachale",
    color: "hover:text-neutral-200",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/nikhil-achale-b398aa195/",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: <FaEnvelope className="w-5 h-5" />,
    href: "mailto:nikhilsmailbox01@gmail.com",
    color: "hover:text-red-400",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="w-5 h-5" />,
    href: "https://wa.me/7691912890",
    color: "hover:text-green-400",
  },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

function Footer() {
  useGSAP(() => {
    gsap.from(".name", {
      y: 100,
      duration: 1,
      loop: true,
      delay: 3
    });
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative mt-20 bg-gradient-to-b from-transparent to-black/50"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neutral-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:col-span-2 lg:col-span-1"
            >
              <div>
                <h3 className="name text-2xl sm:text-3xl font-bold bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 bg-clip-text text-transparent mb-4">
                  Let's Connect
                </h3>
                <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 text-neutral-400 text-sm sm:text-base">
                  <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300 mt-1 flex-shrink-0" />
                  <span>NIT Patna, Bihar, India</span>
                </div>
                <div className="flex items-start gap-3 text-neutral-400 text-sm sm:text-base">
                  <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300 mt-1 flex-shrink-0" />
                  <a
                    href="mailto:nikhilsmailbox01@gmail.com"
                    className="hover:text-neutral-200 transition-colors break-all"
                  >
                    nikhilsmailbox01@gmail.com
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <motion.a
                href="mailto:nikhilsmailbox01@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-600 to-neutral-700 hover:from-neutral-500 hover:to-neutral-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-neutral-500/30"
              >
                <FaEnvelope className="w-4 h-4" />
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Quick Links
              </h3>
              <nav className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-neutral-400 hover:text-neutral-200 transition-all duration-300 text-base sm:text-lg hover:translate-x-2 transform"
                  >
                    → {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-2 sm:pt-4">
                <p className="text-neutral-400 mb-3 sm:mb-4 text-sm sm:text-base">
                  Download my resume:
                </p>
                <motion.a
                  href={resumeDownloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 border-2 border-neutral-600 text-neutral-300 hover:bg-neutral-600/20 hover:border-neutral-500 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300"
                >
                  <FaDownload className="w-4 h-4" />
                  Resume.pdf
                </motion.a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 sm:col-span-2 lg:col-span-1"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-br from-neutral-900 to-black rounded-xl border border-neutral-800
                      hover:border-neutral-600 transition-all duration-300 text-neutral-400 ${social.color} text-sm sm:text-base
                    `}
                  >
                    {social.icon}
                    <span className="font-medium">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Fun Stats */}
              <div className="bg-gradient-to-br from-neutral-900 to-black rounded-xl p-4 sm:p-5 border border-neutral-800">
                <h4 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-neutral-300 to-neutral-400 bg-clip-text text-transparent mb-3">
                  Current Status
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-neutral-400">
                  <div className="flex items-center justify-between">
                    <span>☕ Coffee consumed today:</span>
                    <span className="text-white font-semibold">3 cups</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>🚀 Projects in development:</span>
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>🎵 Currently listening to:</span>
                    <span className="text-white font-semibold">Lo-fi</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>💻 Code commits this week:</span>
                    <span className="text-white font-semibold">42</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-neutral-400 text-center md:text-left"
              >
                © 2025 Nikhil Achale
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-neutral-300 hover:text-neutral-100 transition-colors duration-300 bg-neutral-800/50 px-4 py-2 rounded-lg hover:bg-neutral-700/50"
              >
                <FaArrowUp className="w-4 h-4" />
                Back to top
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;