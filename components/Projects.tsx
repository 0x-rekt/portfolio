"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "JobPair AI",
    description:
      "AI-powered career tool with smart resume reviews and mock interviews",
    src: "/jobpair_ai.png",
    ctaText: "View Project",
    liveLink: "https://jobpair-ai.vercel.app/",
    githubLink: "https://github.com/Sowdarjya/jobpair_ai",
    techStack: [
      { name: "TypeScript", icon: "/ts.png" },
      { name: "Next.js", icon: "/nextjs.png" },
      { name: "Tailwind", icon: "/tailwind.png" },
      { name: "Prisma", icon: "/prisma.png" },
      { name: "PostgreSQL", icon: "/postgres.png" },
      { name: "Clerk", icon: "/clerk.png" },
    ],
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            JobPair AI is a comprehensive AI-powered career tool that
            revolutionizes the job search process. It offers smart resume
            reviews, personalized career roadmaps, automated cover letter
            generation, and voice-based mock interviews to help job seekers
            succeed.
          </p>
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Key Features:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>AI-powered resume analysis and optimization</li>
              <li>Personalized career roadmaps based on goals</li>
              <li>Automated cover letter generation</li>
              <li>Voice-based mock interview practice</li>
              <li>Secure user authentication with Clerk</li>
              <li>Scalable database with PostgreSQL and Prisma</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    title: "LOLcial",
    description: "Modern social media mobile app with real-time features",
    src: "/lolcial.png",
    ctaText: "View Code",
    liveLink: "N/A",
    githubLink: "https://github.com/Sowdarjya/LOLcial",
    techStack: [
      { name: "TypeScript", icon: "/ts.png" },
      { name: "React Native", icon: "/react-native.png" },
      { name: "Clerk", icon: "/clerk.png" },
      { name: "Convex", icon: "/convex.svg" },
    ],
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            LOLcial is a modern social media mobile application built with React
            Native and Expo. It features real-time posts, likes, comments,
            follows, and notifications, designed for a seamless, secure, and
            interactive user experience.
          </p>
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Key Features:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Real-time posts and interactions</li>
              <li>Like and comment system</li>
              <li>Follow/unfollow functionality</li>
              <li>Push notifications</li>
              <li>Secure authentication with Clerk</li>
              <li>Real-time database with Convex</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    title: "EthPay",
    description: "Secure dApp for sending ETH with messages and keywords",
    src: "/ethpay.png",
    ctaText: "Try Live",
    liveLink: "https://eth-pay-pearl.vercel.app/",
    githubLink: "https://github.com/Sowdarjya/eth-pay",
    techStack: [
      { name: "TypeScript", icon: "/ts.png" },
      { name: "React", icon: "/react.png" },
      { name: "Tailwind", icon: "/tailwind.png" },
      { name: "Ethers.js", icon: "/ethers.svg" },
      { name: "Solidity", icon: "/solidity.png" },
    ],
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            EthPay is a secure, user-friendly decentralized application (dApp)
            for sending ETH with messages and keywords. Built with React,
            TailwindCSS, ethers.js, and Solidity, it enables fast, private, and
            transparent Ethereum transfers optimized for global, real-time use.
          </p>
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Key Features:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Send ETH with custom messages</li>
              <li>Keyword-based transaction tagging</li>
              <li>Secure wallet integration</li>
              <li>Real-time transaction tracking</li>
              <li>Smart contract powered</li>
              <li>Responsive web interface</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    title: "CoinScope",
    description: "Crypto tracking app with real-time data and news",
    src: "/coinscope.png",
    ctaText: "Explore",
    liveLink: "https://coin-scope.vercel.app/",
    githubLink: "https://github.com/Sowdarjya/CoinScope",
    techStack: [
      { name: "JavaScript", icon: "/js.png" },
      { name: "React", icon: "/react.png" },
      { name: "Tailwind", icon: "/tailwind.png" },
      { name: "Firebase", icon: "/firebase.png" },
    ],
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            CoinScope is a comprehensive crypto tracking web application that
            monitors 99+ cryptocurrencies with real-time data, price trends, and
            currency conversion. It features user authentication, personalized
            watchlists, and the latest global crypto news in a sleek, responsive
            interface.
          </p>
          <div>
            <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              Key Features:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Track 99+ cryptocurrencies</li>
              <li>Real-time price data and trends</li>
              <li>Currency conversion tools</li>
              <li>Personalized watchlists</li>
              <li>Latest crypto news integration</li>
              <li>User authentication with Firebase</li>
            </ul>
          </div>
        </div>
      );
    },
  },
];

export function Projects() {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects I've built using modern technologies
          </p>
        </motion.div>

        <>
          <AnimatePresence>
            {active && typeof active === "object" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0 grid place-items-center z-[100]">
                <motion.button
                  key={`button-${active.title}-${id}`}
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
                  layoutId={`card-${active.title}-${id}`}
                  ref={ref}
                  className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                >
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <Image
                      width={500}
                      height={300}
                      src={active.src || "/placeholder.svg"}
                      alt={active.title}
                      className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                    />
                  </motion.div>
                  <div>
                    <div className="flex justify-between items-start p-4">
                      <div className="flex-1">
                        <motion.h3
                          layoutId={`title-${active.title}-${id}`}
                          className="font-medium text-neutral-700 dark:text-neutral-200 text-xl mb-2"
                        >
                          {active.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className="text-neutral-600 dark:text-neutral-400 text-base"
                        >
                          {active.description}
                        </motion.p>
                      </div>
                    </div>

                    <div className="px-4 pb-4 flex gap-3">
                      {active.liveLink !== "N/A" && (
                        <motion.a
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          href={active.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 text-sm rounded-full font-bold bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </motion.a>
                      )}
                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm rounded-full font-bold bg-gray-800 hover:bg-gray-900 text-white transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </motion.a>
                    </div>

                    <div className="pt-4 relative px-4">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                      >
                        {typeof active.content === "function"
                          ? active.content()
                          : active.content}

                        {/* Tech Stack */}
                        <div className="mt-4">
                          <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {active.techStack.map((tech, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                              >
                                <Image
                                  src={tech.icon || "/placeholder.svg"}
                                  alt={tech.name}
                                  width={16}
                                  height={16}
                                  className="w-4 h-4"
                                />
                                <span className="text-neutral-700 dark:text-neutral-300">
                                  {tech.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>

          <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-6">
            {projects.map((project, index) => (
              <motion.div
                layoutId={`card-${project.title}-${id}`}
                key={project.title}
                onClick={() => setActive(project)}
                className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-4 flex-col w-full">
                  <motion.div layoutId={`image-${project.title}-${id}`}>
                    <Image
                      width={400}
                      height={240}
                      src={project.src || "/placeholder.svg"}
                      alt={project.title}
                      className="h-60 w-full rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div className="flex justify-center items-center flex-col text-center">
                    <motion.h3
                      layoutId={`title-${project.title}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-xl mb-2"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${project.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base mb-3"
                    >
                      {project.description}
                    </motion.p>

                    <div className="flex flex-wrap gap-1 justify-center">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                        >
                          {tech.name}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
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

export default Projects;
