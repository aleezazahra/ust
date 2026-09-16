
'use client';
import { useRouter } from 'next/navigation';
import GoogleContinueButton from '@/components/auth/GoogleContinueButton';

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-[#0B1F3A]">
            Save your progress
          </h1>

          <p className="mt-2 text-slate-500">
            Create an account to keep your personalized plan,
            progress and practice history.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <GoogleContinueButton
            onClick={() => {
              router.push('/dashboard');
            }}
          />

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-sm text-slate-400">
              or
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <button
            type="button"
            onClick={() => router.push('/dashboard')}
            className="w-full rounded-xl bg-[#0B1F3A] px-4 py-3 font-medium text-white transition hover:bg-[#162d4d]"
          >
            Continue as guest
          </button>
        </div>

        <p className="mt-5 text-center text-xs text-slate-400">
          You can create an account later from your dashboard.
        </p>
      </div>
    </main>
  );
}
