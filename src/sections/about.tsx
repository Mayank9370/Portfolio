"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/personal";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Code, Layout, Zap } from "lucide-react";

export function About() {
  return (
    <SectionWrapper id="about" theme="light" divider="none">
      <SectionHeader
        label="About Me"
        title="Engineering Philosophy"
        description="I build end-to-end software systems — from responsive interfaces and robust APIs to scalable architectures and AI-powered applications."
        theme="light"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Narrative */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
            <p>
              I am an AI Full-Stack Developer & Software Engineer with hands-on experience across the entire software stack — from building responsive React interfaces and designing robust Node.js APIs to working with scalable backend architectures, cloud infrastructure, and AI-powered applications.
            </p>
            <p>
              My internship work involved solving complex engineering challenges — custom deterministic pagination, centralized state management, document parsing services, and modular REST API design. Beyond that, I have hands-on practice with system design concepts, Docker, AWS, and modern GenAI tools like LangChain and RAG.
            </p>
            <p>
              I believe in writing code that is clean, modular, and maintainable. I am constantly exploring new backend patterns, cloud-native tools, and AI engineering workflows to build better software systems.
            </p>
          </div>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-500">
                <Code size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-500">
                <Layout size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-emerald-500">
                <Zap size={18} />
              </div>
            </div>
            <p className="text-sm text-slate-500 font-medium">Full-stack & AI engineering</p>
          </div>
        </AnimatedSection>

        {/* Right Column: Bento Metrics */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1 card-light p-6 rounded-3xl flex flex-col justify-between aspect-square">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">4+</h4>
                <p className="text-slate-500 text-sm font-medium">Months Internship</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 card-light p-6 rounded-3xl flex flex-col justify-between aspect-square">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Layout size={24} />
              </div>
              <div>
                <h4 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">7+</h4>
                <p className="text-slate-500 text-sm font-medium">Projects Built</p>
              </div>
            </div>

            <div className="col-span-2 card-light p-6 sm:p-8 rounded-3xl flex items-center gap-6">
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  Constantly Learning
                </h4>
                <p className="text-slate-500 text-sm">
                  Actively studying system design, cloud-native architectures, and AI engineering — including LangChain, RAG, and Docker — to build production-grade software systems.
                </p>
              </div>
              <div className="w-16 h-16 shrink-0 rounded-full bg-slate-50 border-4 border-white shadow-sm flex items-center justify-center overflow-hidden">
                <span className="text-2xl text-slate-400 font-bold">M</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
