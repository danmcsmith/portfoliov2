"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Linkedin } from "lucide-react"
import { SiMedium } from "react-icons/si"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container pt-24 pb-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About me</h1>
        <p className="text-xl text-muted-foreground">
          Senior level product designer with experience designing in health and wellness.
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
                src="/dan-smith-portrait.jpg"
                alt="Dan Smith - Product Designer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:danmcsmith@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://dansmithlpc.medium.com/" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                  <SiMedium className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/dansmithdesigns/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
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
            <h2 className="text-2xl font-bold mb-4">Design with intention</h2>
            <div className="space-y-4 text-lg">
              <p>
                My origin story begins with 13 years as a licensed therapist. I worked in multiple clinics, with a wide spread of demographics, held private practices, and worked in the private and public sectors. It didn't matter what setting I was in, I noticed the same consistent problems. Our system is broken and people who need help the most were paying the price.
              </p>
              <p>
                Although my work as a provider was valuable, I wanted to help the lines of people not getting the care they deserved. I pivoted to product design and never looked back. A nerd at heart, ambitiously creative, and empathy-centric, I love designing beautiful digital mediums that have meaning and purpose. I'm mission driven, promoting the health and wellness of individuals at scale through product design.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Senior Product Designer</h3>
                <p className="text-muted-foreground mb-2">Optum • 2023 - Present</p>
                <p>
                  Current design leader for all AbleTo behavioral health products (consumer and provider facing). Lead designing an engaging cross-product consumer experience integrated with AbleTo's full suite while updating provider tools for session management.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Product Designer</h3>
                <p className="text-muted-foreground mb-2">AbleTo • 2021 - 2023</p>
                <p>
                  Led the design lifecycle for a mental health coaching app and integrated a referrals and care coordination platform into Optum's ecosystem. Served as the design lead on all therapy and provider products, designing for both consumer and provider-facing interfaces.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Contract Product Designer</h3>
                <p className="text-muted-foreground mb-2">Awesome Studios • 2021 (6 month contract)</p>
                <p>
                  Designed full product life cycles for the I Think I Have product and updated WowCare's care delivery experience. Utilized Figma for design and Builder.io for development, managing an external engineering team throughout the development process.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">UX/UI Specialization</h3>
                <p className="text-muted-foreground">CalArts • 2019 - 2020</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">M.S. in Clinical Mental Health Counseling</h3>
                <p className="text-muted-foreground">University of Wyoming • 2010 - 2012</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">B.S. in Psychology, B.S. in Business Management</h3>
                <p className="text-muted-foreground">Northern Arizona University • 2004 - 2009</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Design</h3>
                <ul className="space-y-1">
                  <li>Interaction design</li>
                  <li>Mobile and desktop (webapp)</li>
                  <li>Prompt engineering</li>
                  <li>Healthcare product design</li>
                  <li>User Experience Research (UXR)</li>
                  <li>Rapid prototyping</li>
                  <li>Design strategy</li>
                  
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Tools</h3>
                <ul className="space-y-1">
                  <li>Figma</li>
                  <li>Maze</li>
                  <li>v0</li>
                  <li>Cursor</li>
                  <li>Adobe</li>
                  <li>Jira</li>
                  <li>Asana</li>
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
