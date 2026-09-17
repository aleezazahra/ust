
'use client';

import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-navy)]/10 bg-[var(--color-warm-white)]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">
    
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={closeMenu}
        >
        

        
        </Link>

    
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-[var(--color-navy)]/65 transition-colors hover:text-[var(--color-navy)]"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="text-sm font-medium text-[var(--color-navy)]/65 transition-colors hover:text-[var(--color-navy)]"
          >
            How it works
          </Link>

          <Link
            href="/login"
            className="text-sm font-semibold text-[var(--color-navy)] transition-opacity hover:opacity-60"
          >
            Sign in
          </Link>

          <Link
            href="/onboarding"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-5 py-3 text-sm font-semibold text-[var(--color-warm-white)] transition-all hover:bg-[var(--color-blue)]"
          >
            Get started
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </nav>

      
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-navy)]/15 text-[var(--color-navy)] transition-colors hover:bg-[var(--color-navy)]/5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>


      {open && (
        <div className="border-t border-[var(--color-navy)]/10 bg-[var(--color-warm-white)] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            <Link
              href="#features"
              onClick={closeMenu}
              className="text-sm font-medium text-[var(--color-navy)]/70 transition-colors hover:text-[var(--color-navy)]"
            >
              Features
            </Link>

            <Link
              href="#how-it-works"
              onClick={closeMenu}
              className="text-sm font-medium text-[var(--color-navy)]/70 transition-colors hover:text-[var(--color-navy)]"
            >
              How it works
            </Link>

            <Link
              href="/login"
              onClick={closeMenu}
              className="text-sm font-semibold text-[var(--color-navy)]"
            >
              Sign in
            </Link>

            <Link
              href="/onboarding"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] px-5 py-3 text-sm font-semibold text-[var(--color-warm-white)] transition-colors hover:bg-[var(--color-blue)]"
            >
              Get started
              <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}