import type { Metadata } from "next"
import { cookies } from "next/headers"

import { createClient } from "@/utils/supabase/server"
import { HomeContent } from "./home-content"

export const metadata: Metadata = {
  title: "Home",
  description: "Your AI Assistant for All Things Solana",
}

export default async function HomePage() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  // You can use the supabase client here if needed
  // For example, to fetch some data:
  // const { data, error } = await supabase.from('your_table').select('*');

  return <HomeContent />
}

