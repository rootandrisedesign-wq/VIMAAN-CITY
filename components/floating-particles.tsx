"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  type: "lotus" | "light"
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []
    
    // Generate lotus petals
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 12 + Math.random() * 16,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6,
        type: "lotus"
      })
    }
    
    // Generate light particles
    for (let i = 8; i < 24; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 4 + Math.random() * 8,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        type: "light"
      })
    }
    
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.type === "lotus" ? (
            <LotusIcon size={particle.size} />
          ) : (
            <div
              className="rounded-full animate-glow-pulse"
              style={{
                width: particle.size,
                height: particle.size,
                background: "radial-gradient(circle, rgba(212, 175, 55, 0.6) 0%, rgba(212, 175, 55, 0) 70%)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

function LotusIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="opacity-40"
    >
      <path
        d="M12 2C12 2 9 6 9 10C9 14 12 16 12 16C12 16 15 14 15 10C15 6 12 2 12 2Z"
        fill="rgba(255, 200, 220, 0.6)"
        stroke="rgba(212, 175, 55, 0.5)"
        strokeWidth="0.5"
      />
      <path
        d="M6 8C6 8 4 11 5 14C6 17 9 18 12 18"
        fill="none"
        stroke="rgba(200, 180, 220, 0.5)"
        strokeWidth="0.5"
      />
      <path
        d="M18 8C18 8 20 11 19 14C18 17 15 18 12 18"
        fill="none"
        stroke="rgba(200, 180, 220, 0.5)"
        strokeWidth="0.5"
      />
      <path
        d="M3 12C3 12 5 14 8 15C11 16 12 18 12 18"
        fill="rgba(200, 230, 220, 0.4)"
        stroke="rgba(212, 175, 55, 0.4)"
        strokeWidth="0.5"
      />
      <path
        d="M21 12C21 12 19 14 16 15C13 16 12 18 12 18"
        fill="rgba(200, 230, 220, 0.4)"
        stroke="rgba(212, 175, 55, 0.4)"
        strokeWidth="0.5"
      />
    </svg>
  )
}
