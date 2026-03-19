import { motion } from 'framer-motion';
import { ChevronLeft, Zap, CheckCircle2, Star, TrendingUp, ShieldCheck, Search, Globe, Instagram, Mail, MapPin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const secrets = [
  {
    id: "01",
    title: "La Regla de los 3 Segundos",
    desc: "El 90% de tus clientes te buscan desde un celular con datos móviles. Si tu web tarda más de 3 segundos en cargar, perdiste la venta. TuTienda24 optimiza cada imagen para que la carga sea instantánea.",
    icon: <Zap className="w-8 h-8 text-yellow-500" />
  },
  {
    id: "02",
    title: "WhatsApp como Centro de Cierre",
    desc: "No obligues al cliente a llenar formularios infinitos. La gente prefiere el trato directo. El botón de WhatsApp debe estar siempre visible para cerrar ventas de forma humana y rápida.",
    icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" />
  },
  {
    id: "03",
    title: "Fotos Reales vs Stock Genérico",
    desc: "Tus clientes potenciales reconocen las fotos bajadas de internet al instante. Genera confianza usando fotos reales de tu local o productos. Si no tienes, nosotros te asesoramos en cómo capturarlas con tu celular para que luzcan premium.",
    icon: <Star className="w-8 h-8 text-blue-500" />
  },
  {
    id: "04",
    title: "SEO Local (Aparecer en el Mapa)",
    desc: "Cuando alguien busque 'Kiosco' o 'Dentista' en Google Maps, debes ser el primero. Configurar correctamente tu ficha de Google Business conectada a tu web es el secreto mejor guardado para el tráfico orgánico.",
    icon: <TrendingUp className="w-8 h-8 text-purple-500" />
  },
  {
    id: "05",
    title: "Seguridad que Transmite Élite",
    desc: "El candado verde (HTTPS) no es negociable. Una web que avisa que 'No es segura' destruye tu reputación en segundos. TuTienda24 entrega todos los sitios con certificados SSL de grado bancario.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />
  },
  {
    id: "06",
    title: "Menos es Más: Diseño Minimalista",
    desc: "Evita los colores chillones y las fuentes difíciles de leer. El diseño debe ser limpio, permitiendo que tu producto sea el protagonista. El lujo silencioso convierte mucho más que el ruido visual.",
    icon: <Search className="w-8 h-8 text-slate-400" />
  },
  {
    id: "07",
    title: "Prueba Social de Alto Impacto",
    desc: "En un mercado competitivo, las recomendaciones valen oro. Mostrar testimonios reales con nombre y apellido en tu web multiplica tu tasa de conversión por 3.",
    icon: <Globe className="w-8 h-8 text-blue-600" />
  }
];

export default function Guide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass py-6 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">Volver al Inicio</span>
          </Link>
          <div className="text-xl font-black italic tracking-tighter">
            TuTienda<span className="text-blue-500">24</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-8 border border-blue-500/20 uppercase">
                💎 Guía de Éxito Digital
              </span>
              <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-8">
                7 Secretos <br /> <span className="text-blue-500">para vender X3</span>
              </h1>
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                Esta no es una guía teórica. Son las claves reales que estamos aplicando hoy para que los comercios locales dominen el mercado digital.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
              <div className="absolute inset-0 bg-blue-600/20 rounded-[3rem] blur-[80px] group-hover:bg-blue-600/30 transition-all"></div>
              <img 
                src="/guia-cover.png" 
                alt="Portada Guía Pro" 
                className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secrets Content */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {secrets.map((secret, i) => (
              <motion.div
                key={secret.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 md:p-16 rounded-[4rem] border-white/5 relative group overflow-hidden"
              >
                <div className="text-9xl font-black text-white/[0.03] absolute top-10 right-10 pointer-events-none group-hover:text-blue-500/[0.05] transition-colors leading-none">
                  {secret.id}
                </div>
                <div className="w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center mb-10 border border-blue-500/20 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {secret.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 italic tracking-tighter uppercase">{secret.title}</h3>
                <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                  {secret.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-40 px-6 text-center bg-slate-950/40 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-8 leading-none">
            ¿Listo para aplicar <br /> esto en <span className="text-blue-500">tu negocio?</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium mb-12">
            No tienes que hacerlo solo. Estamos aquí para ayudarte en cada paso del camino.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/543460406121', '_blank')}
            className="bg-blue-600 text-white font-black px-12 py-6 rounded-2xl hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] text-xl italic tracking-tighter"
          >
            SOLICITAR AUDITORÍA GRATUITA
          </button>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-20 px-6 border-t border-white/5 text-center text-slate-600 text-sm font-bold uppercase tracking-[0.3em]">
        <div className="flex justify-center gap-10 mb-8">
          <Instagram className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
          <Mail className="w-5 h-5" />
        </div>
        <p>© TuTienda24. Dominando el Mercado Digital.</p>
      </footer>
    </div>
  );
}
