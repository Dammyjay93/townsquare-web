import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* Logo */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 shadow-lg shadow-primary-500/40">
              <span className="text-sm font-semibold tracking-tight text-white">TS</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              TownSquare
            </span>
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Navigate</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <a href="#why-townsquare" className="hover:text-slate-900 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-slate-900 transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#vendors" className="hover:text-slate-900 transition-colors">
                Vendors
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-slate-900 transition-colors">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Follow</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <a href="https://instagram.com/mytownsquare.co" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/company/mytownsquare" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/mytownsquare" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">
                X
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-slate-900 mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <a href="mailto:hello@mytownsquare.co" className="hover:text-slate-900 transition-colors">
                hello@mytownsquare.co
              </a>
            </li>
            <li className="text-slate-500">
              Berlin, Germany
            </li>
          </ul>
        </div>
      </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© TownSquare. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">
              Terms
            </Link>
            <Link href="/impressum" className="hover:text-slate-900 transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
