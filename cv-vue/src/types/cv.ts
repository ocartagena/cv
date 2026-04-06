export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin?: string
  github?: string
  website?: string
  summary: string
  avatar?: string
}

export interface Experience {
  id: number
  company: string
  position: string
  startDate: string
  endDate: string
  description: string[]
  technologies: string[]
}

export interface Education {
  id: number
  institution: string
  degree: string
  startDate: string
  endDate: string
  description?: string
}

export interface Skill {
  category: string
  items: string[]
}

export interface CVData {
  personal: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: Skill[]
}
