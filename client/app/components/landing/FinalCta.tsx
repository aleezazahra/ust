
'use client';

import Link from 'next/link';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';


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



const stars = [
  { top: '12%', left: '8%', size: 14, opacity: 0.5 },
  { top: '18%', left: '92%', size: 12, opacity: 0.4 },
  { top: '72%', left: '88%', size: 16, opacity: 0.45 },
  { top: '82%', left: '12%', size: 10, opacity: 0.35 },
  { top: '45%', left: '4%', size: 12, opacity: 0.4 },
  { top: '60%', left: '96%', size: 14, opacity: 0.5 },
];

export default function FinalCta() {
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
          style={{
            top: star.top,
            left: star.left,
            opacity: star.opacity,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8 lg:px-12">
   

        <div className="max-w-3xl">
         

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-warm-white)] sm:text-5xl lg:text-6xl">
            Most people never take
            <span className="block">the final step.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            You already did the hard part by getting here. Now turn your
            eligibility into a clear, personalized path to citizenship.
          </p>
        </div>

        <div className="mt-14 grid w-full max-w-5xl gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-warm-white)]/60 bg-[var(--color-warm-white)] p-6 text-left 67"
            >
        
           

              <div className="flex items-start justify-between">
                <span className="text-4xl font-semibold tracking-[-0.04em] text-[var(--color-navy)] sm:text-5xl">
                  {stat.value}
                </span>

               
              </div>

              <p className="mt-4 max-w-[220px] text-sm font-medium leading-relaxed text-slate-700">
                {stat.label}
              </p>

              <a
                href={stat.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-600 transition-colors hover:text-[var(--color-navy)]"
              >
                {stat.source.text}
                <ExternalLink size={11} />
              </a>
            </div>
          ))}
        </div>

      
        <div className="mt-14 flex flex-col items-center">
          <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Join the{' '}
            <span className="font-semibold text-[var(--color-warm-white)]">
              818,500
            </span>{' '}
            people who became U.S. citizens last year.
          </p>

          <Link
            href="/onboarding"
            className="group relative mt-7 inline-flex min-h-14 items-center gap-3 overflow-hidden rounded-full bg-[var(--color-warm-white)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-navy)] shadow-lg transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="absolute inset-0 -translate-x-full bg-slate-200 transition-transform duration-300 group-hover:translate-x-0" />

            <span className="relative z-10 flex items-center gap-3">
              Build My Path
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </Link>

         
        </div>
      </div>
    </section>
  );
}

