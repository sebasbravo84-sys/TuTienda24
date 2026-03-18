import { useState, useEffect } from 'react';

import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import Guide from './pages/Guide';
import { pricingPlans } from './data/pricingData';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  ShoppingCart,
  Wrench,
  Music,
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
import SplineScene from './components/SplineScene';
import ErrorBoundary from './components/ErrorBoundary';
import Native3DShowcase from './components/Native3DShowcase';




const projectImages = {
  lipipalu: "/lipipalu-preview.png",
  voltax: "/voltax-preview.png",
  dentista: "/corcent-preview.png",
  ropa: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000",
  finanzas: "/finanzas-preview.png",
  kiosco: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1000"
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const testimonials = [
  { name: "Raúl Giménez", text: "Teníamos miedo de que una web sea muy cara y difícil de usar, pero con TuTienda24 fue todo lo contrario. Ahora nos piden presupuestos por WhatsApp todo el día.", stars: 5, avatar: "RG" },
  { name: "Lucía Perea", text: "El catálogo digital cambió mi forma de vender. Mis clientas eligen lo que quieren y me llega el pedido ordenado. ¡Súper profesional!", stars: 5, avatar: "LP" },
  { name: "Marcos Torres", text: "Necesitaba una web institucional que diera confianza. El resultado superó mis expectativas, el diseño es de otro nivel comparado con lo que se ve en Catamarca.", stars: 5, avatar: "MT" },
  { name: "Sofía Méndez", text: "Excelente atención. No solo me hicieron la web, sino que me asesoraron en cómo mostrar mis productos. Muy recomendables.", stars: 5, avatar: "SM" },
  { name: "Jorge Luna", text: "El servicio de mantenimiento me saca un peso de encima. Sé que mi web siempre está online y rápida sin que yo tenga que tocar nada.", stars: 5, avatar: "JL" },
  { name: "Elena Castro", text: "Gracias a TuTienda24, mis clientes pueden ver todos mis tratamientos y reservar turnos de manera mucho más ágil. Una inversión que se pagó sola.", stars: 5, avatar: "EC" }
];

const scrollingTestimonials = [...testimonials, ...testimonials, ...testimonials];

const projects = [
  { id: 1, title: "Lipipalu Concept", category: "Accesorios de Autor", image: projectImages.lipipalu, featured: true, url: "https://lipipalu.netlify.app/", description: "Una experiencia de lujo minimalista con diseño de alta costura digital y animaciones fluidas." },
  { id: 2, title: "Voltax Baterías", category: "Servicios 24/7", image: projectImages.voltax, url: "https://voltaxbaterias.com.ar/", description: "Solución digital de alto rendimiento para servicios de asistencia inmediata. Interfaz optimizada para una respuesta rápida y conversión directa de usuarios en situaciones de emergencia." },
  { id: 3, title: "CorCent | Clínica Dental", category: "Salud Premium", image: projectImages.dentista, url: "https://corcent.netlify.app/", description: "Presencia digital de élite para el sector odontológico. Diseño limpio y profesional orientado a generar confianza y captar nuevos pacientes desde el primer clic." },
  { id: 4, title: "App de Finanzas", category: "Web App Mobile", image: projectImages.finanzas, url: "https://adorable-fenglisu-f4b132.netlify.app/", description: "Una herramienta potente para el control de gastos personales con interfaz optimizada para móviles." },
  { id: 5, title: "Tienda de Ropa", category: "Retail", image: projectImages.ropa },
  { id: 6, title: "Kiosco Digital", category: "Catálogo", image: projectImages.kiosco },
];

const faqs = [
  { q: "¿Necesito conocimientos técnicos?", a: "Para nada. Nosotros nos encargamos de todo el montaje, configuración y mantenimiento. Vos solo te encargás de atender a tus clientes." },
  { q: "¿Cuánto tiempo tarda en estar lista?", a: "Depende del proyecto, pero una landing page profesional suele estar lista en 7 a 10 días hábiles." },
  { q: "¿Tengo que pagar todos los meses?", a: "El diseño se paga una sola vez. Luego ofrecemos un plan de mantenimiento opcional que incluye el hosting, el dominio y actualizaciones." },
  { q: "¿Apareceré en Google?", a: "Sí, todos nuestros sitios se entregan con SEO básico configurado para que ganes visibilidad en Catamarca desde el día uno." },
  { q: "¿Puedo cobrar con tarjeta de crédito?", a: "¡Claro! Podemos integrar Mercado Pago para que tus clientes paguen en cuotas de forma automática y segura." }
];

const methodology = [
  { step: "01", title: "Estrategia", desc: "Analizamos tu negocio y definimos el camino para vencer a tu competencia.", icon: <TrendingUp className="w-8 h-8" /> },
  { step: "02", title: "Diseño Élite", desc: "Creamos una interfaz que proyecta confianza y deseo en tus clientes.", icon: <Globe className="w-8 h-8" /> },
  { step: "03", title: "Desarrollo", desc: "Construimos tu sitio con tecnologías de alto rendimiento (Vite + React).", icon: <Zap className="w-8 h-8" /> },
  { step: "04", title: "Lanzamiento", desc: "Configuramos el SEO y lanzamos tu marca al mercado digital.", icon: <Award className="w-8 h-8" /> }
];

const techStack = ["React 19", "Vite", "Tailwind CSS", "Framer Motion", "Three.js", "Spline", "Lucide", "SEO Pro"];

// Los planes y precios ahora se gestionan en: /src/data/pricingData.jsx
const getPlanIcon = (index) => {
  const icons = [<ShoppingCart className="w-6 h-6" />, <Globe className="w-6 h-6" />, <Zap className="w-6 h-6" />];
  return icons[index] || <Star className="w-6 h-6" />;
};

const referralSteps = [
  { title: "Onboarding VIP", desc: "Te capacitamos en 15 min para que sepas detectar clientes de alto valor.", icon: <CheckCircle2 className="w-6 h-6" /> },
  { title: "Recomendación", desc: "Nos presentas por WhatsApp. Nosotros nos encargamos del cierre técnico.", icon: <MessageCircle className="w-6 h-6" /> },
  { title: "Comisión Inmediata", desc: "Cobras tu 10% apenas el cliente realice el primer pago (50% de seña).", icon: <Zap className="w-6 h-6" /> }
];

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPromo, setShowPromo] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

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

  const openWhatsApp = (planName = "") => {
    const baseMsg = "Hola TuTienda24, vengo de la web y tengo una consulta.";
    const planMsg = planName ? ` Me interesa específicamente el *${planName}*.` : "";
    window.open(`https://wa.me/543460406121?text=${encodeURIComponent(baseMsg + planMsg)}`, '_blank');
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setFormStatus('Enviando...');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://formspree.io/f/xqeygwok", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _subject: "Nueva solicitud de Asesoría VIP - TuTienda24" })
      });

      if (response.ok) {
        setFormStatus('¡Enviado! Un experto te contactará pronto.');
        setTimeout(() => setFormStatus(''), 5000);
        e.target.reset();
      } else {
        setFormStatus('Error al enviar.');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      setFormStatus('Error de conexión.');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const handleNewsletter = async (e) => {
    e.preventDefault();
    setNewsletterStatus('Suscribiendo...');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("https://formspree.io/f/mvzwvdyv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _subject: "Nueva suscripción - Club de Éxito Digital" })
      });

      if (response.ok) {
        setNewsletterStatus('success');
      } else {
        setNewsletterStatus('Error. Intenta de nuevo.');
        setTimeout(() => setNewsletterStatus(''), 5000);
      }
    } catch (error) {
      setNewsletterStatus('Error de conexión.');
      setTimeout(() => setNewsletterStatus(''), 5000);
    }
  };

  return (
    <div className="min-h-screen text-slate-50 bg-[#0f172a] selection:bg-blue-500/30 overflow-x-hidden">

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
                  ¡Gran Promoción <span className="text-blue-400">Hasta Abril!</span>
                </h3>
                <p className="text-lg text-slate-400 font-medium mb-10 leading-relaxed">
                  Llevamos tu negocio al siguiente nivel con una web informativa de élite.
                  Diseño profesional, ultra-rápido y optimizado para ventas en Catamarca.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10 relative overflow-hidden group">
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-2">Desde solo</p>
                      <div className="text-5xl font-black text-white">$89.000</div>
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
                    openWhatsApp('Consulta General');
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
                      onClick={() => openWhatsApp('Inicio')}
                      className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-lg uppercase tracking-tighter shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                    >
                      Quiero algo similar
                    </motion.button>
                    <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                      Presupuesto estimado: {selectedProject.featured ? "$120.000+" : "$89.900+"}
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
            className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <span className="text-white text-sm">24</span>
            </div>
            <span>TuTienda<span className="text-blue-500">24</span></span>
          </motion.div>
          <nav className="hidden md:flex gap-10 text-sm font-semibold tracking-wide uppercase">
            {['proyectos', 'servicios', 'testimonios'].map((item) => (
              <a key={item} href={`#${item}`} className="text-slate-400 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => openWhatsApp('Conversación Inicial')}
            className="bg-white text-slate-900 hover:bg-blue-50 px-6 py-2 rounded-full font-bold shadow-xl transition-all"
          >
            Hablemos
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-56 md:pb-40 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Video Background (TuTienda24_fondo_inicio.mp4) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60 scale-105"
          >
            <source src="/TuTienda24_fondo_inicio.mp4" type="video/mp4" />
          </video>
          {/* Advanced Overlay for depth and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/40 via-[#0f172a]/80 to-[#0f172a]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-1">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/15 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-col items-center mb-10">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase border border-blue-500/20 mb-6">
                ✨ Agencia de Élite en Catamarca
              </span>
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
              Transformamos tu negocio <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
                en una Marca de Élite
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
              No dejes tus ventas al azar de las redes sociales.
              Diseñamos experiencias digitales que proyectan confianza y escalan resultados.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 group w-full sm:w-auto justify-center text-lg"
                onClick={() => openWhatsApp('Empezar mi Transformación Digital')}
              >
                Empezar mi transformación
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <a href="#proyectos" className="px-10 py-5 rounded-2xl font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all border border-slate-700 w-full sm:w-auto justify-center flex text-lg">
                Ver Proyectos Reales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats - Con un estilo más limpio */}
      <section className="py-20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Proyectos Entregados", value: "25+", icon: <Award className="w-6 h-6 text-blue-500" /> },
              { label: "Satisfacción Cliente", value: "100%", icon: <Users className="w-6 h-6 text-emerald-500" /> },
              { label: "Velocidad de Carga", value: "< 2s", icon: <Zap className="h-6 h-6 text-yellow-500" /> },
              { label: "Atención CAT", value: "24/7", icon: <MessageCircle className="w-6 h-6 text-purple-500" /> },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos - Rejilla tipo galería */}
      <section id="proyectos" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Proyectos que inspiran</h2>
            <p className="text-xl text-slate-400 max-w-2xl">Diseños únicos desarrollados para elevar el estándar de los comercios en Catamarca.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`group cursor-pointer relative rounded-xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl transition-all duration-500 ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                onClick={() => {
                  if (project.url) {
                    window.open(project.url, '_blank');
                  } else {
                    setSelectedProject(project);
                  }
                }}
              >
                <div className={`${project.featured ? 'h-full min-h-[600px]' : 'aspect-[4/5]'} overflow-hidden relative group-hover:shadow-[0_40px_100px_rgba(59,130,246,0.15)] bg-[#0f172a]`}>

                  {/* Browser Mockup Header - Unified for all projects */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900 flex items-center px-4 gap-1.5 border-b border-white/10 z-30">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40"></div>
                    <div className="flex-1 text-[10px] text-white/30 text-center font-mono truncate px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.url ? project.url.replace('https://', '') : `tutienda24.com.ar/${project.title.toLowerCase().replace(/ /g, '-')}`}
                    </div>
                  </div>

                  {/* Image Container with proper top padding to accommodate header */}
                  <div className="w-full h-full pt-8 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className={`w-full h-auto object-top transform ${project.featured ? 'group-hover:-translate-y-[20%]' : 'group-hover:-translate-y-[40%]'} transition-transform duration-[8s] ease-in-out opacity-85 group-hover:opacity-100`}
                    />

                    {/* Shadow for top-edge realism */}
                    <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Interior Shadow for depth */}
                  <div className="absolute inset-0 shadow-[inset_0_20px_40px_rgba(0,0,0,0.4)] pointer-events-none rounded-t-xl"></div>

                  {/* Layered Gradient for depth - positioned above image but below UI */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent group-hover:opacity-0 transition-opacity duration-700 z-10"></div>

                  {/* Floating Action Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <div className="bg-white text-slate-900 px-8 py-4 rounded-full font-black flex items-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.2)]">
                      {project.url ? 'VISITAR WEB' : 'VER DETALLES'}
                      {project.url ? <ExternalLink className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </div>
                  </div>


                  {/* Bottom Info Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-slate-950 to-transparent">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-2 block">{project.category}</span>
                        <h3 className={`font-black text-white leading-tight ${project.featured ? 'text-4xl md:text-5xl italic tracking-tighter' : 'text-2xl'}`}>
                          {project.title}
                        </h3>
                      </div>
                      {project.url && (
                        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                          <ExternalLink className="w-7 h-7 text-white" />
                        </div>
                      )}
                    </div>
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
                <Native3DShowcase />

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
                  { title: "Identidad Sonora", desc: "Música exclusiva para tu local y marca.", icon: <Music className="w-6 h-6 text-pink-500" /> }
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
                { label: "Sound Design", color: "pink", list: ["Jingles Pro", "Música Local", "Audio Branding"] }
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
                    {[
                      "Landing Page de Élite (Vende sola)",
                      "Catálogo de hasta 10 productos",
                      "Checkout directo a tu WhatsApp",
                      "Dominio .com.ar + Hosting (Bonificado 1 año)",
                      "Geolocalización en Google Maps",
                      "Soporte y Mantenimiento Técnico"
                    ].map((item, i) => (
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
                    <span className="text-slate-500 line-through text-2xl font-bold uppercase tracking-widest block mb-4 opacity-40">$120.000</span>
                    <div className="text-7xl md:text-9xl font-black text-white tracking-tighter">$89<span className="text-3xl text-cyan-400">.900</span></div>
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
                      Últimos 10 cupos bonificados para Abril
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonios */}
      <section id="testimonios" className="py-32 bg-[#0f172a] overflow-hidden">
        <div className="container mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic">Clientes que ganan</h2>
          <p className="text-xl text-slate-500">Nuestra mejor garantía es tu éxito.</p>
        </div>

        <div className="relative">
          <motion.div
            className="flex gap-10 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 60, repeat: Infinity }}
          >
            {scrollingTestimonials.map((t, i) => (
              <div key={i} className="glass-card p-10 rounded-[2rem] w-[400px] flex-shrink-0 border border-white/5 shadow-2xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, j) => <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />)}
                </div>
                <p className="text-slate-300 font-medium text-lg leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center font-black text-white text-xl">
                    {t.avatar}
                  </div>
                  <h4 className="font-black text-xl text-white">{t.name}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sección de Planes / Precios */}
      <section id="precios" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-7xl text-center mb-24">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-6 border border-blue-500/20 uppercase">
            💎 Inversión Inteligente
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter">
            Planes diseñados <br /> <span className="text-slate-500">para dominar el mercado</span>
          </h2>
        </div>

        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-12 rounded-[3.5rem] border ${plan.isPopular ? 'bg-blue-600 border-blue-400 shadow-[0_30px_60px_rgba(37,99,235,0.3)]' : 'bg-slate-900/50 border-white/5 glass-card'} flex flex-col`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-6 py-2 rounded-full text-xs font-black tracking-widest shadow-xl uppercase">
                  Más Elegido
                </div>
              )}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${plan.isPopular ? 'bg-white/20' : 'bg-blue-600/10 text-blue-400'}`}>
                {getPlanIcon(i)}
              </div>
              <h3 className={`text-2xl font-black mb-2 italic uppercase tracking-tighter ${plan.isPopular ? 'text-white' : 'text-white'}`}>{plan.name}</h3>
              <p className={`text-sm mb-10 font-bold ${plan.isPopular ? 'text-blue-100' : 'text-slate-500'}`}>{plan.setup}</p>
              
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-sm font-black opacity-60">$</span>
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
              </div>

              <ul className="space-y-6 mb-12 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className={`w-5 h-5 ${plan.isPopular ? 'text-white' : 'text-blue-500'}`} />
                    <span className={plan.isPopular ? 'text-blue-50' : 'text-slate-300'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openWhatsApp(plan.name)}
                className={`w-full py-6 rounded-2xl font-black text-lg transition-all ${plan.isPopular ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-600/20'}`}
              >
                Elegir este Plan
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Programa de Aliados (Comisiones) */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 z-0"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="glass-card rounded-[4rem] p-12 md:p-24 border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -mr-48 -mt-48 transition-all group-hover:bg-blue-500/20"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-[0.2em] mb-8 border border-emerald-500/20 uppercase">
                  🤝 Gana con nosotros
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 italic tracking-tighter leading-none">
                  Tus contactos <br /> <span className="text-blue-500">valen oro</span>
                </h2>
                <div className="flex items-center gap-6 mb-12">
                  <div className="text-6xl font-black text-white tracking-tighter italic">10%</div>
                  <div className="text-xl font-bold text-slate-400 leading-tight">
                    de comisión neta <br /> por cada proyecto cerrado.
                  </div>
                </div>
                <p className="text-lg text-slate-300 font-medium mb-10 leading-relaxed">
                  Buscamos socios estratégicos en Catamarca. Te entregamos un <strong>Kit de Ventas</strong> y te enseñamos a detectar negocios con potencial.
                </p>

                <div className="space-y-4 mb-12">
                  {[
                    "Pago inmediato (sin esperas a fin de mes)",
                    "Capacitación gratuita sobre ventas digitales",
                    "Material de apoyo (PDFs y Speech de venta)",
                    "Transparencia total en el proceso"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-400 italic">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {text}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => window.open('https://wa.me/543460406121?text=Hola!%20Vi%20el%20programa%20de%20aliados%20en%20la%20web%20y%20me%20interesa%20capacitarme%20para%20recomendar%20clientes.', '_blank')}
                  className="bg-white text-slate-900 font-black px-12 py-6 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl flex items-center justify-center gap-4 text-xl group/btn w-full sm:w-auto"
                >
                  Quiero ser Aliado VIP <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {referralSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex items-start gap-6 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20 text-white">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white mb-2 italic uppercase tracking-tighter">{step.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Growth Section (Newsletter) */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-3xl z-0"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[3rem] p-10 md:p-20 shadow-3xl text-center relative overflow-hidden group">
            {/* Animated Background Element */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] group-hover:bg-blue-500/30 transition-all duration-1000"></div>
            
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">Club de Éxito Digital</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic tracking-tighter">
                ¿Quieres vender más <br /> mientras <span className="text-blue-500 italic">descansas?</span>
              </h2>
              
              <p className="text-lg text-slate-400 font-medium mb-10 leading-relaxed">
                Únete a emprendedores de Catamarca. Recibe estrategias, ofertas y nuestra <span className="text-white font-bold">Guía Pro 2024</span> gratis.
              </p>

              <form onSubmit={handleNewsletter} className="relative max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row gap-3">
                  {!newsletterStatus ? (
                    <>
                      <div className="flex-1 relative">
                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 pointer-events-none" />
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="Tu mejor correo..."
                          className="w-full bg-slate-800/40 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-lg"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-600 text-white font-black px-8 py-5 rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 whitespace-nowrap text-lg group/btn"
                      >
                        Unirme y descargar <Download className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" />
                      </button>
                    </>
                  ) : (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                      className="w-full bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-8 flex flex-col items-center"
                    >
                      <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
                      <h4 className="text-2xl font-black text-white mb-2 italic">¡Bienvenido al Club!</h4>
                      <p className="text-emerald-100/70 mb-6 font-medium">Hemos preparado tu acceso de élite.</p>
                      <button 
                        onClick={() => navigate('/guia-pro-2024')}
                        className="bg-emerald-600 text-white font-black px-12 py-4 rounded-xl hover:bg-emerald-500 transition-all flex items-center gap-3"
                      >
                        Ver Guía Pro Ahora <ArrowRight className="w-5 h-5" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Contacto */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-12 italic tracking-tighter">Despejemos dudas</h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-3xl border border-white/5 bg-slate-900/50 overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex justify-between items-center p-8 text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="font-bold text-lg pr-4">{faq.q}</span>
                      <ChevronDown className={`w-6 h-6 transition-transform flex-shrink-0 ${activeFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                          <div className="p-8 pt-0 text-slate-400 font-medium border-t border-white/5">{faq.a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8 italic tracking-tighter">¿Hablamos de <br /> tu próximo éxito?</h3>
              <p className="text-blue-100 text-xl font-medium mb-12">Déjanos tu correo y un especialista en ventas digitales de Catamarca te preparará un plan a medida.</p>

              <form onSubmit={handleForm} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text" required placeholder="Nombre"
                    className="w-full bg-blue-700/50 border border-blue-400/30 rounded-2xl p-6 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  />
                  <input
                    name="email"
                    type="email" required placeholder="Tu correo"
                    className="w-full bg-blue-700/50 border border-blue-400/30 rounded-2xl p-6 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 font-black py-6 rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3 text-xl shadow-xl shadow-black/10"
                >
                  <Send className="w-6 h-6" /> Solicitar Asesoría VIP
                </button>
                {formStatus && <p className="text-center font-bold text-blue-100 animate-pulse uppercase tracking-widest text-sm">{formStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080d1a] pt-32 pb-12 px-6 border-t border-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="text-3xl font-black tracking-tighter mb-8 italic">
                TuTienda<span className="text-blue-500">24</span>
              </div>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10">
                Líderes en transformación digital para comercios locales. Orgullosamente radicados en Catamarca.
              </p>
              <div className="flex gap-6">
                {[Instagram, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all border border-white/5">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-black text-sm uppercase tracking-[0.2em] text-slate-500 mb-10">Servicios</h4>
              <ul className="space-y-6 text-lg text-slate-400 font-bold">
                {['Sitios Corporativos', 'Catálogos WhatsApp', 'Mantenimiento Web', 'Identidad Sonora'].map((item) => (
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
        onClick={() => openWhatsApp('Consulta Flotante')}
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
      <Route path="/guia-pro-2024" element={<Guide />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/cookies" element={<Cookies />} />
    </Routes>
  );
}
