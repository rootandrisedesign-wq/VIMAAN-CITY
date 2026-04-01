"use client"

import type { ButtonHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface VimaanButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md"
}

export function VimaanButton({
  className,
  variant = "primary",
  size = "md",
  ...props
}: VimaanButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 disabled:opacity-50 disabled:pointer-events-none"

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
  }[size]

  const variants = {
    primary:
      "bg-gradient-to-r from-gold to-[#F5E6A3] text-[#1a1a1a] gold-glow-subtle hover:gold-glow",
    secondary:
      "glass hairline-gold text-foreground hover:bg-white/10 hover:gold-glow-subtle",
    ghost: "bg-white/5 text-foreground hover:bg-white/10 hairline-gold",
  }[variant]

  return <button className={cn(base, sizes, variants, className)} {...props} />
}

