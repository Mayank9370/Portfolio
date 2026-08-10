import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "globe",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "OAuth 2.0",
      "Webhooks",
      "MVC",
      "Microservices",
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma", "Mongoose"],
  },
  {
    title: "AI / GenAI",
    icon: "brain",
    skills: [
      "LLMs",
      "LangChain",
      "LangGraph",
      "RAG",
      "Embeddings",
      "Vector Databases",
      "Semantic Search",
    ],
  },
  {
    title: "System Design",
    icon: "network",
    skills: [
      "Scalability",
      "Load Balancing",
      "Nginx",
      "Microservices",
      "Database Replication",
      "Database Sharding",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    skills: [
      "Docker",
      "Docker Compose",
      "AWS",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: [
      "Postman",
      "Supabase",
      "Cursor",
      "GitHub Copilot",
      "Claude Code",
      "n8n",
    ],
  },
];
