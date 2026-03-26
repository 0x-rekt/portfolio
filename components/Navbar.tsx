"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignRight, GitBranch } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#hero", section: "hero" },
    { name: "About", href: "/#about", section: "about" },
    { name: "Skills", href: "/#skills", section: "skills" },
    { name: "Projects", href: "/#projects", section: "projects" },
    { name: "Experience", href: "/#experience", section: "experience" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navLinks.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <nav
      className="sticky top-0 w-full z-50 transition-all duration-300"
      style={{
        borderBottom: scrolled ? "1px solid #30363d" : "1px solid transparent",
        background: scrolled ? "rgba(13,17,23,0.92)" : "rgba(13,17,23,0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/#hero"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80 group"
          >
            <div className="h-6 w-6 rounded-full bg-[#e6edf3] flex items-center justify-center shrink-0">
              <span className="text-[#0d1117] font-black text-[9px] font-mono tracking-tighter select-none">
                SK
              </span>
            </div>
            <div className="flex items-center gap-1 font-mono text-[13px]">
              <span className="text-[#8b949e] group-hover:text-[#e6edf3] transition-colors">
                sowdarjya
              </span>
              <span className="text-[#30363d]">/</span>
              <span className="text-[#e6edf3] font-semibold">portfolio</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-[#30363d] bg-[#161b22]">
              <GitBranch className="w-2.5 h-2.5 text-[#3fb950]" />
              <span className="text-[#3fb950] text-[9px] font-mono">main</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-1.5 text-[13px] font-mono rounded-md transition-all duration-150"
                  style={{
                    color: isActive ? "#e6edf3" : "#7d8590",
                    background: isActive ? "#21262d" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color = "#c9d1d9";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLElement).style.color = "#7d8590";
                  }}
                >
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-[#2f81f7]"
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-[#21262d] border-[#30363d] text-[#7d8590] hover:bg-[#30363d] hover:text-[#e6edf3] rounded-md h-8 w-8"
                >
                  <AlignRight className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#0d1117] border-l border-[#30363d] p-0 w-64"
              >
                <div className="flex items-center gap-2 px-5 py-4 border-b border-[#21262d]">
                  <div className="h-5 w-5 rounded-full bg-[#e6edf3] flex items-center justify-center shrink-0">
                    <span className="text-[#0d1117] font-black text-[8px] font-mono">
                      SK
                    </span>
                  </div>
                  <span className="text-[#8b949e] font-mono text-xs">
                    sowdarjya/portfolio
                  </span>
                </div>

                <div className="px-3 py-3">
                  <p className="text-[10px] font-mono text-[#484f58] uppercase tracking-widest px-2 mb-2">
                    Navigation
                  </p>
                  <div className="flex flex-col gap-0.5">
                    {navLinks.map((link) => {
                      const isActive = activeSection === link.section;
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] font-mono transition-colors"
                          style={{
                            color: isActive ? "#e6edf3" : "#8b949e",
                            background: isActive ? "#21262d" : "transparent",
                          }}
                        >
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2f81f7] shrink-0" />
                          )}
                          {!isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#30363d] shrink-0" />
                          )}
                          {link.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="absolute bottom-5 left-0 right-0 px-5">
                  <div className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#161b22] border border-[#30363d]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse shrink-0" />
                    <span className="text-[11px] font-mono text-[#7d8590]">
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
