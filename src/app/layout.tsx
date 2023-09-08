import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import {
  Atom,
  LayoutDashboard,
  LucideIcon,
  LucideUserCircle2,
  MessageCircle,
  Settings,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HRS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'flex')}>
        <nav className='flex h-screen w-[80px] shrink-0 flex-col items-center space-y-4 border-r bg-white py-4 text-black'>
          {/* LOGO */}
          <Link href='/'>
            <Atom size={40} className='text-[#10B981]' />
          </Link>

          <div className='flex h-full flex-col justify-between'>
            {/* MENUS */}
            <ul className='space-y-4'>
              <Li icon={LayoutDashboard} label='Dashboards' active />
              <Li icon={MessageCircle} label='Chats' />
            </ul>

            {/* MENUS BOTTOM */}
            <ul className='grid grid-cols-1 place-items-center space-y-4'>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className='cursor-pointer transition-all hover:ring-1 hover:ring-primary hover:ring-offset-4'>
                      <AvatarImage
                        src='https://github.com/shadcn.png'
                        alt='@shadcn'
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side='right' align='end' className='p-0'>
                    <div className='flex items-center gap-3 bg-muted p-6'>
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
                          <p className='text-muted-foreground'>
                            View your profile
                          </p>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className='group flex cursor-pointer items-center gap-2.5 text-xs focus:bg-muted'>
                        <Settings
                          size={16}
                          className='text-muted-foreground group-hover:text-primary'
                        />
                        <div className=''>
                          <p>Settings</p>
                          <p className='text-muted-foreground'>
                            Account settings
                          </p>
                        </div>
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </nav>

        <nav className='w-[220px] shrink-0 border-r'>
          <h1 className='px-6 py-4 text-xl'>Dashboards</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}

type LiProps = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
};

const Li = ({ icon: Icon, label, active }: LiProps) => {
  return (
    <li>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span
              className={cn(
                'grid h-12 w-12 cursor-pointer place-items-center rounded-2xl text-[#94a3b8]',
                active && 'bg-[#D1FAE5] text-[#10b981]'
              )}
            >
              <Icon size={20} />
            </span>
          </TooltipTrigger>
          <TooltipContent side='right' className='bg-gray-950'>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  );
};
