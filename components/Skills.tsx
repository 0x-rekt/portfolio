"use client";

import React, { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { skills } from "../constants/skills";

const CATEGORIES: Record<string, string[]> = {
  Languages: ["JavaScript", "TypeScript", "Python"],
  Frontend: ["React.js", "Next.js", "Tailwind", "React Native"],
  Backend: ["Node.js", "Express.js", "FastAPI", "Firebase"],
  "AI / ML": ["Scikit-learn", "Langchain", "Pinecone"],
  "Database & ORM": ["MongoDB", "PostgreSQL", "Prisma"],
  "DevOps & Tools": ["Git", "Github", "Docker", "AWS", "GCP"],
};

const LANG_COLORS: Record<string, string> = {
  Languages: "#f7df1e",
  Frontend: "#3178c6",
  Backend: "#3fb950",
  "AI / ML": "#e6a817",
  "Database & ORM": "#58a6ff",
  "DevOps & Tools": "#8b949e",
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const SkillPill = ({ skill }: { skill: { name: string; icon: string } }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="group flex items-center gap-2.5 px-3 py-2.5 rounded-md border border-[#30363d] bg-[#161b22] hover:border-[#58a6ff]/40 hover:bg-[#21262d] transition-all duration-200 cursor-default"
  >
    <div className="relative w-5 h-5 shrink-0">
      <Image
        src={skill.icon || "/placeholder.svg"}
        alt={skill.name}
        fill
        className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
        sizes="20px"
      />
    </div>
    <span className="text-[13px] font-mono text-[#7d8590] group-hover:text-[#e6edf3] transition-colors duration-200 whitespace-nowrap">
      {skill.name}
    </span>
  </motion.div>
);

const Skills = () => {
  const groupedSkills = useMemo(() => {
    const grouped: Record<string, typeof skills> = {};
    Object.entries(CATEGORIES).forEach(([category, skillNames]) => {
      grouped[category] = skills.filter((s) => skillNames.includes(s.name));
    });
    return grouped;
  }, []);

  return (
    <section id="skills" className="w-full bg-[#0d1117] py-16 px-4">
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
              package.json
            </span>
            <div className="flex-1 h-px bg-[#21262d]" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#e6edf3]">
              Tech{" "}
              <span className="relative text-[#2f81f7]">
                Stack
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-linear-to-r from-[#2f81f7]/0 via-[#2f81f7] to-[#2f81f7]/0"
                />
              </span>
            </h2>
            <p className="mt-3 text-sm font-mono text-[#7d8590] leading-relaxed max-w-lg">
              Technologies I use to build scalable web apps and intelligent
              systems.
            </p>
          </motion.div>

          <motion.div variants={container} className="space-y-6">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => {
              if (!categorySkills.length) return null;
              const color = LANG_COLORS[category] ?? "#8b949e";
              return (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  className="rounded-lg border border-[#30363d] bg-[#161b22]/60 overflow-hidden"
                >
                  <div className="flex items-center gap-2.5 px-4 py-2.5 border-b border-[#21262d] bg-[#161b22]">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[12px] font-mono text-[#8b949e]">
                      {category}
                    </span>
                    <span className="ml-auto text-[11px] font-mono text-[#484f58]">
                      {categorySkills.length} packages
                    </span>
                  </div>

                  <div className="p-4 flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <SkillPill key={skill.name} skill={skill} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 pt-2"
          >
            <div className="flex-1 h-px bg-[#21262d]" />
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#484f58]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse" />
              {skills.length} dependencies installed
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
