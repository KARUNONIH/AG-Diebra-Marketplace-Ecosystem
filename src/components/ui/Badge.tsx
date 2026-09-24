import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "green" | "emerald" | "slate" | "danger";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  size = "sm",
  className,
  ...props
}) => {
  const variantStyles = {
    gold: "bg-[#FEBA27]/10 text-[#FEBA27] border-[#FEBA27]/30",
    green: "bg-[#126A3A]/20 text-[#5F7F65] border-[#126A3A]/40",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    slate: "bg-slate-800/60 text-slate-300 border-slate-700/60",
    danger: "bg-red-500/10 text-red-400 border-red-500/30",
  }[variant];

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider",
    md: "text-xs px-3 py-1 tracking-wider",
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono uppercase font-semibold rounded-full border",
        variantStyles,
        sizeStyles,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
