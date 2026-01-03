"use client";

import { backOut, easeOut, motion } from "motion/react";
import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: backOut,
      },
    },
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/sowdarjya",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sowdarjya-kolay-616176314",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      href: "https://x.com/_Kolayyyyyyy__",
      icon: FaXTwitter,
      color: "hover:text-black dark:hover:text-white",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/_0x.rekt_/",
      icon: Instagram,
      color: "hover:text-pink-600",
    },
  ];

  return (
    <footer>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center space-y-6">
          <motion.div className="flex space-x-6" variants={containerVariants}>
            {socialLinks.map((social) => (
              <motion.div key={social.name} variants={socialVariants}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-200 hover:scale-110 transform`}
                  aria-label={`Visit ${social.name} profile`}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
            variants={itemVariants}
          />

          <motion.div className="text-center space-y-2" variants={itemVariants}>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center flex-wrap gap-1">
              <span>© Sowdarjya Kolay – Built with</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.span>
              <span>using</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                Next.js
              </span>
              <span>&</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Tailwind
              </span>
            </p>

            <motion.p
              className="text-xs text-gray-500 dark:text-gray-500"
              variants={itemVariants}
            >
              Designed & Developed with passion
            </motion.p>
          </motion.div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            variants={itemVariants}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span>Back to top</span>
            <motion.svg
              className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </motion.svg>
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
