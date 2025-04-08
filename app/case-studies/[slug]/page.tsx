"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { caseStudies } from "@/data/case-studies"
import PasswordProtection from "@/components/password-protection"
import { useAuth } from "@/context/auth-context"

export default function CaseStudyPage() {
  const router = useRouter()
  const params = useParams()
  const { isAuthenticated, authenticatedStudies } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  const slug = params?.slug as string
  const caseStudy = caseStudies.find((study) => study.slug === slug)

  useEffect(() => {
    // Short timeout to simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!caseStudy) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-3xl font-bold mb-6">Case Study Not Found</h1>
        <Button onClick={() => router.push("/case-studies")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
        </Button>
      </div>
    )
  }

  const hasAccess = !caseStudy.isProtected || (isAuthenticated && authenticatedStudies.includes(caseStudy.id))

  if (!hasAccess) {
    return <PasswordProtection caseStudyId={caseStudy.id} />
  }

  if (isLoading) {
    return (
      <div className="container py-24 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse h-8 w-8 rounded-full bg-muted"></div>
      </div>
    )
  }

  return (
    <article className="pb-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <Image
          src={caseStudy.coverImage || "/placeholder.svg?height=1080&width=1920"}
          alt={caseStudy.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push("/case-studies")}
                className="mb-6 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
              </Button>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{caseStudy.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {caseStudy.categories.map((category) => (
                  <span key={category} className="px-3 py-1 text-sm rounded-full bg-accent text-accent-foreground">
                    {category}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-4xl py-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground mb-8">{caseStudy.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Role</h3>
                <p>{caseStudy.role || "Lead Product Designer"}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Timeline</h3>
                <p>{caseStudy.timeline || "3 months"}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Tools</h3>
                <p>{caseStudy.tools?.join(", ") || "Figma, Miro, Principle"}</p>
              </div>
            </div>
          </section>

          {/* Problem */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Problem</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {caseStudy.problem ||
                "Healthcare providers needed a more efficient way to manage patient data while maintaining compliance with privacy regulations. The existing system was cumbersome, leading to inefficiencies and potential errors in patient care."}
            </p>

            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Problem visualization"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Process</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Research</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Conducted interviews with 12 healthcare professionals to understand their workflow challenges and
                  needs. Created journey maps to identify pain points in the current process.
                </p>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Research process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Ideation</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Developed multiple concepts through sketching and wireframing. Conducted collaborative design
                  workshops with stakeholders to refine ideas.
                </p>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Ideation process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Prototyping & Testing</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Created interactive prototypes and conducted usability testing with end users. Iterated based on
                  feedback to improve the user experience.
                </p>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Prototyping process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Solution</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {caseStudy.solution ||
                "Designed an intuitive interface that streamlined data entry and retrieval while maintaining strict privacy controls. The new system reduced task completion time by 40% and improved data accuracy by 25%."}
            </p>

            <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
              <Image src="/placeholder.svg?height=720&width=1280" alt="Final solution" fill className="object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Solution detail 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Solution detail 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Outcomes</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {caseStudy.outcomes ||
                "The redesigned system was successfully implemented across 5 healthcare facilities, resulting in:"}
            </p>

            <ul className="list-disc pl-6 space-y-4 text-lg mb-12">
              <li>40% reduction in data entry time</li>
              <li>25% improvement in data accuracy</li>
              <li>92% user satisfaction rate</li>
              <li>Compliance with all relevant healthcare privacy regulations</li>
            </ul>

            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=720&width=1280" alt="Outcome metrics" fill className="object-cover" />
            </div>
          </section>
        </motion.div>
      </div>
    </article>
  )
}
