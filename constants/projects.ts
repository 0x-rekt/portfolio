export const projects = [
  {
    name: "sparky",
    description:
      "Sparky is a Redis-like in-memory data store written from scratch in Rust. It speaks RESP2 over TCP, works with standard redis-cli, supports strings, lists, hashes, and sets, and persists successful write commands through an append-only file (AOF).",
    image: "/sparky.svg",
    liveLink: "",
    githubLink: "https://github.com/0x-rekt/sparky",
    techStack: [
      {
        name: "Rust",
        icon: "/rust.svg",
      },
    ],
  },
  {
    name: "Wisp",
    description:
      "Wisp is a terminal-based AI coding agent for inspecting, editing, testing, and reasoning about software projects from an interactive TUI.",
    image: "/wisp.svg",
    liveLink: "",
    githubLink: "https://github.com/0x-rekt/Wisp",
    techStack: [
      {
        name: "TypeScript",
        icon: "/ts.svg",
      },
      {
        name: "Node.js",
        icon: "/nodejs.svg",
      },
    ],
  },
  {
    name: "D2P",
    description:
      "D2P is an AI-powered code review platform that acts as an automated senior engineer for GitHub pull requests. It analyzes diffs for logic flaws, security risks, and performance issues using Gemini 2.5 Flash, categorizes findings by severity, and enables one-click fixes with automatic PR creation.",
    image: "/d2p.svg",
    liveLink: "https://d2p-beta.vercel.app/",
    githubLink: "https://github.com/0x-rekt/D2P",
    techStack: [
      {
        name: "TypeScript",
        icon: "/ts.svg",
      },
      {
        name: "Next.js",
        icon: "/nextjs.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/postgres.svg",
      },
      {
        name: "Prisma",
        icon: "/prisma.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/tailwind.svg",
      },
    ],
  },

  {
    title: "JobPair AI",
    description:
      "Jobpair_ai is an AI-powered career tool offering smart resume reviews, tailored roadmaps, cover letter generation, and voice-based mock interviews—built with a secure, scalable tech stack.",
    image: "/jobpair_ai.svg",
    liveLink: "https://jobpair-ai-beta.vercel.app/",
    githubLink: "https://github.com/0x-rekt/jobpair-ai",
    techStack: [
      {
        name: "TypeScript",
        icon: "/ts.svg",
      },
      {
        name: "Next.js",
        icon: "/nextjs.svg",
      },
      {
        name: "Langchain",
        icon: "/langchain.svg",
      },
      {
        name: "PostgreSQL",
        icon: "/postgres.svg",
      },
      {
        name: "Prisma",
        icon: "/prisma.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/tailwind.svg",
      },
    ],
  },
];
