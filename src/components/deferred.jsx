import { lazy, Suspense } from 'react';

// Resuelve cuando el navegador está ocioso o ante el primer scroll/toque.
// En el servidor resuelve al instante, así el HTML prerenderizado incluye la sección completa.
const whenActive = () =>
  new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve();
    let done = false;
    let idle;
    const go = () => {
      if (done) return;
      done = true;
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
      window.removeEventListener('scroll', go);
      window.removeEventListener('pointerdown', go);
      resolve();
    };
    idle = window.requestIdleCallback
      ? window.requestIdleCallback(go, { timeout: 2500 })
      : window.setTimeout(go, 2500);
    window.addEventListener('scroll', go, { once: true, passive: true });
    window.addEventListener('pointerdown', go, { once: true });
  });

// Carga el componente en un chunk aparte. Con el HTML prerenderizado, React deja
// visible el contenido del servidor y lo hidrata cuando llega el chunk.
export function deferred(loader, minHeight = 0) {
  const Lazy = lazy(() => whenActive().then(loader));
  return function Deferred(props) {
    return (
      <Suspense fallback={<div aria-hidden="true" style={{ minHeight }} />}>
        <Lazy {...props} />
      </Suspense>
    );
  };
}
