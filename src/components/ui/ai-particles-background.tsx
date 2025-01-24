"use client"

import { useCallback, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Particles from "react-particles"
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export function AiParticlesBackground() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark")

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const getParticleCount = useCallback(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth
      if (width < 768) return 40 // Mobile
      if (width < 1024) return 60 // Tablet
      return 80 // Desktop
    }
    return 60 // Default
  }, [])

  if (!mounted) return null

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          color: {
            value: isDark ? "#7E7E7E" : "#D8D8D9",
          },
          links: {
            color: isDark ? "#767676" : "#868686",
            distance: 150,
            enable: true,
            opacity: isDark ? 0.3 : 0.2,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: getParticleCount(),
          },
          opacity: {
            value: isDark ? 0.3 : 0.5,
            animation: {
              enable: true,
              speed: 0.8,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
          gradient: [
            {
              type: "linear",
              colors: [
                { position: 0, value: isDark ? "#3B82F6" : "#60A5FA" },
                { position: 1, value: isDark ? "#8B5CF6" : "#A78BFA" },
              ],
            },
          ],
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: ["connect", "bubble"],
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
          },
          modes: {
            connect: {
              distance: 180,
              links: {
                opacity: 0.5,
                color: isDark ? "#E5E7EB" : "#374151",
              },
              radius: 200,
            },
            bubble: {
              distance: 200,
              size: 4,
              duration: 0.4,
              opacity: 0.8,
            },
          },
        },
        detectRetina: true,
        background: {
          color: "transparent",
        },
      }}
      className="absolute inset-0 h-full w-full transition-opacity duration-300"
      aria-hidden="true"
    />
  )
}

