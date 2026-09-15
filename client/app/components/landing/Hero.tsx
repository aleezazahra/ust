'use client';

import Link from 'next/link';
import { ArrowRight, Check, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const rotatingLines = [
  'Your own personalizen plan according to timings and learning speed.',
  'Keeps track of your documents and prepration.',
  'All in one place to get your PR.',
];

const stars = [
  { top: '14%', left: '10%', size: 16, opacity: 0.55 },
  { top: '10%', left: '88%', size: 12, opacity: 0.4 },
  { top: '30%', left: '95%', size: 18, opacity: 0.5 },
  { top: '68%', left: '92%', size: 14, opacity: 0.45 },
  { top: '80%', left: '18%', size: 10, opacity: 0.35 },
  { top: '55%', left: '5%', size: 12, opacity: 0.4 },
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
    <section className="relative overflow-hidden bg-[var(--color-blue)]">
      <div className="absolute inset-0 [clip-path:polygon(66%_0,100%_0,100%_48%)] bg-[var(--color-navy)]" />
      <div className="absolute inset-0 [clip-path:polygon(100%_56%,100%_100%,58%_100%)] bg-[var(--color-navy)]" />
      <div className="absolute inset-0 [clip-path:polygon(38%_0,100%_18%,88%_100%,26%_100%)] bg-[var(--color-warm-white)]/10" />

      {stars.map((star, i) => (
        <Star
          key={i}
          size={star.size}
          fill="currentColor"
          className="absolute text-[var(--color-warm-white)]"
          style={{ top: star.top, left: star.left, opacity: star.opacity }}
        />
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-5xl flex-col items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-12">

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-warm-white)] sm:text-6xl lg:text-7xl">
          Want to become a
          <span className="block">permanent U.S. citizen?</span>
        </h1>

        <div className="mt-8 min-h-[64px] sm:min-h-[76px]">
          <p className="max-w-2xl text-2xl font-medium leading-tight tracking-[-0.02em] text-slate-300 sm:text-3xl">
            {displayText}
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-slate-300 align-middle animate-pulse" />
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/onboarding"
            className="group relative inline-flex min-h-12 items-center gap-2 overflow-hidden rounded-full border border-[var(--color-warm-white)]/50 px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-warm-white)] transition-colors duration-300"
          >
            <span className="absolute inset-x-0 bottom-0 h-0 bg-[var(--color-warm-white)] transition-all duration-300 ease-out group-hover:h-full" />
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[var(--color-navy)]">
              Build my study plan
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>

          <Link
            href="#features"
            className="group relative inline-flex min-h-12 items-center gap-2 overflow-hidden rounded-full border border-[var(--color-warm-white)]/50 px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-warm-white)] transition-colors duration-300"
          >
            <span className="absolute inset-x-0 bottom-0 h-0 bg-[var(--color-warm-white)] transition-all duration-300 ease-out group-hover:h-full" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--color-navy)]">
              See how it works
            </span>
          </Link>
        </div>

       
      </div>
    </section>
  );
}