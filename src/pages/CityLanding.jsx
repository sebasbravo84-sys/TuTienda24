import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import Logo from '../components/Logo';
import { usePageMeta } from '../hooks/usePageMeta';
import { pricingPlans } from '../PRECIOS.js';
import { cities } from '../data/cities.js';

const pasos = [
  { n: '01', t: 'Hablamos', d: 'Nos contás de tu negocio y qué querés lograr, por videollamada o WhatsApp.' },
  { n: '02', t: 'Diseñamos a medida', d: 'Nada de plantillas: armamos tu web desde cero, pensada para el celular.' },
  { n: '03', t: 'Lanzamos y te acompañamos', d: 'La publicamos con SEO básico, tu ficha de Google y soporte posterior.' },
];

export default function CityLanding({ city }) {
  const navigate = useNavigate();
  usePageMeta({ title: city.title, description: city.description, path: city.path });

  const consulta = `Hola! Vi la web de TuTienda24 y quiero consultar por una página web para mi negocio en ${city.name}.`;
  const whatsapp = `https://wa.me/543460406121?text=${encodeURIComponent(consulta)}`;
  const irAWhatsapp = () => setTimeout(() => navigate('/gracias'), 500);

  const faqs = [
    {
      q: `¿Hacen páginas web para negocios de ${city.name}?`,
      a: city.local
        ? 'Sí. Somos de San Fernando del Valle de Catamarca y trabajamos con comercios, emprendedores y PYMES de la provincia y de toda Argentina.'
        : `Sí. Trabajamos 100% a distancia con negocios de ${city.name} y de toda Argentina: reunión por videollamada, comunicación por WhatsApp y entrega online.`,
    },
    {
      q: `¿Cuánto cuesta una página web en ${city.name}?`,
      a: `${pricingPlans.map((p) => `${p.name}: $${p.price}`).join(', ')}. Son precios en pesos argentinos, pago único (IVA incluido), sin abono mensual obligatorio.`,
    },
    {
      q: '¿Cuánto tarda en estar lista?',
      a: 'Depende del proyecto, pero una landing page profesional suele estar lista en 7 a 10 días hábiles.',
    },
    {
      q: `¿Mi negocio va a aparecer en Google y en Google Maps de ${city.name}?`,
      a: 'Sí. Todos nuestros sitios se entregan con SEO básico configurado y te ayudamos a configurar tu ficha en Google Business para que aparezcas en el mapa y en los resultados de búsqueda.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50 selection:bg-blue-500/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="container mx-auto max-w-5xl px-6 py-8 flex items-center justify-between">
        <Logo size={0.8} dark onClick={() => navigate('/')} />
        <Link to="/" className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
          Inicio
        </Link>
      </header>

      <main className="container mx-auto max-w-5xl px-6 pb-24">
        <section className="py-12 md:py-20">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-5">Diseño web en {city.name}</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.05] mb-6">{city.h1}</h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">{city.intro}</p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener"
            onClick={irAWhatsapp}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            Consultar por WhatsApp
          </a>
          <p className="text-sm text-slate-400 mt-4">Entrega en 7 a 10 días hábiles · Pago único</p>
        </section>

        <section className="py-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-8">Cómo trabajamos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pasos.map((p) => (
              <div key={p.n} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <span className="text-sm font-black text-blue-400">{p.n}</span>
                <h3 className="text-xl font-black mt-3 mb-2">{p.t}</h3>
                <p className="text-slate-400 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          {!city.local && (
            <p className="text-slate-400 mt-6 max-w-3xl leading-relaxed">
              No hace falta que viajes: trabajamos 100% a distancia, con reuniones por videollamada y todo el seguimiento por WhatsApp.
            </p>
          )}
        </section>

        <section id="precios" className="py-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-2">Planes y precios</h2>
          <p className="text-slate-400 mb-8">Pago único, en pesos argentinos, IVA incluido.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col">
                <h3 className="text-xl font-black">{plan.name}</h3>
                <p className="text-4xl font-black mt-3 mb-6">${plan.price}</p>
                <ul className="space-y-3 text-sm text-slate-300 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener"
                  onClick={irAWhatsapp}
                  className="text-center border border-white/20 hover:bg-white/10 rounded-2xl py-3 font-bold transition-colors"
                >
                  Consultar este plan
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-6">Rubros para los que armamos webs</h2>
          <ul className="flex flex-wrap gap-3">
            {city.rubros.map((r) => (
              <li key={r} className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-bold text-slate-300">
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-12">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-8">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                <h3 className="text-lg font-black mb-2">{f.q}</h3>
                <p className="text-slate-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">¿Hablamos de tu proyecto?</h2>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener"
            onClick={irAWhatsapp}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            Escribinos por WhatsApp
          </a>
          <p className="text-slate-400 mt-8">
            Ver también:{' '}
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c, i, arr) => (
                <span key={c.slug}>
                  <Link to={c.path} className="underline hover:text-white">Diseño web en {c.name}</Link>
                  {i < arr.length - 1 ? ' · ' : ''}
                </span>
              ))}
          </p>
        </section>
      </main>
    </div>
  );
}
