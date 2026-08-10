import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    role: "Software Development Intern",
    company: "ScaleSage Solutions LLP",
    location: "Gurgaon",
    period: "Nov 2025 – Mar 2026",
    description:
      "Full-stack development intern working on enterprise-grade web applications using the MERN stack. Contributed to architecture decisions, feature development, and backend API design.",
    points: [
      "Built a Resume Builder with a custom deterministic pagination engine & high-fidelity multi-page PDF export",
      "Implemented section drag-and-drop reordering with centralized Redux state management",
      "Developed a Resume Parser service (PDF/DOCX → structured JSON) with robust error handling",
      "Created Admin Dashboard with real-time analytics, user management & monitoring",
      "Designed and built modular REST APIs using Express with Prisma ORM for query optimization",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Prisma",
      "PDF.js",
    ],
  },
];
