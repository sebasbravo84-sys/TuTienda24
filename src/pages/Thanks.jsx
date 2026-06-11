import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Home, MessageCircle, ArrowRight, Instagram, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';

const Thanks = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = React.useState(7);

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'G-4RFNMD8F6Y/thanks_page_view',
      });
    }
    
    window.scrollTo(0, 0);

    // Sistema de redirección automática
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50 selection:bg-blue-500/30 flex flex-col relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/15 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Header/Logo */}
      <header className="p-8 relative z-10">
        <div className="container mx-auto flex justify-center">
          <Logo size={0.85} dark onClick={() => navigate('/')} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 100 }}
            className="w-24 h-24 bg-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)]"
          >
            <CheckCircle2 className="w-12 h-12 text-emerald-400" />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter"
          >
            ¡Gracias por <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              tu interés!
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg mx-auto font-medium leading-relaxed"
          >
            Tu solicitud ha sido recibida correctamente. En breve un experto de **TuTienda24** se pondrá en contacto con vos para dar el siguiente paso.
          </motion.p>

          {/* Barra de progreso de redirección */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mb-12 max-w-xs mx-auto"
          >
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3">
              Volviendo al inicio en {countdown} segundos...
            </p>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 7, ease: "linear" }}
                className="h-full bg-blue-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
            >
              <Home className="w-5 h-5 text-blue-400" />
              Volver al Inicio
            </button>
            <button
              onClick={() => window.open('https://wa.me/543460406121', '_blank')}
              className="px-8 py-4 bg-blue-600 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 hover:scale-105 transition-all text-white"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Directo
            </button>
          </motion.div>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="p-8 text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest relative z-10">
        © {new Date().getFullYear()} TuTienda24 · Argentina
      </footer>
    </div>
  );
};

export default Thanks;
