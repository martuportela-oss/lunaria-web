# Lunaria — sitio web

Sitio del estudio creativo Lunaria. Hecho con [Astro](https://astro.build). Identidad según el Manual de Marca 2026
(Azul `#1E3A52`, Crema `#F8F1E6`, Celeste `#AFC4D6`, Dorado `#D6B981`, tipografía Montserrat).

## Cómo correrlo

Requiere Node 20+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

## Dónde se edita cada cosa

| Qué                          | Dónde                       |
| ---------------------------- | --------------------------- |
| Textos, servicios, contacto  | `src/data/content.ts`       |
| Estructura de la página      | `src/pages/index.astro`     |
| Colores, tipografía, estilos | `src/styles/global.css`     |
| Logo e imágenes              | `src/assets/`               |

## Formulario de contacto

El formulario envía los datos con AJAX a FormSubmit, usando el correo configurado en `src/data/content.ts`. La primera vez, FormSubmit envía un correo de verificación a Lunaria que hay que confirmar una sola vez. A partir de ahí, las consultas llegan al correo sin abrir la aplicación de email del visitante.

Lo marcado con `TODO` en `content.ts` es provisorio (mail, redes, proyectos, historia).

## Flujo de trabajo entre dos personas

1. `main` siempre es lo que está publicado. No se hace push directo.
2. Cada cambio va en una rama: `git switch -c feat/nombre-del-cambio`.
3. Commits claros: `feat:`, `fix:`, `content:`.
4. Se abre un Pull Request y la otra persona lo revisa y aprueba antes de mergear.
5. Antes de empezar a trabajar: `git switch main && git pull`.
