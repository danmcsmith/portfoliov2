import type { CaseStudy } from "@/types/case-study"

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-consent",
    slug: "therapy-consent",
    title: "Consent to Treat",
    description: "By early 2024, AbleTo—freshly integrated into Optum—offered a diverse product suite ranging from digital self-help to clinician-guided therapy. Compliance regulations required a robust approach to ensure every participant completed their \"Consent to Treat\" documentation before initiating care.",
    categories: ["Healthcare", "Consumer Facing", "Desktop", "Mobile"],
    thumbnailImage: "/therapyconsent-cover-thumbnail.jpg",
    coverImage: "/therapyconsent-cover.jpg",
    isProtected: false,
    role: "Senior Product Designer",
    timeline: "1 Month (March 2024)",
    date: "2024",
    tools: ["Figma", "Adobe Acrobat Sign", "Jira"],
    problem: "Several states mandate that therapy participants provide signed 'Consent to Treat' documentation—digitally or in writing—before care begins. A legal audit in January 2024 revealed that AbleTo's collection rate was under 50%, far below compliance needs. This posed significant risk, not only from a regulatory perspective but also for consumer onboarding friction and potential therapy engagement drop-off.",
    solution: "The onboarding experience was restructured so that new users encountered a concise, friendly message explaining the importance of signing the consent form early—framed as the beginning of their care journey. Users had the option to 'sign now' or 'I'll sign it later,' balancing legal needs with user desire for quick access. Skipping surfaced reminders and re-engagement nudges ahead of the first session. Consent forms, privacy policies, and participation agreements were easily accessible in the 'Forms and Documents' section, reducing confusion and offering transparency. Multiple interaction points—provider reminders, in-app nudges, and system prompts—helped ensure the form was completed prior to any in-person clinical engagement.",
    outcomes: "At launch, the signing completion rate increased from under 50% to 80% for commercial users. Commercial: 85%, Medicaid: 76%, Medicare Advantage: 54%. This improvement was especially pronounced among Optum's commercial customer base; Medicaid and Medicare metrics identified key areas for future iteration."
  },
  {
    id: "cs1",
    slug: "coaching-plus-product",
    title: "Designing the Coaching+ MVP",
    description:
      "Designing the MVP for AbleTo's subclinical, protocolized 8 week mental health coaching product. The project included designing three main features; Home, Explore, and Sessions. As the lead on this project, my role involved not only designing the experience but also cross-functional team management, workshop design, senior leadership presentation, and design systems updates. We will take a deeper dive into designing the Home feature — the participant's coaching activities and upcoming sessions.",
    categories: ["Healthcare", "Mobile", "Desktop", "Consumer Facing"],
    thumbnailImage: "/home-cover-thumbnail.jpg?height=600&width=800",
    coverImage: "/home-cover.jpg?height=1080&width=1920",
    isProtected: false,
    role: "Lead Product Designer",
    timeline: "1 year",
    date: "2023",
    tools: ["Figma", "Jira", "Confluence", "Maze"],
    problem:
      "In 2017, AbleTo acquired Joyable, a CBT digital curriculum accompanied by mental health coaching. First iteration was reskin Joyable to AbleTo branding and rename to Digital+. Noticing dropoff rates and negative reviews, AbleTo decided to pivot. Letting clinical take the lead, AbleTo decided on redesigning the product to be a coaching-first product with supplemental digital CBT activities.",
    solution:
      "A redesigned portal with simplified navigation, streamlined workflows, and a responsive design that works across all devices. The new design prioritizes the most common tasks and improves accessibility.",
  },
  {
    id: "cs2",
    slug: "explore-feature",
    title: "Designing the Explore feature",
    description:
      "Around 2022, AbleTo and Sanvello merged. Sanvello had a rich content library, however the information architecture (IA) did not fit in AbleTo's ecosystem. As the consumer-facing designer, I lead the design efforts in creating the IA structure, layout, and interaction experience for all AbleTo and the newly merged content from Sanvello.\n\nExplore, the consumer-facing housing of all content libraries at AbleTo, was a cross-product initiative that required consideration of all product IA's in order to make a cohesive, universal experience.",
    categories: ["Mobile", "Desktop", "Healthcare", "Information Architecture"],
    thumbnailImage: "/explore-cover-thumbnail.jpg?height=600&width=800",
    coverImage: "/explore-cover.jpg?height=1080&width=1920",
    isProtected: false,
    role: "Product Designer",
    timeline: "8 months",
    date: "2022",
    tools: ["Figma", "Maze", "Miro"],
    problem:
      "AbleTo did not have a consumer-facing content library built. After the content library migrated from Sanvello, we needed a scalable IA that could encompass both AbleTo content and Sanvello content. In addition, new content was roadmapped thus the IA had to be flexible. Finally, Explore was a cross-product initiative thus the IA had to make sense for all products it lived in.",
    solution:
      "A dashboard that presents key patient information at a glance, with customizable views and visual indicators for abnormal results. The design reduces cognitive load and helps providers make faster, more informed decisions.",
  },
  {
    id: "cs5",
    slug: "karuna",
    title: "Karuna: Clinical Treatment LMS",
    description:
      "Karuna is a high level concept of a mental health treatment LMS. Essentially an LMS tooling for providers with a conected consumer-facing product. Providers can search a library of Evidence-Based Treatments (EBT)s to build treatments to push to their clients. This is a deeper look into the project from problem to high-fidelity mocks.",
    categories: ["Consumer Facing", "Mobile", "Tooling", "Concept"],
    thumbnailImage: "/karuna-cover-thumbnail.jpg",
    coverImage: "/karuna-cover.jpg",
    isProtected: false,
    role: "Product Designer",
    timeline: "3 months",
    date: "2020",
    tools: ["Figma", "Balsamiq", "Principle"],
    problem:
      "There are several competing EHRs, EMRs, and Care Delivery platforms, all being used in the mental health treatment space. However, there are limited options for LMS specically for building mental health therapy treatments. The care delivery platforms that have integrated treatment content are proprietary and part of protocolized treatments within companies like Lyra and Ginger. By creating a rich content library of clinical treatments including video, handouts, animations, and exercises, providers can build their own treatments and push content directly to patients, modernizing their practice and see results in their patient's progress",
    solution:
      "A redesigned provider directory with intuitive search, comprehensive filtering options, and detailed provider profiles. The new design helps patients make informed decisions about their healthcare providers.",
  }
]
