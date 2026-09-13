import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-sm border border-white/15 bg-ink px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold";

export function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-medium uppercase tracking-wide text-white/70"
    >
      {children}
    </label>
  );
}

export function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-red-400">{message}</p>;
}

export function inputClasses(className?: string) {
  return cn(fieldClasses, className);
}
