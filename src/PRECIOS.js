// ================================================================
//  ARCHIVO DE CONFIGURACIÓN — TuTienda24
//  Editá este archivo para cambiar precios y contenido del sitio.
//  Los cambios se aplican solos en toda la web al hacer commit.
// ================================================================


// ---------------------------------------------------------------
//  PLAN DESPEGUE DIGITAL (la oferta destacada grande)
// ---------------------------------------------------------------
export const PROMO_PRICE          = "129.000";  // precio promocional
export const PROMO_ORIGINAL_PRICE = "159.000";  // precio tachado (el "antes")
export const PROMO_MES            = "Julio";     // mes que aparece en el cartel y el popup
export const PROMO_CUPOS          = "10";        // cupos disponibles que aparecen en el cartel

export const PROMO_FEATURES = [
  "Página web profesional lista para vender",
  "Catálogo de hasta 10 productos",
  "Checkout directo a tu WhatsApp",
  "Dominio .com.ar + Hosting (Bonificado 1 año)",
  "Tu negocio visible en Google Maps y en búsquedas de Google",
  "30 días de soporte técnico post-lanzamiento",
];


// ---------------------------------------------------------------
//  SISTEMA DE VENTAS DIGITAL (producto estrella)
// ---------------------------------------------------------------
export const sistemaPlan = {
  name:    "Sistema de Ventas Digital",
  price:   "250.000",
  setup:   "Pago único — sin costos mensuales",
  tagline: "No es una web. Es un sistema que trae clientes solo mientras vos atendés tu negocio.",
  features: [
    "Web profesional TuTienda24 completa",
    "Manychat — respuestas automáticas en Instagram DMs",
    "WhatsApp Business con catálogo y bienvenida automática",
    "Linktree — hub digital centralizado con todos tus canales",
    "Google Business Profile optimizado para búsquedas locales",
    "Capacitación de 1 hora para que lo manejés solo",
  ],
};


// ---------------------------------------------------------------
//  PLANES PRINCIPALES (sección de precios)
// ---------------------------------------------------------------
export const pricingPlans = [
  {
    id: 1,
    name: "Plan Catálogo",
    price: "159.000",
    setup: "Pago único (IVA incluido)",
    isPopular: false,
    features: [
      "Diseño Mobile First (Optimizado)",
      "Catálogo WhatsApp Pro (Vende Directo)",
      "Botonera de Ventas Estratégica",
      "SEO Local en Google Maps",
      "Hosting & Dominio por 1 año",
    ],
  },
  {
    id: 2,
    name: "Plan Corporativo",
    price: "295.000",
    setup: "Pago único (IVA incluido)",
    isPopular: true,
    features: [
      "Hasta 8 secciones personalizadas",
      "Formulario Leads Pro (Filtro experto)",
      "Blog de Contenidos Estratégicos",
      "Google Analytics 4 (Métricas reales)",
      "Soporte VIP 24/7 (Atención prioritaria)",
      "Capacitación para el equipo",
    ],
  },
  {
    id: 3,
    name: "Plan Élite 3D",
    price: "580.000",
    setup: "Pago único (IVA incluido)",
    isPopular: false,
    features: [
      "Interfaz Inmersiva 3D (Next-Gen)",
      "Animaciones de Nivel Triple A",
      "Identidad Sonora de Marca",
      "Estrategia de Ads (Primer mes)",
      "Mantenimiento Full Incluido",
      "Servidor Dedicado (Velocidad máxima)",
    ],
  },
];


// ---------------------------------------------------------------
//  COMISIONES DE ALIADOS
//  Se calculan automáticamente como porcentaje de cada plan.
//  Para cambiar el %, modificá COMMISSION_RATE (0.10 = 10%).
// ---------------------------------------------------------------
export const COMMISSION_RATE = 0.10;

export const commissions = pricingPlans.map(plan => ({
  label: plan.name,
  gain: `$${(parseFloat(plan.price.replace(/\./g, "")) * COMMISSION_RATE).toLocaleString("es-AR")}`,
}));
