import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { name: "Raúl Giménez",  role: "Vendedor independiente",    text: "Teníamos miedo de que una web sea muy cara y difícil de usar, pero con TuTienda24 fue todo lo contrario. Ahora nos piden presupuestos por WhatsApp todo el día.", stars: 5, avatar: "RG", color: "from-blue-500 to-blue-700" },
  { name: "Lucía Perea",   role: "Emprendedora",              text: "El catálogo digital cambió mi forma de vender. Mis clientas eligen lo que quieren y me llega el pedido ordenado. ¡Súper profesional!", stars: 5, avatar: "LP", color: "from-emerald-500 to-emerald-700" },
  { name: "Marcos Torres", role: "Consultor",                 text: "Necesitaba una web institucional que diera confianza. El resultado superó mis expectativas, el diseño es de otro nivel.", stars: 5, avatar: "MT", color: "from-violet-500 to-violet-700" },
  { name: "Sofía Méndez",  role: "Prestadora de servicios",  text: "Excelente atención. No solo me hicieron la web, sino que me asesoraron en cómo mostrar mis productos. Muy recomendables.", stars: 5, avatar: "SM", color: "from-amber-500 to-amber-700" },
  { name: "Jorge Luna",    role: "Servicios de mantenimiento", text: "El servicio de mantenimiento me saca un peso de encima. Sé que mi web siempre está online y rápida sin que yo tenga que tocar nada.", stars: 5, avatar: "JL", color: "from-cyan-500 to-cyan-700" },
  { name: "Elena Castro",  role: "Profesional de salud",      text: "Gracias a TuTienda24, mis clientes pueden ver todos mis tratamientos y reservar turnos de manera mucho más ágil. Una inversión que se pagó sola.", stars: 5, avatar: "EC", color: "from-rose-500 to-rose-700" },
];

const scrolling = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
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
          {scrolling.map((t, i) => (
            <div key={i} className="glass-card p-10 rounded-[2rem] w-[400px] flex-shrink-0 border border-white/5 shadow-2xl">
              <div className="flex gap-1 mb-6">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 font-medium text-lg leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center font-black text-white text-base shadow-lg ring-2 ring-white/10 flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-black text-xl text-white">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
