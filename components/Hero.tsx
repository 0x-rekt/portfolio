"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Binary, Cpu, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Background particle mesh animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const maxParticles = Math.min(50, Math.floor((width * height) / 25000));

    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw dark high-contrast lines between nodes
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce bounds
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p1.alpha * 0.35})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < 150) {
            const lineAlpha = (1 - dist / 150) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction — Sowdarjya Kolay, AI Engineer & Full-Stack Developer"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 bg-transparent"
    >
      {/* Decorative Canvas Micro-Network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      />

      {/* Grid Overlay Line Effects */}
      <div className="absolute inset-0 engineering-grid pointer-events-none opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Hero Copy - Column Left */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Badge className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#CCFF00] border-2 border-white text-[10px] text-black font-mono font-bold tracking-widest uppercase shadow-[2px_2px_0px_#FFF] rounded-none h-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              Available for Hire
            </Badge>
          </motion.div>

          {/* Name Header */}
          <div className="space-y-4 border-b-2 border-white/20 pb-6 w-full text-left">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-400">ENGINEERING INTERFACE</span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-white font-display font-extrabold text-5xl md:text-7xl lg:text-[80px] tracking-[-0.04em] leading-[0.9] uppercase"
            >
              Sowdarjya Kolay<span className="text-[#CCFF00] drop-shadow-[2px_2px_0px_#FFF]">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="inline-flex items-center gap-2 py-1 px-2.5 bg-zinc-900 border-2 border-white/20 text-white rounded-none h-auto font-mono text-[11px] uppercase tracking-wider font-bold">
                <Cpu className="w-3.5 h-3.5 text-[#CCFF00]" />
                AI Engineer & Full-Stack SDE
              </Badge>
            </motion.div>
          </div>

          {/* Introduction Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="text-zinc-300 font-sans text-base md:text-lg max-w-xl leading-relaxed font-normal"
          >
            Building scalable web applications and integrating advanced AI capabilities. Specializing in high-performance architectures and intelligent systems. Combining a deep electrical foundation with software engineering excellence.
          </motion.p>

          {/* Academic Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Badge className="text-xs text-black font-mono inline-flex items-start sm:items-center gap-2 bg-[#CCFF00] px-3 py-1.5 border-2 border-white font-bold shadow-[2px_2px_0px_#FFF] rounded-none h-auto max-w-full !whitespace-normal !overflow-visible w-fit">
              <Binary className="w-3.5 h-3.5 text-black shrink-0 mt-0.5 sm:mt-0" />
              <span className="break-words leading-snug">B.Tech in Electronics and Communication Engineering</span>
            </Badge>
          </motion.div>

          {/* Location Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Badge variant="outline" className="text-xs text-zinc-400 font-mono flex items-center gap-1.5 border-white/20 rounded-none h-auto px-2.5 py-1">
              <MapPin className="w-3.5 h-3.5 text-[#CCFF00]" />
              Kolkata, India
            </Badge>
          </motion.div>

          {/* Action Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="flex flex-wrap items-center gap-4 pt-4 w-full"
          >
            <Button
              onClick={() => scrollTo('projects')}
              className="group flex items-center gap-2 px-6 py-3 bg-[#CCFF00] hover:bg-white border-2 border-[#CCFF00] hover:border-white text-black font-bold rounded-none text-xs tracking-wider transition-all duration-200 hover:shadow-[4px_4px_0_0_#FFF] cursor-pointer h-auto"
            >
              VIEW PROJECTS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: 'easeOut' }}
            className="flex items-center gap-3"
          >
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">CONNECT</span>
            <div className="w-px h-4 bg-white/20" />
            {[
              { href: 'https://github.com/0x-rekt', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/sowdarjya-kolay-616176314', icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://x.com/_Kolayyyyyyy__', icon: FaXTwitter, label: 'X / Twitter' },
              { href: 'mailto:sowdarjyakolay@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                asChild
                className="p-2 w-auto h-auto border-2 border-white/20 bg-transparent text-zinc-400 hover:text-black hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all duration-200 rounded-none"
              >
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              </Button>
            ))}
          </motion.div>
        </div>

        {/* Live System Diagnostics / Futuristic Module - Column Right (Neobrutalist Panel) */}
        <div className="lg:col-span-5 w-full h-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-[420px] aspect-square rounded-none p-6 relative overflow-hidden flex flex-col justify-between glass-panel"
          >
            {/* Visual scanline effect */}
            <div className="absolute inset-0 scanline pointer-events-none opacity-20" />

            <div className="flex items-center justify-between border-b-2 border-white/20 pb-3">
              <span className="font-mono text-[10px] text-zinc-400 font-bold tracking-wider">SYSTEM_NODE: INCEPTION</span>
              <span className="font-mono text-[10px] text-black bg-[#CCFF00] px-1 border border-white/25 flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
                ACTIVE
              </span>
            </div>

            {/* Futuristic Terminal Shell Display */}
            <div className="font-mono text-xs text-white space-y-3 py-6 my-auto text-left flex-1 flex flex-col justify-center">
              <div className="text-zinc-400 font-bold">&gt; initial_query = &quot;Who is Sowdarjya Kolay?&quot;</div>
              <div>
                <span className="text-zinc-100 font-bold">SK.config</span>: <span className="text-zinc-400">&quot;{'{'}&quot;</span>
              </div>
              <div className="pl-4 font-bold">
                field: <span className="text-black bg-[#CCFF00] px-1">&quot;Artificial Intelligence / Web&quot;</span>,
              </div>
              <div className="pl-4 font-bold font-mono text-zinc-200">
                frameworks: <span className="text-white border-b border-white">[&quot;NextJS&quot;, &quot;React&quot;, &quot;FastAPI&quot;]</span>,
              </div>
              <div className="pl-4 font-bold text-zinc-200">
                hardware_affinity: <span className="text-zinc-300 italic">&quot;ECE Systems&quot;</span>
              </div>
              <div className="font-bold"><span className="text-zinc-400">{'}'}</span></div>
              <div className="text-zinc-400 font-bold">&gt; core_vision()</div>
              <div className="bg-zinc-900 text-[#CCFF00] p-3 border border-white/15 font-bold">
                &gt;&gt; &quot;Merging neuromorphics with edge system scalability.&quot;<span className="terminal-cursor text-[#CCFF00]">|</span>
              </div>
            </div>

            {/* Matrix diagnostic stats row */}
            <div className="border-t-2 border-white/10 pt-4 flex justify-between items-center text-left">
              <div>
                <div className="font-sans text-[10px] text-zinc-400 font-bold">SYS LOAD</div>
                <div className="font-mono text-xs text-white font-bold">0.04% ACCEL</div>
              </div>
              <div>
                <div className="font-sans text-[10px] text-zinc-400 font-bold">VECTOR CLUSTER</div>
                <div className="font-mono text-xs text-white font-bold">COSINE.OK</div>
              </div>
              <div>
                <div className="font-sans text-[10px] text-zinc-400 font-bold">IO SPEED</div>
                <div className="font-mono text-xs text-white font-bold">&lt; 14ms RESP</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
