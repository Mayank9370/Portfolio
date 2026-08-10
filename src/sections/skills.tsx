"use client";

import { Globe, Server, Database, Cpu, Wrench, Brain, Network, Cloud } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  server: Server,
  database: Database,
  cpu: Cpu,
  wrench: Wrench,
  brain: Brain,
  network: Network,
  cloud: Cloud,
};

export function Skills() {
  return (
    <SectionWrapper id="skills" theme="dark" divider="top">
      <SectionHeader
        label="Skills"
        title="Technical Skills"
        description="Technologies, frameworks, and tools I work with across the full stack."
        theme="dark"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {skillCategories.map((category, index) => {
          const Icon = iconMap[category.icon] || Globe;
          return (
            <AnimatedSection key={category.title} delay={index * 0.08}>
              <div className="h-full rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 group">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/15 transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-xs text-slate-300 hover:bg-white/[0.1] hover:text-white hover:border-white/[0.15] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
