"use client"

import { useState } from "react"
import { GlassCard } from "./glass-card"
import { Menu, X, Bell, User } from "lucide-react"
import { VimaanLogo } from "./vimaan-logo"

export function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <GlassCard className="flex items-center justify-between px-4 py-3">
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="w-5 h-5 text-gold" />
          ) : (
            <Menu className="w-5 h-5 text-gold" />
          )}
        </button>
        
        <div className="flex items-center gap-2">
          <VimaanLogo className="h-7 w-auto object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.75)]" />
          <span className="font-serif text-xl font-semibold text-gold-gradient">
            VIMAAN
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            className="p-2 rounded-lg hover:bg-white/10 transition-colors relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-gold" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-peach rounded-full" />
          </button>
          <button 
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Profile"
          >
            <User className="w-5 h-5 text-gold" />
          </button>
        </div>
      </GlassCard>
      
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <GlassCard className="mt-2 py-2 animate-in slide-in-from-top-2 duration-200">
          <nav>
            <ul className="space-y-1">
              {["Home", "Districts", "Fashion Lab", "Marketplace", "Quests", "Social Hub"].map((item) => (
                <li key={item}>
                  <button className="w-full px-4 py-3 text-left font-sans text-sm text-foreground hover:bg-white/10 hover:text-gold transition-colors rounded-lg">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </GlassCard>
      )}
    </header>
  )
}
