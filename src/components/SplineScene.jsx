import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Loader2, X } from 'lucide-react';

/**
 * Reusable Spline Scene Component
 * @param {string} scene - The URL to the .splinecode file
 * @param {string} className - Additional CSS classes
 */
export default function SplineScene({ scene, className = "" }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden rounded-[2.5rem] ${className}`}>
      {/* Loading State */}
      {isLoading && !error && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/50 backdrop-blur-sm">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="w-10 h-10 text-blue-500" />
          </motion.div>
          <p className="mt-4 text-slate-400 font-bold tracking-widest uppercase text-xs">Cargando experiencia 3D...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-md p-8 text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-4 border border-red-500/20">
            <X className="w-8 h-8 text-red-500" />
          </div>
          <p className="text-white font-black uppercase tracking-tighter mb-2">Error de Conexión 3D</p>
          <p className="text-slate-400 text-sm font-medium">No pudimos conectar con la escena de Spline. Verifica que la URL sea pública y válida.</p>
        </div>
      )}

      {/* Spline Scene */}
      {!error && (
        <Spline 
          scene={scene} 
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
          className="w-full h-full"
        />
      )}
      
      {/* Optional Overlay Gradient for blending */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/20 to-transparent"></div>
    </div>
  );
}
