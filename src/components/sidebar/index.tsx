'use client';

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useSidebarMainStore } from '@/store/use-sidebar-main-store';
import { useSidebarSecondaryStore } from '@/store/use-sidebar-secondary-store';

import { MenuItem } from '@/types/sidebar.type';
import sidebarData from '@/data/sidebar-data';
import { useMounted } from '@/hooks/use-mounted';
import { useSidebarOverlay } from '@/hooks/use-sidebar-overlay';
import { useSidebarWidth } from '@/hooks/use-sidebar-width';
import { useWindowSize } from '@/lib/react-hookz';
import { cn, split } from '@/lib/utils';
import SidebarMain from '@/components/sidebar/sidebar-main';
import SidebarSecondary from '@/components/sidebar/sidebar-secondary';

export default function Sidebar() {
  const pathname = usePathname();
  const mounted = useMounted();
  const window = useWindowSize();
  const { showBlurOverlay } = useSidebarOverlay();
  const sidebarWidth = useSidebarWidth();

  const setShowMain = useSidebarMainStore((state) => state.setShow);
  const setShowSecondary = useSidebarSecondaryStore((state) => state.setShow);
  const setSelectedMain = useSidebarMainStore((state) => state.setSelectedMain);

  //! set "selectedMain" based on pathname
  useEffect(() => {
    const mainLink = `/${split({ value: pathname, delimiter: '/' })[0]}`;

    const selected = sidebarData.find((sidebar) => {
      return sidebar.value === mainLink;
    }) as MenuItem;

    if (!selected)
      throw new Error('Sidebar Main "value" is not correct, please check.');

    setSelectedMain(selected);
  }, [pathname]);

  //! when route changes & less than 1280px: close sidebar
  useEffect(() => {
    if (mounted && window.width < 1280) {
      setShowMain(false);
      setShowSecondary(false);
    }
  }, [pathname, mounted]);

  return (
    <>
      {/* ⚫BLUR OVERLAY */}
      <div
        className={cn(
          'pointer-events-none fixed inset-0 z-[8] cursor-pointer bg-background/80 opacity-0 transition-opacity duration-500',
          showBlurOverlay && 'opacity-1 pointer-events-auto xl:opacity-0'
        )}
        onClick={() => {
          setShowMain(false);
          setShowSecondary(false);
        }}
      />

      <section
        style={{
          width: sidebarWidth,
        }}
        className='fixed left-0 top-0 z-10 h-full transition-transform'
      >
        <div className='flex'>
          <SidebarMain />
          <SidebarSecondary />
        </div>
      </section>
    </>
  );
}
