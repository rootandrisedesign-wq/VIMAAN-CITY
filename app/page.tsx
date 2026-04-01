import { NavHeader } from "@/components/nav-header"
import { BottomNav } from "@/components/bottom-nav"
import { FloatingParticles } from "@/components/floating-particles"
import { StatsDisplay } from "@/components/stats-display"
import { AvatarCard } from "@/components/avatar-card"
import { QuestCard } from "@/components/quest-card"
import { FashionShowcase } from "@/components/fashion-showcase"

export default function VimaanHome() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/prism-city-bg.jpg')" }}
      >
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1530]/60 via-[#1a1530]/40 to-[#1a1530]/80" />
      </div>

      {/* Floating particles overlay */}
      <FloatingParticles />

      {/* Main content */}
      <main className="relative z-10 min-h-screen">
        {/* Navigation Header */}
        <NavHeader />

        {/* Scrollable content area */}
        <div className="pt-24 pb-32 px-4 space-y-6">
          {/* Welcome section */}
          <section className="text-center py-4">
            <p className="text-sm text-muted-foreground font-sans mb-1">Welcome back to</p>
            <h1 className="font-serif text-3xl font-bold text-gold-gradient tracking-wide">
              VIMAAN
            </h1>
            <p className="text-xs text-muted-foreground font-sans mt-2 max-w-xs mx-auto">
              Neo-Siam elegance in a digital metropolis
            </p>
          </section>

          {/* Avatar Card */}
          <AvatarCard />

          {/* Stats Grid */}
          <StatsDisplay />

          {/* Featured Fashion Carousel */}
          <FashionShowcase />

          {/* Active Quests */}
          <QuestCard />

          {/* Daily Bonus Section */}
          <DailyBonus />
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </main>
    </div>
  )
}

function DailyBonus() {
  return (
    <section className="glass-card-strong rounded-2xl p-4 relative overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-50" />
      
      <div className="relative flex items-center gap-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold via-[#F5E6A3] to-gold flex items-center justify-center gold-glow">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#1a1a1a]" fill="currentColor">
            <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm9 14H5v-3h14v3zm1-5H4V9h5v1c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9h5v5z"/>
          </svg>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-base font-semibold text-foreground">
            Daily Login Bonus
          </h3>
          <p className="text-xs text-muted-foreground font-sans">
            Day 7 streak! Claim your legendary reward
          </p>
          <div className="flex items-center gap-1 mt-1">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div
                key={day}
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold ${
                  day <= 6 
                    ? "bg-gold text-[#1a1a1a]" 
                    : "bg-gold/30 text-gold animate-pulse"
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
        
        <button className="px-4 py-2 bg-gradient-to-r from-gold to-[#F5E6A3] rounded-xl text-[#1a1a1a] font-semibold text-sm gold-glow hover:gold-glow-subtle transition-all active:scale-95">
          Claim
        </button>
      </div>
    </section>
  )
}
