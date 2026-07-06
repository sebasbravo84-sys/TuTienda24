import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart, Globe, Zap, Star, CheckCircle2, Instagram, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { pricingPlans, sistemaPlan } from '../../PRECIOS.js';
import { useIsMobile } from '../../hooks/useIsMobile.js';

const planIcons = [
  <ShoppingCart className="w-6 h-6" />,
  <Globe className="w-6 h-6" />,
  <Zap className="w-6 h-6" />,
];

const sistemaTools = [
  { icon: <Globe className="w-4 h-4" />,         label: "Web Profesional"      },
  { icon: <Instagram className="w-4 h-4" />,     label: "Manychat / Instagram" },
  { icon: <MessageCircle className="w-4 h-4" />, label: "WhatsApp Business"    },
  { icon: <Star className="w-4 h-4" />,          label: "Linktree"             },
  { icon: <MapPin className="w-4 h-4" />,        label: "Google Business"      },
  { icon: <Zap className="w-4 h-4" />,           label: "Capacitación 1 h"    },
];

function TiltCard({ children, className, isMobile }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 });

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() { x.set(0); y.set(0); }

  if (isMobile) return <div className={className}>{children}</div>;

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HoloCard({ children, className, isPopular, isMobile }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [18, -18]), { stiffness: 400, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-18, 18]), { stiffness: 400, damping: 25 });
  const scale = useSpring(1, { stiffness: 400, damping: 25 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width;
    const yVal = (e.clientY - rect.top) / rect.height;
    x.set(xVal - 0.5);
    y.set(yVal - 0.5);
    setGlare({ x: xVal * 100, y: yVal * 100, opacity: 0.18 });
  }
  function onMouseEnter() { scale.set(1.05); }
  function onMouseLeave() {
    x.set(0); y.set(0); scale.set(1);
    setGlare(g => ({ ...g, opacity: 0 }));
  }

  if (isMobile) return <div className={`relative ${className}`}>{children}</div>;

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
      className={`relative ${className}`}
    >
      {children}
      <div
        className="absolute inset-0 rounded-[2.5rem] pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, ${isPopular ? 'rgba(255,255,255,0.25)' : 'rgba(99,179,237,0.3)'} 0%, transparent 60%)`,
          opacity: glare.opacity,
        }}
      />
    </motion.div>
  );
}

export default function PricingSection({ openWhatsApp }) {
  const isMobile = useIsMobile();

  return (
    <section id="precios" className="py-32 px-6 relative overflow-hidden" style={isMobile ? undefined : { perspective: '1200px' }}>

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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2.5rem] p-[2px] overflow-hidden mb-8"
          style={isMobile ? undefined : { perspective: '1200px' }}
        >
          {/* Borde: giratorio en desktop, estático en mobile */}
          {isMobile ? (
            <div
              className="absolute inset-0 rounded-[2.5rem]"
              style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.5), rgba(59,130,246,0.4), rgba(168,85,247,0.3))' }}
            />
          ) : (
            <motion.div
              className="absolute"
              style={{
                width: '200%',
                height: '200%',
                top: '-50%',
                left: '-50%',
                background: 'conic-gradient(from 0deg, transparent 0deg, #10b981 60deg, #3b82f6 180deg, #a855f7 260deg, transparent 320deg)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          )}

          <TiltCard isMobile={isMobile} className="relative rounded-[calc(2.5rem-2px)] overflow-hidden shadow-[0_30px_80px_rgba(16,185,129,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d2818] via-[#0a1628] to-[#0d1f3a]" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10" />

            {/* Shimmer: solo desktop */}
            {!isMobile && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.05) 50%, transparent 65%)',
                  backgroundSize: '300% 100%',
                }}
                animate={{ backgroundPosition: ['300% 0', '-100% 0'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
              />
            )}

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10 p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <motion.span
                    className="bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/30"
                    animate={isMobile ? {} : { scale: [1, 1.06, 1] }}
                    transition={isMobile ? {} : { duration: 2, repeat: Infinity }}
                  >
                    ✦ Nuevo
                  </motion.span>
                  <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Producto estrella</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-4">
                  {sistemaPlan.name}
                </h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8 text-lg">
                  {sistemaPlan.tagline}
                </p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-10"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
                >
                  {sistemaTools.map((t, i) => (
                    <motion.span
                      key={i}
                      variants={{ hidden: { opacity: 0, scale: 0.7 }, show: { opacity: 1, scale: 1 } }}
                      className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-slate-300 text-[11px] font-bold px-3 py-1.5 rounded-full"
                    >
                      <span className="text-emerald-400">{t.icon}</span>
                      {t.label}
                    </motion.span>
                  ))}
                </motion.div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-slate-400 text-sm font-black">Desde $</span>
                  <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">{sistemaPlan.price}</span>
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-8">{sistemaPlan.setup}</p>

                <motion.button
                  onClick={() => openWhatsApp(sistemaPlan.name)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  animate={isMobile ? {} : {
                    boxShadow: [
                      '0 0 40px rgba(16,185,129,0.25)',
                      '0 0 70px rgba(16,185,129,0.55)',
                      '0 0 40px rgba(16,185,129,0.25)',
                    ]
                  }}
                  transition={isMobile ? {} : { duration: 2.5, repeat: Infinity }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white px-10 py-5 rounded-2xl font-black text-lg transition-colors"
                >
                  Quiero este sistema
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              >
                {sistemaPlan.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
                    className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.06] hover:border-emerald-500/20 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium leading-snug">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </TiltCard>
        </motion.div>

        {/* ── Planes Base — 3 cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={isMobile ? undefined : { perspective: '1200px' }}>
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.13, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow pulsante: solo desktop */}
              {plan.isPopular && !isMobile && (
                <motion.div
                  className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                  animate={{
                    boxShadow: [
                      '0 20px 60px rgba(37,99,235,0.3)',
                      '0 20px 100px rgba(37,99,235,0.65)',
                      '0 20px 60px rgba(37,99,235,0.3)',
                    ]
                  }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                />
              )}

              <HoloCard
                isPopular={plan.isPopular}
                isMobile={isMobile}
                className={`relative p-10 rounded-[2.5rem] border flex flex-col h-full ${
                  plan.isPopular
                    ? 'bg-blue-600 border-blue-400'
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
              </HoloCard>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-slate-600 text-xs font-bold uppercase tracking-widest mt-12">
          Todos los precios incluyen IVA · Pago en pesos argentinos · Sin costos ocultos
        </p>

      </div>
    </section>
  );
}
