'use client';

import { useEffect } from 'react';
import { useSidebarMainStore } from '@/store/use-sidebar-main-store';
import { useSidebarSecondaryStore } from '@/store/use-sidebar-secondary-store';
import { ChevronLeft } from 'lucide-react';

import { useSidebarOverlay } from '@/hooks/use-sidebar-overlay';
import { useWindowSize } from '@/lib/react-hookz';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import MenuItem from './menu-item';
import MenuItemSkeleton from './menu-item-skeleton';

export default function SidebarSecondary() {
  const window = useWindowSize();
  const { showBlurOverlay } = useSidebarOverlay();
  const selectedMain = useSidebarMainStore((state) => state.selectedMain);
  const showSecondary = useSidebarSecondaryStore((state) => state.show);
  const setShowSecondary = useSidebarSecondaryStore((state) => state.setShow);
  const setShowMain = useSidebarMainStore((state) => state.setShow);

  //! close "secondary" when less than 1280px
  useEffect(() => {
    if (window.width < 1280 && !showSecondary) {
      setShowSecondary(false);
    }
  }, [window.width]);

  //! open "secondary" when blur-overlay show
  useEffect(() => {
    if (showBlurOverlay) setShowSecondary(true);
  }, [showBlurOverlay]);

  return (
    <nav
      className={cn(
        'z-[9] w-[220px] shrink-0 translate-x-[-300px] border-r bg-background transition-transform duration-500',
        showSecondary && 'translate-x-0'
      )}
    >
      <div className='flex items-center px-6 py-3.5'>
        <h1 className='flex-1 text-lg !leading-snug'>
          {selectedMain?.label || <Skeleton className='h-[25px] w-3/4' />}
        </h1>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full text-muted-foreground xl:hidden'
          onClick={() => {
            setShowSecondary(false);
            setShowMain(false);
          }}
        >
          <ChevronLeft size={20} />
        </Button>
      </div>

      <ul className='text-sm text-muted-foreground'>
        {selectedMain ? (
          selectedMain.children.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })
        ) : (
          <MenuItemSkeleton />
        )}
      </ul>
    </nav>
  );
}
