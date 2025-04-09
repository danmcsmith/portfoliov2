"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CaseStudyCard from "@/components/case-study-card"
import { caseStudies } from "@/data/case-studies"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    document.documentElement.classList.add("has-custom-cursor")

    return () => {
      document.documentElement.classList.remove("has-custom-cursor")
    }
  }, [])

  return (
    <div ref={containerRef} className="grain-texture">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Abstract background"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Product design with people in mind</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Creating intuitive digital products that improve outcomes and experiences.
            </p>
            <Button asChild size="lg">
              <Link href="/case-studies">
                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Featured Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CaseStudyCard caseStudy={study} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">
                View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a product designer with a mission of promoting individual wellbeing at scale through thoughtful design experience.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Designer portrait"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
