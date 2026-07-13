# Proyecto Comunidad Rural Autosustentable

Documentación del proyecto para formar una comunidad de familias en un terreno rural compartido, con viviendas propias y producción colaborativa de alimentos, agua y energía.

## Contenido

- **[PROYECTO.md](./PROYECTO.md)** — Documento completo del proyecto: visión, objetivos, criterios del terreno, marco legal, modelo económico, gobernanza, plan de autosuficiencia, etapas y riesgos.
- **[CONVOCATORIA.md](./CONVOCATORIA.md)** — Textos listos para difundir (versión completa y versión corta), formulario de interés y guion para la primera reunión informativa.
- **[web/index.html](./web/index.html)** — Landing web de la convocatoria ("Tierra Común"): página autocontenida (un solo archivo, sin dependencias) con la propuesta, calculadora de aporte por familia, hoja de ruta, preguntas frecuentes y formulario de interés que envía por WhatsApp o email.

## La página web

- **Configurar contacto:** abrir `web/index.html` y completar el bloque `CONFIG` al inicio del `<script>` (WhatsApp con código de país, email y zona de búsqueda). Hasta que se configure, el formulario genera el mensaje y ofrece copiarlo.
- **Publicar:** el archivo funciona tal cual en cualquier hosting estático (GitHub Pages, Netlify, Vercel) o incluso enviado como archivo. No necesita build ni servidor.
- **Temas:** se adapta automáticamente al modo claro/oscuro del visitante, con botón para alternar.

## Cómo usar estos documentos

1. Leer y ajustar `PROYECTO.md` a tu realidad (zona, cantidad de familias, montos).
2. Completar los datos de contacto en `CONVOCATORIA.md` y publicar.
3. Usar el guion de reunión para el primer encuentro con interesados.
4. Con el grupo formado, revisar cada sección del proyecto en asamblea y validar el marco legal con un abogado/escribano local.
