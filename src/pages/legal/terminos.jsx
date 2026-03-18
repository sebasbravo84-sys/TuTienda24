import { useNavigate } from 'react-router-dom';

export default function Terminos() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-300 py-20 px-6">
            <div className="container mx-auto max-w-4xl glass p-8 md:p-12 rounded-3xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Términos y Condiciones de Servicio</h1>
                <p className="mb-6 text-sm">Última actualización: 9 de marzo de 2026</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-blue-400 mb-4">1. Aceptación de los Términos</h2>
                    <p>Al contratar los servicios de TuTienda24, el Cliente acepta estos términos en su totalidad. Estos términos rigen la relación comercial para el diseño, desarrollo y mantenimiento de sitios web.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-blue-400 mb-4">2. Alcance de los Servicios</h2>
                    <p>TuTienda24 ofrece servicios de diseño web, catálogos digitales por WhatsApp y mantenimiento. Cada proyecto tendrá un presupuesto específico donde se detallarán las funcionalidades incluidas. Cualquier funcionalidad no especificada explícitamente se considerará fuera del alcance y sujeta a costos adicionales.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-blue-400 mb-4">3. Propiedad Intelectual</h2>
                    <p>Una vez finalizado el pago total del proyecto, el Cliente es el propietario del contenido visual y los textos entregados. TuTienda24 se reserva el derecho de mostrar el trabajo en su portafolio profesional, a menos que se firme un acuerdo de confidencialidad previo.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-blue-400 mb-4">4. Pagos y Cancelaciones</h2>
                    <p>Los proyectos requieren un pago inicial del 50% para comenzar. El 50% restante se abona al momento de la entrega y publicación. En caso de cancelación por parte del cliente después de iniciado el trabajo, el depósito inicial no es reembolsable debido a las horas de diseño invertidas.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold text-blue-400 mb-4">5. Limitación de Responsabilidad</h2>
                    <p>TuTienda24 no se hace responsable por pérdidas de ventas, datos o interrupciones de servicio causadas por terceros (proveedores de hosting, APIs de redes sociales o plataformas de pago externas).</p>
                </section>

                <div className="mt-12 pt-8 border-t border-slate-800">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="text-blue-500 hover:underline flex items-center gap-2"
                    >
                        ← Volver a la página anterior
                    </button>
                </div>
            </div>
        </div>
    );
}
