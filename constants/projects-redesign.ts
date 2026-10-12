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
    name: "Sparky",
    description:
      "A Redis-like in-memory data store written from scratch in Rust. It speaks RESP2 over TCP, supports core collection types, and persists writes through an append-only file.",
    githubLink: "https://github.com/0x-rekt/sparky",
    techStack: [{ name: "Rust", icon: "/rust.svg" }],
  },
  {
    name: "Wisp",
    description:
      "A terminal-based AI coding agent for inspecting, editing, testing, and reasoning about software projects from an interactive TUI.",
    githubLink: "https://github.com/0x-rekt/Wisp",
    techStack: [
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Node.js", icon: "/nodejs.svg" },
    ],
  },
  {
    name: "D2P",
    description:
      "An AI-powered code review platform for GitHub pull requests. It analyzes diffs for logic flaws, security risks, and performance issues, then enables one-click fixes with automatic PR creation.",
    liveLink: "https://d2p-beta.vercel.app/",
    githubLink: "https://github.com/0x-rekt/D2P",
    techStack: [
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "PostgreSQL", icon: "/postgres.svg" },
      { name: "Prisma", icon: "/prisma.svg" },
    ],
  },
];
