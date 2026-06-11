import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const r = (min, max) => min + Math.random() * (max - min);

const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i, x: r(0, 100), y: r(0, 85), size: r(1, 3),
  delay: r(0, 5), dur: r(2, 5),
}));

const SMOKE = Array.from({ length: 10 }, (_, i) => ({
  id: i, x: r(37, 63), size: r(80, 170), delay: i * 0.65, dur: r(4, 7),
}));

const SPARKS = Array.from({ length: 24 }, (_, i) => ({
  id: i, x: r(43, 57), w: r(2, 5), h: r(2, 5),
  color: ['#fb923c', '#ef4444', '#fbbf24', '#f97316'][Math.floor(Math.random() * 4)],
  delay: r(0, 3), dur: r(0.9, 2.2), dx: r(-25, 25), rise: r(25, 65),
}));

const LIGHTS = [
  '#fbbf24', '#34d399', '#60a5fa', '#f472b6',
  '#fbbf24', '#34d399', '#60a5fa', '#f472b6',
];

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#02040b] overflow-hidden relative flex flex-col items-center select-none">

      {/* ── STARS ── */}
      {STARS.map(s => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.05, 1, 0.05], scale: [1, 1.6, 1] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* ── NEBULA GLOW ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 38%, rgba(59,130,246,0.07) 0%, transparent 70%)' }}
      />

      {/* ── SCENE CONTAINER ── */}
      <div className="relative flex flex-col items-center z-10" style={{ marginTop: '7vh', width: 'min(340px, 80vw)' }}>

        {/* ── UFO ── */}
        <motion.div
          className="relative w-full z-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* underside glow */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              bottom: -6, left: '10%', right: '10%', height: 18,
              background: 'radial-gradient(ellipse, rgba(59,130,246,0.55) 0%, transparent 70%)',
              filter: 'blur(8px)',
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          <svg viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
            <defs>
              <radialGradient id="dg" cx="44%" cy="65%" r="55%">
                <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.96" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.92" />
              </radialGradient>
              <radialGradient id="bg" cx="50%" cy="22%" r="65%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="45%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#1e293b" />
              </radialGradient>
              <radialGradient id="ug" cx="50%" cy="0%" r="80%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </radialGradient>
              <filter id="gl" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="gs" x="-5%" y="-5%" width="110%" height="110%">
                <feGaussianBlur stdDeviation="2" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* dome shadow */}
            <ellipse cx="170" cy="82" rx="58" ry="12" fill="#000" opacity="0.25" />
            {/* dome */}
            <ellipse cx="170" cy="65" rx="58" ry="44" fill="url(#dg)" />
            {/* dome reflection 1 */}
            <ellipse cx="155" cy="54" rx="20" ry="13" fill="white" opacity="0.16" />
            {/* dome reflection 2 */}
            <ellipse cx="162" cy="47" rx="8" ry="5" fill="white" opacity="0.22" />

            {/* body */}
            <ellipse cx="170" cy="95" rx="130" ry="28" fill="url(#bg)" />
            {/* underside */}
            <ellipse cx="170" cy="108" rx="104" ry="16" fill="url(#ug)" />

            {/* rim highlight */}
            <ellipse cx="170" cy="88" rx="130" ry="22" fill="none" stroke="#bae6fd" strokeWidth="1" opacity="0.3" />
            {/* rim glow */}
            <ellipse cx="170" cy="95" rx="130" ry="28" fill="none" stroke="#3b82f6" strokeWidth="2.5" opacity="0.55" filter="url(#gl)" />

            {/* lights */}
            {LIGHTS.map((color, i) => {
              const a = (i / LIGHTS.length) * Math.PI * 2;
              const x = 170 + 106 * Math.cos(a);
              const y = 95 + 24 * Math.sin(a);
              return <circle key={i} cx={x} cy={y} r="6" fill={color} filter="url(#gl)" opacity="0.95" />;
            })}

            {/* nozzle */}
            <circle cx="170" cy="113" r="10" fill="#bfdbfe" opacity="0.65" filter="url(#gs)" />
            <circle cx="170" cy="113" r="5"  fill="white"  opacity="0.9" />
          </svg>
        </motion.div>

        {/* ── TRACTOR BEAM ── */}
        <div className="relative w-full z-10" style={{ height: 'min(280px, 32vh)', marginTop: -3 }}>
          {/* main beam */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(147,197,253,0.45) 0%, rgba(96,165,250,0.22) 30%, rgba(59,130,246,0.04) 100%)',
              clipPath: 'polygon(32% 0%, 68% 0%, 92% 100%, 8% 100%)',
            }}
            animate={{ opacity: [0.45, 0.9, 0.45] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* beam inner shimmer */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.12) 0%, transparent 60%)',
              clipPath: 'polygon(40% 0%, 60% 0%, 70% 100%, 30% 100%)',
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* scan line 1 */}
          {[0, 0.9, 1.7].map((d, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                height: 55,
                background: 'linear-gradient(to bottom, transparent, rgba(147,197,253,0.22), transparent)',
                clipPath: 'polygon(32% 0%, 68% 0%, 92% 100%, 8% 100%)',
              }}
              animate={{ y: [-55, 290] }}
              transition={{ duration: 2.2, delay: d, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>

        {/* ── 404 ── */}
        <motion.div
          className="absolute z-30 w-full flex justify-center"
          style={{ top: '33%' }}
        >
          <motion.div
            animate={{ y: [35, -20, 35], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span
              className="font-black tracking-tighter block"
              style={{
                fontSize: 'clamp(88px, 22vw, 180px)',
                color: 'transparent',
                WebkitTextStroke: '2px rgba(147,197,253,0.85)',
                textShadow:
                  '0 0 25px rgba(59,130,246,0.9), 0 0 55px rgba(59,130,246,0.5), 0 0 100px rgba(59,130,246,0.25)',
                lineHeight: 1,
              }}
            >
              404
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── GROUND GRADIENT ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '28vh', background: 'linear-gradient(to top, #050b16 0%, #060d1a 55%, transparent 100%)' }}
      />
      {/* horizon */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{ bottom: '20vh', height: 1, background: 'linear-gradient(to right, transparent, rgba(30,41,59,0.7), transparent)' }}
      />

      {/* ── SMOKE ── */}
      {SMOKE.map(s => (
        <motion.div
          key={s.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: `${s.x}%`,
            bottom: '20vh',
            width: s.size,
            height: s.size * 0.5,
            transform: 'translateX(-50%)',
            background: 'radial-gradient(ellipse, rgba(148,163,184,0.14) 0%, transparent 70%)',
            filter: 'blur(18px)',
          }}
          animate={{ y: [0, -110], opacity: [0, 0.85, 0], scaleX: [0.7, 1.8] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {/* ── FIRE GLOW ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: '20vh', left: '50%', transform: 'translateX(-50%)',
          width: 200, height: 35,
          background: 'radial-gradient(ellipse, rgba(251,146,60,0.45) 0%, rgba(239,68,68,0.2) 45%, transparent 70%)',
          filter: 'blur(10px)',
        }}
        animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.85, 1.35, 0.85] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── SPARKS ── */}
      {SPARKS.map(s => (
        <motion.div
          key={s.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: `${s.x}%`, bottom: '20vh',
            width: s.w, height: s.h,
            backgroundColor: s.color,
            filter: 'blur(0.5px)',
            boxShadow: `0 0 5px ${s.color}`,
          }}
          animate={{ y: [0, -s.rise], x: [0, s.dx], opacity: [1, 0] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {/* ── COPY & CTA ── */}
      <motion.div
        className="relative z-30 flex flex-col items-center mt-auto pb-14 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <motion.p
          className="text-2xl md:text-3xl font-black text-white mb-2 italic tracking-tight"
          animate={{ opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          Esta página fue abducida.
        </motion.p>
        <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.25em] mb-10">
          Señal perdida · Sector 404 · TuTienda24
        </p>
        <motion.button
          whileHover={{ scale: 1.06, boxShadow: '0 0 35px rgba(59,130,246,0.45)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white font-black px-12 py-5 rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3 text-xl"
        >
          <Home className="w-6 h-6" />
          Volver a la Tierra
        </motion.button>
      </motion.div>

    </div>
  );
}
