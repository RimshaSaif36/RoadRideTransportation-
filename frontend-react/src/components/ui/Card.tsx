import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-sm border border-white/10 bg-charcoal transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
