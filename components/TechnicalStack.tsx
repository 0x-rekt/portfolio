"use client";

import React from 'react';
import { motion } from 'motion/react';
import { skills } from '@/constants/skills';
import Image from 'next/image';

export default function TechnicalStack() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden border-t-4 border-white bg-transparent"
    >
      {/* Grid Overlay Line Effects */}
      <div className="absolute inset-0 engineering-grid pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Header Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] bg-black text-[#CCFF00] px-3 py-1 border border-white/20">
            ARSENAL NODE
          </span>
          <h2 className="text-white font-display font-extrabold text-3xl md:text-5xl tracking-tight uppercase leading-[0.9]">
            Technical Stack
          </h2>
          <div className="w-16 h-1.5 bg-[#CCFF00]" />
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-2.5 px-4 py-2.5 border-2 border-white bg-zinc-900 font-mono text-xs text-white font-bold tracking-wider rounded-none cursor-default transition-colors duration-200 hover:bg-[#CCFF00] hover:border-[#CCFF00] hover:text-black hover:shadow-[3px_3px_0px_#FFF]"
            >
              <div className="relative w-5 h-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
