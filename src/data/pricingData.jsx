/**
 * ARCHIVO DE PRECIOS Y PLANES - TuTienda24
 * 
 * Aquí puedes cambiar los nombres, precios y beneficios de los planes.
 * Los cambios se reflejarán automáticamente en toda la web.
 */

export const pricingPlans = [
  {
    id: 1,
    name: "Plan Catálogo",
    price: "120.000",
    setup: "Pago único (IVA incluido)",
    features: [
      "Diseño Mobile First (Optimizado)",
      "Catálogo WhatsApp Pro (Vende Directo)",
      "Botonera de Ventas Estratégica",
      "SEO Local en Catamarca (Google Maps)",
      "Hosting & Dominio por 1 año"
    ],
    isPopular: false,
  },
  {
    id: 2,
    name: "Plan Corporativo",
    price: "295.000",
    setup: "Pago único (IVA incluido)",
    features: [
      "Hasta 8 secciones personalizadas",
      "Formulario Leads Pro (Filtro experto)",
      "Blog de Contenidos Estratégicos",
      "Google Analytics 4 (Métricas reales)",
      "Soporte VIP 24/7 (Atención prioritaria)",
      "Capacitación para el equipo"
    ],
    isPopular: true,
  },
  {
    id: 3,
    name: "Plan Élite 3D",
    price: "580.000",
    setup: "Pago único (IVA incluido)",
    features: [
      "Interfaz Inmersiva 3D (Next-Gen)",
      "Animaciones de Nivel Triple A",
      "Identidad Sonora de Marca",
      "Estrategia de Ads (Primer mes)",
      "Mantenimiento Full Incluido",
      "Servidor Dedicado (Velocidad máxima)"
    ],
    isPopular: false,
  }
];
