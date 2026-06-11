import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { name: "Victoria Santisteban",    role: "Reseña en Google", text: "Muy conformes con el trabajo realizado. Nuestra página web quedó hermosa, rápida y fácil de usar. Excelente atención y profesionalismo. ¡Los recomendamos!", stars: 5, avatar: "VS", color: "from-pink-500 to-pink-700" },
  { name: "Walter Montiel",          role: "Reseña en Google", text: "Muy recomendable! Trabajo en tiempo y forma, seriedad y cumplimiento.", stars: 5, avatar: "WM", color: "from-blue-500 to-blue-700" },
  { name: "Alejandro Miñaura",       role: "Reseña en Google", text: "Excelente servicio, todo en tiempo y forma! Muy bien asesorado en todo el proceso, muy recomendable!", stars: 5, avatar: "AM", color: "from-slate-400 to-slate-600" },
  { name: "Pablo Farias",            role: "Reseña en Google", text: "Excelente servicio 💪", stars: 5, avatar: "PF", color: "from-emerald-500 to-emerald-700" },
  { name: "Sara Noelia Tula Castillo", role: "Reseña en Google", text: "Excelente profesional. Cumplió con todas nuestras expectativas y realizó un trabajo de gran calidad. Siempre mostró predisposición para atender nuestras necesidades.", stars: 5, avatar: "ST", color: "from-violet-500 to-violet-700" },
  { name: "Marcia Cerrizuela",       role: "Reseña en Google", text: "Excelente trabajo de diseño 👌 Captaron perfectamente la idea que buscaba, realizaron las modificaciones necesarias y el resultado final quedó espectacular. Muy recomendable ✨", stars: 5, avatar: "MC", color: "from-rose-500 to-rose-700" },
  { name: "Rodrigo Ferreyra",        role: "Reseña en Google", text: "Excelente servicio, súper recomendado, muy buena experiencia 🙌", stars: 5, avatar: "RF", color: "from-amber-500 to-amber-700" },
  { name: "Gabriel Leiva",           role: "Reseña en Google", text: "Excelente servicio, muy recomendable 💪👏👏👏", stars: 5, avatar: "GL", color: "from-green-500 to-green-700" },
  { name: "Joaquin Rodríguez",       role: "Reseña en Google", text: "Excelente servicio. Diseñaron nuestra página web de manera profesional, rápida y adaptada a nuestras necesidades. Siempre estuvieron atentos a cada detalle.", stars: 5, avatar: "JR", color: "from-cyan-500 to-cyan-700" },
  { name: "Juan Oscar Sepulveda",    role: "Reseña en Google", text: "La mejor atención, con el mejor soporte, la verdad me siento muy satisfecho con el servicio, super recomendable.", stars: 5, avatar: "JS", color: "from-orange-500 to-orange-700" },
  { name: "Ariel Oscar Miñaura",     role: "Reseña en Google", text: "Excelente servicio, muy serio, profesional, recomendado 100%.", stars: 5, avatar: "AO", color: "from-indigo-500 to-indigo-700" },
];

const scrolling = [...testimonials, ...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-32 bg-[#0f172a] overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6 italic">Clientes que ganan</h2>
        <p className="text-xl text-slate-500">Nuestra mejor garantía es tu éxito.</p>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-10 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 60, repeat: Infinity }}
        >
          {scrolling.map((t, i) => (
            <div key={i} className="glass-card p-10 rounded-[2rem] w-[400px] flex-shrink-0 border border-white/5 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <p className="text-slate-300 font-medium text-lg leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center font-black text-white text-base shadow-lg ring-2 ring-white/10 flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-black text-xl text-white">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
