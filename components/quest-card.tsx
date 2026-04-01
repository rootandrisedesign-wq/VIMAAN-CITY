"use client"

import { GlassCard } from "./glass-card"
import { VimaanButton } from "./vimaan-button"
import { Clock, Gift, ChevronRight } from "lucide-react"

interface Quest {
  id: string
  title: string
  description: string
  reward: string
  timeLeft: string
  progress: number
  type: "daily" | "event" | "story"
}

const quests: Quest[] = [
  {
    id: "1",
    title: "Silk Road Soirée",
    description: "Collect 3 Neo-Thai accessories",
    reward: "500 Crystals",
    timeLeft: "2h 30m",
    progress: 66,
    type: "daily"
  },
  {
    id: "2",
    title: "Lotus Festival",
    description: "Attend the grand opening ceremony",
    reward: "Rare Outfit",
    timeLeft: "Event",
    progress: 0,
    type: "event"
  },
  {
    id: "3",
    title: "VIMAAN Awakening",
    description: "Chapter 7: The Digital Temple",
    reward: "1000 XP",
    timeLeft: "Story",
    progress: 45,
    type: "story"
  }
]

const typeColors = {
  daily: "from-mint/40 to-mint/10",
  event: "from-peach/40 to-peach/10",
  story: "from-lavender/40 to-lavender/10"
}

const typeBadgeColors = {
  daily: "bg-mint/30 text-mint",
  event: "bg-peach/30 text-peach",
  story: "bg-lavender/30 text-lavender"
}

export function QuestCard() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-lg font-semibold text-gold-gradient">
          Active Quests
        </h3>
        <button className="flex items-center gap-1 text-xs text-gold hover:text-gold/80 transition-colors">
          View All
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-3">
        {quests.map((quest) => (
          <GlassCard 
            key={quest.id} 
            variant="subtle" 
            className={`relative overflow-hidden bg-gradient-to-r ${typeColors[quest.type]}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold ${typeBadgeColors[quest.type]}`}>
                    {quest.type}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span className="text-[10px]">{quest.timeLeft}</span>
                  </div>
                </div>
                
                <h4 className="font-serif text-sm font-medium text-foreground truncate">
                  {quest.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">
                  {quest.description}
                </p>
                
                {/* Progress bar */}
                {quest.progress > 0 && (
                  <div className="mt-2">
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-gold to-[#F5E6A3] rounded-full transition-all duration-500"
                        style={{ width: `${quest.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground mt-0.5 block">
                      {quest.progress}% Complete
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1 text-gold">
                  <Gift className="w-3 h-3" />
                  <span className="text-xs font-medium">{quest.reward}</span>
                </div>
                <VimaanButton variant="ghost" size="sm" className="text-xs px-3 py-1.5">
                  {quest.progress > 0 ? "Continue" : "Start"}
                </VimaanButton>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
