export const projects = [
  {
    title: "Perchly",
    type: "AI review system",
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
    type: "Developer tool",
    description:
      "A terminal-based AI coding agent with approval-gated tool calling for file edits, command execution, and code search.",
    detail:
      "Destructive commands require approval by default, with diff previews, persistent sessions, per-command limits, and an audit log. 152 automated tests cover tool execution, approvals, sessions, and context limits.",
    liveLink: "",
    githubLink: "https://github.com/0x-rekt/Wisp",
    techStack: [
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Bun" },
    ],
  },
  {
    title: "NeuraDrive",
    type: "AI cloud storage",
    description:
      "An AI cloud storage platform with hierarchical folders, semantic search, file sharing, and conversational file analysis.",
    detail:
      "Gemini-backed RAG uses 500-token chunks, 100-token overlap, and 768-dimensional Pinecone embeddings. Inngest handles async processing, with S3 presigned uploads and Prisma-enforced viewer/editor access.",
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
    type: "AI career platform",
    description:
      "An AI career platform for resume analysis, career roadmaps, cover letters, and live voice mock interviews.",
    detail:
      "Gemini generates analysis, roadmaps, interview questions, and feedback, backed by React Flow roadmaps and jsPDF exports. Voice interviews use LiveKit Agents, Deepgram Nova-3 STT, Gemini 2.5 Flash, and Cartesia Sonic-3 TTS.",
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
