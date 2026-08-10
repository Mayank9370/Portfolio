import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Resume Builder",
    description:
      "A production-grade resume builder featuring a custom deterministic pagination engine, multi-template system, drag-and-drop section reordering with centralized Redux state management, and high-fidelity PDF export. Includes a Resume Parser service that extracts structured JSON from PDF/DOCX uploads with robust error handling. Built during my internship at ScaleSage Solutions.",
    image: "/images/resumeBuilder.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "PDF.js"],
    liveUrl: "https://resumebuilder-frontend-zyvs.onrender.com",
    githubUrl: "https://github.com/Mayank9370",
    date: "2026",
    category: "Full Stack",
    featured: true,
    highlights: [
      "Custom deterministic pagination engine for multi-page PDF rendering",
      "Multiple professional templates with drag & drop section reordering",
      "Resume Parser service (PDF/DOCX → structured JSON) with error handling",
      "Admin Dashboard with real-time analytics and user management",
    ],
  },
  {
    title: "Heal Zone",
    description:
      "Full-stack Doctor Appointment Booking System with role-based authentication, patient and doctor dashboards, appointment scheduling with availability management, and integrated Razorpay payment processing for consultation fees.",
    image: "/images/HealZone.avif",
    technologies: ["React", "Express", "Tailwind", "MongoDB", "Razorpay"],
    liveUrl: "https://heal-zone.onrender.com",
    githubUrl: "https://github.com/Mayank9370/Heal-Zone",
    date: "2025",
    category: "Full Stack",
    featured: false,
  },
  {
    title: "AI Powered LMS",
    description:
      "Full-stack AI-powered Learning Management System integrating Gemini AI for intelligent course search and recommendations, Google OAuth for secure authentication, and Razorpay for payment processing. Features dynamic instructor and student dashboards with course progress tracking.",
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
      "Full-stack nutrition tracking platform with real-time meal logging via Socket.io, nutritional intake monitoring against daily targets, and interactive dashboards. Uses PostgreSQL with Supabase for structured data storage and real-time subscriptions.",
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
      "Full-stack job portal with secure authentication via Clerk, separate employer and candidate dashboards, job posting and application management workflows, and a polished UI built with Shadcn components and Supabase as the backend.",
    image: "/images/Hired.jpeg",
    technologies: ["React", "Express", "Supabase", "Clerk", "Shadcn UI"],
    liveUrl: "https://hirred-6jbt.onrender.com",
    githubUrl: "https://github.com/Mayank9370/Hirred",
    date: "2024",
    category: "Full Stack",
    featured: false,
  },
];
