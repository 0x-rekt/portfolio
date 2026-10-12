"use client";

import { FiArrowUpRight } from "react-icons/fi";

const navItems = [
  ["About", "hero"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
] as const;

export default function HeaderRedesign() {
  return (
    <header className="floating-header">
      <a className="brand-mark" href="#hero" aria-label="Back to top">SK<span>.DEV</span></a>
      <nav aria-label="Primary navigation">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <a className="header-resume" href="/resume.pdf" download="Sowdarjya_Kolay_Resume.pdf">Resume <FiArrowUpRight aria-hidden="true" /></a>
    </header>
  );
}
