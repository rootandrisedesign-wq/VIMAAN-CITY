"use client"

import { GlassCard } from "./glass-card"
import { VimaanButton } from "./vimaan-button"
import { Sparkles, Star } from "lucide-react"

export function AvatarCard() {
  return (
    <GlassCard variant="strong" className="relative overflow-hidden">
      {/* Decorative shimmer */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none" />
      
      <div className="relative flex flex-col items-center py-6">
        {/* Avatar container */}
        <div className="relative mb-4">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-lavender via-peach to-mint p-[2px] gold-glow">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2a2040] to-[#1a1530] flex items-center justify-center overflow-hidden">
              {/* Avatar silhouette */}
              <svg viewBox="0 0 100 100" className="w-24 h-24 opacity-80">
                <defs>
                  <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="50%" stopColor="#F5E6A3" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="35" r="18" fill="url(#avatarGrad)" />
                <ellipse cx="50" cy="85" rx="28" ry="22" fill="url(#avatarGrad)" />
              </svg>
            </div>
          </div>
          
          {/* Level badge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#F5E6A3] rounded-full hairline-gold">
            <span className="text-xs font-semibold text-[#1a1a1a]">Lv. 42</span>
          </div>
        </div>
        
        {/* Name and title */}
        <h2 className="font-serif text-xl font-semibold text-gold-gradient mb-1">
          Celestia Nova
        </h2>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
          <Crown className="w-3 h-3 text-gold" />
          <span className="font-sans">Fashion Sovereign</span>
        </div>
        
        {/* Rating stars */}
        <div className="flex items-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star} 
              className={`w-4 h-4 ${star <= 4 ? 'text-gold fill-gold' : 'text-gold/30'}`} 
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">(4.8)</span>
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-3 w-full px-2">
          <VimaanButton variant="primary" size="sm" className="flex-1 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Style Up
          </VimaanButton>
          <VimaanButton variant="secondary" size="sm" className="flex-1">
            View Profile
          </VimaanButton>
        </div>
      </div>
    </GlassCard>
  )
}

function Crown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
    </svg>
  )
}
