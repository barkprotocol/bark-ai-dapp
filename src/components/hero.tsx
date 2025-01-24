"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import BlurFade from "@/components/ui/blur-fade"
import { BorderBeam } from "@/components/ui/border-beam"
import { RainbowButton } from "@/components/ui/rainbow-button"

export const Hero = ({ handleLogin }: { handleLogin: () => void }) => {
  const productRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  })

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [30, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1])

  return (
    <section className="relative pt-[5.75rem]" ref={productRef}>
      <div className="relative mx-auto max-w-screen-xl px-6 pb-6 pt-12 text-center md:pb-8 md:pt-16">
        <div className="mx-auto max-w-3xl">
          <BlurFade delay={0.3} className="pointer-events-none select-none">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-muted/80 px-4 py-1.5 shadow-lg backdrop-blur-sm">
              <span className="text-sm font-medium text-primary">✨ Introducing BARK Protocol Agent</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              The{" "}
              <AnimatedShinyText className="inline">
                <span>Intelligent Copilot</span>
              </AnimatedShinyText>{" "}
              for <span>Solana</span>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Elevate your Solana experience with AI-powered insights and delegated actions
            </p>
          </BlurFade>

          <BlurFade delay={0.4}>
            <div className="mt-8">
              <RainbowButton
                onClick={handleLogin}
                className="h-12 min-w-[180px] text-base transition-all duration-300 hover:scale-105"
              >
                Getting Started
              </RainbowButton>
            </div>
          </BlurFade>
        </div>
      </div>

      <div className="relative w-full">
        <BlurFade delay={0.6} className="mx-auto max-w-screen-2xl px-6">
          <div className="relative">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              style={{
                rotateX,
                scale,
                opacity,
                transformPerspective: 1000,
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.5,
              }}
              className="relative mx-auto w-full max-w-[1200px] will-change-transform"
            >
              <div className="group relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
                <div className="relative dark:hidden">
                  <Image
                    src="/product.png"
                    alt="BARK Protocol AI Interface"
                    width={1200}
                    height={675}
                    className="w-full rounded-2xl"
                    priority
                  />
                </div>
                <div className="relative hidden dark:block">
                  <Image
                    src="/product_dark.png"
                    alt="BARK Protocol AI Interface"
                    width={1200}
                    height={675}
                    className="w-full rounded-2xl"
                    priority
                  />
                </div>
                <BorderBeam className="opacity-0 group-hover:opacity-100" duration={10} size={300} />
              </div>

              <div className="absolute -left-4 -top-4 h-72 w-72 animate-blob rounded-full bg-primary/5 mix-blend-multiply blur-xl" />
              <div className="animation-delay-2000 absolute -right-4 -top-4 h-72 w-72 animate-blob rounded-full bg-secondary/5 mix-blend-multiply blur-xl" />
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

