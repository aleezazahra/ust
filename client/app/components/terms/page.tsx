import { Jersey_10_Charted, Yusei_Magic } from 'next/font/google';
import Link from 'next/link';
import { GiHandOfGod } from 'react-icons/gi';

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
  title: 'Terms of Use',
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16rem] text-[var(--color-blue)]">
          Legal
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-[var(--color-navy)] sm:text-5xl">
          Terms of Use
        </h1>


        <div className="mt-8 rounded-xl border border-slate-200 bg-[var(--color-warm-white)] p-6 text-sm leading-6 text-slate-600">
          This app is not affiliated with or endorsed by any government entity. It is an
          independent educational tool built to help you prepare for the U.S. Citizenship Test.
          Nothing in the app should be treated as legal or immigration advice. For guidance on
          your specific case, consult an immigration attorney or accredited representative.
        </div>

        <div className="mt-4 space-y-10">
          <Section title="Acceptance of terms">
            <p>
              By downloading, accessing, or using the US Citizenship Coach application (the
              Application), you agree to be bound by these Terms of Use. If you do not agree,
              please do not use the Application.
            </p>
          </Section>

          <Section title="Description of service">
            <p>
              The Application is an independent study tool that helps users prepare for the U.S.
              Naturalization Test. Content is based on official USCIS materials but the Application
              itself is not produced, reviewed, or approved by USCIS or any other government body.
            </p>
          </Section>

          <Section title="Eligibility and account use">
            <p>
              You are responsible for maintaining the confidentiality of any account credentials
              and for all activity that occurs through your account. You agree to provide accurate
              information where the Application requests it.
            </p>
          </Section>


          <Section title="AI powered features">
            <p>
              Premium AI features, including AI Mock Interview and AI assisted reading practice,
              are limited to a set number of sessions per day. These features use third party
              language and speech models to provide feedback and are intended as a study aid, not
              a guarantee of interview outcomes or test results.
            </p>
            <p>
              AI generated feedback may occasionally be inaccurate or incomplete. You should treat
              it as a study aid alongside official USCIS study materials, not as authoritative
              guidance.
            </p>
          </Section>

          <Section title="Acceptable use">
            <p>You agree not to:</p>
            <List
              items={[
                { text: 'use the Application for any unlawful purpose or in violation of these Terms.' },
                { text: 'attempt to reverse engineer, decompile, or extract the source code of the Application.' },
                { text: 'interfere with or disrupt the Application, its servers, or its AI processing systems.' },
                { text: 'use automated means to access the Application beyond normal personal use.' },
              ]}
            />
          </Section>

          <Section title="Intellectual property">
            <p>
              The Application, including its design, text, graphics, and underlying code, is owned
              by us or our licensors and is protected by applicable intellectual property laws.
              Official USCIS test content referenced in the Application remains public domain
              government material. You are granted a limited, non-transferable license to use the
              Application for personal, non-commercial study purposes.
            </p>
          </Section>

          <Section title="Disclaimer of warranties">
            <p>
              The Application is provided as is and as available, without warranties of any kind,
              whether express or implied. We do not guarantee that use of the Application will
              result in passing the U.S. Naturalization Test or interview.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the fullest extent permitted by law, we are not liable for any indirect,
              incidental, or consequential damages arising from your use of, or inability to use,
              the Application, including any reliance on AI generated feedback.
            </p>
          </Section>

          <Section title="Changes to these terms">
            <p>
              We may update these Terms from time to time. Continued use of the Application after
              changes take effect constitutes acceptance of the revised Terms. We will update the
              effective date above when changes are made.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              We may suspend or terminate your access to the Application if you violate these
              Terms. 
            </p>
          </Section>

          <Section title="Governing law">
            <p>
              These Terms are governed by the laws of the jurisdiction in which we operate,
              without regard to conflict of law principles.
            </p>
          </Section>
        </div>

       
      </div>
    </main>
  );
}


