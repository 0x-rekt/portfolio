"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileDown, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'hero', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section based on scroll offset
      const offsets = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id: item.id, top: Math.abs(rect.top) };
        }
        return { id: item.id, top: Infinity };
      });

      const closest = offsets.reduce((min, current) => 
        current.top < min.top ? current : min
      , { id: 'hero', top: Infinity });

      setActiveSection(closest.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0A0A0C]/95 py-4 border-b-2 border-white/20 backdrop-blur-md shadow-none text-white' 
            : 'bg-transparent py-6 border-b border-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <button 
            type="button"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 font-mono text-sm tracking-widest text-white hover:text-white transition-colors focus:outline-none cursor-pointer"
          >
            {/* <div className="relative flex items-center justify-center w-8 h-8 bg-white border-2 border-white overflow-hidden group">
              <Cpu className="w-4 h-4 text-black" />
            </div> */}
            <span className="font-extrabold tracking-wider text-base uppercase text-white">
              SK<span className="bg-[#CCFF00] text-black px-1 ml-0.5 font-black">.DEV</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 text-white">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-bold tracking-widest transition-all duration-200 cursor-pointer border-2 ${
                  activeSection === item.id 
                    ? 'bg-[#CCFF00] text-black border-[#CCFF00]' 
                    : 'text-white border-transparent hover:border-white/20'
                }`}
              >
                {item.name.toUpperCase()}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center">
            <a
              href="/resume.pdf"
              download="Sowdarjya_Kolay_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 border-2 border-white bg-white text-black text-xs font-bold tracking-wider transition-all duration-200 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] hover:shadow-[3px_3px_0px_0px_rgba(204,255,0,1)] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              DOWNLOAD RESUME
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded text-white hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden bg-[#0A0A0C] border-b-2 border-white py-6 px-8 flex flex-col gap-6 shadow-none"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 font-mono text-sm tracking-widest font-bold ${
                    activeSection === item.id ? 'text-[#CCFF00] border-l-4 border-[#CCFF00] pl-3' : 'text-zinc-400 pl-3'
                  }`}
                >
                  &gt; {item.name.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="h-[2px] bg-white/10" />

            <a
              href="/resume.pdf"
              download="Sowdarjya_Kolay_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 py-3 border-2 border-white bg-white text-black text-xs font-bold tracking-widest hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] hover:shadow-[3px_3px_0px_#CCFF00] transition-colors cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              DOWNLOAD RESUME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
