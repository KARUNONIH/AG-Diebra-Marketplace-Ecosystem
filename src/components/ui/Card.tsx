import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "glass-elevated" | "light";
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "glass",
  hoverable = true,
  className,
  ...props
}) => {
  const variantStyles = {
    glass: "glass-panel text-white",
    "glass-elevated": "glass-panel-elevated text-white",
    light: "bg-white text-slate-900 border border-slate-200/80 shadow-sm",
  }[variant];

  return (
    <div
      className={cn(
        "group relative rounded-xl p-6 transition-all duration-300 overflow-hidden",
        variantStyles,
        hoverable && "hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {/* Top shimmer gradient line from agdiebra.com */}
      {variant !== "light" && <div className="card-shimmer" />}
      {children}
    </div>
  );
};
