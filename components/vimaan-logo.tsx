"use client"

import { useEffect, useState } from "react"

type VimaanLogoProps = {
  className?: string
  alt?: string
}

export function VimaanLogo({ className, alt = "VIMAAN Logo" }: VimaanLogoProps) {
  const [src, setSrc] = useState("/vimaan-logo.png")

  useEffect(() => {
    const img = new Image()
    img.src = "/vimaan-logo.png"

    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = img.width
      canvas.height = img.height

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        const max = Math.max(r, g, b)
        if (max < 35) {
          data[i + 3] = 0
          continue
        }

        // Soften near-black edge pixels for cleaner anti-aliasing.
        if (max < 70) {
          const t = (max - 35) / 35
          data[i + 3] = Math.round(data[i + 3] * t)
        }
      }

      ctx.putImageData(imageData, 0, 0)
      setSrc(canvas.toDataURL("image/png"))
    }
  }, [])

  return <img src={src} alt={alt} className={className} />
}

