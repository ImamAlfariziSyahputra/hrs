'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

type ProgressProviderProps = {
  children: React.ReactNode;
};

export default function ProgressProvider({ children }: ProgressProviderProps) {
  return (
    <>
      <ProgressBar
        height='4px'
        color='hsl(var(--primary))'
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
}
