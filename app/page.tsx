import ExperienceTimeline from "@/components/ExperienceTimeline";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechnicalStack from "@/components/TechnicalStack";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <TechnicalStack />
      <Projects />
      <ExperienceTimeline />
    </div>
  );
};

export default Home;
