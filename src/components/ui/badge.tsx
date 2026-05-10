import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "outline" | "light";
  className?: string;
}

/**
 * Reusable badge / tag component for tech stacks, skills, etc.
 */
export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200",
        variant === "default" &&
          "bg-slate-800/80 text-slate-300 border border-slate-700/50 hover:border-slate-600 hover:text-slate-200",
        variant === "accent" &&
          "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
        variant === "outline" &&
          "bg-transparent text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-300",
        variant === "light" &&
          "bg-slate-100 text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900",
        className
      )}
    >
      {children}
    </span>
  );
}
