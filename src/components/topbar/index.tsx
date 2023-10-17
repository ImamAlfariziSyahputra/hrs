'use client';

import { useTopbarStore } from '@/store/use-topbar-store';
import { HiOutlineChevronLeft } from 'react-icons/hi';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import LangSwitch from './lang-switch';
import ProfileDropdown from './profile-dropdown';
import ModeSwitch from './theme-switch';

export default function Topbar() {
  const title = useTopbarStore((state) => state.title);

  return (
    <div className='mb-5 flex h-16 items-center justify-between bg-transparent'>
      {/* LEFT */}
      <div className='flex items-center'>
        <Button variant='ghost' className='-ml-2 mr-4 p-0 hover:bg-transparent'>
          <HiOutlineChevronLeft className='h-8 w-8 cursor-pointer text-primary transition-colors hover:text-primary/80' />
        </Button>
        <h2 className='text-2xl font-light'>
          {title || <Skeleton className='h-8 w-[250px]' />}
        </h2>
      </div>

      {/* RIGHT */}
      <div className='flex items-center gap-2'>
        <ModeSwitch />
        <LangSwitch />
        <ProfileDropdown />
      </div>
    </div>
  );
}
