import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, MessageCircle, ArrowUpRight } from 'lucide-react';
import CounterStat from '../CounterStat';

const cases = [
  {
    client: 'Voltax Baterías',
    category: 'Servicios 24/7',
    url: 'https://voltaxbaterias.com.ar/',
    color: 'from-yellow-500/20 to-orange-500/10',
    border: 'border-yellow-500/20',
    accent: 'text-yellow-400',
    glow: 'rgba(234,179,8,0.15)',
    quote: 'Antes dependíamos del boca en boca. Ahora el 70% de nuestros clientes nos encuentran por Google.',
    author: 'Propietario, Voltax',
    stats: [
      { value: '70%', label: 'Clientes desde Google', icon: <TrendingUp className="w-5 h-5 text-yellow-400" /> },
      { value: '3x', label: 'Consultas por mes',     icon: <MessageCircle className="w-5 h-5 text-yellow-400" /> },
      { value: '21',  label: 'Días de entrega',      icon: <Users className="w-5 h-5 text-yellow-400" /> },
    ],
  },
  {
    client: 'CorCent Odontología',
    category: 'Salud Premium',
    url: 'https://corcent.netlify.app/',
    color: 'from-blue-500/20 to-indigo-500/10',
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    glow: 'rgba(59,130,246,0.15)',
    quote: 'La web nos dio una imagen profesional que ningún otro consultorio de la zona tiene. Los pacientes llegan convencidos.',
    author: 'Directora, CorCent',
    stats: [
      { value: '55%', label: 'Nuevos pacientes',    icon: <TrendingUp className="w-5 h-5 text-blue-400" /> },
      { value: '4.9', label: 'Reseñas en Google',   icon: <Users className="w-5 h-5 text-blue-400" /> },
      { value: '18',  label: 'Días de entrega',     icon: <MessageCircle className="w-5 h-5 text-blue-400" /> },
    ],
  },
  {
    client: 'Lipipalu',
    category: 'Accesorios de Autor',
    url: 'https://lipipalu.netlify.app/',
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'border-purple-500/20',
    accent: 'text-purple-400',
    glow: 'rgba(168,85,247,0.15)',
    quote: 'Multiplicamos las ventas por WhatsApp. El catálogo online nos ahorra horas de respuestas y la gente llega lista para comprar.',
    author: 'Fundadora, Lipipalu',
    stats: [
      { value: '4x',  label: 'Ventas por WhatsApp', icon: <TrendingUp className="w-5 h-5 text-purple-400" /> },
      { value: '80%', label: 'Menos consultas repetidas', icon: <MessageCircle className="w-5 h-5 text-purple-400" /> },
      { value: '14',  label: 'Días de entrega',     icon: <Users className="w-5 h-5 text-purple-400" /> },
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
          className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10"
        >
          <ArrowUpRight className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 relative z-10">
        {c.stats.map((s, j) => (
          <div key={j} className="text-center bg-white/5 rounded-2xl p-4 border border-white/5">
            <div className="flex justify-center mb-2">{s.icon}</div>
            <div className="text-2xl font-black text-white tabular-nums">{s.value}</div>
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="relative z-10 border-t border-white/5 pt-6">
        <p className="text-slate-300 text-sm font-medium leading-relaxed italic mb-3">"{c.quote}"</p>
        <p className={`text-[10px] font-black uppercase tracking-widest ${c.accent}`}>— {c.author}</p>
      </div>
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
            📈 Resultados Reales
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter">
            Negocios que crecieron <br />
            <span className="text-slate-500">con TuTienda24</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mt-6 font-medium">
            No solo entregamos webs. Entregamos resultados medibles en semanas, no meses.
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
            ¿Querés resultados como estos para tu negocio?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
