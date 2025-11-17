import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 pt-5 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold tracking-tight text-slate-900">
          TownSquare
        </span>
        <span className="h-1 w-1 rounded-full bg-slate-300"></span>
        <span>Connect with trusted service providers in your community.</span>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/privacy" className="hover:text-slate-800">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-slate-800">
          Terms
        </Link>
        <a href="mailto:support@mytownsquare.co" className="hover:text-slate-800">
          Support
        </a>
      </div>
    </footer>
  );
}
