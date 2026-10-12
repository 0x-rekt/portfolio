"use client";

import { motion } from "motion/react";

const entries = [
  ["2025 - present", "DevOps Lead", "Google Developer Groups AOT", "Leading infrastructure initiatives and mentoring developers around deployment and operations."],
  ["2025 - present", "Core member", "Tech Team SC-ECE", "Building and supporting technical projects for the department community."],
  ["2025", "Blockchain development intern", "BlockSeBlock", "Worked across blockchain and web development in a product engineering environment."],
  ["2024 - 2025", "Web development co-lead", "Google Developer Groups AOT", "Led web initiatives and helped developers ship reliable project work."],
];

export default function ExperienceTimelineRedesign() {
  return <section id="experience" className="dossier-section dossier-experience"><div className="dossier-rail">
    <div className="section-heading"><p className="mono-label">Experience</p><h2>Work, learning, and momentum.</h2><p>A short record of the teams, communities, and environments where the work got sharper.</p></div>
    <div className="experience-list">{entries.map(([date, role, org, description], index) => <motion.article key={`${role}-${org}`} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45, delay: index * 0.05, ease: [0.32, 0.72, 0, 1] }}><time>{date}</time><div><h3>{role}</h3><p className="experience-org">{org}</p><p>{description}</p></div></motion.article>)}</div>
    <div className="section-index"><span>04</span><span>Experience</span></div>
  </div></section>;
}
