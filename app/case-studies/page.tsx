"use client"

import { motion } from "framer-motion"
import { caseStudies } from "@/data/case-studies"
import CaseStudyCard from "@/components/case-study-card"

export default function CaseStudiesPage() {
  return (
    <div className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Work</h1>
        <p className="text-xl text-muted-foreground">
          Explore my work in healthcare product design, showcasing problem-solving approaches and design processes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CaseStudyCard caseStudy={study} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
