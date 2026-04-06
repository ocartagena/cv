import type { CVData } from '../types/cv'

export const cvData: CVData = {
  personal: {
    name: "Tu Nombre Completo",
    title: "Desarrollador Full Stack / Tu Profesión",
    email: "tu.email@ejemplo.com",
    phone: "+52 123 456 7890",
    location: "Ciudad, País",
    linkedin: "linkedin.com/in/tuusuario",
    github: "github.com/tuusuario",
    website: "tuwebsite.com",
    summary: "Profesional con más de X años de experiencia en desarrollo de software, especializado en tecnologías web modernas. Apasionado por crear soluciones eficientes, escalables y con excelente experiencia de usuario. Capaz de trabajar en equipo y liderar proyectos técnicos.",
    avatar: "https://ui-avatars.com/api/?name=Tu+Nombre&size=200&background=3b82f6&color=fff"
  },
  experience: [
    {
      id: 1,
      company: "Nombre Empresa 1",
      position: "Desarrollador Senior",
      startDate: "Ene 2022",
      endDate: "Actual",
      description: [
        "Desarrollo y mantenimiento de aplicaciones web empresariales",
        "Liderazgo técnico de equipo de 5 desarrolladores",
        "Implementación de arquitectura de microservicios",
        "Optimización de rendimiento reduciendo tiempos de carga en 40%"
      ],
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      id: 2,
      company: "Nombre Empresa 2",
      position: "Desarrollador Full Stack",
      startDate: "Mar 2019",
      endDate: "Dic 2021",
      description: [
        "Creación de sistemas de gestión interna",
        "Integración de APIs REST y GraphQL",
        "Automatización de procesos con CI/CD"
      ],
      technologies: ["React", "TypeScript", "Express", "MongoDB"]
    }
  ],
  education: [
    {
      id: 1,
      institution: "Universidad Nacional",
      degree: "Ingeniería en Sistemas Computacionales",
      startDate: "2015",
      endDate: "2019",
      description: "Graduado con honores"
    }
  ],
  skills: [
    {
      category: "Lenguajes",
      items: ["JavaScript", "TypeScript", "Python", "Go", "SQL"]
    },
    {
      category: "Frameworks",
      items: ["Vue.js 3", "Nuxt", "React", "Next.js", "Express", "FastAPI"]
    },
    {
      category: "Bases de Datos",
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      category: "Herramientas",
      items: ["Git", "Docker", "AWS", "Kubernetes", "Linux"]
    }
  ]
}
