export const projects = [
  {
    title: "Perchly",
    description:
      "An AI pull-request review agent that runs four specialist reviewers in parallel for security, code quality, test coverage, and documentation.",
    detail:
      "Temporal workflows handle retries, partial failures, idempotent webhooks, and human-in-the-loop approvals. An observability dashboard tracks review cost, phase latency, queue depth, and acceptance rate.",
    liveLink: "",
    githubLink: "https://github.com/0x-rekt/Perchly",
    techStack: [
      { name: "Python", icon: "/python.svg" },
      { name: "FastAPI", icon: "/fastapi.svg" },
      { name: "Temporal" },
      { name: "PostgreSQL", icon: "/postgres.svg" },
      { name: "Gemini" },
      { name: "React" },
    ],
  },
  {
    title: "Wisp",
    description:
      "A terminal-based AI coding agent with approval-gated tool calling for file edits, command execution, and code search.",
    image: "/wisp.svg",
    liveLink: "",
    githubLink: "https://github.com/0x-rekt/Wisp",
    techStack: [
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Bun" },
    ],
  },
  {
    title: "NeuraDrive",
    description:
      "An AI cloud storage platform with hierarchical folders, semantic search, file sharing, and conversational file analysis.",
    image: "/neuradrive.svg",
    liveLink: "https://neuradrive-teal.vercel.app/",
    githubLink: "https://github.com/0x-rekt/neuradrive",
    techStack: [
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "PostgreSQL", icon: "/postgres.svg" },
      { name: "Prisma", icon: "/prisma.svg" },
      { name: "AWS", icon: "/aws.svg" },
      { name: "Pinecone", icon: "/pinecone.svg" },
    ],
  },
  {
    title: "JobPair AI",
    description:
      "An AI career platform for resume analysis, career roadmaps, cover letters, and live voice mock interviews.",
    image: "/jobpair_ai.svg",
    liveLink: "https://jobpair-ai-beta.vercel.app",
    githubLink: "https://github.com/0x-rekt/jobpair-ai/tree/main",
    techStack: [
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "PostgreSQL", icon: "/postgres.svg" },
      { name: "Prisma", icon: "/prisma.svg" },
      { name: "FastAPI", icon: "/fastapi.svg" },
    ],
  },
];
