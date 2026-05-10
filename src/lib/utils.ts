import { type ClassValue, clsx } from "clsx";

// Lightweight className merger (no tailwind-merge dep needed for this project)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}