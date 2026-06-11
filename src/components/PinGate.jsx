import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

const PIN = 'ELITE24';
const KEY = 'tt24_aliado';

export default function PinGate({ children }) {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(KEY) === '1');
  const [input, setInput] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().toUpperCase() === PIN) {
      sessionStorage.setItem(KEY, '1');
      setUnlocked(true);
    } else {
      setError(true);
      setShaking(true);
      setInput('');
      setTimeout(() => { setError(false); setShaking(false); }, 1500);
    }
  };

  if (unlocked) return children;

  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(59,130,246,0.07) 0%, transparent 70%)' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="flex justify-center mb-12">
          <Logo size={1} dark />
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-[2.5rem] p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center">
              <Lock className="w-7 h-7 text-blue-400" />
            </div>
          </div>

          <h1 className="text-3xl font-black text-white text-center italic tracking-tighter mb-2">
            Zona Aliados VIP
          </h1>
          <p className="text-slate-500 text-sm font-medium text-center mb-10">
            Ingresá el código que recibiste por WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              animate={shaking ? { x: [-8, 8, -8, 8, 0] } : { x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <input
                type={show ? 'text' : 'password'}
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Código de acceso"
                autoFocus
                className={`w-full bg-white/5 border rounded-2xl px-6 py-5 text-white text-lg font-bold tracking-widest placeholder:text-slate-600 placeholder:font-normal placeholder:tracking-normal focus:outline-none focus:ring-2 transition-all uppercase ${
                  error
                    ? 'border-red-500/60 focus:ring-red-500/30'
                    : 'border-white/10 focus:ring-blue-500/40'
                }`}
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </motion.div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-xs font-bold uppercase tracking-widest text-center"
                >
                  Código incorrecto. Pedilo por WhatsApp.
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 text-lg mt-2"
            >
              <ShieldCheck className="w-5 h-5" />
              Ingresar
            </button>
          </form>

          <p className="text-center text-slate-700 text-xs font-bold uppercase tracking-widest mt-8">
            ¿No tenés el código? →{' '}
            <a
              href="https://wa.me/543460406121?text=Hola! Quiero ser Aliado VIP de TuTienda24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Escribinos
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
