"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/auth-context"

interface PasswordProtectionProps {
  caseStudyId: string
}

export default function PasswordProtection({ caseStudyId }: PasswordProtectionProps) {
  const router = useRouter()
  const { verifyPassword } = useAuth()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!password.trim()) {
      setError("Please enter a password")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const success = await verifyPassword(caseStudyId, password)

      if (success) {
        // Password is correct, the auth context will handle the redirect
        router.refresh()
      } else {
        setError("Incorrect password. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-24 flex justify-center items-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full p-6 bg-card rounded-lg shadow-lg"
      >
        <div className="flex flex-col items-center text-center mb-6">
          <div className="bg-muted p-3 rounded-full mb-4">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Protected project</h1>
          <p className="text-muted-foreground">
            This project is password protected. Please enter the password to view it.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoComplete="off"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Verifying..." : "Submit"}
          </Button>

          <div className="text-center">
            <Button variant="link" onClick={() => router.push("/case-studies")} className="text-sm">
              Back to Case Studies
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
