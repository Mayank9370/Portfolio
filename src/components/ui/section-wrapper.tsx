import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  theme?: "light" | "dark";
  className?: string;
  children: ReactNode;
  divider?: "top" | "bottom" | "none";
  containerClass?: string;
}

export function SectionWrapper({
  id,
  theme = "dark",
  className,
  children,
  divider = "top",
  containerClass,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 transition-colors duration-500",
        theme === "dark" ? "bg-[#0B1120]" : "bg-[#F8FAFC]",
        className
      )}
    >
      {divider === "top" && (
        <div 
          className={cn(
            "absolute top-0 left-0 right-0",
            theme === "dark" ? "section-divider" : "section-divider-light"
          )} 
        />
      )}
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", containerClass)}>
        {children}
      </div>
    </section>
  );
}
