"use client";

import { easeOut, motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      <div className="text-center space-y-10">
        
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* Content Paragraph */}
        <div className="relative max-w-4xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light space-y-6">
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I am a <span className="text-gray-900 dark:text-white font-bold">Full Stack Developer</span> & 
            <span className="text-gray-900 dark:text-white font-bold"> AI Engineer</span> currently pursuing my 
            <span className="underline decoration-blue-500/50 decoration-2 underline-offset-4 mx-1 text-gray-900 dark:text-white font-medium">B.Tech in Electronics and Communication Engineering</span>.
            I bridge the gap between hardware logic and software scalability.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            My core expertise lies in architecting web and mobile ecosystems using 
            <span className="text-blue-600 dark:text-blue-400 font-medium"> Next.js</span>, 
            <span className="text-blue-600 dark:text-blue-400 font-medium"> TypeScript</span>, and 
            <span className="text-blue-600 dark:text-blue-400 font-medium"> React Native</span>. 
            On the backend, I build robust data pipelines with 
            <span className="text-green-600 dark:text-green-400 font-medium"> Node.js</span>, 
            <span className="text-green-600 dark:text-green-400 font-medium"> Python</span>, and 
            <span className="text-green-600 dark:text-green-400 font-medium"> PostgreSQL/MongoDB</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
             
            I love competing in <span className="text-gray-900 dark:text-white font-semibold">Hackathons</span> to build innovative solutions under pressure.
          </motion.p>

        </div>

        {/* Decoration Dots */}
        <motion.div
          className="flex justify-center space-x-3 pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}