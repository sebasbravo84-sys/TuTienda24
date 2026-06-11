import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Send } from 'lucide-react';

const faqs = [
  { q: "¿Necesito conocimientos técnicos?", a: "Para nada. Nosotros nos encargamos de todo el montaje, configuración y mantenimiento. Vos solo te encargás de atender a tus clientes." },
  { q: "¿Cuánto tiempo tarda en estar lista?", a: "Depende del proyecto, pero una landing page profesional suele estar lista en 7 a 10 días hábiles." },
  { q: "¿Tengo que pagar todos los meses?", a: "El diseño se paga una sola vez. Luego ofrecemos un plan de mantenimiento opcional que incluye el hosting, el dominio y actualizaciones." },
  { q: "¿Apareceré en Google y en Google Maps?", a: "Sí. Todos nuestros sitios se entregan con SEO básico configurado y te ayudamos a configurar tu ficha en Google Business para que aparezcas en el mapa y en los resultados de búsqueda desde el día uno." },
  { q: "¿Puedo cobrar con tarjeta de crédito?", a: "¡Claro! Podemos integrar Mercado Pago para que tus clientes paguen en cuotas de forma automática y segura." },
];

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formStatus, setFormStatus] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    setFormStatus('Enviando...');
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const res = await fetch("https://formspree.io/f/xqeygwok", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ ...data, _subject: "Nueva solicitud de Asesoría VIP - TuTienda24" }),
      });
      if (res.ok) {
        setFormStatus('¡Enviado! Un experto te contactará pronto.');
        setTimeout(() => setFormStatus(''), 5000);
        e.target.reset();
      } else {
        setFormStatus('Error al enviar. Intentá de nuevo.');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch {
      setFormStatus('Error de conexión.');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* FAQ */}
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-12 italic tracking-tighter">Despejemos dudas</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-3xl border border-white/5 bg-slate-900/50 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-8 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg pr-4">{faq.q}</span>
                    <ChevronDown className={`w-6 h-6 transition-transform flex-shrink-0 ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <div className="p-8 pt-0 text-slate-400 font-medium border-t border-white/5">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 italic tracking-tighter">¿Hablamos de <br /> tu próximo éxito?</h3>
            <p className="text-blue-100 text-xl font-medium mb-12">Déjanos tu correo y un especialista te preparará un plan a medida.</p>
            <form onSubmit={handleForm} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name"  type="text"  required placeholder="Nombre completo"            className="w-full bg-blue-700/50 border border-blue-400/30 rounded-2xl p-6 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all" />
                <input name="phone" type="tel"   required placeholder="WhatsApp (Ej: 3834...)"     className="w-full bg-blue-700/50 border border-blue-400/30 rounded-2xl p-6 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all" />
              </div>
              <input name="email" type="email" required placeholder="Tu correo electrónico" className="w-full bg-blue-700/50 border border-blue-400/30 rounded-2xl p-6 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all" />
              <textarea name="message" required rows="3" placeholder="Contanos un poco de tu negocio (Rubro, si ya tenés web, etc.)" className="w-full bg-blue-700/50 border border-blue-400/30 rounded-2xl p-6 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"></textarea>
              <button type="submit" className="w-full bg-white text-blue-600 font-black py-6 rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-3 text-xl shadow-xl">
                <Send className="w-6 h-6" /> Solicitar Asesoría VIP
              </button>
              {formStatus && <p className="text-center font-bold text-blue-100 animate-pulse uppercase tracking-widest text-sm">{formStatus}</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
