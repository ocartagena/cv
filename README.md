# Curriculum Vitae - Vue 3 + TypeScript

Página web responsive para mostrar tu curriculum vitae, construida con Vue 3 Composition API y TypeScript.

## Características

✅ Diseño moderno y profesional
✅ Totalmente responsive (móvil, tablet, desktop)
✅ Optimizado para impresión
✅ Tipado estricto con TypeScript
✅ Fácil de personalizar
✅ Componentes organizados

## Instalación

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Previsualizar build
pnpm preview
```

## Personalizar tu CV

Edita el archivo `src/data/cvData.ts` con tu información personal:

```typescript
export const cvData: CVData = {
  personal: {
    name: "Tu Nombre",
    title: "Tu Profesión",
    // ... resto de tu información
  },
  experience: [
    // Tus experiencias laborales
  ],
  education: [
    // Tu formación académica
  ],
  skills: [
    // Tus habilidades técnicas
  ]
}
```

## Estructura del proyecto

```
cv-vue/
├── src/
│   ├── components/
│   ├── types/          # Interfaces TypeScript
│   │   └── cv.ts
│   ├── data/           # Datos del curriculum
│   │   └── cvData.ts
│   ├── App.vue         # Componente principal
│   ├── main.ts
│   └── style.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Tecnologías utilizadas

- Vue 3 (Composition API)
- TypeScript
- Vite
- CSS Moderno (Grid + Flexbox)
