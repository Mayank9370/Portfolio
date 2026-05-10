import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

// Shared style map
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "gradient-accent text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:brightness-110",
  secondary:
    "bg-zinc-800 text-zinc-200 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600",
  ghost:
    "bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer select-none";

// Button element
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

// Anchor element styled as button
interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
}
