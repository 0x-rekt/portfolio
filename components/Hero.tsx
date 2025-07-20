"use client";

import { BackgroundBeams } from "./BackgroundBeams";
import Image from "next/image";
import { Github, Linkedin, Instagram, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { backOut, easeInOut, easeOut, motion } from "motion/react";
import { ContainerTextFlip } from "./TextFlipContainer";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
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

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.2,
        ease: easeOut,
      },
    },
  };

  return (
    <div
      className="relative w-full min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8"
      id="hero"
    >
      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="space-y-6 text-center lg:text-left"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl font-mono font-bold tracking-tight text-gray-900 dark:text-white"
                variants={itemVariants}
              >
                Hi, I am{" "}
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Sowdarjya Kolay
                </motion.span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start"
              >
                <ContainerTextFlip
                  words={[
                    "Full Stack Developer",
                    "App Developer",
                    "AI Innovator",
                    "Web3 Enthusiast",
                  ]}
                  interval={3000}
                  className="text-lg sm:text-xl md:text-4xl"
                  textClassName="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
                  animationDuration={600}
                />
              </motion.div>
            </div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
              variants={itemVariants}
            >
              Passionate about creating innovative solutions and bringing ideas
              to life through code.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={containerVariants}
            >
              <motion.div variants={buttonVariants}>
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary dark:text-blue-400 border border-primary dark:border-blue-400 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors hover:scale-105 transform duration-200"
                >
                  View My Work
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center space-y-6"
            variants={itemVariants}
          >
            <motion.div className="relative" variants={imageVariants}>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <Image
                src="/sowdarjya.jpg"
                width={280}
                height={280}
                alt="Sowdarjya Kolay"
                className="relative rounded-full border-4 border-white shadow-2xl"
                priority
              />
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              variants={containerVariants}
            >
              <motion.div variants={socialVariants}>
                <Link
                  href="https://github.com/sowdarjya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors group hover:scale-110 transform duration-200"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">GitHub Profile</span>
                </Link>
              </motion.div>

              <motion.div variants={socialVariants}>
                <Link
                  href="https://www.linkedin.com/in/sowdarjya-kolay-616176314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors group hover:scale-110 transform duration-200"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="sr-only">LinkedIn Profile</span>
                </Link>
              </motion.div>

              <motion.div variants={socialVariants}>
                <Link
                  href="https://x.com/_Kolayyyyyyy__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-colors group"
                >
                  <X className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </motion.div>

              <motion.div variants={socialVariants}>
                <Link
                  href="https://www.instagram.com/_0x.rekt_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors group"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <BackgroundBeams />
    </div>
  );
};

export default Hero;
