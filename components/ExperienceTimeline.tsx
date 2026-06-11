"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, type Variants } from 'motion/react';
import { GitCommitHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Entry {
  date: string;
  hash: string;
  title: string;
  description: string;
  tag: string;
}

const entries: Entry[] = [
  {
    date: "Sep 2024 – Sep 2025",
    hash: "a1f3c2d",
    title: "Web-Dev Co-Lead",
    description:
      "Leading web development initiatives and mentoring fellow developers at Google Developer Groups AOT.",
    tag: "Leadership",
  },
  {
    date: "Mar 2025",
    hash: "c4d2f81",
    title: "3rd Position — Decisia",
    description:
      "Secured third place in the competitive Decisia event at Jadavpur University.",
    tag: "Achievement",
  },
  {
    date: "Apr 2025",
    hash: "d7a9e35",
    title: "Binary Hackathon Finalist",
    description:
      "Reached the finals of the Binary Hackathon at KGEC, competing against top engineering teams.",
    tag: "Finalist",
  },
  {
    date: "Apr 2025",
    hash: "e2b6c90",
    title: "2nd Position — Gnosis Week",
    description:
      "Achieved second place in Gnosis Week competition at SCCSE-AOT, demonstrating technical excellence.",
    tag: "Runner-up",
  },
  {
    date: "May 2025",
    hash: "f1c8d47",
    title: "Top 30 — Hack4Bengal 4.0",
    description:
      "Finished in the top 30 participants in Hack4Bengal 4.0 virtual hackathon among hundreds of participants.",
    tag: "Top Performer",
  },
  {
    date: "Jun 2025",
    hash: "g3d5e82",
    title: "Hack4Bengal 4.0 Finalist",
    description:
      "Participated in the final round of Hack4Bengal 4.0, competing with the best developers in the region.",
    tag: "Finalist",
  },
  {
    date: "Jul 2025 – Aug 2025",
    hash: "h8f2a19",
    title: "Blockchain Development Intern",
    description:
      "Worked as an intern at BlockSeBlock, gaining hands-on experience in blockchain and web development.",
    tag: "Internship",
  },
  {
    date: "Sep 2025 – Present",
    hash: "i5b7c63",
    title: "DevOps Lead — Google Developer Groups AOT",
    description:
      "Leading DevOps initiatives and mentoring fellow developers in infrastructure and deployment.",
    tag: "Leadership",
  },
  {
    date: "Oct 2025 – Present",
    hash: "j2e4d71",
    title: "Core Member — Tech Team SC-ECE",
    description:
      "Active core member of the tech team at SC-ECE, involved in technical projects and departmental activities.",
    tag: "Technical",
  },
  {
    date: "Mar 2026",
    hash: "k9a1b54",
    title: "Diversion Hackathon Finalist",
    description:
      "Selected as a finalist in the Diversion Hackathon, competing against top engineering teams across the region.",
    tag: "Finalist",
  },
  {
    date: "Mar 2026",
    hash: "l4c6e28",
    title: "Binary V2 Hackathon Finalist",
    description:
      "Reached the finals of Binary V2 Hackathon, showcasing advanced problem-solving and full-stack development skills.",
    tag: "Finalist",
  },
  {
    date: "Apr 2026",
    hash: "m7d3f19",
    title: "Hacktropica Finalist",
    description:
      "Selected as a finalist in Hacktropica, competing against top engineering teams across the region.",
    tag: "Finalist",
  },
];

// ── Z-depth stagger variants ──────────────────────────────────────
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const entryVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    z: -30,
    rotateX: 4,
    filter: 'blur(2px)',
  },
  show: {
    opacity: 1,
    y: 0,
    z: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const headerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

// ── Single commit entry ───────────────────────────────────────────
const CommitEntry = ({ entry }: { entry: Entry }) => (
  <motion.div
    variants={entryVariant}
    className="relative flex gap-4 group"
    style={{ transformStyle: 'preserve-3d' }}
  >
    {/* Dot on vertical line */}
    <div className="relative flex flex-col items-center shrink-0" style={{ width: 28 }}>
      <motion.div
        whileHover={{ scale: 1.35, backgroundColor: '#CCFF00' }}
        transition={{ duration: 0.2 }}
        className="relative z-10 w-4 h-4 mt-0.5 rounded-full border-2 border-white/40 flex items-center justify-center bg-[#0d1117] shrink-0"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
      </motion.div>
    </div>

    {/* Card */}
    <div className="flex-1 pb-8 min-w-0">
      <div className="rounded-none border border-white/10 bg-[#121214] hover:border-[#CCFF00]/40 transition-all duration-250 overflow-hidden hover:shadow-[0_4px_24px_rgba(204,255,0,0.06)]">
        {/* Commit header row */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10 bg-[#0a0a0c]">
          <GitCommitHorizontal className="w-3.5 h-3.5 text-white/30 shrink-0" />
          <code className="text-[11px] font-mono text-white/30">{entry.hash}</code>
          <div className="flex-1" />
          <span className="text-[11px] font-mono text-white/30">{entry.date}</span>
        </div>

        {/* Content */}
        <div className="flex items-start gap-3 p-4">
          <div className="flex-1 min-w-0 space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-[14px] font-mono font-semibold text-white leading-tight">
                {entry.title}
              </h4>
              <Badge
                variant="outline"
                className="text-[10px] font-mono px-1.5 py-0.5 border border-[#CCFF00]/40 bg-[#CCFF00]/10 text-[#CCFF00] rounded-none font-bold tracking-wide h-auto"
              >
                {entry.tag}
              </Badge>
            </div>
            <p className="text-[12px] font-mono text-white/50 leading-relaxed">
              {entry.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ── Animated git log with scroll-linked line fill ──────────────────
const GitLog = ({ entries }: { entries: Entry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative" style={{ transformStyle: 'preserve-3d' }}>
      {/* Static background line */}
      <div className="absolute left-[13px] top-0 bottom-0 w-px bg-white/10" />
      {/* Scroll-animated fill line */}
      <motion.div
        className="absolute left-[13px] top-0 w-px origin-top gpu-layer"
        style={{
          height: lineHeight,
          background: "linear-gradient(to bottom, #CCFF00, rgba(104,245,184,0.6))",
          boxShadow: "0 0 8px rgba(204,255,0,0.4)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="relative space-y-0"
        style={{ perspective: 800, transformStyle: 'preserve-3d' }}
      >
        {entries.map((entry) => (
          <CommitEntry key={entry.hash} entry={entry} />
        ))}
      </motion.div>
    </div>
  );
};

// ── Main section ──────────────────────────────────────────────────
export default function ExperienceTimeline() {
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
      id="experience"
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

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-10"
        >
          {/* Top label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest">
              git log --oneline
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </motion.div>

          {/* Section heading */}
          <motion.div variants={fadeUp} className="flex flex-col space-y-3">
            <Badge className="font-mono text-xs uppercase tracking-widest bg-black text-[#CCFF00] border border-white/20 px-3 py-1 font-bold w-fit rounded-none h-auto">
              History
            </Badge>
            <h2 className="text-white font-display font-extrabold text-3xl md:text-5xl tracking-tight uppercase leading-[0.9]">
              Engineering Timeline
            </h2>
            <div className="w-16 h-1.5 bg-[#CCFF00]" />
          </motion.div>

          {/* Git log */}
          <motion.div variants={fadeUp}>
            <Separator className="bg-white/10 mb-8" />
            <GitLog entries={entries} />
          </motion.div>

          {/* Footer count */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 pt-2">
            <div className="flex-1 h-px bg-white/10" />
            <div className="flex items-center gap-2 text-[11px] font-mono text-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
              {entries.length} commits on main
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
