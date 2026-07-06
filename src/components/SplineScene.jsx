import { lazy, Suspense, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, X } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile.js';

const Spline = lazy(() => import('@splinetool/react-spline'));

function MobileFallback({ className }) {
  return (
    <div className={`relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f172a] to-[#070e1c]" />
      <div className="absolute top-8 left-8 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-8 right-8 w-48 h-48 bg-indigo-500/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue-600/5 rounded-full blur-[80px]" />
      <div className="relative z-10 text-center px-8">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.15)]">
          <span className="text-4xl">🤖</span>
        </div>
        <p className="text-white font-black text-xl tracking-tight mb-2">Interfaz 3D Interactiva</p>
        <p className="text-slate-500 text-sm font-medium leading-relaxed">
          Visitá desde desktop para vivir<br />la experiencia completa
        </p>
      </div>
    </div>
  );
}

export default function SplineScene({ scene, className = "" }) {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isMobile) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isMobile]);

  if (isMobile) return <MobileFallback className={className} />;

  return (
    <div ref={ref} className={`relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] ${className}`}>

      {!shouldLoad && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/50">
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
            <div className="w-8 h-8 rounded-full border-2 border-blue-500/40 border-t-blue-400 animate-spin" />
          </div>
          <p className="text-slate-500 text-xs font-bold tracking-widest uppercase">Experiencia 3D</p>
        </div>
      )}

      {shouldLoad && isLoading && !error && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/50 backdrop-blur-sm">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
            <Loader2 className="w-10 h-10 text-blue-500" />
          </motion.div>
          <p className="mt-4 text-slate-400 font-bold tracking-widest uppercase text-xs">Cargando experiencia 3D...</p>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-md p-8 text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-4 border border-red-500/20">
            <X className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-white font-black uppercase tracking-tighter mb-2">Error de Conexión 3D</p>
          <p className="text-slate-400 text-sm font-medium">No pudimos conectar con la escena.</p>
        </div>
      )}

      {shouldLoad && !error && (
        <Suspense fallback={null}>
          <Spline
            scene={scene}
            onLoad={() => setIsLoading(false)}
            onError={() => { setError(true); setIsLoading(false); }}
            className="w-full h-full"
          />
        </Suspense>
      )}

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/20 to-transparent" />
    </div>
  );
}
