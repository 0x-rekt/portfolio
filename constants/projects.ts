export const projects = [
  {
    title: "Perchly",
    description:
      "An AI pull-request review agent that runs security, code quality, test coverage, and documentation specialists in parallel. High-risk reviews pause for human approval, while every action is recorded for observability.",
    detail:
      "Temporal workflows, GitHub App webhooks, PostgreSQL spans, a human-in-the-loop queue, and reviewable fix PRs.",
    liveLink: "",
    githubLink: "https://github.com/0x-rekt/Perchly",
    techStack: [
      { name: "Python", icon: "/python.svg" },
      { name: "FastAPI", icon: "/fastapi.svg" },
      { name: "PostgreSQL", icon: "/postgres.svg" },
      { name: "Docker", icon: "/docker.svg" },
    ],
  },
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
    title: "Perchly",
    description:
      "An AI pull-request review agent that runs security, code quality, test coverage, and documentation specialists in parallel. High-risk reviews pause for human approval, while every action is recorded for observability.",
    liveLink: "",
    githubLink: "https://github.com/0x-rekt/Perchly",
    techStack: [
      {
        name: "Python",
        icon: "/python.svg",
      },
      {
        name: "FastAPI",
        icon: "/fastapi.svg",
      },
      {
        name: "Docker",
        icon: "/docker.svg",
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
