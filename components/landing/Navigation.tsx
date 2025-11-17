import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="flex items-center justify-between gap-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-700 shadow-lg shadow-primary-500/40">
          <span className="text-sm font-semibold tracking-tight text-white">TS</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-tight text-slate-900">
            TownSquare
          </span>
          <span className="text-xs text-slate-500">Local service marketplace</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
        <a href="#how-it-works" className="hover:text-slate-900 transition-colors">
          How it works
        </a>
        <a href="#categories" className="hover:text-slate-900 transition-colors">
          Categories
        </a>
        <a href="#vendors" className="hover:text-slate-900 transition-colors">
          For vendors
        </a>
        <a href="#faq" className="hover:text-slate-900 transition-colors">
          FAQ
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="/download"
          className="hidden sm:inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-300 hover:bg-white transition-colors"
        >
          Sign in
        </Link>
        <Link
          href="/download"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 sm:px-5 py-1.5 text-sm font-semibold tracking-tight text-slate-50 shadow-sm shadow-slate-900/20 hover:bg-slate-800 transition-colors"
        >
          Get the app
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-50/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14"></path>
              <path d="m13 6 6 6-6 6"></path>
            </svg>
          </span>
        </Link>
      </div>
    </header>
  );
}
