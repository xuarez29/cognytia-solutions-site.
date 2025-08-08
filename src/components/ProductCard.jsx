import { Link } from "react-router-dom"
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 flex flex-col">
      <div className="text-sm text-slate-500 mb-2">{product.tags.join(" • ")}</div>
      <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
      <p className="text-gray-700 mb-4">{product.short}</p>
      <Link to={`/productos/${product.slug}`} className="mt-auto inline-block px-4 py-2 rounded-lg bg-brand-primary text-white font-semibold hover:opacity-90">
        Ver detalle
      </Link>
    </div>
  )
}