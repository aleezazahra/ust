
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const rotatingLines = [
  'Your own personalized plan according to timings and learning speed.',
  'Keeps track of your documents and preparation.',
  'All in one place to get your PR.',
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentLine = rotatingLines[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= currentLine.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 45);
    } else if (!deleting && charIndex > currentLine.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 25);
    } else {
      setDeleting(false);
      setCharIndex(0);
      setLineIndex((i) => (i + 1) % rotatingLines.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, lineIndex]);

  return (
    <section className="relative overflow-hidden bg-[var(--color-navy)]">
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/flag-bg.jpg')" }}
      />

      <div className="absolute inset-0 bg-[var(--color-navy)]/75" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-12">
        <div className="flex max-w-3xl flex-col items-center">
          <div className="flex items-center gap-3 text-[var(--color-warm-white)]/70">
        
            <span className="text-xs font-medium uppercase tracking-[0.25em]">
              U.S. Citizenship Test Prep
            </span>
           
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-warm-white)] sm:text-6xl lg:text-7xl">
            Want to become a
            <span className="block">permanent U.S. citizen?</span>
          </h1>

          <div className="mt-8 min-h-[64px] sm:min-h-[76px]">
            <p className="max-w-2xl text-2xl font-medium leading-tight tracking-[-0.02em] text-slate-300 sm:text-3xl">
              {displayText}
              <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] animate-pulse bg-slate-300 align-middle" />
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/onboarding"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-warm-white)] px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-navy)] transition-opacity duration-300 hover:opacity-90"
            >
              Build my study plan
              <ArrowRight size={16} />
            </Link>

            <Link
              href="#features"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--color-warm-white)]/40 px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-warm-white)] transition-colors duration-300 hover:border-[var(--color-warm-white)]/70"
            >
              See how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}