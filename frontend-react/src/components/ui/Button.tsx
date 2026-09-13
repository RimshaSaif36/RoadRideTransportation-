import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  solid:
    "bg-gold text-ink hover:bg-gold-light shadow-[0_0_0_1px_rgba(212,175,55,0.4)]",
  outline: "border border-gold/60 text-gold hover:bg-gold hover:text-ink",
  ghost: "text-white hover:text-gold",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-2 text-xs sm:px-4",
  md: "px-4 py-2.5 text-xs sm:px-6 sm:py-3 sm:text-sm",
  lg: "px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-base",
};

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "onClick"> {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

function isInternalHref(href: string) {
  return href.startsWith("/");
}

export function Button({
  variant = "solid",
  size = "md",
  className,
  children,
  href,
  target,
  rel,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-sans font-semibold uppercase tracking-wide transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    if (isInternalHref(href)) {
      return (
        <Link to={href} target={target} rel={rel} className={classes} onClick={onClick}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} target={target} rel={rel} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
