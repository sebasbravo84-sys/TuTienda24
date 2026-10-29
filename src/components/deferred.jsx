import { lazy, Suspense, useEffect, useState } from 'react';

// Carga el componente en un chunk aparte y lo monta recién cuando el navegador
// está ocioso (o ante el primer scroll/toque), para no competir con el primer render.
export function deferred(loader, minHeight = 0) {
  const Lazy = lazy(loader);
  const placeholder = <div aria-hidden="true" style={{ minHeight }} />;

  return function Deferred(props) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
      const go = () => setReady(true);
      const idle = window.requestIdleCallback
        ? window.requestIdleCallback(go, { timeout: 2500 })
        : window.setTimeout(go, 2500);
      window.addEventListener('scroll', go, { once: true, passive: true });
      window.addEventListener('pointerdown', go, { once: true });
      return () => {
        if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
        else window.clearTimeout(idle);
        window.removeEventListener('scroll', go);
        window.removeEventListener('pointerdown', go);
      };
    }, []);

    if (!ready) return placeholder;
    return (
      <Suspense fallback={placeholder}>
        <Lazy {...props} />
      </Suspense>
    );
  };
}
