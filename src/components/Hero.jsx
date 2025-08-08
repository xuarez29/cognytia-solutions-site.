export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-brand-primary to-sky-600 text-white">
      <div className="container-max py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">IA con propósito</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Automatizamos procesos y diseñamos soluciones a la medida para PYMEs y profesionales en el Bajío y Querétaro.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="#contacto" className="px-6 py-3 rounded-lg bg-white text-sky-700 font-semibold shadow-soft hover:opacity-90">Agenda una consulta</a>
          <a href="#productos" className="px-6 py-3 rounded-lg bg-transparent border border-white font-semibold hover:bg-white/10">Ver productos</a>
        </div>
      </div>
    </section>
  )
}