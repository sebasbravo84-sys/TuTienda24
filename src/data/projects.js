// Portfolio: fuente única para el sitio y para llms.txt
const projectImages = {
  glow:       "/glow-preview.jpg",
  lipipalu:   "/lipipalu-preview.jpg",
  voltax:     "/voltax-preview.jpg",
  dentista:   "/corcent-preview.jpg",
  finnex:     "/finnex-preview.jpg",
  precision:  "/precision-preview.jpg",
  medialunas: "/medialunas-preview.jpg",
  buba:       "/buba-preview.jpg",
  caylle:     "/caylle-preview.jpg",
};

export const projects = [
  { id: 1, title: "Glow",                     category: "App de Dictado por Voz",   image: projectImages.glow, imgH: 8444,       url: "https://getglow.pro/",                         description: "Aplicación nativa para macOS que convierte la voz en texto dentro de cualquier programa. Transcripción con IA en quince idiomas y refinado automático según el tono elegido." },
  { id: 2, title: "Finnex",                   category: "App de Finanzas Personal", image: projectImages.finnex, imgH: 4469,     url: "https://finnex.site/",                         description: "PWA de gestión financiera personal: gastos, ingresos, metas de ahorro y reportes visuales. Sin cuentas, sin servidores, 100% offline y gratuita." },
  { id: 3, title: "Voltax Baterías",          category: "Servicios 24/7",           image: projectImages.voltax, imgH: 4469,     url: "https://voltaxbaterias.com.ar/",               description: "Solución digital de alto rendimiento para servicios de asistencia inmediata. Interfaz optimizada para conversión directa en situaciones de emergencia." },
  { id: 4, title: "CorCent | Clínica Dental", category: "Salud Premium",            image: projectImages.dentista, imgH: 3157,   url: "https://corcent.netlify.app/",                 description: "Presencia digital de élite para el sector odontológico. Diseño limpio y profesional orientado a captar nuevos pacientes desde el primer clic." },
  { id: 5, title: "Precision Quiropráctica",  category: "Salud Premium",            image: projectImages.precision, imgH: 3757,  url: "https://precision-quiropractica.netlify.app/", description: "Presencia digital de élite para quiropráctica especializada con método Gonstead. Diseño enfocado en transmitir confianza médica y convertir visitantes en pacientes." },
  { id: 6, title: "Las Medialunas de Gre",    category: "Panadería Artesanal",      image: projectImages.medialunas, imgH: 4500, url: "https://lasmedialunasdegre.netlify.app/",      description: "Catálogo digital para panadería local de Catamarca. Diseño cálido orientado a pedidos por WhatsApp con packs predefinidos y servicio de eventos." },
  { id: 7, title: "Buba Pet Shop",            category: "Tienda de Mascotas",       image: projectImages.buba, imgH: 4469,       url: "https://bubapetshop.com.ar/",             description: "Tienda online moderna para pet shop con catálogo de productos y diseño amigable. Experiencia de compra fluida orientada a dueños de mascotas." },
  { id: 8, title: "Caylle Mish",              category: "DJ & Productora Musical",  image: projectImages.caylle, imgH: 4158,     url: "https://caylle-mish.netlify.app/",             description: "Presencia digital inmersiva para DJ y productora de música electrónica de Catamarca. Diseño oscuro y cinematográfico con agenda de shows, sets en vivo y contrataciones." },
  { id: 9, title: "Lipipalu Concept",         category: "Accesorios de Autor",      image: projectImages.lipipalu, imgH: 2706,   url: "https://lipipalu.netlify.app/",                description: "Tienda de joyería y accesorios de autor con estética minimalista de lujo. Catálogo completo con colecciones exclusivas y experiencia de compra premium." },
];
