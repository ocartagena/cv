# Guía de Despliegue en GitHub Pages

## 🚀 Opción 1: Despliegue Automático (Recomendado)

GitHub Actions desplegará automáticamente tu CV cada vez que hagas push a la rama main.

1. Edita `vite.config.ts` y reemplaza `NOMBRE-DEL-REPOSITORIO` con el nombre exacto de tu repositorio en GitHub:
```typescript
base: '/mi-curriculum-vue/'
```

2. Crea un repositorio en GitHub

3. Sube tu código:
```bash
git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/NOMBRE-DEL-REPOSITORIO.git
git push -u origin main
```

4. Activa GitHub Pages en tu repositorio:
   - Ve a Settings > Pages
   - En "Source" selecciona: **GitHub Actions**
   - Guarda los cambios

✅ ¡Listo! El workflow se ejecutará automáticamente y tu CV estará disponible en:
`https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`

---

## ⚡ Opción 2: Despliegue Manual

1. Configura la base path en `vite.config.ts`
2. Instala dependencias:
```bash
pnpm install
```

3. Ejecuta el deploy:
```bash
pnpm run deploy
```

4. Activa GitHub Pages:
   - Ve a Settings > Pages
   - Selecciona la rama `gh-pages`
   - Guarda

---

## ✅ Pasos finales

1. Personaliza tus datos en `src/data/cvData.ts`
2. Cada cambio que hagas y subas a main se desplegará automáticamente
3. El build y deploy tarda aproximadamente 1 minuto
