"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { ExternalLink, Github, X, GitFork, Star } from "lucide-react";
import { projects } from "@/constants/projects";

interface TechStack {
  name: string;
  icon: string;
}

interface Project {
  title?: string;
  name?: string;
  description: string;
  image?: string;
  liveLink: string;
  githubLink: string;
  techStack: TechStack[];
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const getTitle = (p: Project) => p.title || p.name || "Untitled";

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="projects" className="w-full bg-[#0d1117] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#484f58] uppercase tracking-widest">
              repositories
            </span>
            <div className="flex-1 h-px bg-[#21262d]" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]">
              My{" "}
              <span className="relative text-[#2f81f7]">
                Projects
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-linear-to-r from-[#2f81f7]/0 via-[#2f81f7] to-[#2f81f7]/0"
                />
              </span>
            </h2>
            <p className="mt-3 text-sm font-mono text-[#7d8590] leading-relaxed max-w-lg">
              A collection of projects I&apos;ve built using modern technologies
              and best practices.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {projects.map((project) => (
              <motion.div
                key={getTitle(project)}
                layoutId={`card-${getTitle(project)}-${id}`}
                variants={fadeUp}
                onClick={() => setActive(project)}
                className="group flex flex-col rounded-lg border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff]/40 transition-all duration-200 cursor-pointer overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    layoutId={`image-${getTitle(project)}-${id}`}
                    src={project.image || "/placeholder.svg"}
                    alt={getTitle(project)}
                    className="w-full h-44 object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#161b22] via-transparent to-transparent" />
                </div>

                <div className="flex flex-col gap-3 p-4 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <Github className="w-4 h-4 text-[#7d8590] shrink-0" />
                      <motion.span
                        layoutId={`title-${getTitle(project)}-${id}`}
                        className="text-[13px] font-mono font-semibold text-[#58a6ff]"
                      >
                        {getTitle(project)}
                      </motion.span>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full border border-[#30363d] text-[#7d8590] shrink-0">
                      public
                    </span>
                  </div>

                  <motion.p
                    layoutId={`description-${getTitle(project)}-${id}`}
                    className="text-[12px] font-mono text-[#7d8590] leading-relaxed line-clamp-2 flex-1"
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech.name}
                        className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#21262d] border border-[#30363d] text-[11px] font-mono text-[#8b949e]"
                      >
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={12}
                          height={12}
                          className="object-contain"
                        />
                        {tech.name}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-[#21262d] border border-[#30363d] text-[11px] font-mono text-[#484f58]">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 pt-3 mt-1 border-t border-[#21262d]">
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#484f58]">
                      <Star className="w-3 h-3" />
                      <span>0</span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[#484f58]">
                      <GitFork className="w-3 h-3" />
                      <span>0</span>
                    </div>
                    <span className="ml-auto text-[11px] font-mono text-[#484f58] group-hover:text-[#58a6ff] transition-colors">
                      View details →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 pt-2"
          >
            <div className="flex-1 h-px bg-[#21262d]" />
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#484f58]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse" />
              {projects.length} public repositories
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0d1117]/80 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-50 px-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 p-2 rounded-md border border-[#30363d] bg-[#21262d] text-[#7d8590] hover:text-[#e6edf3] hover:border-[#8b949e] transition-colors"
            >
              <X className="w-4 h-4" />
            </motion.button>

            <motion.div
              layoutId={`card-${getTitle(active)}-${id}`}
              ref={ref}
              className="w-full max-w-lg max-h-[88vh] flex flex-col rounded-lg border border-[#30363d] bg-[#161b22] overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${getTitle(active)}-${id}`}>
                <Image
                  src={active.image || "/placeholder.svg"}
                  alt={getTitle(active)}
                  width={500}
                  height={224}
                  className="w-full h-56 object-cover object-top"
                />
              </motion.div>

              <div className="overflow-y-auto flex-1">
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-[#7d8590]" />
                      <motion.h3
                        layoutId={`title-${getTitle(active)}-${id}`}
                        className="text-[15px] font-mono font-bold text-[#58a6ff]"
                      >
                        {getTitle(active)}
                      </motion.h3>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full border border-[#30363d] text-[#7d8590] shrink-0">
                      public
                    </span>
                  </div>

                  <motion.p
                    layoutId={`description-${getTitle(active)}-${id}`}
                    className="text-[13px] font-mono text-[#8b949e] leading-relaxed"
                  >
                    {active.description}
                  </motion.p>

                  <div className="flex gap-2 pt-1">
                    {active.liveLink !== "N/A" && (
                      <a
                        href={active.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 text-[12px] font-mono font-semibold rounded-md bg-[#238636] border border-[#2ea043]/60 text-white hover:bg-[#2ea043] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={active.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 text-[12px] font-mono font-semibold rounded-md bg-[#21262d] border border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      View Source
                    </a>
                  </div>

                  <div className="pt-3 border-t border-[#21262d] space-y-2.5">
                    <p className="text-[10px] font-mono text-[#484f58] uppercase tracking-widest">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {active.techStack.map((tech) => (
                        <span
                          key={tech.name}
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#21262d] border border-[#30363d] text-[12px] font-mono text-[#8b949e]"
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
