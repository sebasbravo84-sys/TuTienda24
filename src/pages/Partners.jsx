import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  Target, 
  MessageSquare, 
  Download, 
  Zap, 
  PlayCircle, 
  ShieldCheck,
  ArrowRight,
  FileText,
  Image as ImageIcon,
  Trophy,
  Briefcase
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const resources = [
  { title: "Manual del Aliado", desc: "El speech de venta probado.", color: "blue", icon: <FileText />, link: "/aliados/manual" },
  { title: "Brief de Proyecto", desc: "Formulario para nuevos clientes.", color: "orange", icon: <Briefcase />, link: "/brief" }
];

export default function Partners() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-blue-500/30">
      <header className="fixed top-0 w-full z-50 glass py-6 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">Inicio</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-600/20 shrink-0">
              24
            </div>
            <div className="text-xl font-black italic tracking-tighter uppercase leading-none">
              TuTienda<span className="text-blue-500">24</span>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-8 border border-blue-500/20 uppercase">
              🚀 Centro de Aliados de Élite
            </span>
            <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-8">
              Conviértete en <br /> <span className="text-blue-500">Socio VIP</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
              Bienvenido al equipo. Aquí tienes las herramientas para transformar tus contactos en comisiones del 10%. Sin límites, de forma profesional.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { label: "Plan Catálogo", gain: "$12.000" },
              { label: "Plan Corporativo", gain: "$29.500" },
              { label: "Plan Élite 3D", gain: "$58.000" }
            ].map((p, i) => (
              <div key={i} className="glass-card p-10 rounded-[3rem] text-center border border-white/5">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">{p.label}</p>
                <div className="text-4xl font-black text-emerald-400">+{p.gain}</div>
                <p className="text-[10px] text-slate-600 font-bold uppercase mt-4">Comisión por venta</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((res, i) => (
              <div key={i} className="glass-card p-10 rounded-[3rem] border border-white/5 flex flex-col items-center text-center group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border bg-white/5 text-blue-500 border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all`}>
                  {res.icon}
                </div>
                <h3 className="text-xl font-black mb-2 italic tracking-tighter">{res.title}</h3>
                <p className="text-sm text-slate-500 font-medium mb-10 flex-1">{res.desc}</p>
                <button 
                  onClick={() => res.link.startsWith('http') ? window.open(res.link, '_blank') : navigate(res.link)}
                  className="w-full py-4 rounded-xl bg-blue-600 text-white font-black uppercase text-[10px] tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20"
                >
                  {res.title === "Manual del Aliado" ? "Leer Manual" : 
                   res.title === "Brief de Proyecto" ? "Abrir Formulario" : 
                   "Descargar Kit"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 text-center bg-slate-950/40 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter mb-8 leading-none">
            ¿Listo para <br /> <span className="text-blue-500">arrasar?</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium mb-12">
            ¿Tienes dudas o necesitas soporte personalizado para cerrar una venta? Habla directamente con nuestro Coordinador de Aliados.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/543460406121?text=Hola! Soy aliado y necesito soporte.', '_blank')}
            className="bg-white text-slate-900 font-black px-12 py-8 rounded-3xl hover:bg-blue-50 transition-all shadow-2xl flex items-center gap-4 text-2xl group w-full sm:w-auto mx-auto italic tracking-tighter justify-center"
          >
            SOPORTE PARA ALIADOS <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-white/5 text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
        © TuTienda24 • Programa de Élite
      </footer>
    </div>
  );
}
