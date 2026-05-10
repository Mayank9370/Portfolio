import { AnimatedSection } from "./animated-section";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  theme?: "light" | "dark";
}

/**
 * Reusable section header — consistent pattern across all sections.
 * Replaces the duplicated header code in the old portfolio.
 */
export function SectionHeader({ label, title, description, theme = "dark" }: SectionHeaderProps) {
  return (
    <AnimatedSection className="mb-12 md:mb-16">
      {label && (
        <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${theme === "dark" ? "text-cyan-400" : "text-blue-600"}`}>
          {label}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base md:text-lg leading-relaxed ${theme === "dark" ? "text-slate-400" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
