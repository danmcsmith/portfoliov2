"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Lock } from "lucide-react"
import type { CaseStudy } from "@/types/case-study"

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/case-studies/${caseStudy.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={caseStudy.thumbnailImage || "/placeholder.svg?height=600&width=800"}
            alt={caseStudy.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
              isHovered ? "opacity-70" : "opacity-0"
            }`}
          />

          {/* Protected indicator */}
          {caseStudy.isProtected && (
            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
              <Lock className="h-4 w-4" />
            </div>
          )}
        </div>

        <div className="p-4 bg-card">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{caseStudy.title}</h3>

          <p className="text-muted-foreground line-clamp-2 mb-4">{caseStudy.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.categories.map((category) => (
              <span key={category} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                {category}
              </span>
            ))}
          </div>

          <div className="flex items-center text-sm font-medium text-accent">
            View Case Study <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
