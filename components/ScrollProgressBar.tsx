"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // useSpring adds a tiny lag that makes it feel physically natural
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-progress-bar"
      aria-hidden="true"
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(to right, #CCFF00, #68f5b8, #CCFF00)",
        zIndex: 9999,
        willChange: "transform",
        boxShadow: "0 0 8px rgba(204,255,0,0.7)",
      }}
    />
  );
}
