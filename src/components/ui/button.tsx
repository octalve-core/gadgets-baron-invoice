import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonTone = "primary" | "neutral" | "danger" | "dark" | "soft-blue";

const tones: Record<ButtonTone, string> = {
  primary: "bg-[#FF5232] text-white hover:brightness-110 shadow-lg",
  neutral: "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 shadow-sm",
  danger: "bg-red-50 text-red-700 hover:bg-red-100",
  dark: "bg-slate-800 text-white hover:bg-slate-900 shadow-lg",
  "soft-blue": "bg-orange-50 text-[#462B3C] hover:bg-orange-100",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: ButtonTone;
  icon?: ReactNode;
}

export function Button({ tone = "neutral", icon, className = "", children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 font-bold transition disabled:cursor-not-allowed disabled:opacity-60 ${tones[tone]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
