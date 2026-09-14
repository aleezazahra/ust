import Link from 'next/link';
import {
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[var(--color-warm-white)]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

          <div>
            <Link href="/" className="mb-5 inline-flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-navy)] bg-[var(--color-navy)]">
                <span className="text-sm font-bold text-white">LOGO</span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-6 text-slate-600">
              A simpler way to organize your U.S. citizenship preparation,
              practice consistently, and stay on track.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <ShieldCheck size={17} />
              Built for citizenship preparation
            </div>
          </div>

        
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-navy)]">
              Product
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <Link
                href="#features"
                className="text-sm text-slate-600 transition-colors hover:text-[var(--color-navy)]"
              >
                Features
              </Link>

              <Link
                href="#how-it-works"
                className="text-sm text-slate-600 transition-colors hover:text-[var(--color-navy)]"
              >
                How it works
              </Link>

              <Link
                href="/onboarding"
                className="flex items-center gap-1 text-sm text-slate-600 transition-colors hover:text-[var(--color-navy)]"
              >
                Get started
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

        
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-navy)]">
              Account
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <Link
                href="/login"
                className="text-sm text-slate-600 transition-colors hover:text-[var(--color-navy)]"
              >
                Sign in
              </Link>

              <Link
                href="/onboarding"
                className="text-sm text-slate-600 transition-colors hover:text-[var(--color-navy)]"
              >
                Build your plan
              </Link>
            </div>
          </div>
        </div>

        
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Citizenship Prep. All rights reserved.
          </p>

          <p className="max-w-md text-left sm:text-right">
            This platform is for educational and preparation purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}