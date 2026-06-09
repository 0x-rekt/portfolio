import ExperienceTimeline from "@/components/ExperienceTimeline";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechnicalStack from "@/components/TechnicalStack";
import React from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sowdarjya Kolay",
  url: "https://sowdarjya.dev",
  jobTitle: "AI Engineer & Full-Stack Software Developer",
  description:
    "AI Engineer and Full-Stack SDE specialising in Next.js, FastAPI, and intelligent systems. Based in Kolkata, India.",
  image: "https://sowdarjya.dev/og-image.png",
  sameAs: [
    "https://github.com/0x-rekt",
    "https://www.linkedin.com/in/sowdarjya-kolay-616176314",
    "https://x.com/_Kolayyyyyyy__",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Full-Stack Web Development",
    "Next.js",
    "FastAPI",
    "LangChain",
    "DevOps",
    "TypeScript",
    "React",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Academy of Technology",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressCountry: "IN",
    },
  },
};

const Home = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content" aria-label="Sowdarjya Kolay Portfolio">
        <Hero />
        <TechnicalStack />
        <Projects />
        <ExperienceTimeline />
      </main>
    </>
  );
};

export default Home;
