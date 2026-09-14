'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
    
        <Link href="/" className="flex items-center">
 
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-navy)] bg-[var(--color-navy)]">
            <span className="text-sm font-bold text-white">LOGO</span>
          </div>
        </Link>

    
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[var(--color-navy)]"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-[var(--color-navy)]"
          >
            How it works
          </Link>

          <Link
            href="/login"
            className="text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-blue)]"
          >
            Sign in
          </Link>

          <Link
            href="/onboarding"
            className="btn btn-primary text-sm"
          >
            Get started
          </Link>
        </nav>


        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-[var(--color-navy)] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

    
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-5">
            <Link
              href="#features"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              Features
            </Link>

            <Link
              href="#how-it-works"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              How it works
            </Link>

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-[var(--color-navy)]"
            >
              Sign in
            </Link>

            <Link
              href="/onboarding"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full text-sm"
            >
              Get started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}