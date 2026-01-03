"use client";

import { BackgroundBeams } from "./BackgroundBeams";
import { Github, Linkedin, Twitter, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[90vh] flex items-center justify-center px-4"
      id="hero"
    >
      <div className="relative z-10 max-w-3xl mx-auto w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-500">
              Sowdarjya Kolay
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Full Stack Developer & AI Engineer
            </span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-1.5 text-gray-500">
              <MapPin className="w-4 h-4" />
              <span>Kolkata, IN</span>
            </div>
          </div>

          <p className="max-w-lg mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed opacity-55">
            I build scalable web applications and intelligent systems using
            Next.js, TypeScript, Python, and other modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex gap-4">
            <Link
              href="#projects"
              className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-md font-medium hover:opacity-90 transition-opacity shadow-lg shadow-gray-200 dark:shadow-none"
            >
              Work
            </Link>
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <Link
              href="https://github.com/0x-rekt"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sowdarjya-kolay-616176314"
              target="_blank"
              className="text-gray-500 hover:text-[#0077b5] transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://x.com/_Kolayyyyyyy__"
              target="_blank"
              className="text-gray-500 hover:text-black dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <FaXTwitter className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </div>

      <BackgroundBeams />
    </div>
  );
};

export default Hero;
