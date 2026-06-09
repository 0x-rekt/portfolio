"use client";

import React from 'react';
import { motion } from 'motion/react';
import { projects } from '@/constants/projects';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

type Project = {
  title?: string;
  name?: string;
  description: string;
  image?: string;
  liveLink?: string;
  githubLink?: string;
  techStack: { name: string; icon: string }[];
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden border-t-4 border-white bg-transparent"
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 engineering-grid pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest bg-black text-[#CCFF00] border border-white/20 px-3 py-1 font-bold">
            Portfolio
          </span>
          <h2 className="text-white font-display font-extrabold text-3xl md:text-5xl tracking-normal uppercase leading-[0.9]">
            Production Schemas
          </h2>
          <div className="w-16 h-1.5 bg-[#CCFF00]" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => {
            const title = (project as Project).title ?? (project as Project).name ?? '';
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel group rounded-none flex flex-col relative overflow-hidden"
              >
                {/* Project Screenshot */}
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

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Title */}
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-white uppercase tracking-tight group-hover:bg-[#CCFF00] group-hover:text-black group-hover:px-1 inline-block transition-all mb-3">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 font-normal text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Icons */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-300 bg-zinc-900/60 px-2 py-1 border border-white/15 font-bold"
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
                      </div>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="border-t-2 border-white/10 pt-4 flex items-center gap-3 mt-auto">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest font-bold text-black bg-[#CCFF00] border-2 border-[#CCFF00] px-3 py-1.5 hover:bg-white hover:border-white transition-all cursor-pointer shadow-[2px_2px_0px_#FFF] hover:shadow-none active:translate-x-[1px] active:translate-y-[1px]"
                      >
                        <ExternalLink className="w-3 h-3" />
                        LIVE DEMO
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest font-bold text-white bg-transparent border-2 border-white px-3 py-1.5 hover:bg-white hover:text-black transition-all cursor-pointer"
                      >
                        <Github className="w-3 h-3" />
                        SOURCE
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
