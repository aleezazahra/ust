

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type OnboardingData = {
  filingDate: string;
  testVersion: '2008' | '2025' | 'unknown';
  interviewDate: string;
  studyMinutes: number;
  confidence: 'beginner' | 'some' | 'confident' | 'advanced';
  previousAttempt: 'first' | 'passed' | 'retake' | 'unknown';
  documents: string[];
  goals: string[];
};

const TOTAL_STEPS = 8;

const STUDY_OPTIONS = [5, 15, 30, 45, 60];

const DOCUMENT_OPTIONS = [
  'Green Card',
  'Interview notice',
  'Required documents',
  'I need help knowing what I need',
];

const GOAL_OPTIONS = [
  'Civics questions',
  'Speaking practice',
  'Reading & writing',
  'N-400 interview questions',
  'Mock interviews',
  'Staying on schedule',
];

export default function CitizenshipOnboarding() {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [data, setData] = useState<OnboardingData>({
    filingDate: new Date().toISOString().slice(0, 10),
    testVersion: 'unknown',
    interviewDate: '',
    studyMinutes: 15,
    confidence: 'beginner',
    previousAttempt: 'first',
    documents: [],
    goals: [],
  });

  const updateData = <K extends keyof OnboardingData>(
    key: K,
    value: OnboardingData[K],
  ) => {
    setData((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const toggleArrayValue = (
    key: 'documents' | 'goals',
    value: string,
  ) => {
    setData((current) => {
      const values = current[key];

      return {
        ...current,
        [key]: values.includes(value)
          ? values.filter((item) => item !== value)
          : [...values, value],
      };
    });
  };

  const canContinue = () => {
    if (step === 1) return Boolean(data.filingDate);
    if (step === 2) return Boolean(data.testVersion);
    return true;
  };

  const goNext = () => {
    if (!canContinue()) return;

    if (step < TOTAL_STEPS) {
      setStep((current) => current + 1);
      return;
    }

    sessionStorage.setItem(
      'citizenship-onboarding',
      JSON.stringify(data),
    );

    router.push('/plan');
  };

  const goBack = () => {
    if (step > 1) {
      setStep((current) => current - 1);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white p-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500">
              Step {step} of {TOTAL_STEPS}
            </span>

            <span className="text-sm text-slate-400">
              2 min
            </span>
          </div>

          <div className="flex gap-2">
            {Array.from({ length: TOTAL_STEPS }).map((_, index) => {
              const current = index + 1;

              return (
                <div
                  key={current}
                  className={`h-1.5 flex-1 rounded-full ${
                    current < step
                      ? 'bg-[#0B1F3A]'
                      : current === step
                        ? 'bg-[#2563EB]'
                        : 'bg-slate-200'
                  }`}
                />
              );
            })}
          </div>
        </div>

        <div key={step} className="coach-step-in">
          {step === 1 && (
            <fieldset className="mb-8 border-0 p-0">
              <legend className="text-2xl font-semibold leading-snug text-[#0B1F3A]">
                When did you file your N-400?
              </legend>

              <p className="mb-5 mt-2 text-base leading-relaxed text-slate-500">
                This helps us determine which civics test you may need.
              </p>

              <input
                type="date"
                value={data.filingDate}
                onChange={(e) =>
                  updateData('filingDate', e.target.value)
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base text-[#0B1F3A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/30"
              />
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="mb-8 border-0 p-0">
              <legend className="text-2xl font-semibold leading-snug text-[#0B1F3A]">
                Which civics test are you taking?
              </legend>

              <p className="mb-5 mt-2 text-base leading-relaxed text-slate-500">
                Not sure? No problem. We can help you figure it out.
              </p>

              <div className="space-y-3">
                {[
                  ['2025', '2025 Civics Test'],
                  ['2008', '2008 Civics Test'],
                  ['unknown', "I'm not sure"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      updateData(
                        'testVersion',
                        value as OnboardingData['testVersion'],
                      )
                    }
                    className={`w-full rounded-xl border-2 px-4 py-3 text-left font-medium transition ${
                      data.testVersion === value
                        ? 'border-[#2563EB] bg-[#2563EB] text-white'
                        : 'border-slate-200 text-[#0B1F3A] hover:border-[#2563EB]/40'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset className="mb-8 border-0 p-0">
              <legend className="text-2xl font-semibold leading-snug text-[#0B1F3A]">
                Do you have an interview date?
              </legend>

              <p className="mb-5 mt-2 text-base text-slate-500">
                We use this to build your study schedule.
              </p>

              <div className="space-y-3">
                <input
                  type="date"
                  value={data.interviewDate}
                  onChange={(e) =>
                    updateData('interviewDate', e.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base text-[#0B1F3A] outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/30"
                />

                <button
                  type="button"
                  onClick={() => updateData('interviewDate', '')}
                  className={`w-full rounded-xl border-2 px-4 py-3 text-left font-medium ${
                    data.interviewDate === ''
                      ? 'border-[#2563EB] bg-[#2563EB] text-white'
                      : 'border-slate-200 text-[#0B1F3A]'
                  }`}
                >
                  I don't have one yet
                </button>
              </div>
            </fieldset>
          )}

          {step === 4 && (
            <fieldset className="mb-8 border-0 p-0">
              <legend className="text-2xl font-semibold leading-snug text-[#0B1F3A]">
                How much can you study each day?
              </legend>

              <p className="mb-5 mt-2 text-base text-slate-500">
                We'll build your plan around your available time.
              </p>

              <div className="flex flex-wrap gap-3">
                {STUDY_OPTIONS.map((minutes) => (
                  <button
                    key={minutes}
                    type="button"
                    onClick={() =>
                      updateData('studyMinutes', minutes)
                    }
                    className={`rounded-full border-2 px-5 py-2.5 font-medium ${
                      data.studyMinutes === minutes
                        ? 'border-[#2563EB] bg-[#2563EB] text-white'
                        : 'border-slate-200 text-[#0B1F3A]'
                    }`}
                  >
                    {minutes === 60 ? '60+ min' : `${minutes} min`}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 5 && (
            <fieldset className="mb-8 border-0 p-0">
              <legend className="text-2xl font-semibold leading-snug text-[#0B1F3A]">
                How confident are you with civics?
              </legend>

              <p className="mb-5 mt-2 text-base text-slate-500">
                Be honest. This helps us set the right starting point.
              </p>

              <div className="space-y-3">
                {[
                  ['beginner', 'Just starting'],
                  ['some', 'I know some'],
                  ['confident', 'Pretty confident'],
                  ['advanced', 'I have already studied'],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      updateData(
                        'confidence',
                        value as OnboardingData['confidence'],
                      )
                    }
                    className={`w-full rounded-xl border-2 px-4 py-3 text-left font-medium ${
                      data.confidence === value
                        ? 'border-[#2563EB] bg-[#2563EB] text-white'
                        : 'border-slate-200 text-[#0B1F3A]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 6 && (
            <fieldset className="mb-8 border-0 p-0">
              <legend className="text-2xl font-semibold leading-snug text-[#0B1F3A]">
                Have you taken the test before?
              </legend>

              <div className="mt-5 space-y-3">
                {[
                  ['first', 'No, this is my first time'],
                  ['passed', 'Yes, I passed'],
                  ['retake', 'Yes, I need to retake it'],
                  ['unknown', "I'm not sure"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      updateData(
                        'previousAttempt',
                        value as OnboardingData['previousAttempt'],
                      )
                    }
                    className={`w-full rounded-xl border-2 px-4 py-3 text-left font-medium ${
                      data.previousAttempt === value
                        ? 'border-[#2563EB] bg-[#2563EB] text-white'
                        : 'border-slate-200 text-[#0B1F3A]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 7 && (
            <fieldset className="mb-8 border-0 p-0">
              <legend className="text-2xl font-semibold leading-snug text-[#0B1F3A]">
                How prepared are your documents?
              </legend>

              <p className="mb-5 mt-2 text-base text-slate-500">
                Select everything that applies. You can change this later.
              </p>

              <div className="space-y-3">
                {DOCUMENT_OPTIONS.map((document) => (
                  <button
                    key={document}
                    type="button"
                    onClick={() =>
                      toggleArrayValue('documents', document)
                    }
                    className={`w-full rounded-xl border-2 px-4 py-3 text-left font-medium ${
                      data.documents.includes(document)
                        ? 'border-[#2563EB] bg-[#2563EB] text-white'
                        : 'border-slate-200 text-[#0B1F3A]'
                    }`}
                  >
                    {document}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 8 && (
            <fieldset className="mb-8 border-0 p-0">
              <legend className="text-2xl font-semibold leading-snug text-[#0B1F3A]">
                What do you want help with?
              </legend>

              <p className="mb-5 mt-2 text-base text-slate-500">
                Pick as many as you want.
              </p>

              <div className="space-y-3">
                {GOAL_OPTIONS.map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    onClick={() =>
                      toggleArrayValue('goals', goal)
                    }
                    className={`w-full rounded-xl border-2 px-4 py-3 text-left font-medium ${
                      data.goals.includes(goal)
                        ? 'border-[#2563EB] bg-[#2563EB] text-white'
                        : 'border-slate-200 text-[#0B1F3A]'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </fieldset>
          )}
        </div>

        <div className="flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              className="btn btn-secondary"
            >
              Back
            </button>
          ) : (
            <span />
          )}

          <button
            type="button"
            disabled={!canContinue()}
            onClick={goNext}
            className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {step === TOTAL_STEPS ? 'Build my plan' : 'Continue'}
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes coachStepIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .coach-step-in {
          animation: coachStepIn 0.25s ease-out;
        }
      `}</style>
    </main>
  );
}

