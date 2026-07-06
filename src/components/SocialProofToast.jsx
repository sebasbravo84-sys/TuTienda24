import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const notifications = [
  { name: "Valentina M.", city: "Buenos Aires",  action: "acaba de consultar por un plan" },
  { name: "Carlos R.",    city: "Córdoba",        action: "solicitó un presupuesto" },
  { name: "Lucía F.",     city: "Rosario",        action: "está viendo los planes" },
  { name: "Martín G.",    city: "Mendoza",        action: "acaba de escribirnos" },
  { name: "Sofía P.",     city: "Tucumán",        action: "eligió el Plan Despegue" },
  { name: "Diego H.",     city: "Salta",          action: "solicitó una demo" },
  { name: "Ana L.",       city: "Mar del Plata",  action: "acaba de consultar" },
  { name: "Roberto C.",   city: "San Juan",       action: "pidió información" },
];

const avatarColors = [
  'from-blue-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-pink-600',
  'from-orange-500 to-red-600',
  'from-cyan-500 to-blue-600',
  'from-rose-500 to-pink-600',
  'from-amber-500 to-orange-600',
  'from-teal-500 to-emerald-600',
];

export default function SocialProofToast() {
  const [current, setCurrent] = useState(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const show = (i) => {
      setCurrent({ ...notifications[i], color: avatarColors[i] });
    };

    // Primera aparición a los 8s
    const first = setTimeout(() => {
      show(0);
      const interval = setInterval(() => {
        setIdx(prev => {
          const next = (prev + 1) % notifications.length;
          show(next);
          return next;
        });
      }, 28000);
      return () => clearInterval(interval);
    }, 8000);

    return () => clearTimeout(first);
  }, []);

  // Auto-ocultar después de 5s
  useEffect(() => {
    if (!current) return;
    const t = setTimeout(() => setCurrent(null), 5000);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          key={current.name + idx}
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="fixed bottom-24 left-5 z-[200] max-w-[270px] bg-[#1a2744]/95 border border-white/10 rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${current.color} flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-lg`}>
              {current.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-bold leading-tight">{current.name}</p>
              <p className="text-slate-400 text-xs leading-tight truncate">{current.action}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2.5 pt-2.5 border-t border-white/5">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{current.city} · hace un momento</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
