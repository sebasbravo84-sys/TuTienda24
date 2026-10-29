import { pricingPlans } from '../PRECIOS.js';

// Páginas de servicio por zona. Para sumar una ciudad, agregá un objeto acá:
// se crea la ruta, el prerender, el sitemap, llms.txt y el enlace del pie solos.
// Catamarca es la sede (local: true); el resto se atiende 100% a distancia.
const desde = pricingPlans[0].price;

export const cities = [
  {
    slug: 'catamarca',
    path: '/diseno-web-catamarca',
    name: 'Catamarca',
    local: true,
    title: 'Diseño Web en Catamarca: Precios y Planes | TuTienda24',
    description: `Páginas web para comercios y PYMES de Catamarca. Planes desde $${desde} pago único, entrega en 7 a 10 días hábiles, catálogo por WhatsApp y SEO local.`,
    h1: 'Diseño web en Catamarca para tu comercio o PYME',
    intro: 'Somos de San Fernando del Valle de Catamarca. Diseñamos páginas web a medida para negocios de la provincia: rápidas, pensadas para el celular y listas para vender por WhatsApp.',
    rubros: ['Comercios y tiendas', 'Gastronomía y panaderías', 'Salud y profesionales', 'Turismo y alojamientos', 'Artesanías y productos regionales', 'Servicios y oficios'],
  },
  {
    slug: 'cordoba',
    path: '/diseno-web-cordoba',
    name: 'Córdoba',
    title: 'Diseño Web en Córdoba para Negocios y PYMES | TuTienda24',
    description: `Hacemos páginas web a distancia para negocios de Córdoba. Planes desde $${desde} pago único, entrega en 7 a 10 días hábiles, catálogo por WhatsApp y SEO local.`,
    h1: 'Diseño web para negocios de Córdoba',
    intro: 'Hacemos tu página web a distancia, sin que tengas que moverte de Córdoba: reunión por videollamada, seguimiento por WhatsApp y entrega online.',
    rubros: ['Comercios y tiendas', 'Gastronomía', 'Servicios profesionales', 'Educación y capacitaciones', 'Emprendimientos y tecnología', 'Oficios y servicios técnicos'],
  },
  {
    slug: 'tucuman',
    path: '/diseno-web-tucuman',
    name: 'Tucumán',
    title: 'Diseño Web en Tucumán para Negocios y PYMES | TuTienda24',
    description: `Hacemos páginas web a distancia para negocios de Tucumán. Planes desde $${desde} pago único, entrega en 7 a 10 días hábiles, catálogo por WhatsApp y SEO local.`,
    h1: 'Diseño web para negocios de Tucumán',
    intro: 'Trabajamos desde Catamarca con negocios de Tucumán: armamos tu página a medida, la probás en línea y la lanzamos juntos, todo por videollamada y WhatsApp.',
    rubros: ['Comercios y tiendas', 'Gastronomía', 'Salud y estética', 'Indumentaria y textil', 'Eventos y servicios', 'Oficios y servicios técnicos'],
  },
  {
    slug: 'la-rioja',
    path: '/diseno-web-la-rioja',
    name: 'La Rioja',
    title: 'Diseño Web en La Rioja para Negocios y PYMES | TuTienda24',
    description: `Hacemos páginas web a distancia para negocios de La Rioja. Planes desde $${desde} pago único, entrega en 7 a 10 días hábiles, catálogo por WhatsApp y SEO local.`,
    h1: 'Diseño web para negocios de La Rioja',
    intro: 'Somos una agencia vecina, de Catamarca, y trabajamos con comercios y emprendedores de La Rioja: web a medida, catálogo por WhatsApp y presencia en Google.',
    rubros: ['Comercios', 'Productos regionales', 'Turismo y alojamientos', 'Gastronomía', 'Servicios profesionales', 'Oficios y servicios técnicos'],
  },
];
