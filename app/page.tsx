import AboutSection from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
};

export default Home;
