'use client';

import { useState } from 'react';
import { CheckCircle2, Lock, PlayCircle, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import Sidebar from './Sidebar';

type Lesson = {
  title: string;
  status: 'completed' | 'inProgress' | 'locked';
  summary: string;
  points: string[];
};

const modules: { title: string; lessons: Lesson[] }[] = [
  {
    title: 'American Government',
    lessons: [
      {
        title: 'Principles of Democracy',
        status: 'completed',
        summary: 'Learn how popular sovereignty and representative government shape the United States.',
        points: [
          'The Constitution begins with “We the People.”',
          'Citizens exercise power by voting and participating.',
        ],
      },
      {
        title: 'System of Government',
        status: 'completed',
        summary: 'Understand the three branches and how checks and balances prevent concentrated power.',
        points: [
          'Congress makes laws.',
          'The President enforces laws.',
          'Courts interpret laws.',
        ],
      },
      {
        title: 'Rights and Responsibilities',
        status: 'inProgress',
        summary: 'Review the rights protected by the Constitution and the responsibilities of citizenship.',
        points: [
          'Freedom of speech is protected by the First Amendment.',
          'Citizens serve on juries and follow the law.',
        ],
      },
      {
        title: 'The Constitution',
        status: 'locked',
        summary: 'A guided look at the document that establishes the U.S. government.',
        points: [],
      },
    ],
  },
  {
    title: 'History',
    lessons: [
      {
        title: 'Colonial Period and Independence',
        status: 'completed',
        summary: 'Trace the events that led the colonies to declare independence.',
        points: [
          'The Declaration of Independence was adopted in 1776.',
          'The thirteen colonies became the first states.',
        ],
      },
      {
        title: 'The 1800s',
        status: 'inProgress',
        summary: 'Build a timeline of the Civil War, Reconstruction, and westward expansion.',
        points: [
          'The Civil War was fought over many issues including slavery.',
        ],
      },
      {
        title: 'Recent American History',
        status: 'locked',
        summary: 'Study key events from the twentieth century to today.',
        points: [],
      },
    ],
  },
];

export default function Lessons() {
  const [active, setActive] = useState<Lesson | null>(null);
  const [done, setDone] = useState(false);

  return (
    <div className="flex min-h-screen bg-[var(--color-warm-white)]">
      <Sidebar />
      <main className="min-w-0 flex-1 px-5 py-20 sm:px-8 sm:py-8 lg:px-12">
        <div className="flex items-center gap-3">
          <BookOpen className="text-[var(--color-blue)]" size={22} />
          <h1 className="text-2xl font-semibold text-[var(--color-navy)]">Lessons</h1>
        </div>
        <p className="mt-1 text-sm text-slate-500">Learn one idea at a time, then mark it complete.</p>

        {active ? (
          <section className="mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setActive(null)}
              className="flex min-h-11 items-center gap-2 text-sm font-medium text-slate-500"
            >
              <ArrowLeft size={16} /> All lessons
            </button>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-blue)]">
              Guided lesson
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--color-navy)]">{active.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{active.summary}</p>

            <div className="mt-7 rounded-xl bg-[var(--color-warm-white)] p-5">
              <h3 className="font-semibold text-[var(--color-navy)]">Key ideas</h3>
              <ul className="mt-3 space-y-3">
                {active.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <CheckCircle2 className="mt-1 shrink-0 text-[var(--color-blue)]" size={16} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setDone(true)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-navy)] px-5 text-sm font-medium text-white"
              >
                {done ? 'Completed' : 'Mark lesson complete'} <CheckCircle2 size={16} />
              </button>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 px-5 text-sm font-medium text-[var(--color-navy)]"
              >
                Next lesson <ArrowRight size={16} />
              </button>
            </div>

            {done && (
              <p className="mt-4 text-sm text-emerald-700" role="status">
                Nice work — your progress has been updated for this session.
              </p>
            )}
          </section>
        ) : (
          <div className="mt-8 space-y-6">
            {modules.map((module) => {
              const progress = Math.round(
                (module.lessons.filter((l) => l.status === 'completed').length / module.lessons.length) * 100
              );

              return (
                <section key={module.title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-[var(--color-navy)]">{module.title}</h2>
                    <span className="text-sm text-slate-400">{progress}%</span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-[var(--color-blue)]" style={{ width: `${progress}%` }} />
                  </div>

                  <div className="mt-5 divide-y divide-slate-100">
                    {module.lessons.map((lesson) => (
                      <div key={lesson.title} className="flex flex-wrap items-center justify-between gap-3 py-4">
                        <div className="flex items-center gap-3">
                          {lesson.status === 'completed' ? (
                            <CheckCircle2 size={18} className="text-[var(--color-blue)]" />
                          ) : lesson.status === 'inProgress' ? (
                            <PlayCircle size={18} className="text-[var(--color-navy)]" />
                          ) : (
                            <Lock size={18} className="text-slate-300" />
                          )}
                          <span className={lesson.status === 'locked' ? 'text-sm text-slate-400' : 'text-sm text-slate-700'}>
                            {lesson.title}
                          </span>
                        </div>
                        {lesson.status !== 'locked' && (
                          <button
                            type="button"
                            onClick={() => {
                              setActive(lesson);
                              setDone(lesson.status === 'completed');
                            }}
                            className="min-h-10 rounded-full bg-[var(--color-navy)] px-4 text-xs font-medium text-white"
                          >
                            {lesson.status === 'completed' ? 'Review' : 'Start lesson'}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}