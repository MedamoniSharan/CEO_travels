import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: false;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-inverse hover:brightness-95 active:brightness-90 disabled:opacity-50",
  secondary:
    "border border-border-default bg-surface-card text-primary hover:bg-surface-muted active:bg-surface-muted",
  ghost:
    "bg-transparent text-inverse hover:bg-white/10 active:bg-white/20",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-6 text-base",
  lg: "min-h-14 px-8 text-lg",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition",
        "duration-[var(--motion-fast)] ease-[var(--motion-ease)]",
        "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent-strong",
        "disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
}
