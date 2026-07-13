# Proyecto Comunidad Rural Autosustentable

Documentación del proyecto para formar una comunidad de familias en un terreno rural compartido, con viviendas propias y producción colaborativa de alimentos, agua y energía.

## Contenido

- **[PROYECTO.md](./PROYECTO.md)** — Documento completo del proyecto: visión, objetivos, criterios del terreno, marco legal, modelo económico, gobernanza, plan de autosuficiencia, etapas y riesgos.
- **[CONVOCATORIA.md](./CONVOCATORIA.md)** — Textos listos para difundir (versión completa y versión corta), formulario de interés y guion para la primera reunión informativa.
- **[web/index.html](./web/index.html)** — Landing web de la convocatoria ("Tierra Común"): página autocontenida (un solo archivo, sin dependencias) con la propuesta, calculadora de aporte por familia, hoja de ruta, preguntas frecuentes y formulario de lista de espera que envía directo por WhatsApp.
- **[LISTA-DE-ESPERA.md](./LISTA-DE-ESPERA.md)** — Sistema de seguimiento de interesados: estados, criterios de priorización y ritmo de la convocatoria.
- **[lista-de-espera.csv](./lista-de-espera.csv)** — Plantilla de la planilla de seguimiento, lista para importar en Google Sheets o Excel.
- **[INVITACIONES.md](./INVITACIONES.md)** — Mensajes de WhatsApp listos para invitar conocidos, hacer seguimiento y dar la bienvenida a los que se anotan.

## La página web

- **URL pública:** https://sebasbravo84-sys.github.io/TuTienda24/comunidad/ (GitHub Pages la despliega automáticamente desde `web/`, en una subruta del sitio TuTienda24 para no interferir con él).
- **Contacto configurado:** el formulario abre WhatsApp (3460 40-6121) con el mensaje del interesado ya armado. Para cambiar número, email o zona, editar el bloque `CONFIG` al inicio del `<script>` en `web/index.html`.
- **Temas:** se adapta automáticamente al modo claro/oscuro del visitante, con botón para alternar.

## Circuito de la convocatoria

1. Invitás con los mensajes de `INVITACIONES.md` (primero 1 a 1, a tus conocidos).
2. El interesado entra a la página y se anota → te llega su mensaje por WhatsApp.
3. Lo registrás en la planilla y le respondés (mensajes y estados en `LISTA-DE-ESPERA.md`).
4. Con 6–8 anotados, convocás la primera reunión informativa (guion en `CONVOCATORIA.md`).

## Cómo usar estos documentos

1. Leer y ajustar `PROYECTO.md` a tu realidad (zona, cantidad de familias, montos).
2. Completar los datos de contacto en `CONVOCATORIA.md` y publicar.
3. Usar el guion de reunión para el primer encuentro con interesados.
4. Con el grupo formado, revisar cada sección del proyecto en asamblea y validar el marco legal con un abogado/escribano local.
