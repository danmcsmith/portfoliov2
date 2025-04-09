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
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
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
        <div className="absolute inset-0 bg-black/20 flex items-end">
          <div className="container py-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push("/case-studies")}
                className="mb-6 bg-background/80 backdrop-blur-sm hover:bg-background/90"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
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
                src={caseStudy.slug === "explore-feature" ? "/explore-problem.jpg" : "/home-problem.jpg"}
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
                <h3 className="text-xl font-semibold mb-4">Research and discovery</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  During discovery, I focus on researching the problem to ensure a understanding of the information architecture before iterating.
                  By reviewing legacy research, conducting design audits, interviews with Sanvello stakeholders, in the wild audits, and user research, I build a path for designs to move forward. Taking my time so I have minimal throwaway work later. Moving slowly to move fast.
                </p>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={caseStudy.slug === "explore-feature" ? "/explore-discovery.png" : "/home-discovery.png"}
                    alt="Research process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Ideation, validation, and testing</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  After having a few IAs and concepts ready, I present design directions to critiques, stakeholder review, and senior leadership meetings for approvals. My final step is validating the direction through user testing. During workshops, design critiques, and jams, iterations are refined and improved, getting closer to the final design phase.
                  Explore required multiple stakeholders, working cross-functionally. Although I am autonomous and hold myself accountable, for best design output requires a collaborative approach. Through reviews and workshops while following design timelines, the Explore feature continued a forward direction in design, making sure to validate all viable solutions through user testing along the way.
                </p>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={caseStudy.slug === "explore-feature" ? "/explore-iterations.jpg" : "/home-iterations.jpg"}
                    alt="Ideation process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-4">Handoff and documentation</h2>
            <p className="text-lg text-muted-foreground mb-8">
              After final approvals and socializing the new experience, designs are marked "ready for dev" and are handed off.
              Working in 2 week sprints, I pair with PMs and tech leads to write tickets and help sprint planning. Sitting in an agile pod and running 2 week sprints, we transformed designs into functional features, flagged for release. In addition, I handoff designs to the content teams to start producing copy, illustrations, and organizing how artifacts are displayed. Joined by the clinical team, final designs are reviewed to follow evidence-based best practices.
            </p>

            <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
              <Image 
                src={caseStudy.slug === "explore-feature" ? "/explore-handoff.jpg" : "/home-handoff.jpg"} 
                alt="Final solution" 
                fill 
                className="object-cover" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={caseStudy.slug === "explore-feature" ? "/explore-handoff-small1.png" : "/home-handoff-small1.png"}
                  alt="Solution detail 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={caseStudy.slug === "explore-feature" ? "/explore-handoff-small2.png" : "/home-handoff-small2.png"}
                  alt="Solution detail 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Outcomes */}
          {caseStudy.slug !== "explore-feature" && (
            <section>
              <h2 className="text-3xl font-bold mb-6">Outcomes</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Post launch study* (1/23-6/23) understanding the value of Coaching+ including patient assessment outcome scores, identifying value markers for coaching programs, and set baseline NPS
              </p>

              <ul className="list-disc pl-6 space-y-4 text-lg mb-12">
                <li>+74 NPS</li>
                <li>51% average reduction in depression</li>
                <li>42% average reduction in anxiety</li>
                <li>36% average reduction in social anxiety</li>
              </ul>

              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image src="/home-outcomes.png" alt="Outcome metrics" fill className="object-cover" />
              </div>
            </section>
          )}
        </motion.div>
      </div>
    </article>
  )
}
