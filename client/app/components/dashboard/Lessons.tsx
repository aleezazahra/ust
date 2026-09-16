'use client';

import { CheckCircle2, PlayCircle, Lock } from 'lucide-react';
import Sidebar from './Sidebar';

type LessonStatus = 'completed' | 'inProgress' | 'locked';

type Lesson = {
  title: string;
  status: LessonStatus;
};

type Module = {
  title: string;
  progress: number;
  lessons: Lesson[];
};

const modules: Module[] = [
  {
    title: 'American Government',
    progress: 78,
    lessons: [
      { title: 'Principles of Democracy', status: 'completed' },
      { title: 'System of Government', status: 'completed' },
      { title: 'Rights and Responsibilities', status: 'inProgress' },
      { title: 'The Constitution', status: 'locked' },
    ],
  },
  {
    title: 'History',
    progress: 65,
    lessons: [
      { title: 'Colonial Period and Independence', status: 'completed' },
      { title: 'The 1800s', status: 'inProgress' },
      { title: 'Recent American History', status: 'locked' },
    ],
  },
  {
    title: 'Civics',
    progress: 90,
    lessons: [
      { title: 'Geography', status: 'completed' },
      { title: 'Symbols', status: 'completed' },
      { title: 'Holidays', status: 'inProgress' },
    ],
  },
  {
    title: 'Reading and Writing',
    progress: 55,
    lessons: [
      { title: 'Reading Vocabulary', status: 'completed' },
      { title: 'Writing Vocabulary', status: 'inProgress' },
      { title: 'Sample Sentences', status: 'locked' },
    ],
  },
];

function StatusIcon({ status }: { status: LessonStatus }) {
  if (status === 'completed') {
    return <CheckCircle2 size={18} className="text-[var(--color-blue)]" />;
  }

  if (status === 'inProgress') {
    return <PlayCircle size={18} className="text-[var(--color-navy)]" />;
  }

  return <Lock size={18} className="text-slate-300" />;
}

export default function Lessons() {
  return (
    <div className="flex min-h-screen bg-[var(--color-warm-white)]">
      <Sidebar />

      <main className="flex-1 px-8 py-8 lg:px-12">
        <h1 className="text-2xl font-semibold text-[var(--color-navy)]">Lessons</h1>
        <p className="mt-1 text-sm text-slate-500">
          Work through each module at your own pace.
        </p>

        <div className="mt-8 space-y-6">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--color-navy)]">
                  {module.title}
                </p>
                <p className="text-sm font-medium text-slate-400">
                  {module.progress}%
                </p>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[var(--color-blue)]"
                  style={{ width: `${module.progress}%` }}
                />
              </div>

              <div className="mt-6 divide-y divide-slate-100">
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson.title}
                    className="flex items-center justify-between py-3"
                  >
                    <div className="flex items-center gap-3">
                      <StatusIcon status={lesson.status} />
                      <span
                        className={`text-sm ${
                          lesson.status === 'locked'
                            ? 'text-slate-400'
                            : 'text-slate-700'
                        }`}
                      >
                        {lesson.title}
                      </span>
                    </div>

                    {lesson.status === 'inProgress' && (
                      <button
                        type="button"
                        className="rounded-full bg-[var(--color-navy)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--color-blue)]"
                      >
                        Continue
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}