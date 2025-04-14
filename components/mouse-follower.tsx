"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")

      setIsHovering(!!isInteractive)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-foreground/50 pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: 0.6,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 100,
          damping: 10,
        }}
      />
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[100] hidden md:block will-change-transform"
        style={{
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0) scale(${isHovering ? 0 : 1})`,
        }}
      />
    </>
  )
}
