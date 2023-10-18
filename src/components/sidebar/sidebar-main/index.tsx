'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSidebarMainStore } from '@/store/use-sidebar-main-store';
import { useSidebarSecondaryStore } from '@/store/use-sidebar-secondary-store';
import { Atom } from 'lucide-react';

import { MenuLink } from '@/types/sidebar.type';
import sidebarData from '@/data/sidebar-data';
import { useWindowSize } from '@/lib/react-hookz';
import { cn } from '@/lib/utils';
import Li from './li';
import ProfileDropdown from './profile-dropdown';

export default function SidebarMain() {
  const window = useWindowSize();
  const showMain = useSidebarMainStore((state) => state.show);
  const setShowMain = useSidebarMainStore((state) => state.setShow);
  const selectedMain = useSidebarMainStore((state) => state.selectedMain);
  const setSelectedMain = useSidebarMainStore((state) => state.setSelectedMain);
  const setShowSecondary = useSidebarSecondaryStore((state) => state.setShow);

  const [activeMainLink, setActiveMainLink] = useState<MenuLink | null>(null);

  useEffect(() => {
    if (selectedMain) {
      setActiveMainLink(selectedMain.value);
    }
  }, [selectedMain]);

  //! close "main" when less than 1280px,
  //! else: open it
  useEffect(() => {
    if (window.width < 1280 && !showMain) {
      setShowMain(false);
    } else {
      setShowMain(true);
    }
  }, [window.width]);

  return (
    <nav
      className={cn(
        'z-10 flex h-screen w-[80px] shrink-0 translate-x-[-80px] flex-col items-center space-y-4 border-r bg-background py-4 text-black transition-transform duration-500',
        showMain && 'translate-x-0'
      )}
    >
      {/* LOGO */}
      <Link href='/'>
        <Atom size={40} className='text-[#10B981]' />
      </Link>

      {/* MENUS (TOP) */}
      <div className='flex h-full flex-col justify-between'>
        <ul className='space-y-4'>
          {sidebarData.map((sidebar) => (
            <Li
              key={sidebar.label}
              icon={sidebar.icon}
              label={sidebar.label}
              active={sidebar.value === activeMainLink}
              onClick={() => {
                setSelectedMain(sidebar);
                setShowSecondary(true);
              }}
            />
          ))}
        </ul>

        {/* MENUS (BOTTOM) */}
        <ul className='grid grid-cols-1 place-items-center space-y-4'>
          <li>
            <ProfileDropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
}
