"use client"

import { useState } from "react"

interface InfoCardProps {
  expanded?: boolean
}

// Thai mission/quest data
const missions = [
  {
    id: 1,
    title: "ภารกิจประจำเมือง",
    subtitle: "City Daily Mission",
    description: "ร่วมกิจกรรมประจำวันเพื่อรับรางวัล",
    progress: 3,
    total: 5,
    reward: "500 Crystal",
  },
  {
    id: 2,
    title: "แฟชั่นโชว์",
    subtitle: "Fashion Show",
    description: "เข้าร่วมการแข่งขันแฟชั่นรายสัปดาห์",
    progress: 1,
    total: 3,
    reward: "Gold Medal",
  },
]

function ProgressBar({ progress, total }: { progress: number; total: number }) {
  const percentage = (progress / total) * 100
  return (
    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
      <div 
        className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light transition-all"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

function LevelBadge() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold via-gold-light to-gold gold-glow flex items-center justify-center">
          <span className="font-serif text-sm font-bold text-background">28</span>
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-lavender/80 hairline-gold">
          <span className="text-[8px] font-semibold text-foreground">LV</span>
        </div>
      </div>
      <div>
        <p className="font-serif text-base text-gold">ระดับพลเมือง</p>
        <p className="text-[10px] text-foreground/60">Citizen Level</p>
      </div>
    </div>
  )
}

export function InfoCard({ expanded: initialExpanded = false }: InfoCardProps) {
  const [expanded, setExpanded] = useState(initialExpanded)
  const [activeTab, setActiveTab] = useState<"missions" | "status">("missions")

  return (
    <div 
      className={`
        fixed left-0 right-0 z-40 transition-all duration-500 ease-out
        ${expanded ? "bottom-28" : "bottom-28"}
      `}
    >
      {/* Pull handle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-2 rounded-t-2xl glass-strong hairline-gold gold-glow-subtle"
        aria-label={expanded ? "Collapse info card" : "Expand info card"}
      >
        <div className="w-12 h-1 rounded-full bg-gold/50" />
      </button>
      
      {/* Main card */}
      <div className="mx-4 glass-info-card rounded-t-3xl overflow-hidden">
        {/* Shimmer effect */}
        <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-30" />
        
        {/* Tab buttons */}
        <div className="flex border-b border-gold/20">
          <button
            onClick={() => setActiveTab("missions")}
            className={`flex-1 py-3 text-center transition-colors relative ${
              activeTab === "missions" ? "text-gold" : "text-foreground/50"
            }`}
          >
            <span className="font-serif text-sm">ภารกิจ</span>
            <span className="block text-[9px] text-foreground/40">Missions</span>
            {activeTab === "missions" && (
              <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("status")}
            className={`flex-1 py-3 text-center transition-colors relative ${
              activeTab === "status" ? "text-gold" : "text-foreground/50"
            }`}
          >
            <span className="font-serif text-sm">สถานะ</span>
            <span className="block text-[9px] text-foreground/40">Status</span>
            {activeTab === "status" && (
              <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
            )}
          </button>
        </div>
        
        {/* Content */}
        <div className={`transition-all duration-500 ${expanded ? "max-h-80" : "max-h-36"} overflow-y-auto`}>
          {activeTab === "missions" ? (
            <div className="p-4 space-y-3">
              {missions.map((mission) => (
                <div key={mission.id} className="p-3 rounded-xl glass hairline-gold">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-serif text-sm text-gold">{mission.title}</h3>
                      <p className="text-[10px] text-foreground/50">{mission.subtitle}</p>
                    </div>
                    <span className="text-[10px] text-peach font-medium px-2 py-0.5 rounded-full bg-peach/20">
                      {mission.reward}
                    </span>
                  </div>
                  <p className="text-xs text-foreground/70 mb-2">{mission.description}</p>
                  <div className="flex items-center gap-2">
                    <ProgressBar progress={mission.progress} total={mission.total} />
                    <span className="text-[10px] text-gold shrink-0">
                      {mission.progress}/{mission.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {/* Level badge */}
              <LevelBadge />
              
              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "แฟชั่นพอยท์", sublabel: "Fashion", value: "15,280" },
                  { label: "ชื่อเสียง", sublabel: "Fame", value: "8,420" },
                  { label: "เพื่อน", sublabel: "Friends", value: "156" },
                ].map((stat) => (
                  <div key={stat.label} className="p-2 rounded-xl glass hairline-gold text-center">
                    <p className="font-serif text-sm text-gold">{stat.value}</p>
                    <p className="text-[9px] text-foreground/60 mt-0.5">{stat.label}</p>
                    <p className="text-[8px] text-foreground/40">{stat.sublabel}</p>
                  </div>
                ))}
              </div>
              
              {/* Experience bar */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-foreground/60">ประสบการณ์ / Experience</span>
                  <span className="text-gold">7,850 / 10,000</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-lavender via-gold to-peach"
                    style={{ width: "78.5%" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
