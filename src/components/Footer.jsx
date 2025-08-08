export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="container-max py-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-slate-600">
        <div>© {new Date().getFullYear()} CognytIA Solutions — IA con propósito</div>
        <div className="flex gap-4">
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="YouTube">YouTube</a>
        </div>
      </div>
    </footer>
  )
}