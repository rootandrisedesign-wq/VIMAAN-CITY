"use client"

import { useState } from "react"
import { GlassCard } from "./glass-card"
import { ChevronLeft, ChevronRight, Heart, ShoppingBag } from "lucide-react"

interface FashionItem {
  id: string
  name: string
  collection: string
  rarity: "common" | "rare" | "epic" | "legendary"
  price: number
  liked: boolean
}

const fashionItems: FashionItem[] = [
  { id: "1", name: "Lotus Empress Gown", collection: "Neo-Siam", rarity: "legendary", price: 2500, liked: true },
  { id: "2", name: "Digital Silk Robe", collection: "Cyber Thai", rarity: "epic", price: 1800, liked: false },
  { id: "3", name: "VIMAAN Crystal Heels", collection: "Aurora", rarity: "rare", price: 950, liked: true },
  { id: "4", name: "Golden Temple Crown", collection: "Heritage", rarity: "legendary", price: 3200, liked: false },
]

const rarityColors = {
  common: "from-gray-400 to-gray-300",
  rare: "from-mint to-mint/60",
  epic: "from-lavender to-lavender/60",
  legendary: "from-gold via-[#F5E6A3] to-gold"
}

const rarityBadge = {
  common: "bg-gray-500/30 text-gray-300",
  rare: "bg-mint/30 text-mint",
  epic: "bg-lavender/30 text-lavender",
  legendary: "bg-gold/30 text-gold"
}

export function FashionShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [likedItems, setLikedItems] = useState<Set<string>>(
    new Set(fashionItems.filter(item => item.liked).map(item => item.id))
  )

  const toggleLike = (id: string) => {
    setLikedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % fashionItems.length)
  }

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + fashionItems.length) % fashionItems.length)
  }

  const currentItem = fashionItems[currentIndex]

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-lg font-semibold text-gold-gradient">
          Featured Fashion
        </h3>
        <div className="flex items-center gap-1">
          <button 
            onClick={prevItem}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Previous item"
          >
            <ChevronLeft className="w-4 h-4 text-gold" />
          </button>
          <button 
            onClick={nextItem}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Next item"
          >
            <ChevronRight className="w-4 h-4 text-gold" />
          </button>
        </div>
      </div>

      <GlassCard variant="strong" className="relative overflow-hidden">
        {/* Rarity gradient top border */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${rarityColors[currentItem.rarity]}`} />
        
        {/* Fashion item display */}
        <div className="relative aspect-[3/4] mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#2a2040]/80 to-[#1a1530]/80">
          {/* Placeholder fashion silhouette */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 120 180" className="w-32 h-48 opacity-60">
              <defs>
                <linearGradient id={`fashionGrad-${currentItem.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#F5E6A3" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
              </defs>
              {/* Head */}
              <circle cx="60" cy="25" r="15" fill={`url(#fashionGrad-${currentItem.id})`} />
              {/* Body/Dress */}
              <path 
                d="M40 45 Q35 80 30 140 L90 140 Q85 80 80 45 Q70 40 60 40 Q50 40 40 45" 
                fill={`url(#fashionGrad-${currentItem.id})`}
              />
              {/* Arms */}
              <path d="M38 50 Q25 70 20 100" stroke={`url(#fashionGrad-${currentItem.id})`} strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M82 50 Q95 70 100 100" stroke={`url(#fashionGrad-${currentItem.id})`} strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          
          {/* Like button */}
          <button 
            onClick={() => toggleLike(currentItem.id)}
            className="absolute top-3 right-3 p-2 rounded-full glass-card transition-transform hover:scale-110"
            aria-label={likedItems.has(currentItem.id) ? "Unlike" : "Like"}
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${
                likedItems.has(currentItem.id) 
                  ? "text-peach fill-peach" 
                  : "text-white/60"
              }`} 
            />
          </button>
          
          {/* Rarity badge */}
          <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold ${rarityBadge[currentItem.rarity]}`}>
            {currentItem.rarity}
          </span>
        </div>
        
        {/* Item info */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-sans">{currentItem.collection}</p>
            <h4 className="font-serif text-base font-medium text-foreground">
              {currentItem.name}
            </h4>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold to-[#F5E6A3] rounded-xl text-[#1a1a1a] font-semibold text-sm gold-glow-subtle hover:gold-glow transition-all">
            <ShoppingBag className="w-4 h-4" />
            {currentItem.price.toLocaleString()}
          </button>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-4">
          {fashionItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-gold w-4" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </GlassCard>
    </section>
  )
}
