"use client";

import { motion } from "motion/react";
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import GitHubContributions from "@/components/GitHubContributions";

const links = [
  { label: "GitHub", href: "https://github.com/0x-rekt", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sowdarjya-kolay-616176314", icon: FiLinkedin },
  { label: "Email", href: "mailto:sowdarjyakolay@gmail.com", icon: FiMail },
];

export default function HeroRedesign() {
  return (
    <section id="hero" className="dossier-section dossier-hero">
      <div className="dossier-rail">
        <div className="dossier-kicker">
          <span>AI systems / full-stack engineering</span>
          <span>Based in Kolkata, India</span>
        </div>
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="hero-copy"
          >
            <p className="eyebrow">Sowdarjya Kolay</p>
            <h1>Hi, I&apos;m Sowdarjya Kolay.</h1>
            <p className="hero-summary">
              I&apos;m an AI engineer and full-stack developer building dependable tools across intelligent systems, developer experience, and infrastructure.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="/resume.pdf" download="Sowdarjya_Kolay_Resume.pdf">
                <FiDownload aria-hidden="true" /> View resume <FiArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-link" href="#projects">See selected work <FiArrowUpRight aria-hidden="true" /></a>
            </div>
            <GitHubContributions />
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.32, 0.72, 0, 1] }}
            className="identity-note"
          >
            <div className="note-rule" />
            <p className="mono-label">Currently focused on</p>
            <p className="note-title">AI review systems, durable workflows, and developer tooling.</p>
            <div className="availability"><span aria-hidden="true" /> Open to thoughtful engineering work</div>
            <div className="social-row">
              {links.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" aria-label={label}>
                  <Icon aria-hidden="true" /> {label}
                </a>
              ))}
            </div>
          </motion.aside>
        </div>
        <div className="section-index"><span>01</span><span>About</span></div>
      </div>
    </section>
  );
}
