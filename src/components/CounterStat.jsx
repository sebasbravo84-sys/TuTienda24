import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// value ejemplos: "25+", "100%", "< 2s", "24/7"
export default function CounterStat({ value, label, icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayed, setDisplayed] = useState('0');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView || done) return;
    setDone(true);

    // Valores especiales: animar solo con fade
    if (value === '< 2s' || value === '24/7') {
      setDisplayed(value);
      return;
    }

    // Extraer número y sufijo: "25+" → 25, "+"; "100%" → 100, "%"
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) { setDisplayed(value); return; }

    const target = parseInt(match[1]);
    const suffix = match[2];
    const duration = 1400;
    const fps = 60;
    const steps = (duration / 1000) * fps;
    const increment = target / steps;
    let current = 0;
    let frame = 0;

    const tick = () => {
      frame++;
      // Ease out: empieza rápido, termina despacio
      const progress = frame / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.floor(eased * target);

      if (frame >= steps) {
        setDisplayed(value);
      } else {
        setDisplayed(current + suffix);
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-4xl font-black text-white mb-2 tabular-nums">{displayed}</div>
      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{label}</p>
    </div>
  );
}
