"use client";
import React from "react";
import cn from "@/lib/utils/cn";
import { LucideIcon } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ComponentType<any>;
}

export const Input: React.FC<InputProps> = ({
  label,
  icon: Icon,
  className,
  ...rest
}) => {
  return (
    <div className={cn("w-full")}>
      {label && (
        <label className="text-[11px] font-semibold uppercase tracking-widest text-ink-muted mb-1 block">
          {label}
        </label>
      )}
      <div className="flex items-center gap-3 bg-surface-elevated border border-[#E8E8E8] rounded-2xl px-4 py-3.5">
        {Icon ? (
          <span className="text-ink text-[18px]">
            <Icon />
          </span>
        ) : null}
        <input
          className={cn(
            "w-full bg-transparent outline-none text-ink placeholder: text-ink-muted",
            className,
          )}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
