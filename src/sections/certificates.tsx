"use client";

import Image from "next/image";
import { ExternalLink, Award } from "lucide-react";
import { certificates } from "@/data/certificates";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function Certificates() {
  return (
    <SectionWrapper id="certificates" theme="light" className="bg-white" divider="top">
      <SectionHeader
        label="Certificates"
        title="Continuous Learning"
        description="Professional certifications validating my expertise in full stack development, architecture, and core computer science."
        theme="light"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
        {certificates.map((cert, i) => (
          <AnimatedSection key={i} delay={i * 0.1} className="h-full">
            <div className="card-light rounded-3xl overflow-hidden h-full flex flex-col group border-slate-100 shadow-sm hover:shadow-md">
              <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-50 p-6 flex items-center justify-center border-b border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="p-6 lg:p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-blue-600 mb-3 text-xs font-semibold tracking-wider uppercase">
                  <Award size={14} />
                  <span>{cert.issuer}</span>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-slate-900 leading-tight mb-2 tracking-tight">
                  {cert.title}
                </h3>
                
                <p className="text-slate-500 text-sm font-medium mb-6">
                  Issued: {cert.date}
                </p>

                {cert.verifyUrl && cert.verifyUrl !== "#" && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    View Credential
                    <ExternalLink size={16} className="text-slate-400" />
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
