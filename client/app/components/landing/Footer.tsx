import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-12">
        <div className="max-w-sm">
        
          <p className="mt-2 text-sm leading-6 text-slate-500">
            An independent study tool to help you prepare for the U.S. Citizenship Test. Not affiliated with or endorsed by any government entity.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12rem] text-slate-400">
            Legal
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link
                href="/privacy"
                className="text-sm text-slate-600 transition-colors hover:text-[var(--color-navy)]"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-slate-600 transition-colors hover:text-[var(--color-navy)]"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 px-6 py-6 sm:px-8 lg:px-12">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} All rights reserved.
          Made for thirdspace.hackclub.com
        </p>
      </div>
    </footer>
  );
}