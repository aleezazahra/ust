import {
    BadgeCheck,
    Brain,
    CalendarDays,
    FileCheck2,
    Mic2,
    ShieldCheck,
    Sparkles,
    Target,
} from 'lucide-react';
import Link from 'next/link';

const features = [
    {
        icon: CalendarDays,
        title: "Plans built around your time",
        description: "Tell us your interview date and hours available. We organize your prep to fit.",
    },
    {
        icon: FileCheck2,
        title: "Document tracking",
        description: "See what you have, what you still need, and what needs attention.",
    },
    {
        icon: Target,
        title: "Adaptive practice",
        description: "We track your answers and focus practice on your weak spots.",
    },
    {
        icon: Brain,
        title: "Real explanations",
        description: "Get simple breakdowns for questions that trip you up.",
    },
    {
        icon: Mic2,
        title: "Interview practice",
        description: "Speaking sessions that mirror the real interview.",
    },
    {
        icon: ShieldCheck,
        title: "Both test versions",
        description: "Prep is organized around whichever civics test applies to you.",
    },
    {
        icon: Sparkles,
        title: "Everything in one place",
        description: "Documents, practice, progress, and interview prep together.",
    },
    {
        icon: BadgeCheck,
        title: "Sourced and verified",
        description: "Every question links to its official source.",
        withPrivacyLink: true,
    },
]


export default function Features() {
    return (
        <section
            id="features"
            className='bg-white px-6 py-24 sm:px-8 lg:px-12'>
            <div className='mx-auto max-w-7xl'>
                <div className='max-w-2xl'>
        

                    <h2 className='mt-4 text-4xl font-semibold leading-tight tracking-[-0.02em] text-[var(--color-navy)] sm:text-4xl'>
                        Everything you need in one place.
                    </h2>

                   
                </div>

                <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <article
                                key={feature.title}
                                className="bg-white p-7 transition-colors duration-200 hover:bg-[var(--color-warm-white)]"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-[var(--color-blue)]">
                                    <Icon size={21} strokeWidth={1.8} />
                                </div>

                                <h3 className="mt-6 text-lg font-semibold leading-snug text-[var(--color-navy)]">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    {feature.description}
                                    {feature.withPrivacyLink && (
                                        <>
                                            {' '}Learn more in our{' '}
                                            <Link
                                                href="/privacy"
                                                className="font-medium text-[var(--color-blue)] underline underline-offset-4 hover:text-[var(--color-navy)]"
                                            >
                                                privacy policy
                                            </Link>
                                            .
                                        </>
                                    )}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}