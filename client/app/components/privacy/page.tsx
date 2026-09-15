import Link from 'next/link';

type ListItem = {
  label?: string;
  text: string;
};

function List({ items }: { items: ListItem[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item.text} className="flex gap-3 text-base leading-7 text-slate-600">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-blue)]" />
          <span>
            {item.label && (
              <span className="font-semibold text-[var(--color-navy)]">{item.label}: </span>
            )}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-slate-200 pt-10">
      <h2 className="text-xl font-semibold text-[var(--color-navy)]">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16rem] text-[var(--color-blue)]">
          Legal
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-[var(--color-navy)] sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Effective January 28, 2026 · Last updated February 11, 2026
        </p>

        <div className="mt-8 rounded-xl border border-slate-200 bg-[var(--color-warm-white)] p-6 text-sm leading-6 text-slate-600">
          This app is not affiliated with or endorsed by any government entity. It is an
          independent educational tool built to help you prepare for the U.S. Citizenship Test.
          Test questions are based on official USCIS Naturalization Test materials, available at{' '}
          
         <a   href="https://www.uscis.gov/citizenship"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--color-blue)] underline underline-offset-4 hover:text-[var(--color-navy)]"
          >
            uscis.gov/citizenship
          </a>
          .
        </div>

        <div className="mt-10 space-y-4 text-base leading-7 text-slate-600">
          <p>
            This privacy policy applies to the US Citizenship Test app (the Application) for
            mobile devices, provided as is. The Application includes an ad supported experience
            and may offer an optional subscription to remove ads (the Subscription).
          </p>
          <p>
            We strive to comply with applicable privacy laws, including the General Data
            Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), and we
            aim to process your data lawfully, fairly, and transparently.
          </p>
        </div>

        <div className="mt-4 space-y-10">
          <Section title="Information collection and use">
            <p>The Application may collect information when you download and use it, including:</p>
            <List
              items={[
                { label: 'Device and app information', text: 'device model, operating system version, app version, language, and diagnostic information.' },
                { label: 'Usage information', text: 'which screens and features you use and how long you use them, in an aggregated way.' },
                { label: 'Advertising information', text: 'ad impressions and advertising identifiers such as IDFA or Advertising ID, used to deliver and measure ads. If you consent, this may be used for personalized advertising.' },
                { label: 'Purchase and subscription information', text: 'purchase status, entitlement status, and receipt data necessary to validate your subscription.' },
              ]}
            />
            <p>
              We do not collect precise location from your device. Third party services such as ad
              providers may infer an approximate location from your IP address for fraud
              prevention, compliance, and ad delivery.
            </p>
          </Section>

          <Section title="Study data stored on your device">
            <p>
              The Application stores study related data locally on your device, such as progress,
              favorites, selected test version, language, and settings. This data is used to
              provide the core study experience. You can remove this data at any time using the
              app&apos;s reset features or by uninstalling the Application.
            </p>
          </Section>

          <Section title="ZIP code and elected officials feature">
            <p>
              The Application offers an optional feature to display your elected officials, such
              as your U.S. Representative, Senators, and Governor, based on your ZIP code.
            </p>
            <List
              items={[
                { label: 'Local storage only', text: 'your ZIP code is stored locally on your device and is not transmitted to or stored on our servers.' },
                { label: 'Government API queries', text: 'when you use this feature, your ZIP code is sent to public government APIs solely to retrieve your elected officials, on demand.' },
                { label: 'No tracking', text: 'we do not use your ZIP code for advertising, profiling, or any purpose other than displaying your elected officials.' },
                { label: 'You can remove it', text: 'you can update or clear your ZIP code at any time in the app settings.' },
              ]}
            />
          </Section>

          <Section title="Microphone and speech features">
            <p>
              The Application includes optional features that use your microphone, such as mock
              interview practice. Microphone access is requested only when needed and can be
              controlled in your device settings. Speech recognition and audio processing may be
              handled by your device or OS services depending on platform configuration.
            </p>
          </Section>

      

          <Section title="Server side session tracking">
            <p>
              To enforce daily usage limits and prevent abuse of AI features, we store minimal
              session data on our server.
            </p>
            <List
              items={[
                { label: 'What we store', text: 'a pseudonymous user identifier, session counts per day, session type, number of AI calls made, estimated processing cost, and your score.' },
                { label: 'What we do not store', text: 'your name, email, audio recordings, transcripts, answers, IP address, or any other personally identifiable information.' },
              ]}
            />
            <p>
              This data is used solely to enforce the daily AI session limit, currently five
              sessions per day, monitor costs, and prevent abuse.
            </p>
            <p>
              Session data is retained for 90 days for cost analysis and dispute resolution, then
              may be archived or deleted. All server side data is protected by row level security
              policies, and communication is encrypted via HTTPS.
            </p>
            <p>
              You can delete all your server side data at any time from Settings, Delete My Data,
              in the app. This permanently removes your user record, session history, and any
              cached data from our servers. This action cannot be undone.
            </p>
            <p>
              When you request deletion, we retain a minimal, pseudonymous record of your daily AI
              usage counts for up to 10 days to prevent abuse of the deletion feature. This record
              contains no personal content or conversation history and is permanently deleted
              after 10 days.
            </p>
          </Section>
        </div>

        <p className="mt-14 text-sm text-slate-500">
          Questions about this policy? Reach out through the{' '}
          <Link
            href="/"
            className="font-medium text-[var(--color-blue)] underline underline-offset-4 hover:text-[var(--color-navy)]"
          >
            contact details on our home page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}