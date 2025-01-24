"use client"

import Link from "next/link"
import { RiTwitterXFill } from "@remixicon/react"

import BlurFade from "@/components/ui/blur-fade"

export const Footer = () => {
  return (
    <footer className="mt-auto py-4">
      <BlurFade delay={0.5} className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
        <p>© 2025 BARK Protocol. All rights reserved.</p>
        <span>|</span>
        <Link
          href="https://x.com/bark_protocol"
          target="_blank"
          title="Follow us on X"
          className="transition-colors hover:scale-105 hover:text-primary"
        >
          <RiTwitterXFill className="h-4 w-4" />
        </Link>
      </BlurFade>
    </footer>
  )
}

