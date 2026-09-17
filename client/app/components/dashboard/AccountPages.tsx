'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';

type Mode = 'profile' | 'settings' | 'progress' | 'help';
const copy: Record<Mode, { title: string; description: string }> = {
  profile: { title: 'Your profile', description: 'Keep your study plan in sync with your real test timeline.' },
  settings: { title: 'Settings', description: 'Control your preferences and account access.' },
  progress: { title: 'My progress', description: 'See what is sticking and what deserves your next review.' },
  help: { title: 'Help center', description: 'Clear answers for a high-stakes study journey.' },
};kk

export default function AccountPage({ mode }: { mode: Mode }) {
  const [saved, setSaved] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [name, setName] = useState('Alex');
  if (deleted) return <main className="flex min-h-screen items-center justify-center p-6"><div className="max-w-md text-center"><h1 className="text-2xl font-semibold text-[var(--color-navy)]">Account deleted</h1><p className="mt-2 text-slate-500">Your local session has been cleared. Server deletion should be confirmed by the API in production.</p></div></main>;


  
  return <div className="flex min-h-screen bg-[var(--color-warm-white)]"><Sidebar /><main className="min-w-0 flex-1 px-5 py-20 sm:px-8 sm:py-8 lg:px-12"><h1 className="text-2xl font-semibold text-[var(--color-navy)]">{copy[mode].title}</h1><p className="mt-1 text-sm text-slate-500">{copy[mode].description}</p>
    {mode === 'profile' && <section className="mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"><h2 className="font-semibold text-[var(--color-navy)]">Study profile</h2><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium text-slate-700">Name<input value={name} onChange={e => setName(e.target.value)} className="mt-2 min-h-11 w-full rounded-lg border border-slate-200 px-3" /></label><label className="text-sm font-medium text-slate-700">Test version<select className="mt-2 min-h-11 w-full rounded-lg border border-slate-200 px-3"><option>2008 Civics Test</option><option>2025 Civics Test</option><option>Not sure yet</option></select></label><label className="text-sm font-medium text-slate-700">Interview date<input type="date" className="mt-2 min-h-11 w-full rounded-lg border border-slate-200 px-3" /></label><label className="text-sm font-medium text-slate-700">Daily study time<select className="mt-2 min-h-11 w-full rounded-lg border border-slate-200 px-3"><option>15 minutes</option><option>30 minutes</option><option>45 minutes</option></select></label></div><button type="button" onClick={() => setSaved(true)} className="mt-6 min-h-11 rounded-full bg-[var(--color-navy)] px-5 text-sm font-medium text-white">{saved ? 'Saved' : 'Save changes'}</button></section>}
    {mode === 'settings' && <section className="mt-8 max-w-2xl space-y-4"><div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="font-semibold text-[var(--color-navy)]">Account access</h2><p className="mt-2 text-sm text-slate-500">Sign out securely from this device or manage your sign-in provider.</p><button type="button" className="mt-5 min-h-11 rounded-full border border-slate-300 px-5 text-sm font-medium text-[var(--color-navy)]">Log out</button></div><div className="rounded-2xl border border-red-100 bg-white p-6"><h2 className="font-semibold text-red-700">Delete account</h2><p className="mt-2 text-sm text-slate-500">This permanently removes your profile and study progress.</p><button type="button" onClick={() => setDeleted(true)} className="mt-5 min-h-11 rounded-full border border-red-200 px-5 text-sm font-medium text-red-700">Delete my account</button></div></section>}
    {mode === 'progress' && <section className="mt-8 grid max-w-3xl gap-5 sm:grid-cols-3">{[['Civics mastery','68%'],['Questions answered','124'],['Current streak','21 days']].map(([label,value]) => <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-sm text-slate-500">{label}</p><p className="mt-3 text-3xl font-semibold text-[var(--color-navy)]">{value}</p></div>)}</section>}
    {mode === 'help' && <section className="mt-8 max-w-2xl divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white px-6"><details className="py-5"><summary className="cursor-pointer font-medium text-[var(--color-navy)]">Is this affiliated with USCIS?</summary><p className="mt-3 text-sm leading-6 text-slate-500">No. CivicReady is an independent educational tool. Sources and verification dates are shown with factual content.</p></details><details className="py-5"><summary className="cursor-pointer font-medium text-[var(--color-navy)]">Which civics test should I study?</summary><p className="mt-3 text-sm leading-6 text-slate-500">Your filing date and USCIS guidance determine the applicable version. When uncertain, confirm directly with USCIS or an accredited legal professional.</p></details></section>}
  </main></div>;
}
