"use client"

import { useState } from "react"
import { VimaanLogo } from "./vimaan-logo"

// Jewelry-inspired icon components
function VimaanCrystalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {/* Main diamond shape */}
      <path
        d="M12 2L20 9L12 22L4 9L12 2Z"
        fill="url(#crystalGradient)"
        stroke="url(#crystalStroke)"
        strokeWidth="0.5"
      />
      {/* Inner facets */}
      <path d="M12 2L8 9L12 22" fill="rgba(255,255,255,0.2)" />
      <path d="M12 2L16 9L12 22" fill="rgba(255,255,255,0.1)" />
      <path d="M4 9H20" stroke="rgba(212,175,55,0.5)" strokeWidth="0.5" />
      <path d="M8 9L12 2L16 9" fill="rgba(255,255,255,0.3)" />
      {/* Sparkle details */}
      <circle cx="10" cy="6" r="0.5" fill="white" opacity="0.8" />
      <circle cx="14" cy="11" r="0.3" fill="white" opacity="0.6" />
      <defs>
        <linearGradient id="crystalGradient" x1="4" y1="2" x2="20" y2="22">
          <stop offset="0%" stopColor="rgba(245,230,163,0.65)" />
          <stop offset="55%" stopColor="rgba(212,175,55,0.45)" />
          <stop offset="100%" stopColor="rgba(196,160,48,0.55)" />
        </linearGradient>
        <linearGradient id="crystalStroke" x1="4" y1="2" x2="20" y2="22">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#F5E6A3" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function CityMeritIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {/* Medal ribbon */}
      <path
        d="M8 2L10 8L8 14H16L14 8L16 2H8Z"
        fill="url(#ribbonGradient)"
        stroke="rgba(212,175,55,0.5)"
        strokeWidth="0.5"
      />
      {/* Medal circle */}
      <circle
        cx="12"
        cy="16"
        r="6"
        fill="url(#medalGradient)"
        stroke="url(#medalStroke)"
        strokeWidth="0.5"
      />
      {/* Inner star */}
      <path
        d="M12 12L13.5 14.5L16 15L14 17L14.5 20L12 18.5L9.5 20L10 17L8 15L10.5 14.5L12 12Z"
        fill="url(#starGradient)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="0.3"
      />
      {/* Sparkles */}
      <circle cx="9" cy="5" r="0.4" fill="white" opacity="0.7" />
      <circle cx="15" cy="4" r="0.3" fill="white" opacity="0.5" />
      <defs>
        <linearGradient id="ribbonGradient" x1="8" y1="2" x2="16" y2="14">
          <stop offset="0%" stopColor="rgba(230,180,200,0.7)" />
          <stop offset="100%" stopColor="rgba(200,160,180,0.6)" />
        </linearGradient>
        <linearGradient id="medalGradient" x1="6" y1="10" x2="18" y2="22">
          <stop offset="0%" stopColor="#F5E6A3" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#C4A030" />
        </linearGradient>
        <linearGradient id="medalStroke" x1="6" y1="10" x2="18" y2="22">
          <stop offset="0%" stopColor="#F5E6A3" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="starGradient" x1="8" y1="12" x2="16" y2="20">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(245,230,163,0.8)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

interface CurrencyDisplayProps {
  icon: React.ReactNode
  value: string
  label: string
}

function CurrencyDisplay({ icon, value, label }: CurrencyDisplayProps) {
  return (
    <button className="flex items-center gap-2 px-3 py-2 rounded-full glass hairline-gold gold-glow-subtle hover:gold-glow transition-all active:scale-95">
      <div className="w-6 h-6 animate-icon-breathe">
        {icon}
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xs font-semibold text-gold-gradient leading-none">{value}</span>
        <span className="text-[9px] text-foreground/60 leading-none">{label}</span>
      </div>
    </button>
  )
}

export function JewelryHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 pt-6">
      <div className="glass-card rounded-2xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Currency displays */}
          <CurrencyDisplay
            icon={<VimaanCrystalIcon className="w-full h-full" />}
            value="12,580"
            label="Crystal"
          />
          
          {/* Center logo/title */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute left-1/2 -translate-x-1/2 -bottom-5"
          >
            <div className="w-14 h-14 rounded-full glass-strong hairline-gold gold-glow flex items-center justify-center">
              <VimaanLogo className="w-10 h-10 object-contain drop-shadow-[0_0_14px_rgba(212,175,55,0.85)]" />
            </div>
          </button>
          
          {/* City Merit */}
          <CurrencyDisplay
            icon={<CityMeritIcon className="w-full h-full" />}
            value="8,420"
            label="Merit"
          />
        </div>
      </div>
      
      {/* Dropdown menu */}
      {menuOpen && (
        <div className="mt-8 mx-4 glass-card-strong rounded-2xl p-4 animate-slide-up">
          <nav>
            <ul className="grid grid-cols-3 gap-3">
              {[
                { label: "Home", thai: "หน้าหลัก" },
                { label: "Districts", thai: "เขต" },
                { label: "Fashion", thai: "แฟชั่น" },
                { label: "Market", thai: "ตลาด" },
                { label: "Quests", thai: "ภารกิจ" },
                { label: "Social", thai: "สังคม" },
              ].map((item) => (
                <li key={item.label}>
                  <button className="w-full p-3 rounded-xl glass hairline-gold hover:gold-glow-subtle transition-all text-center active:scale-95">
                    <span className="block font-serif text-sm text-gold">{item.label}</span>
                    <span className="block text-[10px] text-foreground/50 mt-0.5">{item.thai}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
