'use client';

import React from 'react';
import Link from 'next/link';
import { useSidebarMainStore } from '@/store/use-sidebar-main-store';
import { Atom, LucideUserCircle2, Settings } from 'lucide-react';

import sidebarData from '@/data/sidebar-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Li from './li';

export default function SidebarMain() {
  const selectedMain = useSidebarMainStore((state) => state.selectedMain);
  const setSelectedMain = useSidebarMainStore((state) => state.setSelectedMain);

  return (
    <nav className='flex h-screen w-[80px] shrink-0 flex-col items-center space-y-4 border-r bg-background py-4 text-black'>
      {/* LOGO */}
      <Link href='/'>
        <Atom size={40} className='text-[#10B981]' />
      </Link>

      <div className='flex h-full flex-col justify-between'>
        {/* MENUS */}
        <ul className='space-y-4'>
          {sidebarData.map((sidebar) => (
            <Li
              key={sidebar.label}
              icon={sidebar.icon}
              label={sidebar.label}
              active={selectedMain.label === sidebar.label}
              onClick={() => setSelectedMain(sidebar)}
            />
          ))}
        </ul>

        {/* MENUS BOTTOM */}
        <ul className='grid grid-cols-1 place-items-center space-y-4'>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className='cursor-pointer transition-all duration-300 hover:ring-1 hover:ring-primary hover:ring-offset-4 hover:ring-offset-background'>
                  <AvatarImage
                    src='https://github.com/shadcn.png'
                    alt='@shadcn'
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side='right'
                align='end'
                sideOffset={15}
                className='p-0'
              >
                <div className='flex items-center gap-3 bg-[#F8FAFC] p-6 dark:bg-[#263345]'>
                  <Avatar className='h-14 w-14 shrink-0'>
                    <AvatarImage
                      src='https://github.com/shadcn.png'
                      alt='@shadcn'
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className='shrink-0'>
                    <p className='text-sm'>Matt Murdock</p>
                    <p className='text-xs text-muted-foreground'>
                      Web Developer
                    </p>
                  </div>
                </div>
                <div className='space-y-1 p-1.5'>
                  <DropdownMenuItem className='group flex cursor-pointer items-center gap-2.5 text-xs focus:bg-muted'>
                    <LucideUserCircle2
                      size={16}
                      className='text-muted-foreground group-hover:text-primary'
                    />
                    <div className=''>
                      <p>Profile</p>
                      <p className='text-muted-foreground'>View your profile</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='group flex cursor-pointer items-center gap-2.5 text-xs focus:bg-muted'>
                    <Settings
                      size={16}
                      className='text-muted-foreground group-hover:text-primary'
                    />
                    <div className=''>
                      <p>Settings</p>
                      <p className='text-muted-foreground'>Account settings</p>
                    </div>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </nav>
  );
}
