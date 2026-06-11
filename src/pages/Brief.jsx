import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  Send,
  Printer,
  CheckCircle2,
  Target,
  Globe,
  ShoppingCart,
  Image as ImageIcon,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import PinGate from '../components/PinGate';

const sections = [
  {
    id: "identidad",
    title: "1. Identidad del Proyecto",
    icon: <Globe className="w-6 h-6" />,
    fields: [
      { id: "businessName",  label: "Nombre del Negocio / Marca",      placeholder: "Ej: Mis Chiches",                              type: "text"  },
      { id: "ownerName",     label: "Nombre del Responsable",           placeholder: "Quién es nuestro contacto principal",          type: "text"  },
      { id: "email",         label: "Email de Contacto",                placeholder: "tu@correo.com",                                type: "email" },
      { id: "whatsapp",      label: "WhatsApp / Teléfono",              placeholder: "+54 9 ...",                                    type: "tel"   },
      { id: "location",      label: "Ubicación",                        placeholder: "Ciudad, Provincia",                            type: "text"  },
      { id: "existingWeb",   label: "¿Ya tiene sitio web?",             placeholder: "No / Sí — (pegá el link si tenés)",            type: "text"  },
      { id: "referredBy",    label: "Aliado que lo refirió",            placeholder: "Nombre de quien lo presentó",                  type: "text"  },
    ]
  },
  {
    id: "objetivos",
    title: "2. Objetivos y Público",
    icon: <Target className="w-6 h-6" />,
    fields: [
      { id: "mainGoal",     label: "¿Cuál es el objetivo principal?",  placeholder: "Ej: Vender productos, mostrar servicios, marca personal", type: "textarea" },
      { id: "targetPublic", label: "¿A quién le vendemos?",            placeholder: "Rango de edad, intereses, ubicación",                     type: "text"     },
    ]
  },
  {
    id: "estructura",
    title: "3. Estructura y Función",
    icon: <ShoppingCart className="w-6 h-6" />,
    fields: [
      { id: "pageSections", label: "Secciones deseadas",              placeholder: "Ej: Inicio, Catálogo, Sobre nosotros, Contacto", type: "text" },
      { id: "catalog",      label: "¿Necesita Catálogo WhatsApp?",    placeholder: "Sí / No / Cuántos productos aprox.",             type: "text" },
    ]
  },
  {
    id: "estetica",
    title: "4. Estética y Marca",
    icon: <ImageIcon className="w-6 h-6" />,
    fields: [
      { id: "logo",        label: "¿Tiene logotipo?",               placeholder: "Sí (lo adjunto) / No (necesito uno)",           type: "text" },
      { id: "colors",      label: "Colores de marca",               placeholder: "Preferencias o colores existentes",              type: "text" },
      { id: "references",  label: "Sitios web de referencia",       placeholder: "Links de sitios que le gustan del rubro",        type: "text" },
    ]
  },
  {
    id: "logistica",
    title: "5. Logística e Inversión",
    icon: <Clock className="w-6 h-6" />,
    fields: [
      { id: "deadline", label: "¿Para cuándo lo necesita?",  placeholder: "Fecha aproximada de lanzamiento",      type: "text" },
      { id: "plan",     label: "Plan de Interés",             placeholder: "Catálogo / Corporativo / Élite 3D",    type: "text" },
    ]
  },
  {
    id: "compromisos",
    title: "6. Compromisos del Cliente",
    icon: <ShieldCheck className="w-6 h-6" />,
    checkboxes: [
      { id: "c_material",    label: "Me comprometo a proveer los textos y fotos necesarios para el sitio." },
      { id: "c_revisions",   label: "Entiendo que el proyecto incluye 2 rondas de revisión y cambios." },
      { id: "c_domain",      label: "Entiendo que el dominio es bonificado solo durante el primer año." },
      { id: "c_payment",     label: "Acepto abonar el 50% al inicio del proyecto y el 50% restante al finalizar." },
      { id: "c_timeline",    label: "Entiendo que el plazo de entrega es de 7 a 10 días hábiles desde el pago inicial." },
    ]
  }
];

export default function Brief() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Brief de Proyecto | TuTienda24';
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://tutienda24.com.ar/brief');
  }, []);

  const [formData, setFormData]     = useState({});
  const [status, setStatus]         = useState(''); // '' | 'sending' | 'success' | 'error'

  const handleChange = (id, value) => setFormData(prev => ({ ...prev, [id]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Build a readable message from all fields
    const lines = sections.flatMap(s => {
      if (s.fields)     return s.fields.map(f     => `${f.label}: ${formData[f.id] || '—'}`);
      if (s.checkboxes) return s.checkboxes.map(c => `${c.label}: ${formData[c.id] ? '✓ Aceptado' : '✗ No tildado'}`);
      return [];
    });

    const body = {
      _subject:  `Brief de Proyecto — ${formData.businessName || 'Sin nombre'} (ref: ${formData.referredBy || 'directo'})`,
      Resumen:   lines.join('\n'),
    };

    try {
      const res = await fetch('https://formspree.io/f/xqeygwok', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(body),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <PinGate>
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-blue-500/30 print:bg-white print:text-slate-900">

      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass py-6 border-b border-white/5 print:hidden">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">Atrás</span>
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/10"
            >
              <Printer className="w-4 h-4" /> Exportar PDF
            </button>
            <Logo size={0.7} dark onClick={() => navigate('/')} />
          </div>
        </div>
      </header>

      <main className="pt-40 pb-20 px-6 print:pt-4">
        <div className="container mx-auto max-w-4xl">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 print:mb-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-6 border border-blue-500/20 uppercase print:hidden">
              📋 Formulario de Inicio de Proyecto
            </span>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-4 print:text-3xl print:text-slate-900">
              Brief de <span className="text-blue-500">Proyecto</span>
            </h1>
            <p className="text-slate-400 font-medium print:hidden">
              Completá los datos con el cliente para que nuestro equipo diseñe la solución perfecta.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {sections.map((section, idx) => (
              <motion.section
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-10 md:p-12 rounded-[3rem] border border-white/5 print:border-slate-200 print:rounded-lg print:p-6 print:mb-6"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 border border-blue-500/20 print:border-slate-300 print:text-blue-600 shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-black italic tracking-tighter uppercase print:text-slate-900">{section.title}</h2>
                </div>

                {/* Regular fields */}
                {section.fields && (
                  <div className="space-y-5">
                    {section.fields.map(field => (
                      <div key={field.id}>
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2 print:text-slate-600">
                          {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            rows={3}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ''}
                            onChange={e => handleChange(field.id, e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all resize-none print:bg-slate-50 print:border-slate-300 print:text-slate-900 print:rounded-md"
                          />
                        ) : (
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ''}
                            onChange={e => handleChange(field.id, e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all print:bg-slate-50 print:border-slate-300 print:text-slate-900 print:rounded-md"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Checkboxes */}
                {section.checkboxes && (
                  <div className="space-y-4">
                    {section.checkboxes.map(cb => (
                      <label key={cb.id} className="flex items-start gap-4 cursor-pointer group">
                        {/* Nativo: invisible en pantalla, visible al imprimir */}
                        <input
                          type="checkbox"
                          checked={!!formData[cb.id]}
                          onChange={() => handleChange(cb.id, !formData[cb.id])}
                          className="print-cb"
                        />
                        {/* Visual en pantalla */}
                        <div
                          onClick={() => handleChange(cb.id, !formData[cb.id])}
                          className={`screen-cb w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all cursor-pointer ${
                            formData[cb.id]
                              ? 'bg-blue-600 border-blue-600'
                              : 'bg-white/5 border-white/20 group-hover:border-blue-500/50'
                          }`}
                        >
                          {formData[cb.id] && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                        <span className="text-slate-300 font-medium text-sm leading-relaxed print:text-slate-700">
                          {cb.label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </motion.section>
            ))}

            {/* Submit */}
            <div className="flex flex-col items-center gap-4 pt-6 print:hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="ok"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-full bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-8 flex flex-col items-center gap-3"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    <p className="text-white font-black text-xl italic">¡Brief enviado!</p>
                    <p className="text-slate-400 text-sm">Lo recibimos. En breve nos comunicamos para avanzar.</p>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="mt-2 bg-white text-slate-900 font-black px-10 py-4 rounded-2xl hover:bg-blue-50 transition-all flex items-center gap-3"
                    >
                      <Printer className="w-5 h-5" /> Guardar como PDF
                    </button>
                  </motion.div>
                ) : (
                  <motion.button
                    key="btn"
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-blue-600 text-white font-black px-14 py-6 rounded-3xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 text-xl italic tracking-tighter flex items-center gap-4 disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Enviando...' : 'Finalizar y Enviar'}
                    <Send className="w-6 h-6" />
                  </motion.button>
                )}
              </AnimatePresence>
              {status === 'error' && (
                <p className="text-red-400 text-sm font-bold uppercase tracking-widest">
                  Error al enviar. Guardalo como PDF y mandalo por WhatsApp.
                </p>
              )}
            </div>
          </form>

          <footer className="mt-20 border-t border-white/5 pt-10 text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] print:text-slate-400 print:mt-8">
            © TuTienda24 · Brief de Proyecto · Confidencial
          </footer>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .print-cb { display: none; }
        @media print {
          .print-cb  { display: inline-block !important; width: 15px !important; height: 15px !important; margin-top: 3px !important; flex-shrink: 0 !important; accent-color: #2563eb; }
          .screen-cb { display: none !important; }
        }
      `}} />
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          *, *::before, *::after {
            overflow: visible !important;
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
            transition: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            filter: none !important;
          }
          body { background: white !important; color: #0f172a !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .glass-card { background: white !important; box-shadow: none !important; border: 1px solid #cbd5e1 !important; border-radius: 8px !important; page-break-inside: avoid; margin-bottom: 1.2rem !important; }
          * { background-color: transparent !important; }
          section, div { color: #0f172a !important; }
          span, p, li, label, h1, h2, h3, h4 { color: #1e293b !important; }
          .text-blue-500, .text-blue-400, [class*="text-blue"] { color: #2563eb !important; }
          input, textarea { background: #f8fafc !important; border: 1px solid #94a3b8 !important; color: #0f172a !important; border-radius: 4px !important; min-height: 36px !important; }
          input::placeholder, textarea::placeholder { color: transparent !important; }
          .print\\:hidden { display: none !important; }
          @page { margin: 1.5cm; }
        }
      `}} />
    </div>
    </PinGate>
  );
}
