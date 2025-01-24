import Link from "next/link"
import Logo from "./logo"

interface BrandProps {
  className?: string
}

export function Brand({ className }: BrandProps) {
  return (
    <Link href="/" className={className}>
      <div className="flex items-center gap-2">
        <Logo width={32} />
        <span className="text-xl select-none font-bold">BARK AI</span>
      </div>
    </Link>
  )
}

