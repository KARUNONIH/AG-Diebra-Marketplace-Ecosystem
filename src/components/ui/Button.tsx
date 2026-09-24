import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark";
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  loading = false,
  icon,
  className,
  disabled,
  ...props
}) => {
  const variantClass = {
    primary: "btn-partner--primary",
    secondary: "btn-partner--secondary",
    dark: "btn-partner--dark",
  }[variant];

  return (
    <button
      className={cn("btn-partner group", variantClass, className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin text-current" />
          <span>{children}</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          {icon && (
            <span className="btn-partner__icon" aria-hidden="true">
              <span className="btn-partner__icon-svg flex items-center justify-center">
                {icon}
              </span>
              <span className="btn-partner__icon-svg btn-partner__icon-svg--copy flex items-center justify-center">
                {icon}
              </span>
            </span>
          )}
        </>
      )}
    </button>
  );
};
