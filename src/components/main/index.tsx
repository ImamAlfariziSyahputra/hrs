'use client';

import React from 'react';

import { useMounted } from '@/hooks/use-mounted';
import { useSidebarWidth } from '@/hooks/use-sidebar-width';
import { useWindowSize } from '@/lib/react-hookz';
import { cn } from '@/lib/utils';

type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
  const window = useWindowSize();
  const mounted = useMounted();

  const sidebarWidth = useSidebarWidth();

  return (
    <main
      className={cn(
        'ml-0 px-4 transition-all duration-500 xl:ml-[300px] xl:px-10'
      )}
      style={{
        marginLeft: mounted
          ? window.width < 1280
            ? 0
            : sidebarWidth
          : undefined,
      }}
    >
      {children}
    </main>
  );
}
