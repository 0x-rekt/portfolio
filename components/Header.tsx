"use client";

import React, { useState, useEffect } from 'react';
import { FileDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

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
          <Button
            variant="ghost"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 font-mono text-sm tracking-widest text-white hover:text-white hover:bg-transparent transition-colors cursor-pointer px-0 rounded-none"
          >
            <span className="font-extrabold tracking-wider text-base uppercase text-white">
              SK<span className="bg-[#CCFF00] text-black px-1 ml-0.5 font-black">.DEV</span>
            </span>
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 text-white">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-bold tracking-widest transition-all duration-200 cursor-pointer border-2 rounded-none h-auto ${
                  activeSection === item.id 
                    ? 'bg-[#CCFF00] text-black border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black' 
                    : 'text-white border-transparent hover:border-white/20 hover:bg-transparent hover:text-white'
                }`}
              >
                {item.name.toUpperCase()}
              </Button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center">
            <Button
              variant="outline"
              asChild
              className="flex items-center gap-2 px-4 py-2 border-2 border-white bg-white text-black text-xs font-bold tracking-wider transition-all duration-200 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] hover:shadow-[3px_3px_0px_0px_rgba(204,255,0,1)] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer rounded-none h-auto"
            >
              <a href="/resume.pdf" download="Sowdarjya_Kolay_Resume.pdf">
                <FileDown className="w-3.5 h-3.5" />
                DOWNLOAD RESUME
              </a>
            </Button>
          </div>

          {/* Mobile Menu — Shadcn Sheet */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/5 transition-colors cursor-pointer rounded-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              hideClose
              className="bg-[#0A0A0C] border-b-2 border-white py-6 px-8 flex flex-col gap-6 shadow-none mt-[56px] rounded-none"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`justify-start text-left py-2 font-mono text-sm tracking-widest font-bold rounded-none h-auto hover:bg-transparent ${
                      activeSection === item.id
                        ? 'text-[#CCFF00] border-l-4 border-[#CCFF00] pl-3 hover:text-[#CCFF00]'
                        : 'text-zinc-400 pl-3 hover:text-white'
                    }`}
                  >
                    &gt; {item.name.toUpperCase()}
                  </Button>
                ))}
              </div>

              <Separator className="bg-white/10" />

              <Button
                variant="outline"
                asChild
                className="w-full flex items-center justify-center gap-2.5 py-3 border-2 border-white bg-white text-black text-xs font-bold tracking-widest hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] hover:shadow-[3px_3px_0px_#CCFF00] transition-colors cursor-pointer rounded-none h-auto"
              >
                <a
                  href="/resume.pdf"
                  download="Sowdarjya_Kolay_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileDown className="w-4 h-4" />
                  DOWNLOAD RESUME
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
