"use client";

import React from 'react';
import { projects } from '@/constants/projects';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
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

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-transparent"
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 engineering-grid pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <Badge className="font-mono text-xs uppercase tracking-widest bg-black text-[#CCFF00] border border-white/20 px-3 py-1 font-bold rounded-none h-auto">
            Portfolio
          </Badge>
          <h2 className="text-white font-display font-extrabold text-3xl md:text-5xl tracking-normal uppercase leading-[0.9]">
            Projects &amp; Production Work
          </h2>
          <div className="w-16 h-1.5 bg-[#CCFF00]" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => {
            const title = (project as Project).title ?? (project as Project).name ?? '';
            return (
              <div
                key={title}
                className="group glass-panel rounded-none flex flex-col relative overflow-hidden border border-white/10 bg-transparent h-full transition-colors transition-shadow duration-300 hover:border-[#CCFF00]/40 hover:shadow-[0_8px_40px_rgba(204,255,0,0.12)]"
              >
                {/* 3D depth accent — visible only on hover */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: 'inset 0 0 30px rgba(204,255,0,0.06)' }}
                />

                {/* Project screenshot */}
                {project.image && (
                  <div className="relative w-full h-48 border-b-2 border-white/10 overflow-hidden bg-zinc-900">
                    <Image
                      src={project.image}
                      alt={title}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                )}

                {/* Card header */}
                <div className="px-6 pt-6 pb-3">
                  <h3 className="font-display font-extrabold text-xl md:text-2xl text-white uppercase tracking-tight group-hover:text-[#CCFF00] transition-colors duration-300 leading-none mb-2">
                    {title}
                  </h3>
                  <p className="text-zinc-300 font-normal text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="px-6 pb-4 flex-1">
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
                </div>

                {/* Footer links */}
                <div className="px-6 pb-6">
                  <Separator className="bg-white/10 mb-4" />
                  <div className="flex items-center gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest font-bold text-black bg-[#CCFF00] border-2 border-[#CCFF00] px-3 py-1.5 hover:bg-white hover:border-white transition-all shadow-[2px_2px_0px_#FFF] hover:shadow-none active:translate-x-[1px] active:translate-y-[1px] rounded-none"
                      >
                        <ExternalLink className="w-3 h-3" />
                        LIVE DEMO
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest font-bold text-white bg-transparent border-2 border-white px-3 py-1.5 hover:bg-white hover:text-black transition-all rounded-none"
                      >
                        <Github className="w-3 h-3" />
                        SOURCE
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
