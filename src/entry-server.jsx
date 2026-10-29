import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

// Devuelve el HTML completo de la ruta: espera a los componentes diferidos (lazy)
// para que queden incluidos en línea y no como fragmentos ocultos.
export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    { progressiveChunkSize: Infinity },
  );
  let html = '';
  for await (const chunk of prelude) html += chunk.toString();
  return html;
}
