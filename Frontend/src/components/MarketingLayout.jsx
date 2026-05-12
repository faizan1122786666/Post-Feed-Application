import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' }
]

const MarketingLayout = ({ eyebrow, title, description, children }) => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#e2e8f0_100%)] text-slate-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link to="/" className="text-xl font-black tracking-tight text-slate-950">
          PostByMe
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="transition-colors hover:text-sky-700">
              {link.label}
            </Link>
          ))}
          <Link
            to="/feed"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-white transition-transform hover:-translate-y-0.5"
          >
            Open App
          </Link>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pb-24 md:pt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{description}</p>
        </section>

        {children}
      </main>

      <footer className="border-t border-slate-200/80 px-6 py-8 text-center text-sm text-slate-600">
        <p>PostByMe helps teams publish consistent content with AI-assisted scheduling and automation.</p>
      </footer>
    </div>
  )
}

export default MarketingLayout
