"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function AutoTheme() {
  const { setTheme } = useTheme()

  useEffect(() => {
    const updateTheme = () => {
      const now = new Date()
      const hour = now.getHours()
      
      // Switch to dark mode from 6 PM (18:00) to 6 AM (06:00)
      // Switch to light mode from 6 AM (06:00) to 6 PM (18:00)
      if (hour >= 18 || hour < 6) {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }

    // Set initial theme
    updateTheme()

    // Update theme every minute to handle day/night transitions
    const interval = setInterval(updateTheme, 60000)

    return () => clearInterval(interval)
  }, [setTheme])

  return null
}
