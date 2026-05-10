"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ExternalLink, Star, ArrowUpRight, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { Project } from "@/types";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="card-premium-dark rounded-3xl overflow-hidden mb-12 lg:mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image Spotlight */}
        <div className="relative h-64 sm:h-80 lg:h-full min-h-[320px] overflow-hidden group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full backdrop-blur-md">
            <Star size={12} fill="currentColor" />
            Flagship Project
          </div>
        </div>

        {/* Right: Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
            {project.title}
          </h3>
          <p className="text-slate-400 text-base leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mb-8">
            <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2 mb-3">
              <Code2 size={16} className="text-cyan-400" />
              Engineering Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights?.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <ArrowUpRight size={16} className="text-cyan-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs font-medium rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-auto">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-cyan-500 text-slate-950 text-sm font-semibold rounded-xl hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                View Live Demo
                <ExternalLink size={15} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold rounded-xl hover:bg-white/10 hover:text-white transition-colors"
            >
              <GithubIcon size={18} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-dark rounded-3xl overflow-hidden group flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#0F172A]/90 backdrop-blur-md border border-white/10 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-colors text-white"
            >
              <ExternalLink size={16} />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#0F172A]/90 backdrop-blur-md border border-white/10 rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-colors text-white"
          >
            <GithubIcon size={16} />
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-white text-xl tracking-tight">
            {project.title}
          </h3>
          <span className="text-xs font-medium px-2 py-1 bg-white/5 text-slate-400 rounded-md">
            {project.category}
          </span>
        </div>

        <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-white/5 border border-white/5 text-slate-400 text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2.5 py-1 text-slate-500 text-xs font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featuredProject = projects.find(p => p.featured);
  const normalProjects = filteredProjects.filter(p => !p.featured);

  return (
    <SectionWrapper id="projects" theme="dark" className="bg-[#020617]">
      <SectionHeader
        label="Projects"
        title="Featured Work"
        description="A selection of my best engineering work, focusing on architecture, scalability, and UX."
        theme="dark"
      />

      <AnimatedSection delay={0.1} className="mb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  : "bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Flagship Project Spotlight */}
      {featuredProject && activeCategory === "All" && (
        <AnimatedSection delay={0.2}>
          <FeaturedProject project={featuredProject} />
        </AnimatedSection>
      )}

      {/* Standard Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {normalProjects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.1}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
