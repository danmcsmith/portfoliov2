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
      <div className="container pt-24 pb-12 md:py-24 text-center">
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

  // Custom template for therapy consent case study
  if (caseStudy.slug === "therapy-consent") {
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
              <p className="text-lg text-muted-foreground mb-8">
                By early 2024, AbleTo—freshly integrated into Optum—offered a diverse product suite ranging from digital self-help to clinician-guided therapy. Compliance regulations required a robust approach to ensure every participant completed their "Consent to Treat" documentation before initiating care.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Role</h3>
                  <p>{caseStudy.role}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Timeline</h3>
                  <p>{caseStudy.timeline}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Date</h3>
                  <p>{caseStudy.date}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tools</h3>
                  <p>{caseStudy.tools?.join(", ")}</p>
                </div>
              </div>
            </section>

            {/* Problem */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Problem</h2>
              <p className="text-lg text-muted-foreground mb-8">{caseStudy.problem}</p>
              
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/therapyconsent-problem.jpg"
                  alt="Compliance audit dashboard showing low consent rates"
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            {/* Objective */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Objective</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Design an experience that increases the rate of signed consents before the first session (1A), without harming engagement or increasing user drop-off. The initiative specifically targeted raising the signing rate to 80% prior to treatment.
              </p>
            </section>

            {/* Process */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Process</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Research & Audit</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    A cross-sectional analysis kicked off the project, as I evaluated the existing first-time user experience (FTUX) for gaps. Audit findings included a fragmented onboarding flow with over 40 screens and a notably low conversion rate of 37% during onboarding. It became clear that introducing new gates could risk further drop-off, so the focus was on minimizing friction.
                  </p>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/therapyconsent-researchaudit.jpg"
                      alt="User flow analysis showing fragmented onboarding experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Ideation & Iteration</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Iterative design began with competitor and adjacent industry audits—investigating onboarding flows from leading digital health and consumer apps to surface best practices in consent and compliance presentation. Concepts were presented, critiqued in design jams, and refined through multiple design reviews. Five major iteration phases explored where and how to surface the consent—in the welcome flow, as a dedicated task, and within document centers.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/therapyconsent-iterations_1.jpg"
                        alt="Competitor analysis of consent flows"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/therapyconsent-iterations_2.jpg"
                        alt="Design iteration sketches and wireframes"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Quick Prototyping & Stakeholder Validation</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Time constraints demanded rapid prototyping rather than extended user research. High-fidelity interactive prototypes were presented to PMs, engineering leads, clinical partners, and leadership. Questions were anticipated and addressed live in collaborative review sessions.
                  </p>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/therapyconsent-handoff.jpg"
                      alt="Interactive prototype showing consent flow"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Cross-Functional Handoff</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Handoff included paired working sessions with PM and engineering for Jira ticket creation and Figma handoff, ensuring that every flow and condition (happy/sad paths, skip logic, eligibility gating) was thoroughly documented for development.
                  </p>
                </div>
              </div>
            </section>

            {/* Experience & Solution */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Experience & Solution</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Warm Welcome with Clear Next Steps</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    The onboarding experience was restructured so that new users encountered a concise, friendly message explaining the importance of signing the consent form early—framed as the beginning of their care journey.
                  </p>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/therapyconsent-finalmock.jpg"
                      alt="Mobile app screens showing consent form prompt and main dashboard with session details"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Flexible Consent Pathways</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Users had the option to "sign now" or "I'll sign it later," balancing legal needs with user desire for quick access. Skipping surfaced reminders and re-engagement nudges ahead of the first session.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Integrated Document Center</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Consent forms, privacy policies, and participation agreements were easily accessible in the "Forms and Documents" section, reducing confusion and offering transparency.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Provider & System Prompts</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Multiple interaction points—provider reminders, in-app nudges, and system prompts—helped ensure the form was completed prior to any in-person clinical engagement.
                  </p>
                </div>
              </div>
            </section>

            {/* Collaboration */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Collaboration</h2>
              <p className="text-lg text-muted-foreground mb-8">
                A cross-initiative approach defined project execution, bringing together product designers (consumer, provider-facing, pre-care), PMs, engineering, clinical program leads, and provider operations. Weekly standups, agile ceremonies, frequent design reviews, and leadership presentations kept the project moving at the necessary pace.
              </p>
            </section>

            {/* Outcomes */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Outcomes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Signing Rate (target: 80%)</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    At launch, the signing completion rate increased from under 50% to 80% for commercial users.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg">
                    <li><strong>Commercial:</strong> 85%</li>
                    <li><strong>Medicaid:</strong> 76%</li>
                    <li><strong>Medicare Advantage:</strong> 54%</li>
                  </ul>
                </div>
                <p className="text-lg text-muted-foreground">
                  This improvement was especially pronounced among Optum's commercial customer base; Medicaid and Medicare metrics identified key areas for future iteration.
                </p>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/therapyconsent-outcomes.jpg"
                    alt="Success metrics dashboard showing improved consent rates"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Constraints */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Constraints</h2>
              <ul className="list-disc pl-6 space-y-4 text-lg text-muted-foreground">
                <li>One-month design and rollout window to maintain legal compliance</li>
                <li>Required use of the Adobe Acrobat E-Sign integration</li>
                <li>Reuse of existing component libraries; no net-new elements</li>
                <li>End-to-end solution compatibility with existing provider and care delivery platforms</li>
              </ul>
            </section>

            {/* Lessons & Next Steps */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Lessons & Next Steps</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Known Issues</h3>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
                    <li>Some users (especially Medicaid and Medicare) saw lower completion rates due to technical or usability barriers.</li>
                    <li>Bugs in Salesforce integration and document handoff disrupted the process for certain cohorts.</li>
                    <li>Paperless-only process limited access for users without email or digital literacy.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Work has already started on Phase 2:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground">
                    <li>Gating access to treatment if consent isn't signed post-consultation</li>
                    <li>Offering paper-based consent forms upon request</li>
                  </ul>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </article>
    )
  }

  // Default template for other case studies
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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Role</h3>
                <p>{caseStudy.role || "Lead Product Designer"}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Timeline</h3>
                <p>{caseStudy.timeline || "3 months"}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Date</h3>
                <p>{caseStudy.date || "2023"}</p>
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
                src={caseStudy.slug === "karuna" ? "/karuna-problem.jpg" : caseStudy.slug === "explore-feature" ? "/explore-problem.jpg" : "/home-problem.jpg"}
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
                  {caseStudy.slug === "karuna" 
                    ? "Using atomic design and double diamond concepts, I focus on taking time with researching the design. Once I have a strong understanding of needs and the direction of the design, I use several low fidelity wireframes. During this phase, I take my time testing the low-fidelity wireframes before moving to time intensive high fidelity mockup"
                    : "During discovery, I focus on researching the problem to ensure a understanding of the information architecture before iterating. By reviewing legacy research, conducting design audits, interviews with Sanvello stakeholders, in the wild audits, and user research, I build a path for designs to move forward. Taking my time so I have minimal throwaway work later. Moving slowly to move fast."}
                </p>
                {caseStudy.slug !== "karuna" && (
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={caseStudy.slug === "explore-feature" ? "/explore-discovery.png" : "/home-discovery.png"}
                      alt="Research process"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Ideation, validation, and testing</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {caseStudy.slug === "karuna" 
                    ? "Complete concept redesign from ideation to high fidelity mockups. Including wireframing, usability testing, iteration, and interaction design."
                    : "After having a few IAs and concepts ready, I present design directions to critiques, stakeholder review, and senior leadership meetings for approvals. My final step is validating the direction through user testing. During workshops, design critiques, and jams, iterations are refined and improved, getting closer to the final design phase. Explore required multiple stakeholders, working cross-functionally. Although I am autonomous and hold myself accountable, for best design output requires a collaborative approach. Through reviews and workshops while following design timelines, the Explore feature continued a forward direction in design, making sure to validate all viable solutions through user testing along the way."}
                </p>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={caseStudy.slug === "karuna" ? "/karuna-ideation.jpg" : caseStudy.slug === "explore-feature" ? "/explore-iterations.jpg" : "/home-iterations.jpg"}
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
              {caseStudy.slug === "karuna" 
                ? "Final product included a full working mobile prototype of both the therapist and patient platform for all main screens including dashboard, explore, progress, toolbox, and message."
                : "After final approvals and socializing the new experience, designs are marked \"ready for dev\" and are handed off. Working in 2 week sprints, I pair with PMs and tech leads to write tickets and help sprint planning. Sitting in an agile pod and running 2 week sprints, we transformed designs into functional features, flagged for release. In addition, I handoff designs to the content teams to start producing copy, illustrations, and organizing how artifacts are displayed. Joined by the clinical team, final designs are reviewed to follow evidence-based best practices."}
            </p>

            <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
              <Image 
                src={caseStudy.slug === "karuna" ? "/karuna-handoff.png" : caseStudy.slug === "explore-feature" ? "/explore-handoff.jpg" : "/home-handoff.jpg"} 
                alt="Final solution" 
                fill 
                className="object-cover" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={caseStudy.slug === "karuna" ? "/karuna-handoff-small1.png" : caseStudy.slug === "explore-feature" ? "/explore-handoff-small1.png" : "/home-handoff-small1.png"}
                  alt="Solution detail 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={caseStudy.slug === "karuna" ? "/karuna-handoff-small2.png" : caseStudy.slug === "explore-feature" ? "/explore-handoff-small2.png" : "/home-handoff-small2.png"}
                  alt="Solution detail 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Outcomes */}
          {caseStudy.slug !== "explore-feature" && caseStudy.slug !== "karuna" && (
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
