"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { skills } from '@/constants/skills';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function TechnicalStack() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'start 20%'],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 22, restDelta: 0.001 });

  // Section enters rising from a rotated plane below
  const rotateX = useTransform(smooth, [0, 1], [10, 0]);
  const translateY = useTransform(smooth, [0, 1], [60, 0]);
  const opacity = useTransform(smooth, [0, 0.4], [0, 1]);

  return (
    <motion.section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-transparent section-3d-enter"
      style={{
        opacity,
        rotateX,
        y: translateY,
        transformOrigin: 'center bottom',
        perspective: 1000,
      }}
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 engineering-grid pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Badge className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] bg-black text-[#CCFF00] px-3 py-1 border border-white/20 rounded-none h-auto">
            ARSENAL NODE
          </Badge>
          <h2 className="text-white font-display font-extrabold text-3xl md:text-5xl tracking-tight uppercase leading-[0.9]">
            Technical Stack
          </h2>
          <div className="w-16 h-1.5 bg-[#CCFF00]" />
        </motion.div>

        {/* Skills grid — staggered 3D depth pop */}
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, z: -30, rotateY: -8 }}
              whileInView={{ opacity: 1, scale: 1, z: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.35,
                delay: index * 0.025,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
                scale: 1.06,
                rotateY: 3,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Badge
                variant="outline"
                className="group flex items-center gap-2.5 px-4 py-2.5 border-2 border-white bg-zinc-900 font-mono text-xs text-white font-bold tracking-wider rounded-none cursor-default transition-colors duration-200 hover:bg-[#CCFF00] hover:border-[#CCFF00] hover:text-black hover:shadow-[3px_3px_0px_#FFF] h-auto"
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
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
