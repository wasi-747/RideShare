import React from "react";
import cn from "@/lib/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "standard" | "highlight" | "tinted";
}

export const Card: React.FC<CardProps> = ({
  variant = "standard",
  className,
  children,
  ...rest
}) => {
  const variants: Record<string, string> = {
    standard:
      "bg-white rounded-3xl p-4 shadow-card border border-[#F0EFEB] hover:shadow-card-hover hover:-translate-y-[2px] animate-slide-up",
    highlight: "bg-brand text-white rounded-3xl p-5 shadow-button",
    tinted: "bg-brand-light rounded-2xl p-4 border border-[#F2C4CB]",
  };

  return (
    <div className={cn(variants[variant], className)} {...rest}>
      {children}
    </div>
  );
};

export default Card;
