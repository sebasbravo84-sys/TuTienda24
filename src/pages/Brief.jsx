import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  Send, 
  Printer, 
  CheckCircle2, 
  Target, 
  Zap, 
  Globe, 
  ShoppingCart, 
  Image as ImageIcon,
  MessageCircle,
  Clock,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    id: "identidad",
    title: "1. Identidad del Proyecto",
    icon: <Globe className="w-6 h-6" />,
    fields: [
      { id: "businessName", label: "Nombre del Negocio/Marca", placeholder: "Ej: Mis Chiches", type: "text" },
      { id: "ownerName", label: "Nombre del Responsable", placeholder: "Quién es nuestro contacto principal", type: "text" },
      { id: "location", label: "Ubicación", placeholder: "Ciudad, Provincia", type: "text" }
    ]
  },
  {
    id: "objetivos",
    title: "2. Objetivos y Público",
    icon: <Target className="w-6 h-6" />,
    fields: [
      { id: "mainGoal", label: "¿Cuál es el objetivo principal?", placeholder: "Ej: Vender productos físicos, mostrar servicios, marca personal", type: "textarea" },
      { id: "targetPublic", label: "¿A quién le vendemos?", placeholder: "Rango de edad, intereses, ubicación", type: "text" }
    ]
  },
  {
    id: "estructura",
    title: "3. Estructura y Función",
    icon: <ShoppingCart className="w-6 h-6" />,
    fields: [
      { id: "sections", label: "Secciones deseadas", placeholder: "Ej: Inicio, Catálogo, Sobre nosotros, Contacto", type: "text" },
      { id: "catalog", label: "¿Necesita Catálogo WhatsApp?", placeholder: "Sí / No / Cuantos productos aprox.", type: "text" }
    ]
  },
  {
    id: "estetica",
    title: "4. Estética y Marca",
    icon: <ImageIcon className="w-6 h-6" />,
    fields: [
      { id: "logo", label: "¿Tiene logotipo?", placeholder: "Sí (lo adjunto) / No (necesito uno)", type: "text" },
      { id: "colors", label: "Colores de marca", placeholder: "Preferencias o colores existentes", type: "text" },
      { id: "references", label: "Sitios web de referencia", placeholder: "Links de sitios que te gustan de tu rubro", type: "text" }
    ]
  },
  {
    id: "logistica",
    title: "5. Logística e Inversión",
    icon: <Clock className="w-6 h-6" />,
    fields: [
      { id: "deadline", label: "¿Para cuándo lo necesitas?", placeholder: "Fecha aproximada de lanzamiento", type: "text" },
      { id: "plan", label: "Plan de Interés", placeholder: "Catálogo / Corporativo / Élite 3D", type: "text" }
    ]
  }
];

export default function Brief() {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here logic can be added to send via email if needed
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-blue-500/30 print:bg-white print:text-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass py-6 border-b border-white/5 print:hidden">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">Atrás</span>
          </Link>
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/10"
            >
              <Printer className="w-4 h-4" /> Exportar / Imprimir
            </button>
            <div className="text-xl font-black italic tracking-tighter">TuTienda<span className="text-blue-500">24</span></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-40 pb-20 px-6 print:pt-0">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 print:mb-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-8 border border-blue-500/20 uppercase print:border-slate-200 print:text-slate-500">
              📊 Formulario de Inicio de Proyecto
            </span>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-6 print:text-4xl text-white print:text-slate-900">
              Brief de <br /> <span className="text-blue-500">Proyecto Élite</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto print:hidden">
              Completá estos datos para que nuestro equipo pueda diseñar la solución perfecta para tu negocio en Catamarca.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {sections.map((section, idx) => (
              <motion.section 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 md:p-14 rounded-[3rem] border-white/5 relative overflow-hidden group print:border-slate-200 print:shadow-none print:p-6 print:rounded-none print:break-inside-avoid print:mb-8"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 border border-blue-500/20 print:border-slate-200 print:text-slate-700">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.fields.map((field) => (
                    <div key={field.id} className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase tracking-widest block ml-2">
                        {field.label}
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          rows="3"
                          placeholder={field.placeholder}
                          onChange={(e) => handleInputChange(field.id, e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none print:bg-slate-50 print:border-slate-200 print:text-slate-900"
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          onChange={(e) => handleInputChange(field.id, e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all print:bg-slate-50 print:border-slate-200 print:text-slate-900"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </motion.section>
            ))}

            <div className="flex flex-col items-center gap-6 pt-10 print:hidden">
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }} 
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-3 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-8 py-4 rounded-2xl font-black uppercase text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5" /> Formulario Completo, ¡ahora dale a Imprimir!
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!submitted ? (
                <button 
                  type="submit"
                  className="bg-blue-600 text-white font-black px-14 py-6 rounded-3xl hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(59,130,246,0.3)] text-xl italic tracking-tighter flex items-center gap-4 group"
                >
                  REVISAR Y FINALIZAR <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              ) : (
                <button 
                  type="button"
                  onClick={handlePrint}
                  className="bg-white text-slate-900 font-black px-14 py-6 rounded-3xl hover:bg-blue-50 transition-all shadow-2xl text-xl italic tracking-tighter flex items-center gap-4"
                >
                  GUARDAR COMO PDF <Printer className="w-6 h-6" />
                </button>
              )}
            </div>
          </form>

          <footer className="mt-32 border-t border-white/5 pt-12 text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] print:mt-10 print:text-slate-400">
            © 2024 TuTienda24 • Catamarca • Brief Técnico Confidencial
          </footer>
        </div>
      </main>

      {/* Custom Print Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body { color: black !important; background: white !important; }
          .glass-card { background: none !important; border: 1px solid #cbd5e1 !important; margin-bottom: 2rem !important; border-radius: 0 !important; box-shadow: none !important; }
          h1, h2, h3, h4, label { color: #020617 !important; }
          p, li, textarea, input { color: #1e293b !important; border: 1px solid #e2e8f0 !important; }
          textarea::placeholder, input::placeholder { color: transparent !important; }
          .print\\:hidden { display: none !important; }
          @page { margin: 1.5cm; }
        }
      ` }} />
    </div>
  );
}
