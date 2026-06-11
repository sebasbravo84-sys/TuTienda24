import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NewsletterSection() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Suscribiendo...');
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const res = await fetch("https://formspree.io/f/mvzwvdyv", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ ...data, name: "Nuevo Suscriptor", _subject: "Suscripción: Club de Éxito Digital" }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('Error. Intentá de nuevo más tarde.');
        setTimeout(() => setStatus(''), 6000);
      }
    } catch {
      setStatus('Error de conexión.');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 backdrop-blur-3xl z-0"></div>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[3rem] p-10 md:p-20 shadow-3xl text-center relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] group-hover:bg-blue-500/30 transition-all duration-1000"></div>

          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">Club de Éxito Digital</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic tracking-tighter">
              ¿Quieres vender más <br /> mientras <span className="text-blue-500 italic">descansas?</span>
            </h2>
            <p className="text-lg text-slate-400 font-medium mb-10 leading-relaxed">
              Únete a emprendedores de toda Argentina. Recibe estrategias, ofertas y nuestra <span className="text-white font-bold">Guía Pro 2026</span> gratis.
            </p>

            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-black px-8 py-5 rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3 group/btn whitespace-nowrap"
                  >
                    Unirme y descargar <Download className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-8 flex flex-col items-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
                  <h4 className="text-2xl font-black text-white mb-2 italic">¡Bienvenido al Club!</h4>
                  <p className="text-emerald-100/70 mb-6 font-medium">Hemos preparado tu acceso de élite.</p>
                  <button
                    onClick={() => navigate('/guia-pro')}
                    className="bg-emerald-600 text-white font-black px-12 py-4 rounded-xl hover:bg-emerald-500 transition-all flex items-center gap-3"
                  >
                    Ver Guía Pro Ahora <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {status && status !== 'success' && status !== 'Suscribiendo...' && (
              <p className="mt-4 text-red-500 font-bold text-sm uppercase tracking-widest">{status}</p>
            )}
            {status === 'Suscribiendo...' && (
              <p className="mt-4 text-blue-400 font-bold animate-pulse text-sm uppercase tracking-widest">Suscribiendo...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
