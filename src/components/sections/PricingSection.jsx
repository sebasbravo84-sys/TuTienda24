import { motion } from 'framer-motion';
import { ShoppingCart, Globe, Zap, Star, CheckCircle2, Instagram, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { pricingPlans, sistemaPlan } from '../../PRECIOS.js';

const planIcons = [
  <ShoppingCart className="w-6 h-6" />,
  <Globe className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
];

const sistemaTools = [
  { icon: <Globe className="w-4 h-4" />,       label: "Web Profesional"       },
  { icon: <Instagram className="w-4 h-4" />,   label: "Manychat / Instagram"  },
  { icon: <MessageCircle className="w-4 h-4" />, label: "WhatsApp Business"   },
  { icon: <Star className="w-4 h-4" />,         label: "Linktree"             },
  { icon: <MapPin className="w-4 h-4" />,        label: "Google Business"     },
  { icon: <Zap className="w-4 h-4" />,           label: "Capacitación 1 h"   },
];

export default function PricingSection({ openWhatsApp }) {
  return (
    <section id="precios" className="py-32 px-6 relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-6 border border-blue-500/20 uppercase">
            💎 Inversión Inteligente
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter">
            Planes diseñados <br />
            <span className="text-slate-500">para dominar el mercado</span>
          </h2>
        </div>

        {/* ── Sistema de Ventas — Hero Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden mb-8 border border-emerald-500/20 shadow-[0_30px_80px_rgba(16,185,129,0.15)]"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d2818] via-[#0a1628] to-[#0d1f3a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10" />

          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10 p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/30">
                  ✦ Nuevo
                </span>
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Producto estrella</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-4">
                {sistemaPlan.name}
              </h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-8 text-lg">
                {sistemaPlan.tagline}
              </p>

              {/* Tool pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {sistemaTools.map((t, i) => (
                  <span key={i} className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold px-3 py-1.5 rounded-full">
                    <span className="text-emerald-400">{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-slate-400 text-sm font-black">Desde $</span>
                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">{sistemaPlan.price}</span>
              </div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">{sistemaPlan.setup}</p>

              <button
                onClick={() => openWhatsApp(sistemaPlan.name)}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:scale-[1.02]"
              >
                Quiero este sistema
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right — features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sistemaPlan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-2xl p-5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Planes Base — 3 cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[2.5rem] border flex flex-col ${
                plan.isPopular
                  ? 'bg-blue-600 border-blue-400 shadow-[0_30px_60px_rgba(37,99,235,0.3)]'
                  : 'bg-slate-900/50 border-white/5 glass-card'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-5 py-1.5 rounded-full text-[10px] font-black tracking-widest shadow-xl uppercase whitespace-nowrap">
                  Más Elegido
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${plan.isPopular ? 'bg-white/20 text-white' : 'bg-blue-600/10 text-blue-400'}`}>
                {planIcons[i] || <Star className="w-6 h-6" />}
              </div>

              <h3 className="text-xl font-black mb-1 italic uppercase tracking-tighter text-white">{plan.name}</h3>
              <p className={`text-xs mb-8 font-bold ${plan.isPopular ? 'text-blue-100' : 'text-slate-500'}`}>{plan.setup}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-black opacity-60">$</span>
                <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm font-medium">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.isPopular ? 'text-white' : 'text-blue-500'}`} />
                    <span className={plan.isPopular ? 'text-blue-50' : 'text-slate-300'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openWhatsApp(plan.name)}
                className={`w-full py-5 rounded-xl font-black text-base transition-all ${
                  plan.isPopular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20'
                }`}
              >
                Elegir este Plan
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-slate-600 text-xs font-bold uppercase tracking-widest mt-12">
          Todos los precios incluyen IVA · Pago en pesos argentinos · Sin costos ocultos
        </p>

      </div>
    </section>
  );
}
