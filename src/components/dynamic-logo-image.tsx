import Image from "next/image"
import { useTheme } from "next-themes"

interface DynamicLogoImageProps {
  lightSrc: string
  darkSrc: string
  alt: string
  width: number
  height: number
  className?: string
}

export function DynamicLogoImage({ lightSrc, darkSrc, alt, width, height, className }: DynamicLogoImageProps) {
  const { resolvedTheme } = useTheme()

  const src = resolvedTheme === "dark" ? darkSrc : lightSrc

  return <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className={className} />
}

