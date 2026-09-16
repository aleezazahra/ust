'use client';

import { Layers, RotateCcw } from 'lucide-react';
import Sidebar from './Sidebar';

const decks = [
  { title: 'Founders', cards: 32, progress: 68 },
  { title: 'American Government', cards: 48, progress: 42 },
  { title: 'Rights and Responsibilities', cards: 24, progress: 18 },
];

export default function Flashcards() {
  return (
    <div className="flex min-h-screen bg-[var(--color-warm-white)]">
      <Sidebar />
      <main className="flex-1 px-8 py-8 lg:px-12">
        <div className="flex items-center gap-3">
          <Layers className="text-[var(--color-blue)]" size={22} />
          <h1 className="text-2xl font-semibold text-[var(--color-navy)]">Flashcards</h1>
        </div>
        <p className="mt-1 text-sm text-slate-500">Review key concepts in short, focused sessions.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {decks.map((deck) => (
            <article key={deck.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="font-semibold text-[var(--color-navy)]">{deck.title}</h2>
              <p className="mt-2 text-sm text-slate-500">{deck.cards} cards</p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-[var(--color-blue)]" style={{ width: `${deck.progress}%` }} />
              </div>
              <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-blue)]">
                <RotateCcw size={15} /> Review deck
              </button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
