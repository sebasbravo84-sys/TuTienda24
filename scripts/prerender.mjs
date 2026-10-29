// Inserta el HTML renderizado del home en dist/index.html para que el contenido
// se vea antes de que cargue el JavaScript. El resto de las rutas usa el shell vacío.
import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const dist = path.resolve('dist');
const { render } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);

const shell = await readFile(path.join(dist, 'index.html'), 'utf8');
const marker = '<div id="root"></div>';
if (!shell.includes(marker)) throw new Error('No se encontró el contenedor #root en dist/index.html');

await writeFile(path.join(dist, 'app-shell.html'), shell);
await writeFile(path.join(dist, 'index.html'), shell.replace(marker, `<div id="root">${render('/')}</div>`));
console.log('Prerender del home listo');
