import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import GoogleContinueButton from '@/components/auth/GoogleContinueButton';

type OnboardingData = {
  filingDate: string;
  testVersion: '2008' | '2025' | 'unknown';
  interviewDate: string;
  studyMinutes: number;
  confidence: string;
  previousAttempt: string;
  documents: string[];
  goals: string[];
};

export default function PlanPage() {
  const router = useRouter();
  const [data, setData] = useState<OnboardingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem('citizenship-onboarding');

    if (!stored) {
      router.replace('/onboarding');
      return;
    }

    setData(JSON.parse(stored));

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [router]);

  if (!data || loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white p-6">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-[#2563EB]" />

          <h1 className="text-2xl font-semibold text-[#0B1F3A]">
            Creating your plan
          </h1>

          <p className="mt-2 text-slate-500">
            We're building your personalized study schedule...
          </p>
        </div>
      </main>
    );
  }

  const testName =
    data.testVersion === '2008'
      ? '2008 Civics Test'
      : data.testVersion === '2025'
        ? '2025 Civics Test'
        : 'Civics Test';

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1F3A] text-xl text-white">
            ✓
          </div>

          <h1 className="text-3xl font-semibold text-[#0B1F3A]">
            Your plan is ready
          </h1>

          <p className="mt-2 text-slate-500">
            We built this around your answers.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Daily study</p>
              <p className="mt-1 text-xl font-semibold text-[#0B1F3A]">
                {data.studyMinutes} min
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm text-slate-500">Test</p>
              <p className="mt-1 text-xl font-semibold text-[#0B1F3A]">
                {testName.split(' ')[0]}
              </p>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-[#0B1F3A]">
            Your first session
          </h2>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
              <span className="text-slate-700">
                Civics practice
              </span>

              <span className="text-sm text-slate-400">
                10 min
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
              <span className="text-slate-700">
                Review weak areas
              </span>

              <span className="text-sm text-slate-400">
                5 min
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <GoogleContinueButton
            onClick={() => router.push('/login')}
          />

          <p className="mt-3 text-center text-xs leading-relaxed text-slate-400">
            Create an account to save your plan and track your progress.
          </p>
        </div>
      </div>
    </main>
  );
}

