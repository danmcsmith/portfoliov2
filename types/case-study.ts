export interface CaseStudy {
  id: string
  slug: string
  title: string
  description: string
  categories: string[]
  thumbnailImage?: string
  coverImage?: string
  isProtected: boolean
  role?: string
  timeline?: string
  tools?: string[]
  problem?: string
  solution?: string
  outcomes?: string
}
