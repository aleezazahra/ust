'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

const rotatingLines = [
  'We build your personalized plan.',
  'We keep your preparation on track.',
  'We guide you through the entire journey.',
];

export default function Hero() {
  const [activeLine, setActiveLine] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setActiveLine((current) => (current + 1) % rotatingLines.length);
        setVisible(true);
      }, 450);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--color-warm-white)]">
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--color-blue)]" />
              Citizenship preparation, built around you
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-navy)] sm:text-6xl lg:text-7xl">
              Want to become a
              <span className="block">permanent U.S. citizen?</span>
            </h1>

            <div className="mt-7 min-h-[92px] sm:min-h-[105px]">
              <p
                className={`max-w-2xl text-2xl font-medium leading-tight tracking-[-0.02em] text-[var(--color-blue)] transition-all duration-500 sm:text-3xl ${
                  visible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-2 opacity-0'
                }`}
              >
                {rotatingLines[activeLine]}
              </p>
            </div>

            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              From understanding your test to organizing documents, planning
              your study time, practicing questions, and preparing for your
              interview — everything stays in one place.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/onboarding"
                className="btn btn-primary group min-h-12 px-6"
              >
                Build my study plan
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#features"
                className="btn btn-secondary min-h-12 px-6"
              >
                See how it works
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[var(--color-blue)]" />
                Personalized preparation
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[var(--color-blue)]" />
                Built around your schedule
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[var(--color-blue)]" />
                Progress tracking
              </span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(11,31,58,0.10)] sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    Your preparation
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-[var(--color-navy)]">
                    Today&apos;s plan
                  </h2>
                </div>

                <div className="rounded-lg bg-[var(--color-warm-white)] px-3 py-2 text-right">
                  <p className="text-xs text-slate-400">Daily goal</p>
                  <p className="text-sm font-semibold text-[var(--color-navy)]">
                    30 min
                  </p>
                </div>
              </div>

              <div className="py-5">
                <div className="mb-5 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Preparation progress
                    </p>
                    <p className="mt-1 text-3xl font-semibold tracking-tight text-[var(--color-navy)]">
                      68%
                    </p>
                  </div>

                  <p className="text-sm font-medium text-[var(--color-blue)]">
                    On track
                  </p>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-[var(--color-blue)]"
                    style={{ width: '68%' }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                  <div>
                    <p className="font-medium text-[var(--color-navy)]">
                      Civics practice
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      10 questions
                    </p>
                  </div>

                  <span className="text-sm font-medium text-[var(--color-blue)]">
                    10 min
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                  <div>
                    <p className="font-medium text-[var(--color-navy)]">
                      Review weak areas
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Personalized review
                    </p>
                  </div>

                  <span className="text-sm font-medium text-[var(--color-blue)]">
                    10 min
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                  <div>
                    <p className="font-medium text-[var(--color-navy)]">
                      Interview practice
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Speaking session
                    </p>
                  </div>

                  <span className="text-sm font-medium text-[var(--color-blue)]">
                    10 min
                  </span>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Interview
                    </p>
                    <p className="mt-1 font-semibold text-[var(--color-navy)]">
                      42 days remaining
                    </p>
                  </div>

                  <div className="h-10 w-10 rounded-full border-4 border-slate-100 border-t-[var(--color-blue)]" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
              <p className="text-xs text-slate-400">This week</p>
              <p className="mt-1 font-semibold text-[var(--color-navy)]">
                4 study sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}