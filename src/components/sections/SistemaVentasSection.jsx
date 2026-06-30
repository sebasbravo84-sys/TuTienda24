import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Globe, MapPin, Instagram, Zap, TrendingUp, Users } from 'lucide-react';

const steps = [
  {
    icon: <Instagram className="w-6 h-6" />,
    color: 'from-pink-500 to-purple-600',
    glow: 'shadow-pink-500/20',
    label: 'Instagram',
    desc: 'Tu cliente ve un reel o post',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    color: 'from-yellow-400 to-orange-500',
    glow: 'shadow-orange-500/20',
    label: 'Manychat',
    desc: 'Comenta "INFO" → recibe el catálogo automático',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    color: 'from-emerald-400 to-green-600',
    glow: 'shadow-emerald-500/20',
    label: 'WhatsApp',
    desc: 'El bot lo pasa al WhatsApp listo para comprar',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    color: 'from-blue-400 to-blue-600',
    glow: 'shadow-blue-500/20',
    label: 'Tu Web',
    desc: 'Refuerza confianza y cierra las dudas',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    color: 'from-red-400 to-rose-600',
    glow: 'shadow-red-500/20',
    label: 'Google Maps',
    desc: 'Clientes nuevos te encuentran en búsquedas locales',
  },
];

const tools = [
  { name: 'Manychat', desc: 'Automatización de DMs en Instagram y Facebook', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  { name: 'WhatsApp Business', desc: 'Catálogo, respuestas rápidas y mensaje de bienvenida', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
  { name: 'Linktree', desc: 'Un solo link que centraliza WhatsApp, web y Maps', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
  { name: 'Google Business', desc: 'Aparecer en Maps y búsquedas locales sin pagar ads', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { name: 'Meta Business Suite', desc: 'Programar contenido y ver métricas en un lugar', color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
  { name: 'Tu Web TuTienda24', desc: 'El centro del ecosistema: SEO, catálogo y confianza', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
];

export default function SistemaVentasSection({ openWhatsApp }) {
  return (
    <section id="sistema" className="py-32 px-6 bg-[#0a0f1e] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-[0.2em] mb-8 border border-emerald-500/20 uppercase">
            ⚡ Nuevo Servicio
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tighter">
            No vendemos webs.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Vendemos clientes.
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Un ecosistema digital completo que trabaja solo mientras vos atendés tu negocio.
            Sin conocimientos técnicos. Sin publicidad paga. Con resultados reales.
          </p>
        </motion.div>

        {/* Flow steps */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mb-24">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3 flex-col lg:flex-row">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center w-44"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-xl ${step.glow} mb-3`}>
                  {step.icon}
                </div>
                <p className="font-black text-white text-sm mb-1">{step.label}</p>
                <p className="text-slate-500 text-[11px] leading-snug">{step.desc}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-slate-600 flex-shrink-0 rotate-90 lg:rotate-0" />
              )}
            </div>
          ))}
        </div>

        {/* Tools grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-10">
            Herramientas incluidas en el sistema
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`border rounded-2xl p-5 ${tool.bg}`}
              >
                <p className={`font-black text-sm mb-1 ${tool.color}`}>{tool.name}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/5 bg-white/[0.02] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="flex gap-12 flex-wrap justify-center md:justify-start">
            {[
              { icon: <Zap className="w-5 h-5 text-yellow-400" />, val: '24/7', label: 'El sistema trabaja solo' },
              { icon: <Users className="w-5 h-5 text-blue-400" />, val: '100%', label: 'Clientes reales, no visitas' },
              { icon: <TrendingUp className="w-5 h-5 text-emerald-400" />, val: 'x3', label: 'Más consultas en 30 días' },
            ].map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-1">{s.icon}<span className="text-3xl font-black text-white">{s.val}</span></div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
          <button
            onClick={openWhatsApp}
            className="flex-shrink-0 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:scale-105"
          >
            Quiero el sistema completo
          </button>
        </motion.div>

      </div>
    </section>
  );
}
