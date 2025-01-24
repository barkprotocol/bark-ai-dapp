import { cn } from "@/lib/utils"
import { DynamicLogoImage } from "./dynamic-logo-image"

export default function Logo({
  width = 100,
  height = width,
  className,
}: {
  width?: number
  height?: number
  className?: string
}) {
  return (
    <DynamicLogoImage
      lightSrc="https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"
      darkSrc="https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"
      alt="BARK AI Logo"
      width={width}
      height={height}
      className={cn("select-none", className)}
    />
  )
}

