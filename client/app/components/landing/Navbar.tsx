'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-warm-white)]/10 bg-[var(--color-blue)]">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link href="/" className="flex items-center">

          <div className="flex h-10 w-10 items-center justify-center rounded-md ">

          </div>
        </Link>


        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-[var(--color-warm-white)]/80 transition-colors hover:text-[var(--color-warm-white)]"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="text-sm font-medium text-[var(--color-warm-white)]/80 transition-colors hover:text-[var(--color-warm-white)]"
          >
            How it works
          </Link>

          <Link
            href="/login"
            className="text-sm font-semibold text-[var(--color-warm-white)] transition-colors hover:text-[var(--color-warm-white)]/80"
          >
            Sign in
          </Link>

          <Link
            href="/onboarding"
            className="inline-flex items-center rounded-full bg-[var(--color-warm-white)] px-5 py-2.5 text-sm font-medium text-[var(--color-navy)] transition-colors hover:bg-white"
          >
            Get started
          </Link>
        </nav>


        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-warm-white)]/30 text-[var(--color-warm-white)] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>


      {open && (
        <div className="border-t border-[var(--color-warm-white)]/10 bg-[var(--color-blue)] px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-5">
            <Link
              href="#features"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[var(--color-warm-white)]/80"
            >
              Features
            </Link>

            <Link
              href="#how-it-works"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[var(--color-warm-white)]/80"
            >
              How it works
            </Link>

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-[var(--color-warm-white)]"
            >
              Sign in
            </Link>

            <Link
              href="/onboarding"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-warm-white)] px-5 py-2.5 text-sm font-medium text-[var(--color-navy)]"
            >
              Get started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}