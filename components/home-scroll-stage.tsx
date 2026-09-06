"use client"

import { useEffect, useRef, type ReactNode } from "react"

/**
 * Shared dark stage for the home scroll band.
 * Light parallax only: dots + two glows track --scroll-y.
 * No 3D scenes, particles, video, or looping gradients.
 */
export default function HomeScrollStage({ children }: { children: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        stage.style.setProperty("--scroll-y", String(window.scrollY))
        frame = 0
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={stageRef} className="home-scroll-stage">
      <div className="home-scroll-layers" aria-hidden="true">
        <div className="home-scroll-dots" />
        <div className="home-scroll-glow home-scroll-glow-a" />
        <div className="home-scroll-glow home-scroll-glow-b" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
