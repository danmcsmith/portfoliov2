import type { CaseStudy } from "@/types/case-study"

export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    slug: "patient-portal-redesign",
    title: "Patient Portal Redesign",
    description:
      "Redesigning a patient portal to improve user experience and accessibility for patients managing their healthcare.",
    categories: ["UX Design", "Healthcare", "Accessibility"],
    thumbnailImage: "/placeholder.svg?height=600&width=800",
    coverImage: "/placeholder.svg?height=1080&width=1920",
    isProtected: true,
    role: "Lead Product Designer",
    timeline: "4 months",
    tools: ["Figma", "Miro", "Principle"],
    problem:
      "The existing patient portal had low adoption rates due to confusing navigation, complex workflows, and poor mobile experience. Patients struggled to access their health information and communicate with providers.",
    solution:
      "A redesigned portal with simplified navigation, streamlined workflows, and a responsive design that works across all devices. The new design prioritizes the most common tasks and improves accessibility.",
  },
  {
    id: "cs2",
    slug: "clinical-dashboard",
    title: "Clinical Dashboard for Healthcare Providers",
    description:
      "Creating an intuitive dashboard for healthcare providers to monitor patient data and make informed decisions.",
    categories: ["UI Design", "Data Visualization", "Healthcare"],
    thumbnailImage: "/placeholder.svg?height=600&width=800",
    coverImage: "/placeholder.svg?height=1080&width=1920",
    isProtected: true,
    role: "Senior UX Designer",
    timeline: "3 months",
    tools: ["Figma", "Sketch", "InVision"],
    problem:
      "Healthcare providers were overwhelmed by the amount of patient data available and struggled to quickly identify critical information during patient visits.",
    solution:
      "A dashboard that presents key patient information at a glance, with customizable views and visual indicators for abnormal results. The design reduces cognitive load and helps providers make faster, more informed decisions.",
  },
  {
    id: "cs3",
    slug: "telehealth-platform",
    title: "Telehealth Platform Experience",
    description:
      "Designing a telehealth platform that connects patients with healthcare providers for virtual consultations.",
    categories: ["Product Design", "Healthcare", "Mobile"],
    thumbnailImage: "/placeholder.svg?height=600&width=800",
    coverImage: "/placeholder.svg?height=1080&width=1920",
    isProtected: false,
    role: "Product Designer",
    timeline: "6 months",
    tools: ["Figma", "Protopie", "Maze"],
    problem:
      "The COVID-19 pandemic created an urgent need for remote healthcare solutions, but existing telehealth platforms were difficult to use, especially for elderly patients.",
    solution:
      "A user-friendly telehealth platform with simplified scheduling, clear pre-appointment instructions, and an intuitive video interface. The design includes accessibility features for users with varying abilities and technical expertise.",
  },
  {
    id: "cs4",
    slug: "medication-management-app",
    title: "Medication Management App",
    description: "Creating a mobile app to help patients manage their medications and improve adherence.",
    categories: ["Mobile Design", "Healthcare", "UX Research"],
    thumbnailImage: "/placeholder.svg?height=600&width=800",
    coverImage: "/placeholder.svg?height=1080&width=1920",
    isProtected: false,
    role: "UX/UI Designer",
    timeline: "5 months",
    tools: ["Figma", "Adobe XD", "Lookback"],
    problem:
      "Medication non-adherence is a major healthcare issue, leading to poor health outcomes and increased healthcare costs. Existing medication management tools were either too complex or lacked important features.",
    solution:
      "A simple, intuitive mobile app with medication reminders, easy-to-understand instructions, and progress tracking. The app includes features like pill identification, refill reminders, and side effect reporting.",
  },
  {
    id: "cs5",
    slug: "healthcare-provider-directory",
    title: "Healthcare Provider Directory",
    description:
      "Redesigning a provider directory to help patients find the right healthcare providers for their needs.",
    categories: ["Information Architecture", "Search Experience", "Healthcare"],
    thumbnailImage: "/placeholder.svg?height=600&width=800",
    coverImage: "/placeholder.svg?height=1080&width=1920",
    isProtected: true,
    role: "UX Architect",
    timeline: "3 months",
    tools: ["Figma", "Optimal Workshop", "Miro"],
    problem:
      "Patients struggled to find appropriate healthcare providers due to confusing search interfaces, incomplete information, and poor filtering options.",
    solution:
      "A redesigned provider directory with intuitive search, comprehensive filtering options, and detailed provider profiles. The new design helps patients make informed decisions about their healthcare providers.",
  },
  {
    id: "cs6",
    slug: "health-tracking-wearable",
    title: "Health Tracking Wearable Interface",
    description:
      "Designing the companion app for a health tracking wearable device focused on chronic condition management.",
    categories: ["Mobile Design", "IoT", "Healthcare"],
    thumbnailImage: "/placeholder.svg?height=600&width=800",
    coverImage: "/placeholder.svg?height=1080&width=1920",
    isProtected: false,
    role: "Product Designer",
    timeline: "7 months",
    tools: ["Figma", "Framer", "UserTesting"],
    problem:
      "Existing health tracking apps focused on fitness rather than chronic condition management, making them less useful for patients with ongoing health concerns.",
    solution:
      "A companion app that interprets health data in the context of specific chronic conditions, provides actionable insights, and facilitates sharing information with healthcare providers.",
  },
]
