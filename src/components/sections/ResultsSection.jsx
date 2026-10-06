import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';

// Cada tarjeta dice lo que se entregó, que se comprueba abriendo la web del
// cliente. El número grande aparece solo cuando hay uno real: antes había
// porcentajes y citas de dueños que nadie había dicho, en una sección titulada
// "Resultados Reales". Si mañana conseguís la frase textual de un cliente,
// agregale `quote` y `author` y la tarjeta la muestra sola.
const cases = [
  {
    client: 'Las Medialunas de Gre',
    category: 'Panadería Artesanal',
    url: 'https://lasmedialunasdegre.netlify.app/',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/20',
    accent: 'text-amber-400',
    glow: 'rgba(245,158,11,0.15)',
    metric: { value: '8 → 20', label: 'Pedidos por semana' },
    delivered: [
      'Catálogo digital con packs predefinidos',
      'Pedidos directos por WhatsApp',
      'Ficha de negocio para Google',
    ],
  },
  {
    client: 'Buba Pet Shop',
    category: 'Tienda de Mascotas',
    url: 'https://bubapetshop.com.ar/',
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/20',
    accent: 'text-emerald-400',
    glow: 'rgba(16,185,129,0.15)',
    delivered: [
      'Tienda online con catálogo de productos',
      'Dominio propio .com.ar y hosting',
      'Diseño adaptado a celular',
    ],
  },
  {
    client: 'Voltax Baterías',
    category: 'Servicios 24/7',
    url: 'https://voltaxbaterias.com.ar/',
    color: 'from-yellow-500/20 to-orange-500/10',
    border: 'border-yellow-500/20',
    accent: 'text-yellow-400',
    glow: 'rgba(234,179,8,0.15)',
    delivered: [
      'Web orientada a la urgencia del cliente',
      'Dominio propio .com.ar y hosting',
      'Contacto inmediato desde cualquier página',
    ],
  },
];

function CaseCard({ c, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.15, duration: 0.6 }}
      className={`relative rounded-[2.5rem] border ${c.border} bg-gradient-to-br ${c.color} p-10 flex flex-col gap-8 overflow-hidden`}
      style={{ boxShadow: `0 30px 80px ${c.glow}` }}
    >
      {/* Glow decorativo */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px]" style={{ background: c.glow }} />

      {/* Header */}
      <div className="flex items-start justify-between relative z-10">
        <div>
          <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${c.accent} block mb-1`}>{c.category}</span>
          <h3 className="text-2xl font-black text-white tracking-tighter">{c.client}</h3>
        </div>
        <a
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver la web de ${c.client}`}
          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10 flex-shrink-0"
        >
          <ArrowUpRight className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Qué se entregó */}
      <ul className="relative z-10 flex flex-col gap-3 flex-1">
        {c.delivered.map((d, j) => (
          <li key={j} className="flex items-start gap-3">
            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${c.accent}`} />
            <span className="text-slate-300 text-sm font-medium leading-snug">{d}</span>
          </li>
        ))}
      </ul>

      {/* El número solo si existe */}
      {c.metric && (
        <div className="relative z-10 border-t border-white/5 pt-6">
          <div className={`text-4xl font-black tabular-nums tracking-tighter ${c.accent}`}>{c.metric.value}</div>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">{c.metric.label}</p>
        </div>
      )}

      {/* La cita solo si el cliente la dijo */}
      {c.quote && (
        <div className="relative z-10 border-t border-white/5 pt-6">
          <p className="text-slate-300 text-sm font-medium leading-relaxed italic mb-3">"{c.quote}"</p>
          <p className={`text-[10px] font-black uppercase tracking-widest ${c.accent}`}>— {c.author}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function ResultsSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-[0.2em] mb-6 border border-emerald-500/20 uppercase">
            📈 Trabajos Entregados
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter">
            Negocios que crecieron <br />
            <span className="text-slate-500">con TuTienda24</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mt-6 font-medium">
            Cada web está en línea y se puede visitar. Mirá lo que entregamos y juzgá vos.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => <CaseCard key={i} c={c} i={i} />)}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
            ¿Querés una web así para tu negocio?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
