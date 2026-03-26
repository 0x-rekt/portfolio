"use client";

import { motion, type Variants } from "framer-motion";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { GitCommitHorizontal, Code2, Cpu } from "lucide-react";

const tags = [
  { label: "B.Tech · ECE", icon: Cpu },
  { label: "Full Stack", icon: Code2 },
  { label: "AI Engineer", icon: GitCommitHorizontal },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#0d1117] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#7d8590] uppercase tracking-widest">
              README.md
            </span>
            <div className="flex-1 h-[1px] bg-[#30363d]" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <HeroHighlight containerClassName="!h-[8rem] !bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden w-full">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#e6edf3]">
                About{" "}
                <span className="text-[#2f81f7] relative">
                  Me
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-[#2f81f7]/0 via-[#2f81f7] to-[#2f81f7]/0" />
                </span>
              </h2>
            </HeroHighlight>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3"
          >
            {tags.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#30363d] bg-[#21262d]/70 text-[#c9d1d9] text-xs font-mono shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-[#7d8590]" />
                {label}
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={container}
            className="space-y-5 text-sm md:text-base text-[#8b949e] leading-relaxed"
          >
            <motion.p variants={fadeUp}>
              I&apos;m a{" "}
              <span className="text-[#e6edf3] font-medium">
                Full Stack Developer
              </span>{" "}
              &amp;{" "}
              <span className="text-[#e6edf3] font-medium">AI Engineer</span>{" "}
              pursuing my{" "}
              <span className="text-[#e6edf3] font-medium">
                B.Tech in Electronics and Communication Engineering
              </span>
              . I bridge the gap between hardware logic and software
              scalability.
            </motion.p>

            <motion.p variants={fadeUp}>
              My core expertise lies in architecting web and mobile ecosystems.
              On the backend I build robust data pipelines and intelligent
              systems — whatever the problem demands.
            </motion.p>

            <motion.p variants={fadeUp}>
              I love competing in{" "}
              <span className="text-[#e6edf3] font-medium">Hackathons</span> to
              build innovative solutions under pressure and pushing what&apos;s
              possible in short sprints.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 pt-6"
          >
            <div className="flex-1 h-[1px] bg-[#30363d]" />
            <div className="flex items-center gap-2 text-xs font-mono text-[#7d8590]">
              <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
              actively building
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
