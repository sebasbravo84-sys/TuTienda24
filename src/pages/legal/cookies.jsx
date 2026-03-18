import { useNavigate } from 'react-router-dom';

export default function Cookies() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-300 py-20 px-6">
            <div className="container mx-auto max-w-4xl glass p-8 md:p-12 rounded-3xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Política de Cookies</h1>
                <p className="mb-6 text-sm">Última actualización: 9 de marzo de 2026</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-orange-400 mb-4">1. ¿Qué son las Cookies?</h2>
                    <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador para recordar información sobre su visita. Esto nos ayuda a mejorar su experiencia y a entender cómo se utiliza nuestro sitio.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-orange-400 mb-4">2. Tipos de Cookies que utilizamos</h2>
                    <ul className="list-disc ml-6 space-y-2">
                        <li><strong>Necesarias:</strong> Esenciales para el funcionamiento básico del sitio.</li>
                        <li><strong>Estadísticas:</strong> Nos ayudan a entender cuántas personas nos visitan (usando herramientas como Google Analytics).</li>
                        <li><strong>Funcionales:</strong> Permiten recordar preferencias como el idioma o configuraciones de visualización.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-orange-400 mb-4">3. Cómo gestionar las Cookies</h2>
                    <p>Usted puede bloquear o eliminar las cookies a través de la configuración de su navegador. Tenga en cuenta que si desactiva todas las cookies, algunas funciones del sitio podrían no estar disponibles.</p>
                </section>

                <div className="mt-12 pt-8 border-t border-slate-800">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="text-orange-500 hover:underline flex items-center gap-2"
                    >
                        ← Volver a la página anterior
                    </button>
                </div>
            </div>
        </div>
    );
}
