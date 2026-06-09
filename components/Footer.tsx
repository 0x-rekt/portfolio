"use client";

import { Github, Linkedin, Cpu, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/0x-rekt",
      icon: Github,
      title: "GitHub Node",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sowdarjya-kolay-616176314",
      icon: Linkedin,
      title: "LinkedIn Node",
    },
    {
      name: "Twitter",
      href: "https://x.com/_Kolayyyyyyy__",
      icon: FaXTwitter,
      title: "X / Twitter",
    },
    {
      name: "Email",
      href: "mailto:sowdarjyakolay@gmail.com",
      icon: Mail,
      title: "Email Gateway",
    },
  ];

  return (
    <footer id="app-footer" className="bg-[#0a0a0c] border-t-4 border-[#CCFF00] py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#CCFF00]" />
          <span className="font-mono text-xs text-zinc-400">
            © {new Date().getFullYear()} Sowdarjya Kolay. Systems engineered for high-performance scale.
          </span>
        </div>

        {/* Social Conduits */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ name, href, icon: Icon, title }) => (
            <Button
              key={name}
              variant="ghost"
              size="icon"
              asChild
              className="p-2 w-auto h-auto border-2 border-white bg-black text-white hover:text-black hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all duration-200 cursor-pointer rounded-none"
              title={title}
            >
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer referrer"
              >
                <Icon className="w-4 h-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
