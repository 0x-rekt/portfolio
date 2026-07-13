"use client";

import React, { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { skills } from '@/constants/skills';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { SolarSystem } from '@/components/ui/solar-system';
import { cn } from '@/lib/utils';

/**
 * ============================================================================
 * SKILL VISUAL CUSTOMIZATION THEMES
 * ============================================================================
 * When adding new technologies to `constants/skills.ts`, define their custom
 * styling options here.
 * 
 * - `color`: Glow/hover color (HEX or CSS color). Set `#FFFFFF` to automatically
 *   apply a high-contrast invert filter for dark-themed logo icons.
 * - `tier`: Determines which orbit ring they populate ('inner' | 'mid' | 'outer').
 * 
 * NOTE: If a skill is added to `constants/skills.ts` but omitted here, it will
 * dynamically default to the 'outer' ring with a '#CCFF00' highlight color.
 */
const SKILL_THEMES: Record<string, { color: string; tier: 'inner' | 'mid' | 'outer' }> = {
  "React.js": { color: "#61DAFB", tier: "inner" },
  "Next.js": { color: "#FFFFFF", tier: "inner" },
  "TypeScript": { color: "#3178C6", tier: "inner" },
  "JavaScript": { color: "#F7DF1E", tier: "inner" },
  "Tailwind": { color: "#38BDF8", tier: "inner" },

  "Node.js": { color: "#339933", tier: "mid" },
  "Express.js": { color: "#FFFFFF", tier: "mid" },
  "MongoDB": { color: "#47A248", tier: "mid" },
  "PostgreSQL": { color: "#4169E1", tier: "mid" },
  "Prisma": { color: "#5A67D8", tier: "mid" },
  "Redux": { color: "#764ABC", tier: "mid" },
  "FastAPI": { color: "#009688", tier: "mid" },
  "Firebase": { color: "#FFCA28", tier: "mid" },

  "Python": { color: "#3776AB", tier: "outer" },
  "Langchain": { color: "#13B981", tier: "outer" },
  "Hugging Face": { color: "#FFD21E", tier: "outer" },
  "Docker": { color: "#2496ED", tier: "outer" },
  "AWS": { color: "#FF9900", tier: "outer" },
  "GCP": { color: "#4285F4", tier: "outer" },
  "Git": { color: "#F05032", tier: "outer" },
  "Github": { color: "#FFFFFF", tier: "outer" },
  "Pinecone": { color: "#10B981", tier: "outer" },
  "Scikit-learn": { color: "#F7931E", tier: "outer" },
  "Shell Scripting": { color: "#4EAA25", tier: "outer" },
  "CI/CD": { color: "#2088FF", tier: "outer" }
};

export default function TechnicalStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const [viewMode, setViewMode] = useState<'orbit' | 'grid'>('orbit');
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const customOrbits = useMemo(() => [
    {
      id: "inner",
      name: "Core Frontend & Languages",
      radiusClass: "var(--radius-inner)",
      radiusPx: 175,
      speed: 24,
      items: skills
        .filter(s => SKILL_THEMES[s.name]?.tier === 'inner')
        .map(s => ({
          id: s.name.toLowerCase().replace(/[^a-z]/g, ''),
          label: s.name,
          color: SKILL_THEMES[s.name]?.color || "#CCFF00",
          svg: (
            <div className="relative w-5 h-5">
              <Image 
                src={s.icon} 
                alt={s.name} 
                fill 
                className={cn(
                  "object-contain",
                  SKILL_THEMES[s.name]?.color === "#FFFFFF" && "invert"
                )} 
              />
            </div>
          )
        }))
    },
    {
      id: "mid",
      name: "Backend & Databases",
      radiusClass: "var(--radius-mid)",
      radiusPx: 285,
      speed: 36,
      items: skills
        .filter(s => SKILL_THEMES[s.name]?.tier === 'mid')
        .map(s => ({
          id: s.name.toLowerCase().replace(/[^a-z]/g, ''),
          label: s.name,
          color: SKILL_THEMES[s.name]?.color || "#CCFF00",
          svg: (
            <div className="relative w-5 h-5">
              <Image 
                src={s.icon} 
                alt={s.name} 
                fill 
                className={cn(
                  "object-contain",
                  SKILL_THEMES[s.name]?.color === "#FFFFFF" && "invert"
                )} 
              />
            </div>
          )
        }))
    },
    {
      id: "outer",
      name: "AI, Cloud & DevOps",
      radiusClass: "var(--radius-outer)",
      radiusPx: 395,
      speed: 52,
      // If a skill doesn't specify a tier, it defaults to orbiting on the outer ring.
      items: skills
        .filter(s => (SKILL_THEMES[s.name]?.tier || 'outer') === 'outer')
        .map(s => ({
          id: s.name.toLowerCase().replace(/[^a-z]/g, ''),
          label: s.name,
          color: SKILL_THEMES[s.name]?.color || "#CCFF00",
          svg: (
            <div className="relative w-5 h-5">
              <Image 
                src={s.icon} 
                alt={s.name} 
                fill 
                className={cn(
                  "object-contain",
                  (SKILL_THEMES[s.name]?.color || "#CCFF00") === "#FFFFFF" && "invert"
                )} 
              />
            </div>
          )
        }))
    }
  ], []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-transparent"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 engineering-grid pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center text-center mb-10 space-y-3"
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

        {/* View Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={() => setViewMode('orbit')}
            className={cn(
              "px-5 py-2 font-mono text-[10px] font-bold tracking-widest rounded-none border-2 transition-all duration-200 cursor-pointer h-auto",
              viewMode === 'orbit'
                ? "bg-[#CCFF00] border-[#CCFF00] text-black shadow-[3px_3px_0px_#FFF]"
                : "bg-transparent border-white/20 text-white/60 hover:text-white hover:border-white"
            )}
          >
            SYSTEM_ORBIT.SYS
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={cn(
              "px-5 py-2 font-mono text-[10px] font-bold tracking-widest rounded-none border-2 transition-all duration-200 cursor-pointer h-auto",
              viewMode === 'grid'
                ? "bg-[#CCFF00] border-[#CCFF00] text-black shadow-[3px_3px_0px_#FFF]"
                : "bg-transparent border-white/20 text-white/60 hover:text-white hover:border-white"
            )}
          >
            GRID_DATABASE.DB
          </button>
        </div>

        {/* Dynamic Display Area */}
        <div className="relative min-h-[320px] md:min-h-[450px] w-full flex items-center justify-center overflow-visible">
          <AnimatePresence mode="wait">
            {viewMode === 'orbit' ? (
              <motion.div
                key="orbit"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full flex justify-center items-center overflow-visible"
              >
                <SolarSystem orbits={customOrbits} isPaused={!isInView} />
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
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
                            className={cn(
                              "object-contain",
                              SKILL_THEMES[skill.name]?.color === "#FFFFFF" && "invert"
                            )}
                          />
                        </div>
                        <span>{skill.name}</span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

