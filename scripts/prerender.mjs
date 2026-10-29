// Postproceso del build:
//  - Genera un HTML por ruta pública con el contenido ya renderizado y sus metadatos propios
//  - Mantiene el JSON-LD (precios y FAQ) sincronizado con los datos reales del sitio
//  - Escribe llms.txt y llms-full.txt para agentes de IA
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { pricingPlans, sistemaPlan, PROMO_PRICE, PROMO_ORIGINAL_PRICE, PROMO_MES, PROMO_FEATURES } from '../src/PRECIOS.js';
import { projects } from '../src/data/projects.js';
import { faqs } from '../src/data/faq.js';

const SITE = 'https://tutienda24.com.ar';
const dist = path.resolve('dist');
const { render } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);

const routes = [
  { path: '/' },
  { path: '/guia-pro', title: '7 Secretos para Vender x3 Online | TuTienda24', description: 'Guía gratuita: 7 estrategias probadas para triplicar tus ventas con una página web profesional. SEO local, WhatsApp, catálogo digital y más. Por TuTienda24.' },
  { path: '/aliados', title: 'Programa de Aliados TuTienda24 · Ganá Comisiones Recomendando', description: 'Sumate al programa de aliados de TuTienda24 y ganá hasta $58.000 por proyecto referido. Sin inversión, sin límite de comisiones. Para toda Argentina.' },
  { path: '/terminos', title: 'Términos y Condiciones | TuTienda24', description: 'Términos y condiciones de servicio de TuTienda24: alcance, propiedad intelectual, pagos y cancelaciones.' },
  { path: '/privacidad', title: 'Política de Privacidad | TuTienda24', description: 'Cómo TuTienda24 recopila, usa y protege tus datos personales.' },
  { path: '/cookies', title: 'Política de Cookies | TuTienda24', description: 'Qué cookies usa el sitio de TuTienda24 y para qué.' },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const num = (price) => Number(price.replace(/\./g, ''));

// ---------- JSON-LD sincronizado con los datos reales ----------
function syncJsonLd(html) {
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
  const m = html.match(re);
  if (!m) throw new Error('No se encontró el JSON-LD en index.html');
  const data = JSON.parse(m[1]);
  const business = data['@graph'].find((n) => [].concat(n['@type']).includes('LocalBusiness'));
  const faqPage = data['@graph'].find((n) => n['@type'] === 'FAQPage');

  const offer = (name, description, price, anchor) => ({
    '@type': 'Offer',
    name,
    description,
    price: String(num(price)),
    priceCurrency: 'ARS',
    url: `${SITE}/${anchor}`,
  });
  business.hasOfferCatalog.itemListElement = [
    ...pricingPlans.map((p) => offer(p.name, p.features.join(', '), p.price, '#precios')),
    offer(sistemaPlan.name, sistemaPlan.features.join(', '), sistemaPlan.price, '#sistema'),
  ];
  faqPage.mainEntity = faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  }));
  return html.replace(re, `<script type="application/ld+json">\n    ${JSON.stringify(data, null, 2).replace(/\n/g, '\n    ')}\n    </script>`);
}

// ---------- Metadatos por ruta ----------
function withMeta(html, route) {
  if (!route.title) return html;
  const url = SITE + route.path;
  const set = (re, replacement) => {
    if (!re.test(html)) throw new Error(`Etiqueta no encontrada para ${route.path}: ${re}`);
    html = html.replace(re, replacement);
  };
  set(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`);
  set(/<meta name="title" content="[^"]*" \/>/, `<meta name="title" content="${esc(route.title)}" />`);
  set(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(route.description)}" />`);
  set(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
  set(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  set(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(route.title)}" />`);
  set(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(route.description)}" />`);
  set(/<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${url}" />`);
  set(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(route.title)}" />`);
  set(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(route.description)}" />`);
  return html;
}

// ---------- HTML por ruta ----------
const shell = syncJsonLd(await readFile(path.join(dist, 'index.html'), 'utf8'));
const marker = '<div id="root"></div>';
if (!shell.includes(marker)) throw new Error('No se encontró el contenedor #root en dist/index.html');

await writeFile(path.join(dist, 'app-shell.html'), shell);
for (const route of routes) {
  const body = await render(route.path);
  const html = withMeta(shell, route).replace(marker, `<div id="root" data-prerendered="${route.path}">${body}</div>`);
  const file = route.path === '/' ? 'index.html' : path.join(route.path.slice(1), 'index.html');
  await mkdir(path.dirname(path.join(dist, file)), { recursive: true });
  await writeFile(path.join(dist, file), html);
}

// ---------- llms.txt / llms-full.txt ----------
const money = (p) => `$${p} ARS`;
const planLine = (p) => `- [${p.name}](${SITE}/#precios): ${money(p.price)}, ${p.setup}. Incluye: ${p.features.join('; ')}.`;
const intro = `# TuTienda24

> Agencia de diseño web de San Fernando del Valle de Catamarca, Argentina. Hace páginas web a medida, catálogos con pedidos por WhatsApp, tiendas online y apps para comercios, emprendedores y PYMES de toda Argentina. Los precios son pago único, sin abonos mensuales obligatorios.`;
const contact = `## Contacto

- Sitio: ${SITE}/
- WhatsApp: https://wa.me/543460406121
- Email: info@tutienda24.com.ar
- Instagram: https://www.instagram.com/tutienda24
- Ubicación: San Fernando del Valle de Catamarca, Catamarca, Argentina
- Atención: lunes a viernes de 9 a 20 h (hora de Argentina)
- Para pedir una propuesta: escribir por WhatsApp o al email indicado`;
const promo = `Promoción de ${PROMO_MES}: Plan Despegue Digital a ${money(PROMO_PRICE)} (precio normal ${money(PROMO_ORIGINAL_PRICE)}), con cupos limitados.`;

const llms = `${intro}

Los precios están en pesos argentinos (ARS). Los valores que figuran acá se generan desde la misma configuración que el sitio, y pueden cambiar: confirmá siempre en ${SITE}/#precios.

## Planes y precios

${pricingPlans.map(planLine).join('\n')}
- [${sistemaPlan.name}](${SITE}/#sistema): ${money(sistemaPlan.price)}, ${sistemaPlan.setup}. ${sistemaPlan.tagline}
- ${promo}

## Trabajos realizados

${projects.map((p) => `- [${p.title}](${p.url}): ${p.category}. ${p.description}`).join('\n')}

## Páginas del sitio

- [Inicio](${SITE}/): servicios, portfolio, precios y preguntas frecuentes
- [Guía: 7 secretos para vender x3 online](${SITE}/guia-pro): guía gratuita
- [Programa de aliados](${SITE}/aliados): comisión del 10% por cada proyecto referido
- [Términos y condiciones](${SITE}/terminos)
- [Política de privacidad](${SITE}/privacidad)

${contact}

## Opcional

- [Texto completo con detalles y preguntas frecuentes](${SITE}/llms-full.txt)
`;

const llmsFull = `${intro}

${promo}

## Planes y precios

${[...pricingPlans, sistemaPlan].map((p) => `### ${p.name}

Precio: ${money(p.price)} (${p.setup})
${p.tagline ? `${p.tagline}\n` : ''}
${p.features.map((f) => `- ${f}`).join('\n')}`).join('\n\n')}

### Plan Despegue Digital (promoción de ${PROMO_MES})

Precio: ${money(PROMO_PRICE)} (precio normal ${money(PROMO_ORIGINAL_PRICE)})

${PROMO_FEATURES.map((f) => `- ${f}`).join('\n')}

## Preguntas frecuentes

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}

## Trabajos realizados

${projects.map((p) => `### ${p.title}\n\nRubro: ${p.category}\nSitio: ${p.url}\n\n${p.description}`).join('\n\n')}

${contact}
`;

await writeFile(path.join(dist, 'llms.txt'), llms);
await writeFile(path.join(dist, 'llms-full.txt'), llmsFull);
console.log(`Prerender listo: ${routes.length} rutas, llms.txt y llms-full.txt`);
