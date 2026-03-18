import { motion } from 'framer-motion';

export default function LogoCube3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#0f172a]/40 perspective-2000">
      <style>{`
        .perspective-2000 { 
          perspective: 2000px; 
        }
        .preserve-3d { 
          transform-style: preserve-3d; 
        }
        .cube-face {
          position: absolute;
          width: 250px;
          height: 250px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: visible;
          box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2);
        }
        
        .logo-text {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-style: italic;
          font-size: 140px;
          color: white;
          user-select: none;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
          letter-spacing: -5px;
        }

        .face-front  { transform: rotateY(0deg) translateZ(125px); }
        .face-back   { transform: rotateY(180deg) translateZ(125px); }
        .face-right  { transform: rotateY(90deg) translateZ(125px); }
        .face-left   { transform: rotateY(-90deg) translateZ(125px); }
        .face-top    { transform: rotateX(90deg) translateZ(125px); background: #1d4ed8; }
        .face-bottom { transform: rotateX(-90deg) translateZ(125px); background: #1d4ed8; }

        .cube-container {
          position: relative;
          width: 250px;
          height: 250px;
          transform-style: preserve-3d;
        }

        /* Glass Shine Effect */
        .glass-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.1) 100%);
          pointer-events: none;
        }
      `}</style>

      <motion.div
        className="cube-container"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="cube-face face-front">
          <span className="logo-text">24</span>
          <div className="glass-shine"></div>
        </div>
        <div className="cube-face face-back">
          <span className="logo-text">24</span>
          <div className="glass-shine"></div>
        </div>
        <div className="cube-face face-right">
          <span className="logo-text">24</span>
          <div className="glass-shine"></div>
        </div>
        <div className="cube-face face-left">
          <span className="logo-text">24</span>
          <div className="glass-shine"></div>
        </div>
        <div className="cube-face face-top">
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-white/20 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="cube-face face-bottom">
          <div className="w-full h-full bg-black/20"></div>
        </div>
        
        {/* Core Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-40 h-40 bg-blue-400/30 blur-[80px] rounded-full"></div>
        </div>
      </motion.div>

      {/* Cinematic Lighting Refraction */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_80%)]"></div>
      
      {/* Floating Particles/Aura */}
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-[500px] h-[500px] border border-blue-500/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
         <div className="absolute w-[400px] h-[400px] border border-emerald-500/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
      </div>
    </div>
  );
}
