"use client"

import { useState } from "react"

// Elegant glowing icons
function HomeIcon({ active }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`w-5 h-5 ${active ? "icon-glow" : "icon-glow-subtle"}`}>
      <path
        d="M3 12L12 4L21 12"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.6)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 10V19C5 19.5523 5.44772 20 6 20H9V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V20H18C18.5523 20 19 19.5523 19 19V10"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.6)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={active ? "rgba(212,175,55,0.2)" : "none"}
      />
    </svg>
  )
}

function WardrobeIcon({ active }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`w-5 h-5 ${active ? "icon-glow" : "icon-glow-subtle"}`}>
      <path
        d="M12 4C12 4 14 6 14 8C14 10 12 11 12 11C12 11 10 10 10 8C10 6 12 4 12 4Z"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.6)"}
        strokeWidth="1.5"
        fill={active ? "rgba(212,175,55,0.2)" : "none"}
      />
      <path
        d="M12 11V20"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.6)"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 20H16"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.6)"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 11C6 11 8 13 12 13C16 13 18 11 18 11"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.6)"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function QuestIcon({ active }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`w-5 h-5 ${active ? "icon-glow" : "icon-glow-subtle"}`}>
      <path
        d="M4 6H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.6)"}
        strokeWidth="1.5"
        fill={active ? "rgba(212,175,55,0.2)" : "none"}
      />
      <path
        d="M4 6L7 4H17L20 6"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.6)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10L11 12L15 8"
        stroke={active ? "#F5E6A3" : "rgba(245,230,163,0.6)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15H15"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.5)"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MapIcon({ active }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`w-5 h-5 ${active ? "icon-glow" : "icon-glow-subtle"}`}>
      <path
        d="M12 21C12 21 19 15 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 15 12 21 12 21Z"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.6)"}
        strokeWidth="1.5"
        fill={active ? "rgba(212,175,55,0.2)" : "none"}
      />
      <circle
        cx="12"
        cy="10"
        r="3"
        stroke={active ? "#F5E6A3" : "rgba(245,230,163,0.6)"}
        strokeWidth="1.5"
        fill={active ? "rgba(245,230,163,0.3)" : "none"}
      />
    </svg>
  )
}

function SocialIcon({ active }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`w-5 h-5 ${active ? "icon-glow" : "icon-glow-subtle"}`}>
      <circle
        cx="12"
        cy="8"
        r="4"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.6)"}
        strokeWidth="1.5"
        fill={active ? "rgba(212,175,55,0.2)" : "none"}
      />
      <path
        d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
        stroke={active ? "#D4AF37" : "rgba(212,175,55,0.6)"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="19" cy="8" r="2" stroke={active ? "#F5E6A3" : "rgba(245,230,163,0.5)"} strokeWidth="1" fill="none" />
      <circle cx="5" cy="8" r="2" stroke={active ? "#F5E6A3" : "rgba(245,230,163,0.5)"} strokeWidth="1" fill="none" />
    </svg>
  )
}

const navItems = [
  { icon: MapIcon, label: "Explore", id: "explore" },
  { icon: WardrobeIcon, label: "Style", id: "style" },
  { icon: HomeIcon, label: "Home", id: "home", isCenter: true },
  { icon: QuestIcon, label: "Quests", id: "quests" },
  { icon: SocialIcon, label: "Social", id: "social" },
]

export function RoundNav() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-8" aria-label="Main navigation">
      <div className="flex items-end justify-center gap-3">
        {navItems.map((item) => {
          const isActive = activeTab === item.id
          const isCenter = item.isCenter
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                flex flex-col items-center gap-1.5 transition-all active:scale-90
                ${isCenter ? "relative -mt-4" : ""}
              `}
              aria-current={isActive ? "page" : undefined}
            >
              <div
                className={`
                  rounded-full flex items-center justify-center transition-all
                  ${isCenter 
                    ? `w-16 h-16 glass-strong hairline-gold ${isActive ? "gold-glow-strong" : "gold-glow-subtle"}`
                    : `w-12 h-12 glass hairline-gold ${isActive ? "gold-glow" : "gold-glow-subtle hover:gold-glow"}`
                  }
                `}
              >
                <item.icon active={isActive} />
              </div>
              <span 
                className={`
                  text-[10px] font-sans transition-colors
                  ${isActive ? "text-gold font-medium" : "text-foreground/60"}
                `}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
