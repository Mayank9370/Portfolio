"use client";

import { useState } from "react";
import { Mail, Check, Copy, Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personal } from "@/data/personal";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <SectionWrapper id="contact" theme="dark">
      <SectionHeader
        label="What's Next?"
        title="Get In Touch"
        description="Interested in building scalable full-stack systems or AI-powered applications together? I'm currently open to new opportunities."
        theme="dark"
      />

      <AnimatedSection delay={0.1}>
        <div className="max-w-2xl mx-auto">
          <div className="card-premium-dark rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden group">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 mb-6 border border-cyan-500/20">
              <Mail size={32} strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
              Let&apos;s build something great.
            </h3>
            
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>

            {/* Email Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={`mailto:${personal.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-cyan-500 text-slate-950 font-semibold rounded-xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                Say Hello
                <ArrowRight size={16} />
              </a>
              <button
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 border border-white/10 text-slate-300 font-medium rounded-xl hover:bg-white/10 hover:text-white transition-colors"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                {copied ? "Email Copied!" : "Copy Email"}
              </button>
            </div>

            {/* Social Links & Resume */}
            <div className="flex items-center justify-center gap-4 pt-8 border-t border-white/10">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={personal.resumeUrl}
                download="Mayank_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all text-sm font-medium ml-2"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
