'use client';

import { Clock, HelpCircle } from 'lucide-react';
import Sidebar from './Sidebar';

const pastAttempts = [
  { date: 'Sep 12, 2026', score: 90, correct: 18, total: 20, passed: true },
  { date: 'Sep 5, 2026', score: 75, correct: 15, total: 20, passed: true },
  { date: 'Aug 28, 2026', score: 55, correct: 11, total: 20, passed: false },
];

export default function PracticeTest() {
  return (
    <div className="flex min-h-screen bg-[var(--color-warm-white)]">
      <Sidebar />

      <main className="flex-1 px-8 py-8 lg:px-12">
        <h1 className="text-2xl font-semibold text-[var(--color-navy)]">Practice Test</h1>
        <p className="mt-1 text-sm text-slate-500">
          Simulate the real interview under timed conditions.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8">
          <p className="text-lg font-semibold text-[var(--color-navy)]">
            Full civics practice test
          </p>
          <p className="mt-2 max-w-md text-sm text-slate-500">
            20 randomly selected questions from your current test version, timed the same way as
            the real interview.
          </p>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <HelpCircle size={16} className="text-[var(--color-blue)]" />
              20 questions
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-[var(--color-blue)]" />
              10 minutes
            </span>
          </div>

          <button
            type="button"
            className="mt-7 rounded-full bg-[var(--color-navy)] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-colors hover:bg-[var(--color-blue)]"
          >
            Start practice test
          </button>
        </div>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.12rem] text-slate-400">
          Past attempts
        </p>

        <div className="mt-4 divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
          {pastAttempts.map((attempt) => (
            <div
              key={attempt.date}
              className="flex items-center justify-between px-7 py-4"
            >
              <div>
                <p className="text-sm font-medium text-[var(--color-navy)]">{attempt.date}</p>
                <p className="mt-0.5 text-sm text-slate-400">
                  {attempt.correct} of {attempt.total} correct
                </p>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold text-[var(--color-navy)]">
                  {attempt.score}%
                </p>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    attempt.passed
                      ? 'bg-[var(--color-warm-white)] text-[var(--color-blue)]'
                      : 'bg-red-50 text-red-500'
                  }`}
                >
                  {attempt.passed ? 'Passed' : 'Not passed'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}