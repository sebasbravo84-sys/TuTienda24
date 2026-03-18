import { motion } from 'framer-motion';
import { Zap, Shield, ShoppingCart, MessageCircle } from 'lucide-react';

export default function Native3DShowcase() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-slate-900/40 perspective-1000">
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .cube-face {
          position: absolute;
          width: 200px;
          height: 200px;
          border: 1px solid rgba(59, 130, 246, 0.3);
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .face-front  { transform: rotateY(0deg) translateZ(100px); }
        .face-back   { transform: rotateY(180deg) translateZ(100px); }
        .face-right  { transform: rotateY(90deg) translateZ(100px); }
        .face-left   { transform: rotateY(-90deg) translateZ(100px); }
        .face-top    { transform: rotateX(90deg) translateZ(100px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(100px); }
      `}</style>

      <motion.div
        className="relative w-[200px] h-[200px] preserve-3d"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="cube-face face-front">
          <Zap className="w-12 h-12 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        </div>
        <div className="cube-face face-back">
          <Shield className="w-12 h-12 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        </div>
        <div className="cube-face face-right">
          <ShoppingCart className="w-12 h-12 text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
        </div>
        <div className="cube-face face-left">
          <MessageCircle className="w-12 h-12 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </div>
        <div className="cube-face face-top bg-blue-500/10"></div>
        <div className="cube-face face-bottom bg-blue-500/10"></div>
        
        {/* Glow effect inside */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full animate-pulse"></div>
        </div>
      </motion.div>

      {/* Radial overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_80%)]"></div>
    </div>
  );
}
