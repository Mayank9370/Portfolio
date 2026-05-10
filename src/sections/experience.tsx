"use client";

import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function Experience() {
  return (
    <SectionWrapper id="experience" theme="light" divider="top">
      <SectionHeader
        label="Experience"
        title="Experience"
        description="Professional experience building production-grade web applications"
        theme="light"
      />

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <AnimatedSection key={index} delay={index * 0.15}>
            <div className="relative flex gap-6 sm:gap-10">
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center pt-2">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" />
                <div className="w-px flex-1 bg-slate-200 mt-2" />
              </div>

              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 shadow-sm mb-8">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 tracking-tight">
                      <Briefcase size={18} className="text-slate-500" />
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500 text-sm shrink-0">
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievement points */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-slate-700 text-sm leading-relaxed"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-emerald-500 shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
