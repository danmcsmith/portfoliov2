"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-muted-foreground">
          Product designer specializing in healthcare digital experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="sticky top-24">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-6">
              <Image
                src="/placeholder.svg?height=900&width=600"
                alt="Designer portrait"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:contact@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-7"
        >
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Background</h2>
            <div className="space-y-4 text-lg">
              <p>
                I'm a product designer with over 8 years of experience specializing in healthcare digital experiences.
                My work focuses on creating intuitive interfaces that improve patient outcomes and streamline clinical
                workflows.
              </p>
              <p>
                With a background in both design and healthcare informatics, I bring a unique perspective to solving
                complex problems in the medical space. I'm passionate about using design to make healthcare more
                accessible, efficient, and human-centered.
              </p>
              <p>
                Throughout my career, I've collaborated with multidisciplinary teams including clinicians, developers,
                and business stakeholders to deliver solutions that meet both user needs and business objectives.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Senior Product Designer</h3>
                <p className="text-muted-foreground mb-2">HealthTech Inc. • 2020 - Present</p>
                <p>
                  Lead designer for patient-facing applications and clinical tools. Established design system and user
                  research practices. Improved user satisfaction scores by 35%.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">UX Designer</h3>
                <p className="text-muted-foreground mb-2">MedSolutions • 2017 - 2020</p>
                <p>
                  Designed interfaces for electronic health record systems. Conducted user research and usability
                  testing to improve clinical workflows. Collaborated with development teams to implement design
                  solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">UI/UX Designer</h3>
                <p className="text-muted-foreground mb-2">Digital Health Agency • 2015 - 2017</p>
                <p>
                  Created user interfaces for healthcare applications and websites. Developed visual design systems and
                  interaction patterns for multiple clients in the healthcare sector.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Master of Science in Human-Computer Interaction</h3>
                <p className="text-muted-foreground">University of Design • 2015</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Bachelor of Arts in Graphic Design</h3>
                <p className="text-muted-foreground">Design Institute • 2013</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <ul className="space-y-1">
                  <li>User Experience Design</li>
                  <li>User Interface Design</li>
                  <li>Interaction Design</li>
                  <li>Information Architecture</li>
                  <li>Design Systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Tools</h3>
                <ul className="space-y-1">
                  <li>Figma</li>
                  <li>Sketch</li>
                  <li>Adobe Creative Suite</li>
                  <li>Principle</li>
                  <li>Miro</li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <Button asChild>
                <Link href="/case-studies">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
