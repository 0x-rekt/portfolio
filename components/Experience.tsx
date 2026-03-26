"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  Trophy,
  Users,
  Code,
  Zap,
  Target,
  GitCommitHorizontal,
} from "lucide-react";

interface Entry {
  date: string;
  hash: string;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
  icon: React.ElementType;
  iconColor: string;
  dotColor: string;
}

const entries: Entry[] = [
  {
    date: "Sep 2024 – Sep 2025",
    hash: "a1f3c2d",
    title: "Web-Dev Co-Lead",
    description:
      "Leading web development initiatives and mentoring fellow developers at Google Developer Groups AOT.",
    tag: "Leadership",
    tagColor: "#2f81f7",
    icon: Users,
    iconColor: "#2f81f7",
    dotColor: "#2f81f7",
  },
  {
    date: "Mar 2025",
    hash: "c4d2f81",
    title: "3rd Position — Decisia",
    description:
      "Secured third place in the competitive Decisia event at Jadavpur University.",
    tag: "Achievement",
    tagColor: "#e3b341",
    icon: Trophy,
    iconColor: "#e3b341",
    dotColor: "#e3b341",
  },
  {
    date: "Apr 2025",
    hash: "d7a9e35",
    title: "Binary Hackathon Finalist",
    description:
      "Reached the finals of the Binary Hackathon at KGEC, competing against top engineering teams.",
    tag: "Finalist",
    tagColor: "#58a6ff",
    icon: Zap,
    iconColor: "#58a6ff",
    dotColor: "#58a6ff",
  },
  {
    date: "Apr 2025",
    hash: "e2b6c90",
    title: "2nd Position — Gnosis Week",
    description:
      "Achieved second place in Gnosis Week competition at SCCSE-AOT, demonstrating technical excellence.",
    tag: "Runner-up",
    tagColor: "#e3b341",
    icon: Trophy,
    iconColor: "#e3b341",
    dotColor: "#e3b341",
  },
  {
    date: "May 2025",
    hash: "f1c8d47",
    title: "Top 30 — Hack4Bengal 4.0",
    description:
      "Finished in the top 30 participants in Hack4Bengal 4.0 virtual hackathon among hundreds of participants.",
    tag: "Top Performer",
    tagColor: "#3fb950",
    icon: Target,
    iconColor: "#3fb950",
    dotColor: "#3fb950",
  },
  {
    date: "Jun 2025",
    hash: "g3d5e82",
    title: "Hack4Bengal 4.0 Finalist",
    description:
      "Participated in the final round of Hack4Bengal 4.0, competing with the best developers in the region.",
    tag: "Finalist",
    tagColor: "#f78166",
    icon: Zap,
    iconColor: "#f78166",
    dotColor: "#f78166",
  },
  {
    date: "Jul 2025 – Aug 2025",
    hash: "h8f2a19",
    title: "Blockchain Development Intern",
    description:
      "Worked as an intern at BlockSeBlock, gaining hands-on experience in blockchain and web development.",
    tag: "Internship",
    tagColor: "#3fb950",
    icon: Code,
    iconColor: "#3fb950",
    dotColor: "#3fb950",
  },
  {
    date: "Sep 2025 – Present",
    hash: "i5b7c63",
    title: "DevOps Lead — Google Developer Groups AOT",
    description:
      "Leading DevOps initiatives and mentoring fellow developers in infrastructure and deployment.",
    tag: "Leadership",
    tagColor: "#2f81f7",
    icon: Users,
    iconColor: "#2f81f7",
    dotColor: "#2f81f7",
  },
  {
    date: "Oct 2025 – Present",
    hash: "j2e4d71",
    title: "Core Member — Tech Team SC-ECE",
    description:
      "Active core member of the tech team at SC-ECE, involved in technical projects and departmental activities.",
    tag: "Technical",
    tagColor: "#f78166",
    icon: Code,
    iconColor: "#f78166",
    dotColor: "#f78166",
  },
  {
    date: "Mar 2026",
    hash: "k9a1b54",
    title: "Diversion Hackathon Finalist",
    description:
      "Selected as a finalist in the Diversion Hackathon, competing against top engineering teams across the region.",
    tag: "Finalist",
    tagColor: "#f78166",
    icon: Zap,
    iconColor: "#f78166",
    dotColor: "#f78166",
  },
  {
    date: "Mar 2026",
    hash: "l4c6e28",
    title: "Binary V2 Hackathon Finalist",
    description:
      "Reached the finals of Binary V2 Hackathon, showcasing advanced problem-solving and full-stack development skills.",
    tag: "Finalist",
    tagColor: "#f78166",
    icon: Zap,
    iconColor: "#f78166",
    dotColor: "#f78166",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const CommitEntry = ({ entry, index }: { entry: Entry; index: number }) => {
  const Icon = entry.icon;
  return (
    <motion.div variants={fadeUp} className="relative flex gap-4 group">
      <div
        className="relative flex flex-col items-center shrink-0"
        style={{ width: 28 }}
      >
        <motion.div
          whileHover={{ scale: 1.25 }}
          className="relative z-10 w-4 h-4 mt-0.5 rounded-full border-2 flex items-center justify-center bg-[#0d1117] shrink-0"
          style={{ borderColor: entry.dotColor }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: entry.dotColor }}
          />
        </motion.div>
      </div>

      <div className="flex-1 pb-8 min-w-0">
        <div className="rounded-lg border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff]/40 transition-all duration-200 overflow-hidden group-hover:bg-[#161b22]">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#21262d] bg-[#0d1117]/50">
            <GitCommitHorizontal className="w-3.5 h-3.5 text-[#484f58] shrink-0" />
            <code className="text-[11px] font-mono text-[#484f58]">
              {entry.hash}
            </code>
            <div className="flex-1" />
            <span className="text-[11px] font-mono text-[#484f58]">
              {entry.date}
            </span>
          </div>

          <div className="flex items-start gap-3 p-4">
            <div
              className="p-1.5 rounded-md shrink-0 mt-0.5"
              style={{ backgroundColor: `${entry.iconColor}15` }}
            >
              <Icon
                className="w-3.5 h-3.5"
                style={{ color: entry.iconColor }}
              />
            </div>

            <div className="flex-1 min-w-0 space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-[14px] font-mono font-semibold text-[#e6edf3] leading-tight">
                  {entry.title}
                </h4>
                <span
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded-full border"
                  style={{
                    color: entry.tagColor,
                    borderColor: `${entry.tagColor}40`,
                    backgroundColor: `${entry.tagColor}10`,
                  }}
                >
                  {entry.tag}
                </span>
              </div>
              <p className="text-[12px] font-mono text-[#7d8590] leading-relaxed">
                {entry.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GitLog = ({ entries }: { entries: Entry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-3.25 top-0 bottom-0 w-px bg-[#21262d]" />
      <motion.div
        className="absolute left-3.25 top-0 w-px origin-top"
        style={{
          height: lineHeight,
          background: "linear-gradient(to bottom, #2f81f7, #3fb950)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="relative space-y-0"
      >
        {entries.map((entry, i) => (
          <CommitEntry key={entry.hash} entry={entry} index={i} />
        ))}
      </motion.div>
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="w-full bg-[#0d1117] py-16 px-4">
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
            git log --oneline
          </span>
          <div className="flex-1 h-px bg-[#21262d]" />
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]">
            My{" "}
            <span className="relative text-[#2f81f7]">
              Journey
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-linear-to-r from-[#2f81f7]/0 via-[#2f81f7] to-[#2f81f7]/0"
              />
            </span>
          </h2>
          <p className="mt-3 text-sm font-mono text-[#7d8590] leading-relaxed max-w-lg">
            A commit history of achievements, experiences, and milestones that
            shaped my development journey.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <GitLog entries={entries} />
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center gap-3 pt-2">
          <div className="flex-1 h-px bg-[#21262d]" />
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#484f58]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse" />
            {entries.length} commits on main
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
