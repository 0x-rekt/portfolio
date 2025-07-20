"use client";

import { easeOut, motion } from "motion/react";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      <div className="text-center space-y-8">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          About
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="absolute" />

          <div className="relative p-4">
            <motion.p
              className="text-md md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Hi, I&apos;m{" "}
              <motion.span
                className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Sowdarjya Kolay
              </motion.span>
              , a versatile Full Stack Developer, App Developer, AI Innovator,
              and Web3 Enthusiast currently pursuing a B.Tech in ECE. I build
              scalable web and mobile apps using MERN, React Native, and modern
              tools like TypeScript, Next.js, Tailwind, Firebase, Docker, AWS,
              and Solidity. Actively engaged in hackathons and open-source
              collaborations, I enjoy solving real-world challenges and
              exploring new technologies. Passionate about leveraging cloud, AI,
              and blockchain to create impactful solutions. Eager to learn,
              innovate, and connect.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-2 mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
