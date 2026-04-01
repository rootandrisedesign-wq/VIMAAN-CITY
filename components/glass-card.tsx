import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "strong" | "subtle"
}

export function GlassCard({ children, className, variant = "default" }: GlassCardProps) {
  const variants = {
    default: "glass-card",
    strong: "glass-card-strong",
    subtle: "bg-white/10 backdrop-blur-md border-[0.5px] border-gold/20"
  }

  return (
    <div className={cn(
      "rounded-2xl p-4",
      variants[variant],
      className
    )}>
      {children}
    </div>
  )
}
