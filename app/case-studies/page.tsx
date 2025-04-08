"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { caseStudies } from "@/data/case-studies"
import CaseStudyCard from "@/components/case-study-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Get unique categories from case studies
const categories = ["All", ...Array.from(new Set(caseStudies.flatMap((study) => study.categories)))]

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredStudies =
    activeCategory === "All" ? caseStudies : caseStudies.filter((study) => study.categories.includes(activeCategory))

  return (
    <div className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
        <p className="text-xl text-muted-foreground">
          Explore my work in healthcare product design, showcasing problem-solving approaches and design processes.
        </p>
      </motion.div>

      <Tabs defaultValue="All" className="mb-12">
        <TabsList className="mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStudies.map((study, index) => (
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

      {filteredStudies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No case studies found in this category.</p>
        </div>
      )}
    </div>
  )
}
