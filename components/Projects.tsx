"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/constants/projects";

interface TechStack {
  name: string;
  icon: string;
}

interface Project {
  title?: string;
  name?: string;
  description: string;
  image?: string; // <-- Make image optional
  liveLink: string;
  githubLink: string;
  techStack: TechStack[];
}

// const projects: Project[] = [
//   {
//     title: "JobPair AI",
//     description:
//       "Jobpair_ai is an AI-powered career tool offering smart resume reviews, tailored roadmaps, cover letter generation, and voice-based mock interviews—built with a secure, scalable tech stack.",
//     image: "/placeholder.svg?height=400&width=600&text=JobPair+AI",
//     liveLink: "https://jobpair-ai.vercel.app/",
//     githubLink: "https://github.com/Sowdarjya/jobpair_ai",
//     techStack: [
//       {
//         name: "TypeScript",
//         icon: "/placeholder.svg?height=32&width=32&text=TS",
//       },
//       {
//         name: "Next.js",
//         icon: "/placeholder.svg?height=32&width=32&text=Next",
//       },
//       { name: "Tailwind", icon: "/placeholder.svg?height=32&width=32&text=TW" },
//       {
//         name: "Prisma",
//         icon: "/placeholder.svg?height=32&width=32&text=Prisma",
//       },
//       {
//         name: "PostgreSQL",
//         icon: "/placeholder.svg?height=32&width=32&text=PG",
//       },
//       { name: "Clerk", icon: "/placeholder.svg?height=32&width=32&text=Clerk" },
//     ],
//   },
//   {
//     name: "LOLcial",
//     description:
//       "A modern social media mobile app built with React Native (Expo), Clerk, and Convex, featuring real-time posts, likes, comments, follows, and notifications—designed for a seamless, secure, and interactive user experience.",
//     image: "/placeholder.svg?height=400&width=600&text=LOLcial",
//     liveLink: "N/A",
//     githubLink: "https://github.com/Sowdarjya/LOLcial",
//     techStack: [
//       {
//         name: "TypeScript",
//         icon: "/placeholder.svg?height=32&width=32&text=TS",
//       },
//       {
//         name: "React Native",
//         icon: "/placeholder.svg?height=32&width=32&text=RN",
//       },
//       { name: "Clerk", icon: "/placeholder.svg?height=32&width=32&text=Clerk" },
//       {
//         name: "Convex",
//         icon: "/placeholder.svg?height=32&width=32&text=Convex",
//       },
//     ],
//   },
//   {
//     name: "EthPay",
//     description:
//       "EthPay is a secure, user-friendly dApp for sending ETH with messages and keywords. Built with React, TailwindCSS, ethers.js, and Solidity, it enables fast, private, and transparent Ethereum transfers—optimized for global, real-time use.",
//     image: "/placeholder.svg?height=400&width=600&text=EthPay",
//     liveLink: "https://eth-pay-pearl.vercel.app/",
//     githubLink: "https://github.com/Sowdarjya/eth-pay",
//     techStack: [
//       {
//         name: "TypeScript",
//         icon: "/placeholder.svg?height=32&width=32&text=TS",
//       },
//       { name: "React", icon: "/placeholder.svg?height=32&width=32&text=React" },
//       { name: "Tailwind", icon: "/placeholder.svg?height=32&width=32&text=TW" },
//       {
//         name: "Ethers.js",
//         icon: "/placeholder.svg?height=32&width=32&text=Ethers",
//       },
//       {
//         name: "Solidity",
//         icon: "/placeholder.svg?height=32&width=32&text=Sol",
//       },
//     ],
//   },
//   {
//     name: "CoinScope",
//     description:
//       "CoinScope is a crypto tracking web app that monitors 99+ cryptocurrencies with real-time data, price trends, and currency conversion. Built with React, Firebase, and TailwindCSS, it features user authentication, personalized watchlists, and the latest global crypto news—all in a sleek, responsive interface.",
//     image: "/placeholder.svg?height=400&width=600&text=CoinScope",
//     liveLink: "https://coin-scope.vercel.app/",
//     githubLink: "https://github.com/Sowdarjya/CoinScope",
//     techStack: [
//       {
//         name: "JavaScript",
//         icon: "/placeholder.svg?height=32&width=32&text=JS",
//       },
//       { name: "React", icon: "/placeholder.svg?height=32&width=32&text=React" },
//       { name: "Tailwind", icon: "/placeholder.svg?height=32&width=32&text=TW" },
//       {
//         name: "Firebase",
//         icon: "/placeholder.svg?height=32&width=32&text=Firebase",
//       },
//     ],
//   },
// ];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null); // <-- Remove the cast here
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const getProjectTitle = (project: Project) =>
    project.title || project.name || "Untitled Project";

  return (
    <div className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects I've built using modern technologies and
            best practices.
          </p>
        </div>

        <>
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {active ? (
              <div className="fixed inset-0 grid place-items-center z-[100]">
                <motion.button
                  key={`button-${getProjectTitle(active)}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>

                <motion.div
                  layoutId={`card-${getProjectTitle(active)}-${id}`}
                  ref={ref}
                  className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                >
                  <motion.div
                    layoutId={`image-${getProjectTitle(active)}-${id}`}
                  >
                    <img
                      width={500}
                      height={300}
                      src={active.image || "/placeholder.svg"}
                      alt={getProjectTitle(active)}
                      className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                    />
                  </motion.div>

                  <div>
                    <div className="flex justify-between items-start p-4">
                      <div className="flex-1">
                        <motion.h3
                          layoutId={`title-${getProjectTitle(active)}-${id}`}
                          className="font-bold text-xl text-neutral-700 dark:text-neutral-200 mb-2"
                        >
                          {getProjectTitle(active)}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className="text-neutral-600 dark:text-neutral-400 text-sm"
                        >
                          {active.description}
                        </motion.p>
                      </div>
                    </div>

                    <div className="px-4 pb-4">
                      <div className="flex gap-2 mb-4">
                        {active.liveLink !== "N/A" && (
                          <a
                            href={active.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm rounded-full font-bold bg-green-500 hover:bg-green-600 text-white transition-colors"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                        <a
                          href={active.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm rounded-full font-bold bg-gray-800 hover:bg-gray-900 text-white transition-colors"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      </div>

                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-neutral-700 dark:text-neutral-200 mb-3">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {active.techStack.map((tech, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                            >
                              <img
                                src={tech.icon || "/placeholder.svg"}
                                alt={tech.name}
                                className="w-4 h-4"
                              />
                              <span className="text-neutral-700 dark:text-neutral-300">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>

          <ul className="max-w-4xl mx-auto w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                layoutId={`card-${getProjectTitle(project)}-${id}`}
                key={`card-${getProjectTitle(project)}-${id}`}
                onClick={() => setActive(project)}
                className="p-6 flex flex-col justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-gray-200 dark:border-gray-700 transition-colors"
              >
                <div className="flex flex-col gap-4">
                  <motion.div
                    layoutId={`image-${getProjectTitle(project)}-${id}`}
                  >
                    <img
                      width={300}
                      height={200}
                      src={project.image || "/placeholder.svg"}
                      alt={getProjectTitle(project)}
                      className="h-48 w-full rounded-lg object-cover"
                    />
                  </motion.div>

                  <div>
                    <motion.h3
                      layoutId={`title-${getProjectTitle(project)}-${id}`}
                      className="font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-2"
                    >
                      {getProjectTitle(project)}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${project.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.techStack.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs text-neutral-600 dark:text-neutral-400"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs text-neutral-600 dark:text-neutral-400">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <motion.button
                  layoutId={`button-${getProjectTitle(project)}-${id}`}
                  className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 transition-colors"
                >
                  View Details
                </motion.button>
              </motion.div>
            ))}
          </ul>
        </>
      </div>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
