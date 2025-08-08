export default function Contact() {
  const whatsapp = "524425955891"
  const waText = encodeURIComponent("Hola, me interesa automatizar procesos con CognytIA.")
  return (
    <section id="contacto" className="bg-brand-dark text-white">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Hablemos de tu proyecto</h2>
            <p className="text-brand-primary/20 mb-6">Querétaro • Bajío • México</p>
            <p className="text-white/90">
              Cuéntanos tu reto y preparamos una propuesta simple, con tiempos y entregables claros.
            </p>
          </div>
          <div className="bg-white text-slate-800 rounded-2xl shadow-soft p-6">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold mb-1">Nombre</label>
                <input required className="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Correo</label>
                <input type="email" required className="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="tunombre@correo.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">¿Qué necesitas automatizar?</label>
                <textarea rows="3" className="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Cuéntanos brevemente tu caso"></textarea>
              </div>
              <div className="flex gap-3">
                <a href={`https://wa.me/${whatsapp}?text=${waText}`} target="_blank" className="px-4 py-2 rounded-lg bg-brand-primary text-white font-semibold hover:opacity-90">Escríbenos por WhatsApp</a>
                <a href="mailto:cognytia.solutions@gmail.com?subject=Consulta%20CognytIA" className="px-4 py-2 rounded-lg border border-slate-300 font-semibold hover:bg-slate-50">Enviar correo</a>
              </div>
              <p className="text-xs text-slate-500">También puedes agendar una videollamada. Te enviamos el enlace por WhatsApp o correo.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}