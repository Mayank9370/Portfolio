import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "globe",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js", "Python", "Java", "REST APIs"],
  },
  {
    title: "Database",
    icon: "database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose", "Prisma"],
  },
  {
    title: "Tools & DevOps",
    icon: "wrench",
    skills: ["Git/GitHub", "Postman", "Supabase", "AWS", "Docker"],
  },
  {
    title: "Core CS",
    icon: "cpu",
    skills: ["DSA", "System Design", "OOP", "DBMS", "OS"],
  },
];
