export default function CapacitacionesPage() {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold mb-4">Capacitaciones</h1>

      <div className="border p-4 rounded shadow">
        <h2 className="text-lg font-bold">📄 Manejo y cuidado de mercancías</h2>
        <a
          href="/capacitaciones/manejo-mercancias.pdf"
          target="_blank"
          className="text-blue-600 underline"
        >
          Ver documento
        </a>
      </div>

      <div className="border p-4 rounded shadow">
        <h2 className="text-lg font-bold">📄 Buenas prácticas de manipulación</h2>
        <a
          href="/capacitaciones/buenas-practicas.docx"
          target="_blank"
          className="text-blue-600 underline"
        >
          Ver documento
        </a>
      </div>
    </div>
  );
}

