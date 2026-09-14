
'use client';

import { FcGoogle } from 'react-icons/fc';

type Props = {
  onClick?: () => void;
};

export default function GoogleContinueButton({ onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-[#0B1F3A] transition hover:bg-slate-50"
    >
      <FcGoogle className="text-xl" />
      Continue with Google
    </button>
  );
}