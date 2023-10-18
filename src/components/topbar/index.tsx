'use client';

import { useSidebarMainStore } from '@/store/use-sidebar-main-store';
import { useSidebarSecondaryStore } from '@/store/use-sidebar-secondary-store';
import { HiOutlineChevronRight } from 'react-icons/hi';

import { useWindowSize } from '@/lib/react-hookz';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import LangSwitch from './lang-switch';
import ProfileDropdown from './profile-dropdown';
import ModeSwitch from './theme-switch';

type TopbarProps = {
  title: string;
};

export default function Topbar({ title }: TopbarProps) {
  const window = useWindowSize();

  const sidebarMainShow = useSidebarMainStore((state) => state.show);
  const setSidebarMainShow = useSidebarMainStore((state) => state.setShow);
  const sidebarSecondaryShow = useSidebarSecondaryStore((state) => state.show);
  const setSidebarSecondaryShow = useSidebarSecondaryStore(
    (state) => state.setShow
  );

  return (
    <div className='mb-5 flex h-16 items-center justify-between bg-transparent'>
      {/* ⬅️LEFT */}
      <div className='flex items-center'>
        {/* ICON TOGGLE SIDEBAR */}
        <Button
          variant='ghost'
          className='-ml-2 mr-4 p-0 hover:bg-transparent'
          onClick={() => {
            if (window.width < 1280) {
              setSidebarMainShow(!sidebarMainShow);
              setSidebarSecondaryShow(!sidebarSecondaryShow);
            } else {
              setSidebarSecondaryShow(!sidebarSecondaryShow);
            }
          }}
        >
          <HiOutlineChevronRight
            className={cn(
              'h-8 w-8 cursor-pointer text-primary transition-all duration-500 hover:text-primary/70',
              sidebarSecondaryShow && '-rotate-180'
            )}
          />
        </Button>

        {/* TOPBAR TITLE */}
        <h2 className='hidden text-2xl font-light md:block'>
          {title || <Skeleton className='h-8 w-[250px]' />}
        </h2>
      </div>

      {/* ➡️RIGHT */}
      <div className='flex items-center gap-2'>
        <ModeSwitch />
        <LangSwitch />
        <ProfileDropdown />
      </div>
    </div>
  );
}
