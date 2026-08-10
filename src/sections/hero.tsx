"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personal } from "@/data/personal";
import { SectionWrapper } from "@/components/ui/section-wrapper";
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = ["React", "Next.js", "Node.js", "System Design", "Docker", "AI / GenAI"];

  return (
    <SectionWrapper
      id="home"
      theme="dark"
      divider="none"
      className="min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={item} className="mb-8">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 card-dark text-slate-300 text-xs font-medium rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            Available for Full-Stack, Backend & Software Engineering Roles
          </span>
        </motion.div>

        {/* Name & Role */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
        >
          Hi, I&apos;m {personal.name} — <br />
          <span className="text-slate-400 font-medium text-4xl md:text-6xl mt-2 block">
            AI Full-Stack Developer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Building scalable full-stack applications, reliable backend systems, and AI-powered solutions.
        </motion.p>

        {/* Tech Stack Pills */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-3 mb-12">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full card-dark text-cyan-400 text-sm font-medium tracking-wide"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-slate-950 text-sm font-semibold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
          <a
            href={personal.resumeUrl}
            download="Mayank_Kumar_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 card-dark text-white text-sm font-semibold rounded-xl hover:text-cyan-400 transition-all duration-300"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={item} className="flex justify-center gap-4">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 card-dark text-slate-400 hover:text-white rounded-xl transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 card-dark text-slate-400 hover:text-white rounded-xl transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-3 card-dark text-slate-400 hover:text-white rounded-xl transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-slate-800 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-slate-600"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
