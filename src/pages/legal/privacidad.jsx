import { useNavigate } from 'react-router-dom';

export default function Privacidad() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-300 py-20 px-6">
            <div className="container mx-auto max-w-4xl glass p-8 md:p-12 rounded-3xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Política de Privacidad</h1>
                <p className="mb-6 text-sm">Última actualización: 9 de marzo de 2026</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-emerald-400 mb-4">1. Recopilación de Información</h2>
                    <p>TuTienda24 recopila únicamente la información necesaria para la prestación del servicio: nombre, correo electrónico y detalles del negocio. No solicitamos ni almacenamos datos de tarjetas de crédito directamente en nuestros servidores.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-emerald-400 mb-4">2. Uso de los Datos</h2>
                    <p>Los datos proporcionados se utilizan exclusivamente para: comunicarnos con el cliente, facturación, y la configuración técnica del sitio web solicitado.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-emerald-400 mb-4">3. Terceros</h2>
                    <p>No vendemos ni compartimos sus datos con terceros con fines publicitarios. Los datos pueden ser compartidos solo con proveedores esenciales (como registradores de dominios) para cumplir con el servicio contratado.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-emerald-400 mb-4">4. Seguridad</h2>
                    <p>Implementamos medidas de seguridad técnicas para proteger la integridad de la información de nuestros clientes frente a accesos no autorizados.</p>
                </section>

                <div className="mt-12 pt-8 border-t border-slate-800">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="text-emerald-500 hover:underline flex items-center gap-2"
                    >
                        ← Volver a la página anterior
                    </button>
                </div>
            </div>
        </div>
    );
}
