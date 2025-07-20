"use client";

import { useScroll, useTransform, motion } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full " ref={containerRef}>
      <div className="max-w-6xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of achievements, experiences, and milestones that have
            shaped my development journey.
          </p>
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg border-2 border-gray-200 dark:border-gray-700"
              >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-inner" />
              </motion.div>
              <h3 className="hidden md:block text-lg md:pl-20 md:text-2xl font-bold text-gray-700 dark:text-gray-300 leading-tight">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-6 text-left font-bold text-gray-700 dark:text-gray-300">
                {item.title}
              </h3>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                {item.content}
              </motion.div>
            </div>
          </motion.div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
