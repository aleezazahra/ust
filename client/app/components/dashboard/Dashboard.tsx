 'use client';
import Link from 'next/link';
import { ChevronDown, Flame, CalendarClock, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';

const userName = 'Alex';

const studyModules = [
  { label: 'American Government', progress: 78 },
  { label: 'History', progress: 65 },
  { label: 'Civics', progress: 90 },
  { label: 'Reading and Writing', progress: 55 },
];

const recentActivity = [
  { title: 'Quiz 5', detail: 'Passed, 95%' },
  { title: 'Lesson 2.2', detail: 'Completed' },
  { title: 'Flashcard deck: Founders', detail: 'Reviewed' },
];

export default function Dashboard() {
  const router = useRouter();
  const logout = async () => { try { await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000'}/auth/logout`, { method: 'POST', credentials: 'include' }); } finally { router.push('/'); router.refresh(); } };
  return (
    <div className="flex min-h-screen bg-[var(--color-warm-white)]">
      <Sidebar />

      <main className="min-w-0 flex-1 px-5 py-20 sm:px-8 sm:py-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold text-[var(--color-navy)]">
            Welcome, {userName}
          </h1>

          <div className="flex items-center gap-4">
            <Link
              href="/profile"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-[var(--color-navy)]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-navy)] text-xs font-semibold text-white">
                {userName.charAt(0)}
              </span>
              Profile
              <ChevronDown size={14} className="text-slate-400" />
            </Link>
            <button type="button" onClick={logout} aria-label="Log out" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-red-100 bg-white px-3 text-sm font-medium text-red-700 hover:bg-red-50"><LogOut size={15} /><span className="hidden sm:inline">Log out</span></button>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl bg-[var(--color-navy)] p-6 text-white sm:flex-row sm:items-center sm:p-7">
          <div><p className="text-sm font-semibold text-blue-200">Your next best step</p><h2 className="mt-1 text-xl font-semibold">Review your weak questions</h2><p className="mt-1 text-sm text-slate-300">A focused 10-minute session keeps your streak moving.</p></div>
          <Link href="/dashboard/practice-test" className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-blue-50">Start review</Link>
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.12rem] text-slate-400">
          Daily progress
        </p>

        <div className="mt-4 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 lg:col-span-2">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Flame size={16} className="text-[var(--color-blue)]" />
              Current streak
            </div>

            <div className="mt-4 flex items-end gap-3">
              <p className="text-5xl font-semibold text-[var(--color-navy)]">21</p>
              <p className="pb-1 text-sm text-slate-400">days, keep it up</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <CalendarClock size={16} className="text-[var(--color-blue)]" />
              Test day countdown
            </div>

            <div className="mt-4 flex items-end gap-3">
              <p className="text-5xl font-semibold text-[var(--color-navy)]">73</p>
              <p className="pb-1 text-sm text-slate-400">days to go</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-semibold text-[var(--color-navy)]">
              Current study modules
            </p>

            <div className="mt-5 space-y-4">
              {studyModules.map((module) => (
                <div key={module.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{module.label}</span>
                    <span className="font-medium text-[var(--color-navy)]">{module.progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[var(--color-blue)]"
                      style={{ width: `${module.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-semibold text-[var(--color-navy)]">
              Today&apos;s focus
            </p>

            <p className="mt-5 text-sm font-medium text-[var(--color-navy)]">
              Module 3: Rights and Responsibilities
            </p>
            <p className="mt-1 text-sm text-slate-500">Lesson 3.1, 3.2</p>

            <p className="mt-5 text-sm font-medium text-[var(--color-navy)]">
              Flashcard deck
            </p>
            <p className="mt-1 text-sm text-slate-500">Founders</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <p className="text-sm font-semibold text-[var(--color-navy)]">
              Recent activity
            </p>

            <div className="mt-5 space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.title} className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">{activity.title}</span>
                  <span className="text-slate-400">{activity.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
