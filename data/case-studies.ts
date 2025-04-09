import type { CaseStudy } from "@/types/case-study"

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-consent",
    slug: "therapy-consent",
    title: "Therapy Consent to Treat",
    description: "Designing the HIPAA compliant consumer-facing treatment documentation onboarding experience at Optum",
    categories: ["Healthcare", "Consumer Facing", "Coming Soon"],
    thumbnailImage: "/placeholder.svg?height=600&width=800",
    coverImage: "/placeholder.svg?height=1080&width=1920",
    isProtected: true,
    role: "Lead Product Designer",
    timeline: "Coming Soon",
    tools: ["Figma", "Miro", "Maze"],
  },
  {
    id: "cs1",
    slug: "coaching-plus-product",
    title: "Designing the Coaching+ MVP",
    description:
      "Designing the MVP for AbleTo's subclinical, protocolized 8 week mental health coaching product. The project included designing three main features; Home, Explore, and Sessions. As the lead on this project, my role involved not only designing the experience but also cross-functional team management, workshop design, senior leadership presentation, and design systems updates. We will take a deeper dive into designing the Home feature — the participant's coaching activities and upcoming sessions.",
    categories: ["Healthcare", "Mobile", "Desktop", "Consumer Facing"],
    thumbnailImage: "/placeholder.svg?height=600&width=800",
    coverImage: "/placeholder.svg?height=1080&width=1920",
    isProtected: true,
    role: "Lead Product Designer",
    timeline: "1 year",
    tools: ["Figma", "Jira", "Confluence", "Maze"],
    problem:
      "In 2017, AbleTo acquired Joyable, a CBT digital curriculum accompanied by mental health coaching. First iteration was reskin Joyable to AbleTo branding and rename to Digital+. Noticing dropoff rates and negative reviews, AbleTo decided to pivot. Letting clinical take the lead, AbleTo decided on redesigning the product to be a coaching-first product with supplemental digital CBT activities.",
    solution:
      "A redesigned portal with simplified navigation, streamlined workflows, and a responsive design that works across all devices. The new design prioritizes the most common tasks and improves accessibility.",
  },
  {
    id: "cs2",
    slug: "explore-feature",
    title: "Explore Feature",
    description:
      "Creating an intuitive dashboard for healthcare providers to monitor patient data and make informed decisions.",
    categories: ["Desktop", "Healthcare", "Information Architecture"],
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
    slug: "scheduling",
    title: "Scheduling",
    description:
      "Designing a telehealth platform that connects patients with healthcare providers for virtual consultations.",
    categories: ["Mobile", "Healthcare", "Consumer Facing"],
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
    slug: "checkout",
    title: "Checkout",
    description: "Creating a mobile app to help patients manage their medications and improve adherence.",
    categories: ["Mobile", "MVP", "Consumer Facing"],
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
    slug: "karuna",
    title: "Karuna",
    description:
      "Redesigning a provider directory to help patients find the right healthcare providers for their needs.",
    categories: ["Desktop", "Healthcare", "Tooling", "Information Architecture"],
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
  }
]
