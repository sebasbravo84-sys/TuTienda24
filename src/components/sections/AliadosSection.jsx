import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Zap, ArrowRight } from 'lucide-react';

const referralSteps = [
  { title: "Kit de Ventas Élite",   desc: "Te enviamos un speech de venta probado y materiales gráficos para que ganes autoridad al instante.", icon: <CheckCircle2 className="w-6 h-6" /> },
  { title: "Contacto Privado",      desc: "Nos presentas por WhatsApp con tu cliente. Nosotros cerramos el trato técnico por ti.",             icon: <MessageCircle className="w-6 h-6" /> },
  { title: "10% de Comisión Neta",  desc: "Cobras tu comisión apenas el cliente reserve su lugar (50% de seña). Sin vueltas.",                 icon: <Zap className="w-6 h-6" /> },
];

export default function AliadosSection({ navigate }) {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 z-0"></div>
      <div className="container mx-auto max-w-7xl">
        <div className="glass-card rounded-[4rem] p-12 md:p-24 border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -mr-48 -mt-48 transition-all group-hover:bg-blue-500/20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block py-1.5 px-4 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-[0.2em] mb-8 border border-emerald-500/20 uppercase">
                🤝 Gana con nosotros
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 italic tracking-tighter leading-none">
                Tus contactos <br /> <span className="text-blue-500">valen oro</span>
              </h2>
              <div className="flex items-center gap-6 mb-12">
                <div className="text-6xl font-black text-white tracking-tighter italic">10%</div>
                <div className="text-xl font-bold text-slate-400 leading-tight">
                  de comisión neta <br /> por cada proyecto cerrado.
                </div>
              </div>
              <p className="text-lg text-slate-300 font-medium mb-10 leading-relaxed">
                Buscamos socios estratégicos. Te entregamos un <strong>Kit de Ventas</strong> y te enseñamos a detectar negocios con potencial.
              </p>
              <div className="space-y-4 mb-12">
                {["Pago inmediato (sin esperas a fin de mes)", "Capacitación gratuita sobre ventas digitales", "Material de apoyo (PDFs y Speech de venta)", "Transparencia total en el proceso"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-400 italic">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {text}
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/aliados')}
                className="bg-white text-slate-900 font-black px-12 py-6 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl flex items-center justify-center gap-4 text-xl group/btn w-full sm:w-auto"
              >
                Quiero ser Aliado VIP <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {referralSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex items-start gap-6 hover:bg-white/10 transition-colors"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/20 text-white">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2 italic uppercase tracking-tighter">{step.title}</h4>
                    <p className="text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
