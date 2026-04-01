import { GlassCard } from "./glass-card"
import { Sparkles, Gem, Zap, Crown } from "lucide-react"

const stats = [
  { icon: Sparkles, label: "Prestige", value: "2,450", color: "text-gold" },
  { icon: Gem, label: "Crystals", value: "1,280", color: "text-lavender" },
  { icon: Zap, label: "Energy", value: "85/100", color: "text-mint" },
  { icon: Crown, label: "Rank", value: "Elite", color: "text-peach" },
]

export function StatsDisplay() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat) => (
        <GlassCard key={stat.label} variant="subtle" className="flex items-center gap-3 p-3">
          <div className={`p-2 rounded-lg bg-white/10 ${stat.color}`}>
            <stat.icon className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-sans">{stat.label}</p>
            <p className={`text-sm font-semibold ${stat.color}`}>{stat.value}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  )
}
