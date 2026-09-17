'use client';

import { useState } from 'react';
import { Baloo_2 } from 'next/font/google';

const baloo = Baloo_2({ subsets: ['latin'], weight: ['700'] });

const faqs = [
    [
        'Which civics test should I study?',
        'Your filing date usually determines whether you take the 2008 or 2025 test. If you are unsure, our app can help you prepare for both while you confirm with USCIS.',
    ],
    [
        'Are the questions official?',
        'The study questions are based on USCIS materials. Each question in the practice test includes its source title, source URL, and verification status.',
    ],
    [
        'Is this app affiliated with USCIS?',
        'No, it is an independent educational tool and is not affiliated with or endorsed by USCIS or the U.S. government.',
    ],
    [
        'Can I track my documents?',
        'Yes, during onboarding you can mark documents you already have, documents you still need, and items you want help understanding.',
    ],
  
    [
        'How does the AI mock interview work?',
        'You answer spoken questions and get feedback on accuracy in real time. It is limited to a set number of sessions per day to keep it sustainable.',
    ],
    [
        'Can I study without an internet connection?',
        'Lessons and flashcards work offline once loaded. Practice tests and AI features need a connection.',
    ],
    [
        'What happens to my data if I delete my account?',
        'Deleting your account permanently removes your session history and any data stored on our servers. This cannot be undone.',
    ],
]

export default function FAQS() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faqs" className="bg-[var(--color-warm-white)] px-6 py-24 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl">
                <h2 className={`${baloo.className} text-6xl tracking-tight text-[var(--color-navy)] sm:text-7xl`}>
                    FAQs
                </h2>

                <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
                    {faqs.map(([q, a], index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={q}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="cursor-pointer py-5"
                            >
                                <div className="flex items-center justify-between gap-6">
                                    <p className="text-lg font-semibold text-[var(--color-navy)]">
                                        {q}
                                    </p>
                                    <span
                                        className={`shrink-0 text-2xl font-normal text-slate-400 transition ${
                                            isOpen ? 'rotate-45' : ''
                                        }`}
                                    >
                                        +
                                    </span>
                                </div>

                                {isOpen && (
                                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                                        {a}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}