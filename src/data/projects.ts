import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Resume Builder",
    description:
      "A production-grade resume builder with a custom pagination engine, multi-template system, drag-and-drop section reordering, and high-fidelity PDF export. Built during my internship at ScaleSage Solutions.",
    image: "/images/resumeBuilder.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "PDF.js"],
    liveUrl: "https://resumebuilder-frontend-zyvs.onrender.com",
    githubUrl: "https://github.com/Mayank9370",
    date: "2026",
    category: "Full Stack",
    featured: true,
    highlights: [
      "Custom pagination engine for multi-page PDFs",
      "Multiple professional templates",
      "Drag & drop section reordering",
      "Resume Parser (PDF/DOCX → JSON)",
    ],
  },
  {
    title: "Heal Zone",
    description:
      "Developed a full-stack Doctor Appointment Booking System using React, Node.js, Express, and MongoDB, enabling patients to book and manage doctor consultations online.",
    image: "/images/HealZone.avif",
    technologies: ["React", "Express", "Tailwind", "MongoDB", "Razorpay"],
    liveUrl: "https://heal-zone.onrender.com",
    githubUrl: "https://github.com/Mayank9370/Heal-Zone",
    date: "2025",
    category: "MERN",
    featured: false,
  },
  {
    title: "AI Powered LMS",
    description:
      "Full-stack AI-powered Learning Management System integrating Gemini AI for smart search, Google OAuth for authentication, and Razorpay for payments with dynamic dashboards.",
    image: "/images/LMS.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Gemini AI"],
    liveUrl: "https://ai-based-lms-application-frontend.onrender.com",
    githubUrl: "https://github.com/Mayank9370/AI-Based-LMS-Application",
    date: "2025",
    category: "AI",
    featured: false,
  },
  {
    title: "Nutrition Tracking App",
    description:
      "Full-stack nutrition tracking platform with real-time meal logging, nutritional intake monitoring, and interactive dashboards using Socket.io for live updates.",
    image: "/images/NutritionTrackingAPP.jpeg",
    technologies: ["React", "Node.js", "PostgreSQL", "Supabase", "Socket.io"],
    liveUrl: "https://nutrition-tracking-app-frontend-eahv.onrender.com",
    githubUrl: "https://github.com/Mayank9370/Nutrition-Tracking-App",
    date: "2025",
    category: "Full Stack",
    featured: false,
  },
  {
    title: "Hirred",
    description:
      "Full-stack job portal web app with secure login via Clerk, employer and candidate dashboards, and a clean UI built with Shadcn components.",
    image: "/images/Hired.jpeg",
    technologies: ["React", "Express", "Supabase", "Clerk", "Shadcn UI"],
    liveUrl: "https://hirred-6jbt.onrender.com",
    githubUrl: "https://github.com/Mayank9370/Hirred",
    date: "2024",
    category: "Full Stack",
    featured: false,
  },
  {
    title: "PokeDex",
    description:
      "Dynamic and interactive Pokédex web application leveraging the PokéAPI to display detailed Pokémon information with search and filter functionality.",
    image: "/images/Pockex.avif",
    technologies: ["React", "Axios", "REST API", "CSS"],
    liveUrl: "https://poke-dex-lovat-six.vercel.app/",
    githubUrl: "https://github.com/Mayank9370/PokeDex",
    date: "2024",
    category: "Frontend",
    featured: false,
  },
  {
    title: "Coffee Website",
    description:
      "Visually appealing and fully responsive coffee shop website designed using pure HTML and CSS, showcasing elegant layouts and menu designs.",
    image: "/images/coffee.jpeg",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://vercel.com/mayanks-projects-45458f5b/coffee-website",
    githubUrl: "https://github.com/Mayank9370/Coffee-Website",
    date: "2023",
    category: "Frontend",
    featured: false,
  },
];
