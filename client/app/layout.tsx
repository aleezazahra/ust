import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Citizenship Onboarding',
  description: 'Onboarding process for citizenship application',
};
export default function Rootlayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

