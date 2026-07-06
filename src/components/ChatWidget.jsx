import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '543460406121';

const botMessages = [
  { from: 'bot', text: '👋 ¡Hola! Soy el asistente de TuTienda24.', delay: 0 },
  { from: 'bot', text: '¿En qué podemos ayudarte hoy?', delay: 800 },
];

const quickReplies = [
  'Quiero una web para mi negocio',
  'Ver precios y planes',
  'Cuánto tarda la entrega',
  'Hablar con alguien ahora',
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [messages, setMessages] = useState([]);
  const [pulse, setPulse] = useState(false);

  // Mostrar burbuja de notificación a los 20s
  useEffect(() => {
    const t = setTimeout(() => setPulse(true), 20000);
    return () => clearTimeout(t);
  }, []);

  // Animar mensajes del bot al abrir
  useEffect(() => {
    if (!open || shown) return;
    setShown(true);
    botMessages.forEach(({ text, delay }) => {
      setTimeout(() => {
        setMessages(prev => [...prev, { from: 'bot', text }]);
      }, delay + 300);
    });
  }, [open]);

  const handleQuickReply = (reply) => {
    setMessages(prev => [...prev, { from: 'user', text: reply }]);
    setTimeout(() => {
      const wa = `Hola! Vi la web de TuTienda24. ${reply}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(wa)}`, '_blank');
    }, 400);
  };

  return (
    <>
      {/* Ventana de chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed bottom-24 right-6 z-[150] w-[320px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-white text-sm">24</div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-blue-600" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">TuTienda24</p>
                  <p className="text-blue-200 text-[10px] font-bold">Respondemos en menos de 1 hora ⚡</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mensajes */}
            <div className="bg-[#0f172a] px-4 py-5 space-y-3 min-h-[140px]">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm font-medium ${
                      msg.from === 'bot'
                        ? 'bg-slate-800 text-slate-200 rounded-tl-sm'
                        : 'bg-blue-600 text-white rounded-tr-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Quick replies */}
            <div className="bg-[#0f172a] border-t border-white/5 px-4 pb-4">
              <p className="text-slate-600 text-[10px] font-bold uppercase tracking-wider mb-3">Seleccioná una opción:</p>
              <div className="space-y-2">
                {quickReplies.map((reply, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.08 }}
                    onClick={() => handleQuickReply(reply)}
                    className="w-full text-left px-4 py-2.5 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/30 text-slate-300 hover:text-white text-xs font-bold transition-all flex items-center justify-between group"
                  >
                    {reply}
                    <Send className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => { setOpen(o => !o); setPulse(false); }}
        className="fixed bottom-6 right-24 z-[150] w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-[0_10px_40px_rgba(37,99,235,0.5)]"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="w-6 h-6" /></motion.div>
            : <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><MessageCircle className="w-6 h-6" /></motion.div>
          }
        </AnimatePresence>

        {/* Badge de notificación */}
        {pulse && !open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-[#0f172a] flex items-center justify-center text-[9px] font-black"
          >
            1
          </motion.div>
        )}
      </motion.button>
    </>
  );
}
