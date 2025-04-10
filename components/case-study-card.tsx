"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Lock, Clock } from "lucide-react"
import type { CaseStudy } from "@/types/case-study"

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isComingSoon = caseStudy.categories.includes("Coming Soon")

  const CardContent = () => (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={caseStudy.thumbnailImage || "/placeholder.svg?height=600&width=800"}
          alt={caseStudy.title}
          fill
          className={`object-cover transition-transform duration-500 ${isComingSoon ? "blur-sm" : ""} ${
            isHovered ? "scale-105" : ""
          }`}
        />

        {/* Coming Soon Overlay */}
        {isComingSoon && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-6 text-center">
            <Clock className="h-8 w-8 mb-3" />
            <h4 className="text-lg font-semibold mb-2">Coming Soon</h4>
            <p className="text-sm text-white/80">This case study is currently in development</p>
          </div>
        )}

        {/* Standard Overlay */}
        {!isComingSoon && (
          <div
            className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
              isHovered ? "opacity-70" : "opacity-0"
            }`}
          />
        )}

        {/* Protected indicator */}
        {caseStudy.isProtected && !isComingSoon && (
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
            <Lock className="h-4 w-4" />
          </div>
        )}
      </div>

      <div className="p-4 bg-card">
        <div className="flex items-center text-xs text-muted-foreground mb-1">
          <span>{caseStudy.date || "2023"}</span>
        </div>

        <h3 className={`text-xl font-semibold mb-2 ${!isComingSoon ? "group-hover:text-accent" : ""} transition-colors`}>
          {caseStudy.title}
        </h3>

        <p className="text-muted-foreground line-clamp-2 mb-4">{caseStudy.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.categories.filter(cat => cat !== "Coming Soon").map((category) => (
            <span key={category} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
              {category}
            </span>
          ))}
        </div>

        {isComingSoon ? (
          <div className="flex items-center text-sm font-medium text-foreground">
            Check Back Soon!
          </div>
        ) : (
          <div className="flex items-center text-sm font-medium text-accent">
            View project <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        )}
      </div>
    </>
  )

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={!isComingSoon ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
    >
      {isComingSoon ? (
        <div className="cursor-default">
          <CardContent />
        </div>
      ) : (
        <Link href={`/case-studies/${caseStudy.slug}`}>
          <CardContent />
        </Link>
      )}
    </motion.div>
  )
}
