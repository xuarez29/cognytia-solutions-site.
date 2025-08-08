import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="container-max flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-primary"></div>
          <span className="font-extrabold text-xl text-brand-dark">CognytIA Solutions</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <a href="#quienes" className="hover:text-brand-primary">Quiénes somos</a>
          <a href="#servicios" className="hover:text-brand-primary">Qué hacemos</a>
          <a href="#productos" className="hover:text-brand-primary">Productos</a>
          <a href="#contacto" className="hover:text-brand-primary">Contacto</a>
        </div>
      </nav>
    </header>
  )
}