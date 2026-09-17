'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

const stats = [
  {
    value: '8.6M',
    label: 'Green Card holders eligible to naturalize',
    source: {
      text: 'DHS OHSS, 2024',
      href: 'https://ohss.dhs.gov/topics/immigration/lawful-permanent-residents/population-estimates/fy-25-lpr-pop-estimates',
    },
  },
  {
    value: '11.5%',
    label: 'of eligible immigrants actually applied',
    source: {
      text: 'Clearbox Legal, 2024',
      href: 'https://clearboxlegal.com/guides/infographics-us-citizenship',
    },
  },
  {
    value: '89%',
    label: 'N-400 approval rate in FY 2026 Q1',
    source: {
      text: 'Manifest Law, 2026',
      href: 'https://manifestlaw.com/blog/n400-approval-rate',
    },
  },
];

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy)]">
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center justify-center gap-3 text-[var(--color-warm-white)]/60">
           

            <span className="text-xs font-medium uppercase tracking-[0.25em]">
              Your path starts here
            </span>

          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-warm-white)] sm:text-5xl lg:text-6xl">
            Most people never take
            <span className="block">the final step.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            You already did the hard part by getting here. Now turn your
            eligibility into a clear, personalized path to citizenship.
          </p>
        </div>

      
        <div className="mt-14 grid w-full max-w-5xl gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-[var(--color-navy)]/10 bg-[var(--color-warm-white)] p-6 text-left shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              <p className="text-4xl font-semibold tracking-[-0.05em] text-[var(--color-navy)] sm:text-5xl">
                {stat.value}
              </p>

              <p className="mt-5 min-h-[56px] max-w-[230px] text-sm font-medium leading-relaxed text-slate-600">
                {stat.label}
              </p>

              <a
                href={stat.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 transition-colors hover:text-[var(--color-navy)]"
              >
                {stat.source.text}
                <ExternalLink size={11} />
              </a>
            </div>
          ))}
        </div>

        
        <div className="mt-14 flex flex-col items-center">
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Join the{' '}
            <span className="font-semibold text-[var(--color-warm-white)]">
              818,500
            </span>{' '}
            people who became U.S. citizens last year.
          </p>

          <Link
            href="/onboarding"
            className="group mt-7 inline-flex min-h-14 items-center gap-3 rounded-full bg-[var(--color-warm-white)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-navy)] shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-white"
          >
            Build My Path

            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}