"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/0x-rekt",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sowdarjya-kolay-616176314",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://x.com/_Kolayyyyyyy__",
      icon: FaXTwitter,
    },
  ];

  return (
    <footer id="footer" className="bg-[#0d1117]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-5xl mx-auto px-4 py-8 space-y-8"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#7d8590] uppercase tracking-widest">
            Get In Touch
          </span>
          <div className="flex-1 h-px bg-[#30363d]" />
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#30363d] bg-[#161b22]/50 hover:bg-[#21262d] hover:border-[#8b949e] text-[#8b949e] hover:text-[#e6edf3] transition-all duration-200"
                aria-label={`Visit ${social.name}`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-mono">{social.name}</span>
              </Link>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#30363d]"
        >
          <p className="text-xs font-mono text-[#7d8590]">
            © {new Date().getFullYear()} Sowdarjya Kolay. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#8b949e] hover:text-[#e6edf3] transition-colors duration-200 group"
          >
            <span>Back to top</span>
            <ExternalLink className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
