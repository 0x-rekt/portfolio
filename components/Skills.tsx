"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "../constants/skills";
// --- Types & Data Organization ---

// We categorize the flat list to make the UI cleaner
const CATEGORIES = {
  Frontend: [
    "JavaScript", "TypeScript", "React.js", "Next.js", 
    "Tailwind", "React Native"
  ],
  Backend: [
    "Node.js", "Express.js", "Python", "Solidity"
  ],
  Database: [
    "MongoDB", "PostgreSQL", "Firebase"
  ],
  "DevOps & Tools": [
    "Git", "Github", "Docker", "AWS"
  ]
};

const Skills = () => {
  // Memoize grouped skills to avoid recalculation on render
  const groupedSkills = useMemo(() => {
    const grouped: Record<string, typeof skills> = {};
    
    Object.entries(CATEGORIES).forEach(([category, skillNames]) => {
      grouped[category] = skills.filter((skill) => 
        skillNames.includes(skill.name)
      );
    });
    
    return grouped;
  }, []);

  // --- Animation Variants ---
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="skills" className="w-full py-24 px-4 overflow-hidden relative">
      {/* Background Decor - Optional subtle gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-blue-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-purple-500 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Tech <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A curated list of technologies I use to build performant and scalable web applications.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div key={category} variants={categoryVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-4">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {categorySkills.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// --- Sub-Component: Skill Pill ---

const SkillPill = ({ skill }: { skill: { name: string; icon: string } }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm cursor-default"
    >
      <div className="relative w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        {/* Grayscale by default, color on hover */}
        <Image
          src={skill.icon || "/placeholder.svg"}
          alt={skill.name}
          fill
          className="object-contain filter group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
          sizes="32px"
        />
      </div>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default Skills;