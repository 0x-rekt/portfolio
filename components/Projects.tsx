"use client";

import React, { useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { projects } from '@/constants/projects';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

type Project = {
  title?: string;
  name?: string;
  description: string;
  image?: string;
  liveLink?: string;
  githubLink?: string;
  techStack: { name: string; icon: string }[];
};

// ── Mouse-follow 3D tilt card wrapper ──────────────────────────────
function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, { stiffness: 180, damping: 28 });
  const springRotateY = useSpring(rotateY, { stiffness: 180, damping: 28 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) / (rect.width / 2);
    const dy = (e.clientY - centerY) / (rect.height / 2);

    // Max ±7 degrees tilt
    rotateX.set(-dy * 7);
    rotateY.set(dx * 7);
  }, [rotateX, rotateY]);

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40, rotateX: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className="h-full perspective-card"
    >
      {children}
    </motion.div>
  );
}

// ── Main section ───────────────────────────────────────────────────
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'start 20%'],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 22, restDelta: 0.001 });

  const rotateX = useTransform(smooth, [0, 1], [10, 0]);
  const translateY = useTransform(smooth, [0, 1], [60, 0]);
  const opacity = useTransform(smooth, [0, 0.35], [0, 1]);

  return (
    <motion.section
      id="projects"
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
        {/* Section title */}
        <motion.div
          className="flex flex-col items-center text-center mb-16 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Badge className="font-mono text-xs uppercase tracking-widest bg-black text-[#CCFF00] border border-white/20 px-3 py-1 font-bold rounded-none h-auto">
            Portfolio
          </Badge>
          <h2 className="text-white font-display font-extrabold text-3xl md:text-5xl tracking-normal uppercase leading-[0.9]">
            Projects &amp; Production Work
          </h2>
          <div className="w-16 h-1.5 bg-[#CCFF00]" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => {
            const title = (project as Project).title ?? (project as Project).name ?? '';
            return (
              <TiltCard key={title} index={index}>
                <Card className="glass-panel group rounded-none flex flex-col relative overflow-hidden border-white/10 bg-transparent gap-0 py-0 h-full transition-all duration-300 hover:border-[#CCFF00]/30 hover:shadow-[0_8px_40px_rgba(204,255,0,0.08)]">
                  {/* 3D depth accent — visible only on hover */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-none"
                    style={{ boxShadow: 'inset 0 0 30px rgba(204,255,0,0.04)' }}
                  />

                  {/* Project screenshot */}
                  {project.image && (
                    <div className="relative w-full h-48 border-b-2 border-white/10 overflow-hidden bg-zinc-900">
                      <Image
                        src={project.image}
                        alt={title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  )}

                  {/* Card header */}
                  <CardHeader className="px-6 pt-6 pb-3">
                    <CardTitle className="font-display font-extrabold text-xl md:text-2xl text-white uppercase tracking-tight group-hover:bg-[#CCFF00] group-hover:text-black group-hover:px-1 inline-block transition-all leading-none">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-zinc-300 font-normal text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Tech stack */}
                  <CardContent className="px-6 pb-4 flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="outline"
                          className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-300 bg-zinc-900/60 px-2 py-1 border border-white/15 font-bold rounded-none h-auto"
                        >
                          <div className="relative w-3.5 h-3.5 shrink-0">
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Footer links */}
                  <CardFooter className="px-6 pb-6 flex-col items-start gap-0">
                    <Separator className="bg-white/10 mb-4" />
                    <div className="flex items-center gap-3">
                      {project.liveLink && (
                        <Button
                          asChild
                          className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest font-bold text-black bg-[#CCFF00] border-2 border-[#CCFF00] px-3 py-1.5 hover:bg-white hover:border-white transition-all hover:cursor-pointer shadow-[2px_2px_0px_#FFF] hover:shadow-none active:translate-x-[1px] active:translate-y-[1px] rounded-none h-auto"
                        >
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            <ExternalLink className="w-3 h-3" />
                            LIVE DEMO
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button
                          asChild
                          variant="outline"
                          className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest font-bold text-white bg-transparent border-2 border-white px-3 py-1.5 hover:bg-white hover:text-black transition-all hover:cursor-pointer rounded-none h-auto"
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            <Github className="w-3 h-3" />
                            SOURCE
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
