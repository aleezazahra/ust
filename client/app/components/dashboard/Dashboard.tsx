import Link from 'next/link';
import { Search, ChevronDown, Flame, CalendarClock } from 'lucide-react';
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
  return (
    <div className="flex min-h-screen bg-[var(--color-warm-white)]">
      <Sidebar />

      <main className="flex-1 px-8 py-8 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold text-[var(--color-navy)]">
            Welcome, {userName}
          </h1>

          <div className="flex items-center gap-4">
            <button type="button" className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-400 transition hover:border-slate-300 hover:text-slate-600">
              <Search size={16} />
              Search
            </button>

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
          </div>
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
              Today's focus
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
