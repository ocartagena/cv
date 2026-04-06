import type { CVData } from '../types/cv'

export const cvData: CVData = {
  personal: {
    name: "Osmar Francisco Cartagena Nieto",
    title: "Desarrollador Full Stack",
    email: "osmarcartagena@outlook.com",
    phone: "+52 9838395278",
    location: "Cancun, Mexico",
    linkedin: "linkedin.com",
    github: "github.com",
    summary: "Desarrollador fullstack con experiencia en sistemas empresariales y operación continua. Enfocado en la estabilidad, optimización de procesos y rápida resolución de incidencias en producción. Experiencia trabajando con APIs, bases de datos y sistemas críticos. Orientado a resultados y soporte eficiente en entornos dinámicos.",
    avatar: "./src/data/images/IMG_2202.png"
  },
  experience: [
    {
      id: 1,
      company: "Santi Soluciones",
      position: "Desarrollador Fullstack",
      startDate: "Feb 2022",
      endDate: "Actual",
      description: [
        "Mantenimiento y mejora de sistemas empresariales en producción",
        "Desarrollo de APIs para integración entre sistemas",
        "Optimización de consultas SQL para mejorar tiempos de respuesta",
        "Resolución de incidencias críticas en operación diaria",
        "Implementación de mejoras sin afectar continuidad del servicio",
        "Colaboración con equipos bajo metodología ágil"
      ],
      technologies: ["Vue.js", "Node.js", "SQL", "C#", "ASPX"]
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
