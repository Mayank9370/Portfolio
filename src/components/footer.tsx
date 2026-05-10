"use client";

import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personal } from "@/data/personal";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <span className="text-lg font-bold text-gradient">MK</span>
            <span className="text-zinc-600 font-light">.</span>
            <p className="text-zinc-600 text-sm mt-1.5 max-w-xs">
              {personal.tagline}
            </p>
          </div>

          {/* Social + Back to top */}
          <div className="flex items-center gap-2">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/50 rounded-xl transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/50 rounded-xl transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800/50 rounded-xl transition-all duration-200 ml-1"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-800/30 text-center">
          <p className="text-zinc-700 text-xs">
            © {new Date().getFullYear()} {personal.name}. Built with
            Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
