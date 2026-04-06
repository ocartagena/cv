import type { CVData } from '../types/cv'

export const cvData: CVData = {
  personal: {
    name: "Osmar Francisco Cartagena Nieto",
    title: "Desarrollador Full Stack",
    email: "osmarcartagena97@gmail.com",
    phone: "+52 9838395278",
    location: "Ciudad, País",
    linkedin: "linkedin.com/in/tuusuario",
    github: "github.com/tuusuario",
    website: "tuwebsite.com",
    summary: "Desarrollador fullstack con experiencia en sistemas empresariales y operación continua. Enfocado en la estabilidad, optimización de procesos y rápida resolución de incidencias en producción. Experiencia trabajando con APIs, bases de datos y sistemas críticos. Orientado a resultados y soporte eficiente en entornos dinámicos.",
    avatar: "./src/data/images/IMG_2202.png"
  },
  experience: [
    {
      id: 1,
      company: "Santi Soluciones",
      position: "Desarrollador Fullstack",
      startDate: "Feb∂ 2022",
      endDate: "Actual",
      description: [
        "Desarrollo y mantenimiento de aplicaciones web empresariales",
        "Liderazgo técnico de equipo de 5 desarrolladores",
        "Implementación de arquitectura de microservicios",
        "Optimización de rendimiento reduciendo tiempos de carga en 40%"
      ],
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
  ],
  education: [
    {
      id: 1,
      institution: "Instituto Tecnologico de Cancun",
      degree: "Ingeniería en Sistemas Computacionales",
      startDate: "2016",
      endDate: "2021",
      description: "Graduado con honores"
    }
  ],
  skills: [
    {
      category: "Lenguajes",
      items: ["JavaScript", "TypeScript", "SQL", "C#s"]
    },
    {
      category: "Frameworks",
      items: ["Vue.js 3", "React", "Next.js", "Express", "FastAPI"]
    },
    {
      category: "Bases de Datos",
      items: ["PostgreSQL", "SQL"]
    },
    {
      category: "Herramientas",
      items: ["Git", "Azure DevOps", "Postman", "IA"]
    }
  ]
}
