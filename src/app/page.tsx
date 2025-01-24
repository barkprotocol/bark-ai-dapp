"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePrivy } from "@privy-io/react-auth"

import { AiParticlesBackground } from "@/components/ui/ai-particles-background"
import AuthProviders from "@/components/auth-providers"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

const Home = () => {
  const router = useRouter()
  const { login, authenticated, ready } = usePrivy()
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"

  useEffect(() => {
    if (ready && authenticated) {
      router.push("/home")
    }
  }, [ready, authenticated, router])

  const handleLogin = () => {
    if (isMaintenanceMode) {
      window.location.href = "https://x.com/bark_protocol"
    } else {
      login()
    }
  }

  if (!ready) {
    return null // or a loading spinner
  }

  return (
    <div className="flex min-h-screen flex-col">
      <AiParticlesBackground />
      <Header handleLogin={handleLogin} />
      <main className="flex-1">
        <Hero handleLogin={handleLogin} />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <AuthProviders>
      <Home />
    </AuthProviders>
  )
}

