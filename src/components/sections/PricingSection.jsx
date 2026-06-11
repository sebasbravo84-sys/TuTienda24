import { motion } from 'framer-motion';
import { ShoppingCart, Globe, Zap, Star, CheckCircle2 } from 'lucide-react';
import { pricingPlans } from '../../PRECIOS.js';

const icons = [
  <ShoppingCart className="w-6 h-6" />,
  <Globe className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
];

export default function PricingSection({ openWhatsApp }) {
  return (
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
            className={`relative p-12 rounded-[3.5rem] border flex flex-col ${plan.isPopular ? 'bg-blue-600 border-blue-400 shadow-[0_30px_60px_rgba(37,99,235,0.3)]' : 'bg-slate-900/50 border-white/5 glass-card'}`}
          >
            {plan.isPopular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-6 py-2 rounded-full text-xs font-black tracking-widest shadow-xl uppercase">
                Más Elegido
              </div>
            )}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${plan.isPopular ? 'bg-white/20' : 'bg-blue-600/10 text-blue-400'}`}>
              {icons[i] || <Star className="w-6 h-6" />}
            </div>
            <h3 className="text-2xl font-black mb-2 italic uppercase tracking-tighter text-white">{plan.name}</h3>
            <p className={`text-sm mb-10 font-bold ${plan.isPopular ? 'text-blue-100' : 'text-slate-500'}`}>{plan.setup}</p>
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-sm font-black opacity-60">$</span>
              <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
            </div>
            <ul className="space-y-6 mb-12 flex-1">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? 'text-white' : 'text-blue-500'}`} />
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
  );
}
