"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  authenticatedStudies: string[]
  verifyPassword: (caseStudyId: string, password: string) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// In a real app, this would be an API call
const mockVerifyPassword = async (caseStudyId: string, password: string): Promise<boolean> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // For demo purposes, accept any password with length > 3
  return password.length > 3
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticatedStudies, setAuthenticatedStudies] = useState<string[]>([])

  // Load authenticated studies from localStorage on mount
  useEffect(() => {
    const storedStudies = localStorage.getItem("authenticatedStudies")
    if (storedStudies) {
      try {
        setAuthenticatedStudies(JSON.parse(storedStudies))
      } catch (error) {
        console.error("Failed to parse authenticated studies from localStorage", error)
      }
    }
  }, [])

  // Save authenticated studies to localStorage when they change
  useEffect(() => {
    if (authenticatedStudies.length > 0) {
      localStorage.setItem("authenticatedStudies", JSON.stringify(authenticatedStudies))
    }
  }, [authenticatedStudies])

  const verifyPassword = async (caseStudyId: string, password: string): Promise<boolean> => {
    const isValid = await mockVerifyPassword(caseStudyId, password)

    if (isValid) {
      setAuthenticatedStudies((prev) => {
        if (!prev.includes(caseStudyId)) {
          return [...prev, caseStudyId]
        }
        return prev
      })
    }

    return isValid
  }

  const value = {
    isAuthenticated: authenticatedStudies.length > 0,
    authenticatedStudies,
    verifyPassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
