"use client"

import { useState } from "react"
import { GlassCard } from "./glass-card"
import { Home, Map, Shirt, Store, Users } from "lucide-react"

const navItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: Map, label: "Explore", id: "explore" },
  { icon: Shirt, label: "Wardrobe", id: "wardrobe" },
  { icon: Store, label: "Market", id: "market" },
  { icon: Users, label: "Social", id: "social" },
]

export function BottomNav() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-6" aria-label="Main navigation">
      <GlassCard className="px-2 py-2">
        <ul className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = activeTab === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                    isActive 
                      ? "bg-gold/20 gold-glow-subtle" 
                      : "hover:bg-white/10"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <item.icon 
                    className={`w-5 h-5 transition-colors ${
                      isActive ? "text-gold" : "text-muted-foreground"
                    }`} 
                  />
                  <span 
                    className={`text-[10px] font-sans transition-colors ${
                      isActive ? "text-gold font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </GlassCard>
    </nav>
  )
}
