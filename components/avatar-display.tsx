"use client"

// Placeholder avatar silhouette with elegant styling
export function AvatarDisplay() {
  return (
    <div className="relative flex items-center justify-center py-8">
      {/* Decorative background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-gradient-radial from-gold/20 via-lavender/10 to-transparent blur-2xl" />
      </div>
      
      {/* Avatar placeholder area */}
      <div className="relative">
        {/* Avatar silhouette */}
        <div className="relative w-48 h-72 flex items-center justify-center">
          {/* Elegant avatar frame */}
          <div className="absolute inset-0 rounded-3xl glass hairline-gold overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-lavender/10" />
            
            {/* Silhouette illustration */}
            <svg viewBox="0 0 200 300" className="w-full h-full">
              <defs>
                <linearGradient id="silhouetteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(212,175,55,0.3)" />
                  <stop offset="50%" stopColor="rgba(200,180,220,0.2)" />
                  <stop offset="100%" stopColor="rgba(212,175,55,0.15)" />
                </linearGradient>
                <linearGradient id="outlineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#F5E6A3" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
              
              {/* Body silhouette */}
              <ellipse cx="100" cy="60" rx="28" ry="32" fill="url(#silhouetteGradient)" />
              <path 
                d="M60 90 Q50 130 55 180 Q60 230 70 280 L130 280 Q140 230 145 180 Q150 130 140 90 Q120 100 100 100 Q80 100 60 90"
                fill="url(#silhouetteGradient)"
              />
              
              {/* Elegant dress details */}
              <path 
                d="M55 180 Q40 220 50 280 L70 280 Q60 230 55 180"
                fill="rgba(200,180,220,0.15)"
              />
              <path 
                d="M145 180 Q160 220 150 280 L130 280 Q140 230 145 180"
                fill="rgba(200,180,220,0.15)"
              />
              
              {/* Decorative sparkles */}
              <circle cx="85" cy="55" r="2" fill="rgba(255,255,255,0.8)" className="animate-glow-pulse" />
              <circle cx="115" cy="50" r="1.5" fill="rgba(255,255,255,0.6)" className="animate-glow-pulse" style={{ animationDelay: "0.5s" }} />
              <circle cx="90" cy="120" r="1.5" fill="rgba(212,175,55,0.7)" className="animate-glow-pulse" style={{ animationDelay: "1s" }} />
              <circle cx="110" cy="150" r="2" fill="rgba(212,175,55,0.8)" className="animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
              <circle cx="75" cy="200" r="1.5" fill="rgba(255,255,255,0.5)" className="animate-glow-pulse" style={{ animationDelay: "2s" }} />
              <circle cx="125" cy="220" r="1.5" fill="rgba(245,230,163,0.6)" className="animate-glow-pulse" style={{ animationDelay: "2.5s" }} />
            </svg>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute -top-2 -left-2 w-8 h-8">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <path d="M0 16 Q0 0 16 0" stroke="url(#outlineGradient)" strokeWidth="1" fill="none" />
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <path d="M32 16 Q32 0 16 0" stroke="url(#outlineGradient)" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>
        
        {/* Style button */}
        <button className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full glass-strong hairline-gold gold-glow hover:gold-glow-strong transition-all active:scale-95">
          <span className="font-serif text-sm text-gold">แต่งตัว</span>
          <span className="block text-[9px] text-foreground/50">Dress Up</span>
        </button>
      </div>
      
      {/* Side action buttons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {[
          { icon: "camera", label: "ถ่ายรูป" },
          { icon: "share", label: "แชร์" },
          { icon: "heart", label: "โปรด" },
        ].map((action) => (
          <button
            key={action.icon}
            className="w-10 h-10 rounded-full glass hairline-gold gold-glow-subtle hover:gold-glow transition-all flex items-center justify-center active:scale-90"
            aria-label={action.label}
          >
            {action.icon === "camera" && (
              <svg viewBox="0 0 24 24" className="w-4 h-4 icon-glow-subtle" fill="none" stroke="rgba(212,175,55,0.8)" strokeWidth="1.5">
                <rect x="3" y="6" width="18" height="14" rx="2" />
                <circle cx="12" cy="13" r="4" />
                <path d="M7 6V4C7 3.44772 7.44772 3 8 3H16C16.5523 3 17 3.44772 17 4V6" />
              </svg>
            )}
            {action.icon === "share" && (
              <svg viewBox="0 0 24 24" className="w-4 h-4 icon-glow-subtle" fill="none" stroke="rgba(212,175,55,0.8)" strokeWidth="1.5">
                <path d="M4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12" />
                <polyline points="16,6 12,2 8,6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            )}
            {action.icon === "heart" && (
              <svg viewBox="0 0 24 24" className="w-4 h-4 icon-glow-subtle" fill="rgba(212,175,55,0.2)" stroke="rgba(212,175,55,0.8)" strokeWidth="1.5">
                <path d="M12 21C12 21 4 15 4 9C4 5.68629 6.68629 3 10 3C11.3132 3 12 4 12 4C12 4 12.6868 3 14 3C17.3137 3 20 5.68629 20 9C20 15 12 21 12 21Z" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
