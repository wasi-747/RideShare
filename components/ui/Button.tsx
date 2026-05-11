"use client";
import React from "react";
import cn from "@/lib/utils/cn";
import { Icon as LucideIcon } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leading?: React.ComponentType<any> | null;
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  leading: Leading,
  className,
  children,
  size = "md",
  ...rest
}) => {
  const sizeCls = {
    sm: "px-4 py-2 text-[14px]",
    md: "px-6 py-3.5 text-[15px]",
    lg: "px-8 py-4 text-[16px]",
  }[size];

  const base =
    "rounded-2xl font-semibold inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97]";

  const variants: Record<ButtonVariant, string> = {
    primary: `bg-brand text-white shadow-button hover:bg-brand-hover hover:shadow-button-hover ${sizeCls}`,
    secondary: `bg-white text-ink border border-[#E8E8E8] hover:border-brand hover:text-brand hover:bg-brand-light ${sizeCls}`,
    ghost: `bg-transparent text-ink-secondary hover:bg-surface-elevated hover:text-ink p-2 rounded-xl`,
    icon: `bg-transparent p-2 rounded-lg text-ink-secondary hover:text-ink hover:bg-surface-elevated`,
  };

  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {Leading ? <Leading /> : null}
      {children}
    </button>
  );
};

export default Button;
