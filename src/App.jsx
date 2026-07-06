import { useState, useEffect, useRef } from 'react';

import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import Guide from './pages/Guide';
import NotFound from './pages/NotFound';
import Brief from './pages/Brief';
import Thanks from './pages/Thanks';
import { pricingPlans, PROMO_PRICE, PROMO_ORIGINAL_PRICE, PROMO_FEATURES, PROMO_MES, PROMO_CUPOS } from './PRECIOS.js';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  ShoppingCart,
  Wrench,

  MessageCircle,
  ArrowRight,
  X,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Search,
  Star,
  Users,
  Award,
  Zap,
  ChevronDown,
  Mail,
  Instagram,
  Facebook,
  MapPin,
  ExternalLink,
  Eye,
  Send,
  Download
} from 'lucide-react';

// Paginas legales
import Terminos from './pages/legal/terminos';
import Privacidad from './pages/legal/privacidad';
import Cookies from './pages/legal/cookies';
import Partners from './pages/Partners';
import PartnerManual from './pages/PartnerManual';
import SplineScene from './components/SplineScene';
import ErrorBoundary from './components/ErrorBoundary';
import Logo from './components/Logo';
import ScrollToTop from './components/ScrollToTop';
import TestimonialsSection from './components/sections/TestimonialsSection';
import SistemaVentasSection from './components/sections/SistemaVentasSection';
import PricingSection from './components/sections/PricingSection';
import AliadosSection from './components/sections/AliadosSection';
import FAQSection from './components/sections/FAQSection';
import NewsletterSection from './components/sections/NewsletterSection';
import CustomCursor from './components/CustomCursor';
import SocialProofToast from './components/SocialProofToast';
import CounterStat from './components/CounterStat';
import ResultsSection from './components/sections/ResultsSection';



const projectImages = {
  lipipalu:   "/lipipalu-preview.jpg",
  voltax:     "/voltax-preview.jpg",
  dentista:   "/corcent-preview.jpg",
  finnex:     "/finnex-preview.jpg",
  precision:  "/precision-preview.jpg",
  medialunas: "/medialunas-preview.jpg",
  buba:       "/buba-preview.jpg",
  caylle:     "/caylle-preview.jpg",
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};


const projects = [
  { id: 1, title: "Lipipalu Concept",        category: "Accesorios de Autor",      image: projectImages.lipipalu,   url: "https://lipipalu.netlify.app/",                description: "Tienda de joyería y accesorios de autor con estética minimalista de lujo. Catálogo completo con colecciones exclusivas y experiencia de compra premium." },
  { id: 2, title: "Voltax Baterías",          category: "Servicios 24/7",           image: projectImages.voltax,     url: "https://voltaxbaterias.com.ar/",               description: "Solución digital de alto rendimiento para servicios de asistencia inmediata. Interfaz optimizada para conversión directa en situaciones de emergencia." },
  { id: 3, title: "CorCent | Clínica Dental", category: "Salud Premium",            image: projectImages.dentista,   url: "https://corcent.netlify.app/",                 description: "Presencia digital de élite para el sector odontológico. Diseño limpio y profesional orientado a captar nuevos pacientes desde el primer clic." },
  { id: 4, title: "Finnex",                   category: "App de Finanzas Personal", image: projectImages.finnex,     url: "https://finnex.site/",                         description: "PWA de gestión financiera personal: gastos, ingresos, metas de ahorro y reportes visuales. Sin cuentas, sin servidores, 100% offline y gratuita." },
  { id: 5, title: "Precision Quiropráctica",  category: "Salud Premium",            image: projectImages.precision,  url: "https://precision-quiropractica.netlify.app/", description: "Presencia digital de élite para quiropráctica especializada con método Gonstead. Diseño enfocado en transmitir confianza médica y convertir visitantes en pacientes." },
  { id: 6, title: "Las Medialunas de Gre",    category: "Panadería Artesanal",      image: projectImages.medialunas, url: "https://lasmedialunasdegre.netlify.app/",      description: "Catálogo digital para panadería local de Catamarca. Diseño cálido orientado a pedidos por WhatsApp con packs predefinidos y servicio de eventos." },
  { id: 7, title: "Buba Pet Shop",            category: "Tienda de Mascotas",       image: projectImages.buba,       url: "https://bubapetshop.netlify.app/",             description: "Tienda online moderna para pet shop con catálogo de productos y diseño amigable. Experiencia de compra fluida orientada a dueños de mascotas." },
  { id: 8, title: "Caylle Mish",              category: "DJ & Productora Musical",  image: projectImages.caylle,     url: "https://caylle-mish.netlify.app/",             description: "Presencia digital inmersiva para DJ y productora de música electrónica de Catamarca. Diseño oscuro y cinematográfico con agenda de shows, sets en vivo y contrataciones." },
];


const methodology = [
  { step: "01", title: "Estrategia", desc: "Analizamos tu negocio y definimos el camino para vencer a tu competencia.", icon: <TrendingUp className="w-8 h-8" /> },
  { step: "02", title: "Diseño Élite", desc: "Creamos una interfaz que proyecta confianza y deseo en tus clientes.", icon: <Globe className="w-8 h-8" /> },
  { step: "03", title: "Desarrollo", desc: "Construimos tu sitio con tecnologías de alto rendimiento (Vite + React).", icon: <Zap className="w-8 h-8" /> },
  { step: "04", title: "Lanzamiento", desc: "Configuramos el SEO y lanzamos tu marca al mercado digital.", icon: <Award className="w-8 h-8" /> }
];

const techStack = ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Three.js", "Spline", "Lucide", "SEO Pro"];



function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    const promoTimer = setTimeout(() => {
      // Solo mostrar si no se ha mostrado en esta sesión
      if (!sessionStorage.getItem('promoShown')) {
        setShowPromo(true);
        sessionStorage.setItem('promoShown', 'true');
      }
    }, 15000);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      clearTimeout(promoTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openWhatsApp = (subject = "") => {
    const finalMsg = subject
      ? `Hola! Vi la web de TuTienda24 y me interesa saber más sobre *${subject}*. ¿Podés asesorarme?`
      : `Hola! Vi la web de TuTienda24 y quiero consultar sobre sus servicios. ¿Podés asesorarme?`;
    window.open(`https://wa.me/543460406121?text=${encodeURIComponent(finalMsg)}`, '_blank');
    
    // Redirigimos a la página de gracias después de un pequeño delay
    setTimeout(() => {
      navigate('/gracias');
    }, 500);
  };


  return (
    <div className="min-h-screen text-slate-50 bg-[#0f172a] selection:bg-blue-500/30 overflow-x-hidden">
      <CustomCursor />
      <SocialProofToast />
      <ScrollToTop />
      {/* Preloader following Lipipalu style */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-[#0f172a] flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)]"
            >
              <span className="text-white text-2xl font-black">24</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-blue-400 font-bold tracking-[0.3em] uppercase text-[10px]"
            >
              Preparando tu Éxito
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup de Promoción Abril */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
            onClick={() => setShowPromo(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              className="relative max-w-xl w-full bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.3)] border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>

              <button
                className="absolute top-6 right-6 z-50 text-slate-400 hover:text-white transition-colors"
                onClick={() => setShowPromo(false)}
              >
                <X className="w-8 h-8" />
              </button>

              <div className="p-10 md:p-14">
                <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-6 border border-blue-500/20 uppercase">
                  ⚡ Oportunidad Limitada
                </span>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight italic tracking-tighter">
                  ¡Gran Promoción <span className="text-blue-400">Hasta {PROMO_MES}!</span>
                </h3>
                <p className="text-lg text-slate-400 font-medium mb-10 leading-relaxed">
                  Llevamos tu negocio al siguiente nivel con una web informativa de élite.
                  Diseño profesional, ultra-rápido y optimizado para ventas en toda Argentina.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10 relative overflow-hidden group">
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-2">Desde solo</p>
                      <div className="text-5xl font-black text-white">${PROMO_PRICE}</div>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-400 font-black italic text-xl">PROMO PRO</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Sujeto a cupos</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    openWhatsApp(`Promo de $${PROMO_PRICE}`);
                    setShowPromo(false);
                  }}
                  className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xl uppercase tracking-tighter shadow-2xl transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Quiero mi Promo
                </motion.button>

                <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-6">
                  Válido para personas de 20 a 45 años • Emprendedores y Pymes
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Portafolio Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-[#1e293b] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-50 w-12 h-12 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all border border-white/20 shadow-2xl"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col lg:flex-row h-full">
                {/* Scrollable Image Area */}
                <div className="lg:w-2/3 bg-[#020617] relative flex items-center justify-center p-8 h-[70vh] lg:h-[85vh]">
                  {/* Smartphone Mockup */}
                  <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-black rounded-[3rem] border-8 border-[#334155] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

                    {/* Screen Content */}
                    <div className="absolute inset-0 overflow-y-auto scrollbar-hidden custom-scrollbar pt-4">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        loading="lazy"
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>

                  {/* Indicator to scroll */}
                  <div className="absolute bottom-12 right-12 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                    <ChevronDown className="w-8 h-8 text-white" />
                  </div>
                </div>


                {/* Details Area */}
                <div className="lg:w-1/3 p-10 md:p-14 bg-[#1e293b] flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
                  <span className="text-blue-400 font-black text-xs uppercase tracking-widest mb-4 inline-block">{selectedProject.category}</span>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight italic">{selectedProject.title}</h3>
                  <p className="text-slate-400 font-medium text-lg leading-relaxed mb-10">
                    {selectedProject.description || "Un diseño optimizado para brindar la mejor experiencia de usuario en cualquier dispositivo."}
                  </p>

                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      onClick={() => openWhatsApp()}
                      className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-lg uppercase tracking-tighter shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                    >
                      Quiero algo similar
                    </motion.button>
                    <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                      Presupuesto estimado: ${PROMO_PRICE}+
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-lg shadow-black/30' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          >
            <Logo size={0.85} dark onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </motion.div>
          <nav className="hidden md:flex gap-10 text-sm font-semibold tracking-wide uppercase">
            {['proyectos', 'servicios', 'precios', 'testimonios'].map((item) => (
              <a key={item} href={`#${item}`} className="text-slate-400 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => openWhatsApp()}
            className="bg-white text-slate-900 hover:bg-blue-50 px-6 py-2 rounded-full font-bold shadow-xl transition-all"
          >
            Hablemos
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-56 md:pb-40 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Aurora Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">

          {/* Capa base: gradiente mesh animado */}
          <div className="aurora-mesh absolute inset-0 opacity-80" />

          {/* Blobs de luz encima para más profundidad */}
          <div className="aurora-blob-1 absolute top-[-30%] left-[-15%] w-[80%] h-[80%] rounded-full blur-[60px]"
               style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.7) 0%, transparent 70%)' }} />
          <div className="aurora-blob-2 absolute top-[0%] right-[-20%] w-[70%] h-[70%] rounded-full blur-[70px]"
               style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)' }} />
          <div className="aurora-blob-3 absolute bottom-[-20%] left-[10%] w-[65%] h-[65%] rounded-full blur-[60px]"
               style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.5) 0%, transparent 70%)' }} />

          {/* Grain para textura premium */}
          <div className="aurora-noise absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" />

          {/* Fade hacia abajo para legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0f172a]" />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-1">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/15 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-col items-center mb-10 gap-4">
              {/* Badge de diferenciación principal */}
              <div className="flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-black tracking-widest uppercase border border-emerald-500/20">
                  ⚡ Entrega en 14–21 días
                </span>
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-xs font-black tracking-widest uppercase border border-blue-500/20">
                  🎨 Diseño único · No usamos templates
                </span>
              </div>
              <motion.div
                whileHover={{ y: -5 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-3xl shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-white/10"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-4 md:h-5" />
                <div className="w-px h-6 bg-white/10"></div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-500 fill-yellow-500" />)}
                </div>
                <span className="text-xs md:text-sm font-bold text-slate-100 tracking-tight">5.0 Estrellas | Mejor Posicionados</span>
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
              Tu web lista en <span className="text-emerald-400">3 semanas.</span><br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                Con diseño que no existe en otro lugar.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
              No usamos templates. Cada web es diseñada desde cero para tu negocio —
              con la velocidad de una agencia y la atención de un equipo dedicado.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 group w-full sm:w-auto justify-center text-lg"
                onClick={() => openWhatsApp('Transformación Digital')}
              >
                Empezar mi transformación
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <button
                onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="px-10 py-5 rounded-2xl font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-slate-700 w-full sm:w-auto justify-center flex text-lg"
              >
                Ver Proyectos Reales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats - Con un estilo más limpio */}
      <section className="py-20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <CounterStat value="25+" label="Proyectos Entregados" icon={<Award className="w-6 h-6 text-blue-500" />} />
            <CounterStat value="100%" label="Satisfacción Cliente" icon={<Users className="w-6 h-6 text-emerald-500" />} />
            <CounterStat value="< 2s" label="Velocidad de Carga" icon={<Zap className="w-6 h-6 text-yellow-500" />} />
            <CounterStat value="24/7" label="Atención CAT" icon={<MessageCircle className="w-6 h-6 text-purple-500" />} />
          </div>
        </div>
      </section>

      {/* Proyectos - Rejilla tipo galería */}
      <section id="proyectos" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Proyectos que inspiran</h2>
            <p className="text-xl text-slate-400 max-w-2xl">Diseños únicos desarrollados para elevar el estándar de comercios y emprendedores en toda Argentina.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group cursor-pointer relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5 hover:border-white/10 shadow-2xl hover:shadow-[0_40px_80px_rgba(59,130,246,0.12)] transition-all duration-500"
                onClick={() => {
                  if (project.url) {
                    window.open(project.url, '_blank');
                  } else {
                    setSelectedProject(project);
                  }
                }}
              >
                <div className="aspect-[4/5] overflow-hidden relative bg-[#0f172a]">

                  {/* Browser chrome */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900/90 flex items-center px-4 gap-1.5 border-b border-white/10 z-30">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                    <div className="flex-1 text-[10px] text-white/30 text-center font-mono truncate px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.url ? project.url.replace('https://', '') : 'tutienda24.com.ar'}
                    </div>
                  </div>

                  {/* Visual content */}
                  <div className="absolute top-8 inset-x-0 bottom-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-auto object-top transform group-hover:-translate-y-[65%] transition-transform duration-[8s] ease-in-out"
                    />
                  </div>

                  {/* Gradient overlay — igual para todos */}
                  <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#0f172a] via-[#0f172a]/90 to-transparent z-10 pointer-events-none"></div>

                  {/* CTA hover */}
                  <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400">
                    <div className="bg-white text-slate-900 px-6 py-3 rounded-full font-black text-sm flex items-center gap-2 shadow-[0_8px_30px_rgba(255,255,255,0.15)]">
                      {project.url ? 'VISITAR WEB' : 'VER DETALLES'}
                      {project.url ? <ExternalLink className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Info bar — igual para todos */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-1.5 block">{project.category}</span>
                    <h3 className="text-2xl font-black text-white leading-tight mb-2">{project.title}</h3>
                    {project.description && (
                      <p className="text-slate-400 text-xs font-medium leading-relaxed line-clamp-2">{project.description}</p>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3D Showcase Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 h-[500px]"
            >
              <div className="w-full h-full glass-card rounded-[3rem] overflow-hidden ring-1 ring-white/10 shadow-[0_0_100px_rgba(59,130,246,0.15)] relative">
                <SplineScene scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode" />

                {/* Floating Micro-UI for aesthetic */}
                <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl flex items-center justify-between border border-white/10 backdrop-blur-xl z-10">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center animate-pulse">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-white uppercase tracking-tighter">Motor de Renderizado</p>
                      <p className="text-[10px] font-bold text-blue-400">Optimizado por Antigravity</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black text-white italic">144 FPS</p>
                  </div>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-8 border border-blue-500/20 uppercase">
                🚀 Innovación Visual
              </span>
              <h2 className="text-5xl md:text-8xl font-black mb-10 leading-[0.85] italic tracking-tighter">
                Interfaces que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">cobran vida</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-14 leading-relaxed font-medium">
                Elevamos el estándar de los negocios locales con tecnología de vanguardia.
                Convertimos tu catálogo en una <span className="text-white font-bold underline decoration-blue-500 decoration-4 underline-offset-8">experiencia inmersiva</span> que dispara la confianza de tus clientes.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { label: "Tiempo Real", color: "blue" },
                  { label: "Alta Fiereza", color: "emerald" },
                  { label: "Móvil First", color: "indigo" }
                ].map(tag => (
                  <span key={tag.label} className={`px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-black text-slate-100 uppercase tracking-widest flex items-center gap-2`}>
                    <div className={`w-2 h-2 rounded-full bg-${tag.color}-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]`}></div>
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo (Metodología) */}
      <section className="py-32 px-6 bg-[#0f172a] relative">
        <div className="container mx-auto max-w-7xl text-center mb-24">
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-[0.2em] mb-6 border border-emerald-500/20 uppercase">
            ⚡ El Camino al Éxito
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter">
            Nuestra Metodología <br /> <span className="text-slate-500">de Alto Rendimiento</span>
          </h2>
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[3rem] border-white/5 relative group hover:border-blue-500/30 transition-all"
              >
                <div className="text-7xl font-black text-white/5 absolute top-6 right-10 group-hover:text-blue-500/10 transition-colors">
                  {m.step}
                </div>
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {m.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 italic uppercase tracking-tighter">{m.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinta de Tecnologías (Infinite Marquee) */}
      <section className="py-20 border-y border-white/5 overflow-hidden bg-slate-950/20">
        <div className="flex whitespace-nowrap gap-12 items-center">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex gap-24 items-center min-w-full"
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                <span className="text-4xl md:text-6xl font-black text-slate-700 group-hover:text-white transition-colors tracking-tighter italic">
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Servicios - Tarjetas más robustas */}
      <section id="servicios" className="py-32 px-6 bg-slate-900/50 relative">

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Soluciones de <span className="text-blue-500">Próxima Generación</span></h2>
              <p className="text-xl text-slate-400 mb-12 max-w-lg">No solo hacemos webs. Creamos los cimientos digitales de tu éxito comercial.</p>
              <div className="space-y-6">
                {[
                  { title: "Sitios Corporativos", desc: "La cara profesional que tu empresa necesita.", icon: <Globe className="w-6 h-6 text-blue-500" /> },
                  { title: "Catálogos Sales-Ready", desc: "Vende por WhatsApp de forma organizada.", icon: <ShoppingCart className="w-6 h-6 text-emerald-500" /> },
                  { title: "Mantenimiento Total", desc: "Cero preocupaciones técnicas para vos.", icon: <Wrench className="w-6 h-6 text-orange-500" /> },
                  { title: "Hosting & Dominio", desc: "Hosting y dominio .com.ar bonificado por 1 año.", icon: <ShieldCheck className="w-6 h-6 text-pink-500" /> }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      {s.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{s.title}</h4>
                      <p className="text-slate-500 font-medium">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "Sitios Web", color: "blue", list: ["Velocidad Extrema", "SEO Local CAT", "Diseño Adaptable"] },
                { label: "E-Commerce", color: "emerald", list: ["WhatsApp Checkout", "Pagos Online", "Stock Digital"] },
                { label: "Soporte", color: "orange", list: ["Hosting Premium", "Gestión Dominio", "Copias de Seguridad"] },
                { label: "Hosting & Dominio", color: "pink", list: ["Hosting incluido", "Dominio .com.ar", "1 año bonificado"] }
              ].map((card, i) => (
                <div key={i} className="glass-card p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
                  <h4 className="text-2xl font-black mb-6">{card.label}</h4>
                  <ul className="space-y-4">
                    {card.list.map((l, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-400 font-bold">
                        <CheckCircle2 className={`w-4 h-4 text-${card.color}-500`} /> {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plan Despegue - Sección destacada */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-slate-900 to-[#080d1a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-black tracking-[0.2em] mb-4 border border-cyan-500/20 uppercase">
              🚀 Oferta de Lanzamiento
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-4 italic tracking-tighter">Plan <span className="text-cyan-400">Despegue</span> Digital</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">La solución "Llave en mano" diseñada para que los comercios locales empiecen a vender hoy mismo con el estándar de TuTienda24.</p>
          </div>

          <div className="glass-card p-1 md:p-1.5 rounded-[3.5rem] bg-gradient-to-br from-cyan-500/30 via-transparent to-transparent">
            <div className="bg-[#0f172a] rounded-[3.3rem] p-10 md:p-20 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <ul className="space-y-8">
                    {PROMO_FEATURES.map((item, i) => (
                      <li key={i} className="flex items-center gap-5 text-slate-200 font-bold text-lg">
                        <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center lg:text-right border-t lg:border-t-0 lg:border-l border-white/5 pt-12 lg:pt-0 lg:pl-16">
                  <div className="mb-10">
                    <span className="text-slate-500 line-through text-2xl font-bold uppercase tracking-widest block mb-4 opacity-40">${PROMO_ORIGINAL_PRICE}</span>
                    <div className="text-7xl md:text-9xl font-black text-white tracking-tighter">${PROMO_PRICE.split('.')[0]}<span className="text-3xl text-cyan-400">.{PROMO_PRICE.split('.')[1]}</span></div>
                    <p className="text-slate-500 font-black uppercase tracking-[0.2em] mt-6 text-xs">Pago único inicial</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(34, 211, 238, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openWhatsApp('Plan Despegue')}
                    className="w-full bg-cyan-500 text-slate-900 py-8 rounded-3xl font-black text-2xl uppercase tracking-tighter shadow-2xl transition-all"
                  >
                    ¡Quiero mi Plan Despegue!
                  </motion.button>
                  <div className="mt-8 flex items-center justify-center lg:justify-end gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                    <p className="text-[10px] text-cyan-500 font-black uppercase tracking-widest italic">
                      Últimos {PROMO_CUPOS} cupos bonificados para {PROMO_MES}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <ResultsSection />

      <SistemaVentasSection openWhatsApp={openWhatsApp} />

      <TestimonialsSection />

      <PricingSection openWhatsApp={openWhatsApp} />

      <AliadosSection navigate={navigate} />

      <NewsletterSection />

      <FAQSection />

      {/* Footer */}
      <footer className="bg-[#080d1a] pt-32 pb-12 px-6 border-t border-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="mb-8">
                <Logo size={0.9} dark />
              </div>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10">
                Líderes en transformación digital para comercios locales. Orgullosamente radicados en Catamarca.
              </p>
            </div>

            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.2em] text-slate-500 mb-10">Servicios</h4>
              <ul className="space-y-6 text-lg text-slate-400 font-bold">
                {['Sitios Corporativos', 'Catálogos WhatsApp', 'Mantenimiento Web', 'Hosting & Dominio'].map((item) => (
                  <li key={item}><a href="#servicios" className="hover:text-blue-500 transition-colors uppercase text-sm tracking-widest">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.2em] text-slate-500 mb-10">Contacto</h4>
              <ul className="space-y-6 text-lg text-slate-400 font-bold">
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-blue-500" /> 
                  <a href="mailto:info@tutienda24.com.ar" className="hover:text-blue-500 transition-colors">info@tutienda24.com.ar</a>
                </li>
                <li className="flex items-center gap-4"><MapPin className="w-5 h-5 text-blue-500" /> Catamarca, Argentina</li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.2em] text-slate-500 mb-10">Legales</h4>
              <ul className="space-y-6 text-sm text-slate-400 font-bold uppercase tracking-widest">
                <li><Link to="/terminos" className="hover:text-blue-500 transition-colors">Términos</Link></li>
                <li><Link to="/privacidad" className="hover:text-blue-500 transition-colors">Privacidad</Link></li>
                <li><Link to="/cookies" className="hover:text-blue-500 transition-colors">Cookies</Link></li>
                <li><Link to="/aliados" className="text-blue-400 hover:text-blue-300 transition-colors font-black">Hazte Aliado</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-600 text-sm font-bold tracking-widest uppercase">
            <p>© {new Date().getFullYear()} TuTienda24. Todos los derechos reservados.</p>
            <p>San Fernando del Valle de Catamarca.</p>
          </div>
        </div>
      </footer>

      {/* Botón WhatsApp con Badge */}
      <motion.button
        initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-[0_15px_40px_rgba(37,211,102,0.3)] z-50 whatsapp-pulse"
      >
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-[#0f172a] animate-bounce z-10 flex items-center justify-center text-[10px] font-black">
          1
        </div>
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.button>

    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guia-pro" element={<Guide />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/cookies" element={<Cookies />} />
      <Route path="/aliados" element={<Partners />} />
      <Route path="/aliados/manual" element={<PartnerManual />} />
      <Route path="/brief" element={<Brief />} />
      <Route path="/gracias" element={<Thanks />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
