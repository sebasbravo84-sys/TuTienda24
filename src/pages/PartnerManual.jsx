import { useEffect } from 'react';
import { pricingPlans, PROMO_PRICE } from '../PRECIOS.js';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  Target,
  Zap,
  CheckCircle2,
  TrendingUp,
  ShoppingCart,
  Globe,
  MessageCircle,
  ShieldCheck,
  Printer,
  Briefcase
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import PinGate from '../components/PinGate';

const sections = [
  {
    title: "0. Tu Primer Venta en 6 Pasos",
    icon: <Zap className="w-6 h-6" />,
    content: "No necesitás experiencia previa. Seguí estos pasos y cerrá tu primera comisión esta semana:",
    steps: [
      { num: "01", text: "Presentate con autoridad — 'Trabajo con una agencia digital que ayuda a negocios como el tuyo a conseguir más clientes por internet'." },
      { num: "02", text: "Googleá su negocio frente a ellos — buscá su nombre o rubro y mostrales si aparecen o no, qué tan bien se ven vs la competencia. Eso genera urgencia al instante." },
      { num: "03", text: "Identificá qué necesita — ¿vende por WhatsApp? ¿necesita imagen profesional? ¿no aparece en Google?" },
      { num: "04", text: "Ofrecé el plan que le encaja (ver sección 2) y contale el precio con confianza. Sin dudas, sin rodeos." },
      { num: "05", text: "Cerrá vos la venta — pedí la decisión: '¿Empezamos esta semana?' No necesitás saber todo lo técnico, para eso estamos nosotros de respaldo." },
      { num: "06", text: "Cobrás tu 10% de comisión cuando el cliente realiza el primer pago del 50%." },
    ]
  },
  {
    title: "1. La Misión: Ayudar a los Negocios a Crecer",
    icon: <Globe className="w-6 h-6" />,
    content: "No vendemos sitios web; vendemos una forma de que el comercio prospere. Nuestra misión es que cada negocio tenga una imagen profesional que atraiga clientes. Entiende esto: una web de TuTienda24 no es un gasto, es un empleado que trabaja las 24 horas para vos.",
    points: [
      "No vendemos 'páginas', vendemos TIEMPO y AUTORIDAD para el dueño del negocio.",
      "Lujo Silencioso: Diseños limpios que eliminan la fricción de compra.",
      "Soporte Real: El cliente valora que estemos presentes para darle soluciones efectivas."
    ]
  },
  {
    title: "2. Nuestros Productos (Detalle al Máximo)",
    icon: <ShoppingCart className="w-6 h-6" />,
    content: "Como Aliado VIP, debes saber exactamente qué estás ofreciendo. Aquí tienes la artillería pesada:",
    detailedPlans: [
      {
        name: "Plan Catálogo: El Generador de Ventas",
        price: `$${pricingPlans[0].price} (Promo $${PROMO_PRICE})`,
        focus: "Para emprendedores que venden por WhatsApp (Ropa, Comida, Regalos).",
        highlight: "Convierte un catálogo aburrido en una tienda que enamora.",
        features: [
          { name: "Diseño Mobile First", desc: "La web se diseña pensando 100% en el celular, que es donde la gente compra hoy." },
          { name: "Botonera WhatsApp Pro", desc: "Botones que llevan al cliente directo a tu chat con el pedido ya armado." },
          { name: "SEO en Maps", desc: "Ayudamos a que tu negocio aparezca primero en Google Maps cuando alguien busca lo que vendes." },
          { name: "Dominio gratis", desc: "El nombre de tu web (ej: www.tunegocio.com) bonificado por el primer año." }
        ],
        salesTip: "Dile: '¿Te imaginas dejar de responder 100 veces el mismo precio por WhatsApp? Con esto, el cliente te manda el pedido ya listo'."
      },
      {
        name: "Plan Corporativo: El Imán de Autoridad",
        price: `$${pricingPlans[1].price}`,
        focus: "Para profesionales y empresas que buscan seriedad (Abogados, Clínicas, Servicios).",
        highlight: "Proyecta una imagen de empresa grande y confiable.",
        features: [
          { name: "8 Secciones", desc: "Páginas completas: Inicio, Quiénes Somos, Servicios detallados, Galería y más." },
          { name: "Formulario de Leads", desc: "Un sistema para que los clientes dejen sus datos y puedas llamarlos para presupuestar." },
          { name: "Blog de Contenidos", desc: "Para escribir consejos de tu rubro y que Google te premie mostrándote más." },
          { name: "Google Analytics", desc: "Informes mensuales para saber cuántas personas entraron y desde dónde vinieron." }
        ],
        salesTip: "Dile: 'Si un cliente importante te busca en Google y no te encuentra, o ve una web vieja, pierde la confianza y se va con otro'."
      },
      {
        name: "Plan Élite 3D: El Futuro hoy",
        price: `$${pricingPlans[2].price}`,
        focus: "Para marcas premium que quieren ser las #1 y dejar a todos con la boca abierta.",
        highlight: "Tecnología de vanguardia que genera un efecto 'WOW' inmediato.",
        features: [
          { name: "Interacción 3D", desc: "Elementos que se mueven y giran cuando el usuario pasa el mouse o toca la pantalla." },
          { name: "Hosting & Dominio incluido", desc: "Hosting y dominio .com.ar bonificado por 1 año, sin costos ocultos." },
          { name: "Estrategia de Ads", desc: "Te enseñamos a poner publicidad en Instagram y Google para que lluevan visitas." },
          { name: "Servidor Speed-Pro", desc: "El servidor más rápido del mercado para que la web cargue en menos de un segundo." }
        ],
        salesTip: "Dile: 'Este plan no es solo una web, es una pieza de arte digital. Nadie en la competencia va a tener algo que se vea así de moderno'."
      }
    ]
  },
  {
    title: "3. El Ecosistema de Ventas Digital (Producto Estrella)",
    icon: <Zap className="w-6 h-6" />,
    content: "Esta es la oferta más poderosa que tenés. No vendemos 'una web más'. Vendemos un sistema completo que trae clientes solos. Cuando lo explicás bien, el precio deja de ser una objeción.",
    ecosystem: true,
  },
  {
    title: "5. Cómo detectar clientes (Consejos de Experto)",
    icon: <Target className="w-6 h-6" />,
    content: "No llegues preguntando si quieren una web. Llega señalando cómo pueden mejorar lo que ya tienen. Fijate en estos detalles:",
    points: [
      "Velocidad: Si su web actual tarda mucho en cargar, el cliente se cansa y se va.",
      "Diseño en el Celular: El 90% de la gente busca por celular. Si la web se ve mal o chiquita ahí, no sirve.",
      "Seguridad: Si sale el cartel de 'Sitio No Seguro', la gente tiene miedo de entrar.",
      "Botón de WhatsApp: ¿Es fácil contactarlos o hay que dar mil vueltas?"
    ]
  },
  {
    title: "6. Qué decir para vender (según el cliente)",
    icon: <MessageCircle className="w-6 h-6" />,
    content: "Cada negocio es diferente. Escuchá lo que necesitan y dales la solución ideal.",
    quotes: [
      "Si es un Catálogo: 'Tener tus productos en una web es como tener un vendedor que no duerme y que nunca se equivoca con los precios'.",
      "Si es Corporativo: 'Una web profesional es tu mejor tarjeta de presentación. Si no estás en internet con calidad, sos invisible para los mejores clientes'.",
      "Si es Élite: 'Hagamos que tu marca se vea como una empresa de primer nivel mundial, con una tecnología que nadie más tiene'."
    ]
  },
  {
    title: "7. Manejo de Objeciones Nivel Élite",
    icon: <ShieldCheck className="w-6 h-6" />,
    content: "Cuando el cliente duda, es porque aún no ve el valor. Ayúdalo a entender:",
    objections: [
      { q: "Uso Instagram y me va bien.", a: "Instagram es una red de paso, la web es tu casa propia. Si te hackean la cuenta, con la web seguís vendiendo. Además, la web te da un link profesional para poner en tu bio." },
      { q: "No entiendo de tecnología.", a: "TuTienda24 se encarga del 100%. Vos solo recibís los mensajes de los clientes interesados. Es tecnología trabajando para vos, no vos para la tecnología." },
      { q: "No tengo el dinero ahora.", a: "Pensalo así: ¿Cuántas ventas perdés por semana por no tener una web profesional? Seguramente más de lo que cuesta el plan. Además, tenemos planes de pago flexibles." }
    ]
  },
  {
    title: "8. Tips de Cierre y Psicología de Venta",
    icon: <TrendingUp className="w-6 h-6" />,
    content: "Para que esa charla termine en una comisión depositada en tu cuenta:",
    points: [
      "Técnica de Escasez: 'Solo aceptamos 3 nuevos proyectos por mes para garantizar la calidad VIP'.",
      `Contraste de Precios: El plan más accesible cuesta menos que una pizza grande por semana prorrateado en un año.`,
      "La Inversión que se Paga Sola: 'Si este sitio te trae solo 2 clientes nuevos por mes, la inversión ya se pagó sola. Todo lo demás es pura ganancia'."
    ]
  }
];

export default function PartnerManual() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <PinGate>
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-blue-500/30 print:bg-white print:text-slate-900">
      {/* Header - Hidden on print */}
      <header className="fixed top-0 w-full z-50 glass py-6 border-b border-white/5 print:hidden">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/aliados" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">Volver a Aliados</span>
          </Link>
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/10"
            >
              <Printer className="w-4 h-4" /> Imprimir / PDF
            </button>
            <Logo size={0.7} dark onClick={() => navigate('/aliados')} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-40 pb-20 px-6 print:pt-0">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20 print:mb-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-8 border border-blue-500/20 uppercase print:border-slate-200 print:text-slate-500">
              💎 Documento de Capacitación para Aliados
            </span>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-6 print:text-4xl">
              Manual de <br /> <span className="text-blue-500">Ventas Pro</span>
            </h1>
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto print:text-slate-600 print:text-sm">
              Conviértete en un experto en digitalización y cierra tratos corporativos con autoridad en cualquier lugar del país.
            </p>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, idx) => (
              <motion.section 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 md:p-14 rounded-[3rem] border-white/5 relative overflow-hidden group print:border-slate-200 print:shadow-none print:p-6 print:rounded-none print:break-inside-avoid"
              >
                {/* Section Index */}
                <div className="text-8xl font-black text-white/[0.02] absolute top-6 right-10 print:hidden select-none">
                  {idx + 1}
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 border border-blue-500/20 print:border-slate-200 print:text-slate-700">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">{section.title}</h2>
                </div>

                <p className="text-lg text-slate-300 font-medium mb-8 leading-relaxed print:text-slate-700 print:text-sm">
                  {section.content}
                </p>

                {section.steps && (
                  <div className="space-y-4 mb-8">
                    {section.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-5">
                        <span className="text-3xl font-black text-blue-500/30 leading-none w-10 shrink-0">{step.num}</span>
                        <p className="text-slate-300 font-medium pt-1">{step.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.points && (
                  <ul className="space-y-4 mb-8">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-400 font-medium print:text-slate-600 print:text-xs">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {section.detailedPlans && (
                  <div className="space-y-8 mb-8">
                    {section.detailedPlans.map((plan, i) => (
                      <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 print:border-slate-100 print:bg-slate-50">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                          <div>
                            <h4 className="font-black text-2xl uppercase tracking-tighter text-blue-400">{plan.name}</h4>
                            <p className="text-white font-black text-lg">{plan.price}</p>
                          </div>
                          <span className="bg-blue-500/20 text-blue-400 text-[10px] px-4 py-2 rounded-full font-black border border-blue-500/20">
                            TARGET: {plan.target || plan.focus}
                          </span>
                        </div>
                        
                        <p className="text-slate-200 font-bold mb-6 italic border-l-2 border-blue-500 pl-4">
                          " {plan.highlight} "
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-[10px] text-slate-500 font-black uppercase mb-4 tracking-widest">Características Clave:</p>
                            <ul className="space-y-2">
                                {plan.features.map((f, j) => (
                                  <li key={j} className="text-xs text-slate-400 flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                      <Zap className="w-3 h-3 text-blue-500" /> 
                                      <span className="font-bold text-slate-200">{f.name}</span>
                                    </div>
                                    <p className="pl-5 text-[10px] leading-relaxed text-slate-500">{f.desc}</p>
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <div className="bg-blue-600/10 p-4 rounded-xl border border-blue-500/20">
                            <p className="text-[10px] text-blue-400 font-black uppercase mb-2 tracking-widest">Tip de Venta Élite:</p>
                            <p className="text-sm text-slate-300 italic font-medium">{plan.salesTip}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}


                {section.quotes && (
                  <div className="space-y-4 mb-8 italic">
                    {section.quotes.map((quote, i) => (
                      <div key={i} className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-500/5 rounded-r-2xl print:bg-slate-50 print:border-slate-300">
                        <p className="text-slate-300 print:text-slate-700 print:text-xs">"{quote}"</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.objections && (
                  <div className="space-y-6 mb-8">
                    {section.objections.map((obj, i) => (
                      <div key={i} className="bg-slate-800/40 p-6 rounded-2xl border border-white/5 print:bg-slate-50 print:border-slate-100">
                        <p className="text-white font-black uppercase text-xs mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-red-500" /> El Cliente dice: {obj.q}
                        </p>
                        <p className="text-slate-400 font-medium print:text-slate-600 print:text-xs italic">
                          Tú respondes: "{obj.a}"
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.ecosystem && (
                  <div className="space-y-6">
                    {/* Flow */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">El flujo que trabaja 24/7:</p>
                      <div className="flex flex-wrap gap-2 items-center text-sm font-bold">
                        {["📸 Instagram", "→", "🤖 Manychat", "→", "💬 WhatsApp", "→", "🌐 Web", "→", "📍 Google Maps"].map((s, i) => (
                          <span key={i} className={s === "→" ? "text-slate-600" : "bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-slate-300"}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Tools */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: "Manychat", color: "text-orange-400", desc: "Automatiza los DMs de Instagram. Cuando alguien comenta 'INFO', Manychat le manda el catálogo automáticamente por privado. El aliado lo vende diciendo: 'Imaginate que alguien comenta tu post y al instante recibe tus productos sin que vos hagas nada'." },
                        { name: "WhatsApp Business", color: "text-emerald-400", desc: "Catálogo de productos, mensaje de bienvenida automático y respuestas rápidas. El aliado lo vende diciendo: 'Tu cliente te manda un mensaje y de entrada ve todos tus productos como una tienda'." },
                        { name: "Linktree (Link en Bio)", color: "text-green-400", desc: "Un solo link que lleva a WhatsApp, la web, Maps y el menú. Perfecto para el bio de Instagram. Decile al cliente: 'Un solo link, todo en un lugar. El cliente elige cómo contactarte'." },
                        { name: "Google Business Profile", color: "text-blue-400", desc: "Aparecer en Google Maps y en búsquedas locales sin pagar publicidad. Ejemplo de venta: 'Si alguien busca una panadería en Catamarca, con esto aparecés en el mapa con tus fotos y tu WhatsApp'." },
                      ].map((tool, i) => (
                        <div key={i} className="bg-slate-800/40 rounded-xl p-5 border border-white/5 print:bg-slate-50 print:border-slate-100">
                          <p className={`font-black text-sm mb-2 ${tool.color}`}>{tool.name}</p>
                          <p className="text-slate-400 text-xs leading-relaxed print:text-slate-600">{tool.desc}</p>
                        </div>
                      ))}
                    </div>
                    {/* Pricing pitch */}
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 print:bg-emerald-50 print:border-slate-200">
                      <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-3">Cómo presentar el precio:</p>
                      <p className="text-slate-300 italic font-medium text-sm leading-relaxed print:text-slate-700">
                        "El Sistema Completo cuesta entre $250.000 y $300.000 una sola vez. Incluye la web, el Manychat configurado, el WhatsApp Business armado, el Linktree, el Google Maps optimizado y una capacitación para que lo manejés solo. Si este sistema te trae 3 clientes nuevos por mes, en 2 meses ya se pagó solo y el resto es ganancia pura."
                      </p>
                      <div className="mt-4 pt-4 border-t border-emerald-500/20">
                        <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1">Tu comisión como aliado:</p>
                        <p className="text-2xl font-black text-white">+$25.000 – $30.000 <span className="text-sm text-slate-400 font-medium">por venta cerrada</span></p>
                      </div>
                    </div>
                    {/* Objection */}
                    <div className="bg-slate-800/40 p-5 rounded-xl border border-white/5 print:bg-slate-50">
                      <p className="text-white font-black uppercase text-xs mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-red-500" /> Objeción frecuente: "Yo con Instagram me arreglo"
                      </p>
                      <p className="text-slate-400 text-xs italic font-medium leading-relaxed print:text-slate-600">
                        "Instagram es perfecto para que te vean. Pero el que te ve hoy, mañana ya no se acuerda. Con el sistema, ese mismo que te ve lo capturamos en WhatsApp y lo convertimos en cliente. Instagram atrae, el sistema convierte."
                      </p>
                    </div>
                  </div>
                )}

                {section.commissions && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {section.commissions.map((c, i) => (
                      <div key={i} className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/20 text-center print:border-slate-200 print:bg-emerald-50">
                        <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest mb-1">{c.plan}</p>
                        <p className="text-3xl font-black text-white print:text-slate-900">{c.gain}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>
            ))}
          </div>

          <section className="mt-32 text-center print:mt-10">
            <h3 className="text-3xl font-black italic mb-8">¿Listo para cerrar tu primer trato?</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center print:hidden">
              <Link 
                to="/brief"
                className="bg-white text-slate-900 font-black px-12 py-6 rounded-3xl hover:bg-blue-50 transition-all shadow-2xl flex items-center justify-center gap-4 text-xl"
              >
                Llenar Brief de Proyecto <Briefcase className="w-6 h-6" />
              </Link>
              <button 
                onClick={() => window.open('https://wa.me/543460406121?text=Hola! Ya leí el manual de ventas. ¿Podemos hablar?', '_blank')}
                className="bg-blue-600 text-white font-black px-12 py-6 rounded-3xl hover:bg-blue-500 transition-all shadow-2xl flex items-center justify-center gap-4 text-xl"
              >
                Hablemos por WhatsApp <MessageCircle className="w-6 h-6" />
              </button>
            </div>
            <p className="mt-12 text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] print:text-slate-400">
              © TuTienda24 • Programa de Élite
            </p>
          </section>
        </div>
      </main>

      {/* Print styles */}
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
          [class*="text-blue"] { color: #2563eb !important; }
          [class*="text-emerald"] { color: #059669 !important; }
          .print\\:hidden { display: none !important; }
          @page { margin: 1.5cm; }
        }
      ` }} />
    </div>
    </PinGate>
  );
}
